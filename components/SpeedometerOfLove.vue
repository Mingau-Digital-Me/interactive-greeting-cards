<template>
  <div ref="speedometer" class="speedometer">
    <img
      class="speedometer__image"
      src="../public/components/SpeedometerOfLove/speedometer.png"
      draggable="false"
      @mousedown.prevent
      @mousemove.prevent
    />

    <div class="speedometer__wrapper">
      <div class="speedometer__speed">
        <div ref="speedFill" class="speedometer__speed-fill"></div>
      </div>
    </div>

    <img
      ref="speedPointer"
      class="speedometer__pointer"
      src="../public/components/SpeedometerOfLove/pointer.png"
    />
  </div>
</template>

<script setup lang="ts">
interface ISpeedometerOfLoveProps {
  element?: HTMLElement;
}

const { element = document.body } = defineProps<ISpeedometerOfLoveProps>();

const MAX_VALUE_SPEED = 180;

const angle = ref(0);
const speedFill = ref<HTMLElement | null>(null);
const speedPointer = ref<HTMLElement | null>(null);
const speedometer = ref<HTMLElement | null>(null);

let alreadyStarted = false;

function updateSpeed(speed: number = 1) {
  if (angle.value > MAX_VALUE_SPEED) {
    return;
  }

  angle.value += (Number(speed) / 100) * MAX_VALUE_SPEED;

  if (angle.value > MAX_VALUE_SPEED) {
    angle.value = 180;
  }

  if (speedFill.value) {
    speedFill.value.style.background = `
    conic-gradient(
      red 0deg ${angle.value}deg,
      transparent ${angle.value}deg 180deg 
    )`;
  }

  if (speedPointer.value) {
    speedPointer.value.style.transform = `
      scale(0.4)
      rotate(${angle.value - MAX_VALUE_SPEED / 2}deg)`;
  }
}

function addEventListenerOnSpeedometer(_element: HTMLElement) {
  _element.addEventListener("mousedown", () => {
    alreadyStarted = true;
  });
  _element.addEventListener("mousemove", () => {
    if (alreadyStarted) {
      updateSpeed(0.2);
    }
  });
  _element.addEventListener("mouseup", () => {
    alreadyStarted = false;
  });

  _element.addEventListener("touchmove", () => {
    updateSpeed(0.4);
  });
}

onMounted(() => {
  nextTick(() => {
    if (speedometer.value) {
      addEventListenerOnSpeedometer(speedometer.value);
    }
    addEventListenerOnSpeedometer(element);
  });
});
</script>

<style lang="postcss">
.speedometer {
  @apply flex-1 max-w-[400px] max-h-[400px] relative;

  &__image {
    @apply absolute top-0 left-0;

    z-index: 1;
  }

  &__pointer {
    @apply absolute top-10 -right-1 scale-[0.4] rotate-[-95deg];

    z-index: 10;
  }

  &__wrapper {
    @apply flex flex-col items-center gap-[10px] mt-12 z-0;
  }

  &__speed {
    @apply relative rounded-full overflow-hidden scale-[0.8] z-0;

    width: 400px;
    height: 400px;

    &-fill {
      @apply absolute z-0;

      width: 400px;
      height: 400px;
      background: transparent;
      border-radius: 50%;
      transform: rotate(-90deg);
      transition: background 0.2s ease-out;
      top: 10px;
    }
  }
}
</style>

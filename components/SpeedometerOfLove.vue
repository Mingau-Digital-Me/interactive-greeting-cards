<template>
  <div ref="speedometer" class="speedometer">
    <div class="speedometer__label">
      <span class="speedometer__label--text">
        <span class="mx-[2px] font-normal">{{
          t("SpeedometerOfLove.my")
        }}</span>
        <span class="mx-[2px] font-bold text-red-600">{{
          t("SpeedometerOfLove.time")
        }}</span>
        <span class="mx-[2px] font-normal" style="word-spacing: 2px">{{
          t("SpeedometerOfLove.withYouIs")
        }}</span>
        <span class="mx-1 text-xl playwrite-co font-bold">{{
          t("SpeedometerOfLove.precious")
        }}</span>
      </span>
    </div>

    <img
      class="speedometer__image"
      src="../public/components/SpeedometerOfLove/speedometer.png"
      :draggable="false"
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
  currentElement?: HTMLElement;
}

const { t } = useI18n();
const { currentElement = document?.body } =
  defineProps<ISpeedometerOfLoveProps>();
const emit = defineEmits(["max-speed"]);

const MAX_VALUE_SPEED = 180;

const angle = ref(0);
const speedFill = ref<HTMLElement | null>(null);
const speedPointer = ref<HTMLElement | null>(null);
const speedometer = ref<HTMLElement | null>(null);
const eventListeners: {
  element: HTMLElement;
  type: string;
  listener: EventListener;
}[] = [];

let alreadyStarted = false;

function updateSpeed(speed: number = 1) {
  if (angle.value > MAX_VALUE_SPEED) {
    return;
  }

  angle.value += (Number(speed) / 100) * MAX_VALUE_SPEED;

  if (angle.value > MAX_VALUE_SPEED) {
    angle.value = 180;

    removeEventListenerOnSpeedometer();
    emit("max-speed", true);
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

function addListener(
  _element: HTMLElement,
  type: string,
  listener: EventListener
) {
  _element.addEventListener(type, listener);
  eventListeners.push({ element: _element, type, listener });
}

function addEventListenerOnSpeedometer(_element: HTMLElement) {
  addListener(_element, "mousedown", () => {
    alreadyStarted = true;
  });
  addListener(_element, "mousemove", () => {
    if (alreadyStarted) {
      updateSpeed(0.2);
    }
  });
  addListener(_element, "mouseup", () => {
    alreadyStarted = false;
  });

  addListener(_element, "touchmove", () => {
    updateSpeed(0.4);
  });
}

function removeEventListenerOnSpeedometer() {
  eventListeners?.forEach(({ element, type, listener }) => {
    element.removeEventListener(type, listener);
  });
  eventListeners.length = 0;
}

onMounted(() => {
  nextTick(() => {
    if (speedometer.value) {
      addEventListenerOnSpeedometer(currentElement);
    }
    addEventListenerOnSpeedometer(currentElement);
  });
});

onBeforeUnmount(() => {
  removeEventListenerOnSpeedometer();
});
</script>

<style lang="postcss">
.speedometer {
  @apply flex-1 max-w-[400px] max-h-[400px] relative;

  &__label {
    @apply absolute bottom-28 text-sm cursor-default text-black z-10 text-center;

    user-select: none;
    left: 50%;
    transform: translateX(-50%);

    &--text {
      @apply whitespace-nowrap;
    }
  }

  &__image {
    @apply absolute top-0 left-0 cursor-default;

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

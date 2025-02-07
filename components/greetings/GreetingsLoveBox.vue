<template>
  <div class="love-box">
    <div class="scene">
      <div class="box">
        <div class="box__face box__face--front"></div>
        <div class="box__face box__face--right"></div>
        <div class="box__face box__face--back"></div>
        <div class="box__face box__face--left"></div>
        <div id="love-box-top" class="cube__face box__face--top"></div>
        <div class="cube__face box__face--bottom"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface IGreetingsLoveBoxProps {
  isPreview?: boolean;
}

const to = defineModel("to");
const text = defineModel("text");
const from = defineModel("from");
const images = defineModel("images");
const boxColor = defineModel("boxColor");
const backgroundColor = defineModel("backgroundColor");
const music = defineModel("music");

const props = defineProps<IGreetingsLoveBoxProps>();

const CSS_VARS = {
  BOX_COLOR: "--color-box",
  BACKGROUND_COLOR: "--color-background",
};

function setRootVars(_var: string, newValue: string) {
  const root = document.querySelector(":root") as HTMLElement;
  root.style.setProperty(_var, newValue);
}

watch(boxColor, (newValue) => {
  setRootVars(CSS_VARS.BOX_COLOR, newValue as string);
});
watch(backgroundColor, (newValue) => {
  setRootVars(CSS_VARS.BACKGROUND_COLOR, newValue as string);
});

function addEvents() {
  addEventOpenTopLoveBox();
}

function addEventOpenTopLoveBox() {
  const topFace = document.getElementById("love-box-top");

  topFace?.addEventListener("click", () => {
    if (topFace.classList.contains("open")) {
      topFace.classList.remove("open");
      topFace.classList.add("close");
    } else if (topFace.classList.contains("close") || true) {
      topFace.classList.remove("close");
      topFace.classList.add("open");
    }
  });
}

onMounted(() => {
  addEvents();
});
</script>

<style lang="postcss">
:root {
  --scene-width: 200px;
  --scene-height: 200px;

  --box-width: 200px;
  --box-height: 100px;

  --box-half-width: calc(var(--box-width) / 2);
  --box-half-height: calc(var(--box-height) / 2);

  --box-negative-half-width: calc(-1 * (var(--box-width) / 2));
  --box-negative-half-weight: calc(-1 * (var(--box-height) / 2));

  --box-shadow: rgba(57, 30, 0, 0.891) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

  --color-background: #f97373;
  --color-box: red // #000000;;
}

.love-box {
  @apply flex-grow z-10;

  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: var(--color-background);
}

.scene {
  width: var(--scene-width);
  height: var(--scene-height);
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 800px;
}

.box {
  width: var(--box-width);
  height: var(--box-height);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
  animation: box-incline 2s ease-in-out forwards;
}

.box__face,
.cube__face {
  position: absolute;
  width: calc(var(--box-width) + 2px);
  height: var(--box-height);
  border-radius: 4px;
  line-height: 400px;
  font-size: 40px;
  font-weight: bold;
  border: 2px solid black;
  color: white;
}

.cube__face {
  height: var(--box-width);
}

.box__face--front {
  box-shadow: var(--box-shadow);
  background: var(--color-box);
  background-size: cover;
}
.box__face--right {
  box-shadow: var(--box-shadow);
  background: var(--color-box);
  background-size: cover;
}
.box__face--back {
  box-shadow: var(--box-shadow);
  background: var(--color-box);
  background-size: cover;
}
.box__face--left {
  box-shadow: var(--box-shadow);
  background: var(--color-box);
  background-size: cover;
}
.box__face--top {
  box-shadow: var(--box-shadow);
  background: var(--color-box);
  background-size: cover;
}
.box__face--bottom {
  box-shadow: var(--box-shadow);
  background: var(--color-box);
  background-size: cover;
}

.box__face--front {
  transform: translateZ(var(--box-half-width)) rotateY(0deg);
}
.box__face--right {
  transform: translateX(var(--box-half-width)) rotateY(90deg);
}
.box__face--back {
  transform: translateZ(var(--box-negative-half-width)) rotateY(180deg);
}
.box__face--left {
  transform: translateX(var(--box-negative-half-width)) rotateY(-90deg);
}
.box__face--bottom {
  transform: translateY(0) rotateX(90deg);
}
.box__face--top {
  transform: translateY(var(--box-negative-half-width)) rotateX(90deg);
  cursor: pointer;
}
.box__face--top.open {
  animation: open-box 2s ease-in-out forwards;
}
.box__face--top.close {
  animation: close-box 2s ease-in-out forwards;
}

@keyframes box-incline {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-40deg);
  }
}

@keyframes open-box {
  0% {
    transform: translateY(var(--box-negative-half-width)) rotateX(90deg);
  }
  100% {
    transform: translateY(-170px) translateZ(-170px) rotateX(220deg);
  }
}

@keyframes close-box {
  0% {
    transform: translateY(-170px) translateZ(-170px) rotateX(220deg);
  }
  100% {
    transform: translateY(var(--box-negative-half-width)) rotateX(90deg);
  }
}
</style>

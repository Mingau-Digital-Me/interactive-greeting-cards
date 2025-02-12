<template>
  <div class="love-box">
    <div class="scene">
      <div ref="loveBox" class="box">
        <div class="box__face box__face--front"></div>
        <div class="box__face box__face--right"></div>
        <div class="box__face box__face--back"></div>
        <div class="box__face box__face--left"></div>
        <div ref="loveBoxTop" class="cube__face box__face--top">
          <SpeedometerOfLove
            class="speedometer"
            @max-speed="animationOpenTopLoveBox()"
          />
        </div>
        <div ref="loveBoxTopInner" class="cube__face box__face--top--inner">
          <PolaroidString
            :image-src-one="images?.[0]"
            :image-src-two="images?.[1]"
            :image-src-three="images?.[2]"
            class="string"
          />
          <PolaroidString
            :image-src-one="images?.[3]"
            :image-src-two="images?.[4]"
            :image-src-three="images?.[5]"
            class="string"
          />
        </div>
        <div class="cube__face box__face--bottom">
          <LoveCard />
        </div>
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
const images = defineModel("images", {
  type: [Array<string>, String] as PropType<Array<string> | string>,
});

const boxColor = defineModel("boxColor");
const backgroundColor = defineModel("backgroundColor");
const music = defineModel("music");

const props = defineProps<IGreetingsLoveBoxProps>();

const loveBox = ref<HTMLElement | null>(null);
const loveBoxTop = ref<HTMLElement | null>(null);
const loveBoxTopInner = ref<HTMLElement | null>(null);

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

function animationOpenTopLoveBox() {
  loveBoxTop.value?.classList.remove("close");
  loveBoxTop.value?.classList.add("open");

  loveBoxTopInner.value?.classList.remove("close-inner");
  loveBoxTopInner.value?.classList.add("open-inner");

  loveBox.value?.classList.add("box-open");
}

function animationCloseTopLoveBox() {
  loveBoxTop.value?.classList.remove("open");
  loveBoxTop.value?.classList.add("close");

  loveBoxTopInner.value?.classList.remove("open-inner");
  loveBoxTopInner.value?.classList.add("close-inner");
}
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
  --color-box: #000000;
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

.box.box-open {
  animation: open-box 2s ease-in-out forwards;
}

.box__face,
.cube__face {
  position: absolute;
  width: calc(var(--box-width) + 2px);
  height: calc(var(--box-height) + 2px);
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
  @apply flex justify-center items-center;

  box-shadow: var(--box-shadow);
  background: var(--color-box);
  background-size: cover;
}
.box__face--top--inner {
  @apply flex flex-col-reverse justify-start items-center opacity-0 bg-transparent;

  box-shadow: var(--box-shadow);
  transition: all 700ms ease-in;
  user-select: none;
}
.box__face--bottom {
  @apply block;

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
  transform-style: preserve-3d;
}
.box__face--top {
  transform: translateY(var(--box-negative-half-width)) rotateX(90deg);
  cursor: pointer;
}
.box__face--top--inner {
  transform: translateY(calc(var(--box-negative-half-width) + 1px))
    rotateX(90deg);
}

.box__face--top.open {
  animation: open-box-top 2s linear forwards;
}
.box__face--top--inner.open-inner {
  @apply opacity-100;

  animation: open-box-top-inner 2s linear forwards;
  background: var(--color-box);
}

.box__face--top.close {
  animation: close-box 2s ease-in-out forwards;
}
.box__face--top--inner.close-inner {
  animation: close-box 2s ease-in-out forwards;
  background: transparent;
}

.speedometer {
  @apply scale-50;
}

.string {
  transform: rotateX(180deg);
  scale: 0.9;
}

@keyframes box-incline {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-40deg) translateZ(220px) translateY(-160px);
  }
}

@keyframes open-box-top {
  0% {
    transform: translateY(-100px) translateZ(0) rotateX(90deg);
  }
  99% {
    transform: translateY(-166px) translateZ(-180px) rotateX(218deg);
  }
  100% {
    transform: translateY(-170px) translateZ(-170px) rotateX(220deg);
  }
}
@keyframes open-box-top-inner {
  0% {
    transform: translateY(var(--box-negative-half-width)) rotateX(90deg);
  }
  100% {
    transform: translateY(-170px) translateZ(-170px) rotateX(220deg);
  }
}

@keyframes open-box {
  0% {
    transform: rotateX(-40deg) translateZ(220px) translateY(-160px);
  }
  100% {
    transform: translateY(80px) translateZ(260px) rotateX(-40deg);
  }
}
</style>

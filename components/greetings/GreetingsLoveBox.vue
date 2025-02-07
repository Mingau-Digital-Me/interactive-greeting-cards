<template>
  <div class="scene">
    <div class="cube">
      <div class="cube__face cube__face--front">front</div>
      <div class="cube__face cube__face--back">back</div>
      <div class="cube__face cube__face--left">left</div>
      <div class="cube__face cube__face--right">right</div>
      <div class="cube__face cube__face--top">top</div>
      <div class="cube__face cube__face--bottom">bottom</div>
    </div>
  </div>
</template>
<script setup lang="ts">
export interface IGreetingsLoveBox {
  to: string;
  text: string;
  from: string;
  images: File[];
  boxColor: string;
  backgroundColor: string;
  music: string;
}

const model = defineModel<IGreetingsLoveBox>();
</script>

<style lang="postcss">
.scene {
  @apply w-28 h-28;

  border: 1px solid black;
  margin: 80px;
  perspective: 400px;
  transform: translateX(100px);
}

.cube {
  @apply w-28 h-28;

  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
}

.cube__face {
  @apply w-28 h-28;

  position: absolute;
  border: 2px solid black;
  border-radius: 8px;
  line-height: 400px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube__face--front {
  background: hsla(0, 100%, 50%, 0.7);
}
.cube__face--right {
  background: hsla(60, 100%, 50%, 0.7);
}
.cube__face--back {
  background: hsla(120, 100%, 50%, 0.7);
}
.cube__face--left {
  background: hsla(180, 100%, 50%, 0.7);
}
.cube__face--top {
  background: hsla(240, 100%, 50%, 0.7);
}
.cube__face--bottom {
  background: hsla(300, 100%, 50%, 0.7);
}

.cube__face--front {
  transform: rotateY(0deg) translateZ(200px);
}
.cube__face--right {
  transform: rotateY(90deg) translateZ(200px);
}
.cube__face--back {
  transform: rotateY(180deg) translateZ(200px);
}
.cube__face--left {
  transform: rotateY(-90deg) translateZ(200px);
}
.cube__face--top {
  transform: rotateX(90deg) translateZ(200px);
}
.cube__face--bottom {
  transform: rotateX(-90deg) translateZ(200px);
}

.cube.show-front {
  transform: translateZ(-100px) rotateY(0deg);
}
.cube.show-right {
  transform: translateZ(-100px) rotateY(-90deg);
}
.cube.show-back {
  transform: translateZ(-100px) rotateY(-180deg);
}
.cube.show-left {
  transform: translateZ(-100px) rotateY(90deg);
}
.cube.show-top {
  transform: translateZ(-100px) rotateX(-90deg);
}
.cube.show-bottom {
  transform: translateZ(-100px) rotateX(90deg);
}
</style>

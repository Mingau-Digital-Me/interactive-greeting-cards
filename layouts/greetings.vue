<template>
  <div class="w-dvw h-dvh flex">
    <slot />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  document?.body.classList.add("no-scroll");
  creatHoldPolaroids();
});

onUnmounted(() => {
  document?.body.classList.remove("no-scroll");
  removeHoldPolaroids();
});

function creatHoldPolaroids() {
  const holdPolaroid = document.createElement("div");
  holdPolaroid.id = "hold-polaroid";

  document.body.appendChild(holdPolaroid);
}

function removeHoldPolaroids() {
  const holdPolaroid = document.getElementById("hold-polaroid");
  if (holdPolaroid) {
    holdPolaroid.remove();
  }
}
</script>

<style lang="postcss">
.no-scroll {
  @apply overflow-hidden fixed w-full h-full touch-none;
}
</style>

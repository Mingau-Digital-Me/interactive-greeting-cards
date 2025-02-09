<template>
  <div class="w-dvw h-dvh flex">
    <slot />
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  document?.body.classList.add("no-scroll");
});

onUnmounted(() => {
  document?.body.classList.remove("no-scroll");
});
</script>

<style lang="postcss">
.no-scroll {
  @apply overflow-hidden fixed w-full h-full touch-none;
}
</style>

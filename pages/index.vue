<template>
  <div class="landing-page">
    <section class="landing-page__section"></section>
    <section class="landing-page__section--primary"></section>
    <section class="landing-page__section"></section>
    <section class="landing-page__section--primary"></section>
    <section class="landing-page__section"></section>
    <section class="landing-page__section--primary"></section>
    <section class="landing-page__section"></section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "app",
});
</script>

<style lang="postcss">
.landing-page {
  @apply w-full max-w-full;
  &__section {
    @apply h-dvh;

    &--primary {
      @apply h-dvh bg-sky-500;
    }
  }
}
</style>

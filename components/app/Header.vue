<template>
  <div class="app-header">
    <AppLogo />

    <AppTheme />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
.app-header {
  @apply flex justify-between items-center border-b-[1px] dark:border-stone-500 p-4 sticky top-0 z-50;
}
</style>

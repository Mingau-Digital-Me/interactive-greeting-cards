<template>
  <div class="app-header">
    <AppLogo />

    <AppTheme />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
.app-header {
  @apply flex justify-between items-center border-b-[1px] dark:border-stone-500 backdrop-blur bg-gray-100 dark:bg-gray-900 p-4 sticky top-0 z-50;
}
</style>

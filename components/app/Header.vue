<template>
  <div class="app-header">
    <AppLogo />

    <div class="app-header__options">
      <AppTheme />
      <AppLanguage />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
.app-header {
  @apply flex justify-between items-center border-b dark:border-none bg-gray-100 dark:bg-gray-900 p-4 sticky top-0 z-50;

  &__options {
    @apply flex gap-4;
  }
}
</style>

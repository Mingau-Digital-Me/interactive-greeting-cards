<template>
  <div class="app-header">
    <AppLogo />

    <div class="app-header__options">
      <AppTheme :show="false" />
      <AppLanguage />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="postcss">
.app-header {
  @apply flex justify-between items-center bg-gray-100 dark:bg-gray-900 p-4 sticky top-0 z-50 shadow-md;

  &__options {
    @apply flex gap-4;
  }
}
</style>

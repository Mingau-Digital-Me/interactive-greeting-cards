<template>
  <div class="overflow-x-clip">
    <AppHeader />

    <div class="w-full flex flex-col bg-gray-100 dark:bg-gray-900">
      <slot />
    </div>

    <AppFooter />

    <UNotifications />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-100 dark:bg-gray-900;
}
</style>

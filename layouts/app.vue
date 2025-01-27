<template>
  <div>
    <AppHeader />

    <div class="w-full flex flex-col bg-gray-100 dark:bg-gray-900">
      <slot />
    </div>

    <AppFooter />
  </div>
</template>

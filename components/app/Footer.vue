<template>
  <footer class="footer">
    <span class="self-center dark:text-gray-400 text-gray-600"
      >Copyright © 2025 | Matheus H. S. Almeida</span
    >

    <section class="flex gap-2">
      <UButton
        icon="i-lucide-linkedin"
        size="md"
        to="https://www.linkedin.com/in/matheus-almeida-602139182/"
        color="gray"
        target="_blank"
        variant="link"
      />
      <UButton
        icon="i-lucide-github"
        size="md"
        to="https://github.com/tthheusalmeida"
        color="gray"
        target="_blank"
        variant="link"
      />
      <UButton
        icon="i-lucide-id-card"
        size="md"
        to="https://dev-almeida-matheus.vercel.app/"
        color="gray"
        target="_blank"
        variant="link"
      />
    </section>
  </footer>
</template>

<style lang="postcss">
.footer {
  @apply flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-100 dark:bg-gray-900 dark:border-stone-500 px-4 py-6 border-t-[1px];
}
</style>

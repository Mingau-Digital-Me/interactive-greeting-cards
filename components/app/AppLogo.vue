<template>
  <UButton
    :padded="false"
    color="gray"
    variant="link"
    class="flex justify-center items-center"
    @click="navigateToLandingPage"
  >
    <NuxtImg :height="40" src="./logo-white.png" />
  </UButton>
</template>

<script setup lang="ts">
async function navigateToLandingPage() {
  await navigateTo({
    path: "/",
  });
}
</script>

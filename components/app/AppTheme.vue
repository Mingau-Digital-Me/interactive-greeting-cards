<template>
  <ClientOnly v-if="show">
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="w-8 h-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
interface IAppThemeProps {
  show: boolean;
}

const colorMode = useColorMode();
const COLOR_MODE = {
  DARK: "dark",
  LIGHT: "light",
};

const isDark = computed({
  get() {
    return colorMode.value === COLOR_MODE.DARK;
  },
  set() {
    colorMode.preference =
      colorMode.value === COLOR_MODE.DARK ? COLOR_MODE.LIGHT : COLOR_MODE.DARK;
  },
});

const props = defineProps<IAppThemeProps>();

onMounted(() => {
  colorMode.preference = props.show ? colorMode.value : COLOR_MODE.DARK;
});
</script>

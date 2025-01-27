<template>
  <USelect
    v-model="selectedLocale"
    :options="locales"
    option-attribute="name"
    class="min-w-32 max-w-32"
  />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, computed, watch } from "vue";
import { useCookie } from "#app";

const { setLocale, t, locale } = useI18n();

const i18nCookie = useCookie("i18n_language");

const selectedLocale = ref(i18nCookie.value || locale.value || "en");

const locales = computed(() => [
  {
    name: `${t("AppLanguage.pt")} 🇧🇷`,
    value: "pt",
  },
  {
    name: `${t("AppLanguage.en")} 🇺🇸`,
    value: "en",
  },
]);

watch(selectedLocale, (newLocale) => {
  setLocale(newLocale as "pt" | "en");
  i18nCookie.value = newLocale;
});
</script>

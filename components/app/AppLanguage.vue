<template>
  <USelect
    v-if="show"
    v-model="selectedLocale"
    :options="locales"
    option-attribute="name"
    class="min-w-32 max-w-32 hidden sm:inline-block"
  />

  <USelect
    v-if="show"
    v-model="selectedLocale"
    :options="localesMobile"
    option-attribute="name"
    class="min-w-16 max-w-16 sm:hidden"
  />
</template>

<script setup lang="ts">
interface IAppLanguageProps {
  show: boolean;
}

import { useI18n } from "vue-i18n";
import { ref, computed, watch } from "vue";
import { useCookie } from "#app";

const { setLocale, t } = useI18n();
const i18nCookie = useCookie("i18n_language");

const getFullLocale = () => {
  return new Intl.DateTimeFormat().resolvedOptions().locale;
};

const currentLocale = getFullLocale() === "pt-BR" ? "pt" : "en";
const selectedLocale = ref(currentLocale);

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

const localesMobile = computed(() => [
  {
    name: `🇧🇷 ${t("AppLanguage.pt")}`,
    value: "pt",
  },
  {
    name: `🇺🇸 ${t("AppLanguage.en")}`,
    value: "en",
  },
]);

const props = defineProps<IAppLanguageProps>();

watch(selectedLocale, (newLocale) => {
  setLocale(newLocale as "pt" | "en");
  i18nCookie.value = newLocale;
});

onMounted(() => {
  setLocale(currentLocale);
  i18nCookie.value = currentLocale;
});
</script>

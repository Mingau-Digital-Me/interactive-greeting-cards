// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxt/ui", "@nuxt/fonts", "@nuxtjs/i18n"],
  css: ["~/assets/css/styles.css"],
  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-custom-media": {},
    },
  },
  colorMode: {
    preference: "dark",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      { code: "pt", iso: "pt-BR", name: "Português" },
      { code: "en", iso: "en-US", name: "English" },
    ],
    defaultLocale: "pt",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_language",
    },
  },
});

import en from "./Locales/en";
import pt from "./Locales/pt";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: { ...en },
    pt: { ...pt },
  },
}));

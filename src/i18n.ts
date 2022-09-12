import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import de from "./locales/de.json";

const localeOptions = ["en", "de"];
const urlLocale = window.location.pathname.replace(/^\/([^\/]+).*/i, "$1"); // eslint-disable-line no-useless-escape
const browserSettingsLocale = navigator.language;
const defaultLocale = "en";

// use locale if specified in URL. else, use the browser's locale setting. else default locale.
export const locale =
  urlLocale.trim().length && localeOptions.includes(urlLocale)
    ? urlLocale
    : localeOptions.includes(browserSettingsLocale)
    ? browserSettingsLocale
    : defaultLocale;

export default createI18n({
  locale: locale,
  fallbackLocale: defaultLocale,
  messages: {
    en: en,
    de: de,
  },
});

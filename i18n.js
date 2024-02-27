import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./src/languages/en.json";
import uzTranslation from "./src/languages/uz.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    uz: {
      translation: uzTranslation,
    },
  },
  lng: "en", // Boshlang'ich til
  fallbackLng: "en", // Agar tanlangan til topilmasa, qaysi tilni ishlatishni belgilash
  interpolation: {
    escapeValue: false, // HTML kodlarini chap qilish
  },
});

export default i18n;

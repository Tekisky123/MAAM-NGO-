// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationUR from './locales/ur/translation.json';
import translationMR from './locales/mr/translation.json';
import translationHI from './locales/hi/translation.json';

// the translations
const resources = {
  en: { translation: translationEN },
  ur: { translation: translationUR },
  mr: { translation: translationMR },
  hi: { translation: translationHI },
};

// Get the saved language from local storage or default to 'en'
const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

i18n
  .use(initReactI18next) // pass i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // use saved language from local storage
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

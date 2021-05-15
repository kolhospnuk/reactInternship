import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import txtEn from './en';
import txtUa from './ua';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ua: {
        translation: txtUa
      },
      en: {
        translation: txtEn
      },
    },
    debug: true,
    fallbackLng: ['en', 'ua'],
    // options: {
    //   order: ['localStorage'],
    //   caches: ['localStorage', 'cookie']
    // }
  });

export default i18n;

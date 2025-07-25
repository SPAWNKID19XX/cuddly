import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        /*lng: "pt",*/
        fallbackLng: ["en", "pt", 'es', 'it'],
        supportedLngs: ["en", "pt", 'es', 'it'],
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/translation.json",
        },
        detection: {
            order: ["localStorage", "cookie", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
    });
export default i18n;
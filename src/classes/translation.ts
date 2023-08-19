import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import * as locale from "../locale"

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: locale.en
      },
      pt: {
        translation: locale.pt
      }
    },
    lng: "en",
    debug: false,
    fallbackLng: false,
    interpolation: {
      escapeValue: false
    }
  })

if (localStorage.getItem("language"))
  i18n.changeLanguage(localStorage.getItem("language") ?? "en")

export default i18n

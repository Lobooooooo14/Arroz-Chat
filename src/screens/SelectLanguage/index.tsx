import React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { Content, ArrowLeft, Languages, Language } from "./styles"

import Screen from "../../components/Screen"
import Header from "../../components/Header"
import LeftHeader from "../../components/Header/LeftHeader"
import ScreenTitle from "../../components/ScreenTitle"

const SelectLanguage: React.FC = () => {
  const { t, i18n } = useTranslation()

  const navigate: NavigateFunction = useNavigate()

  return (
    <Screen title={t("selectlanguage.title")}>
      <Content>
        <Header>
          <LeftHeader>
            <ArrowLeft onClick={() => navigate(-1)} />
            <ScreenTitle text={t("selectlanguage.title")} />
          </LeftHeader>
        </Header>
        <Languages>
          {Object.keys(i18n.options.resources!).map((language, index) => {
            return (
              <Language
                key={index}
                onClick={() => {
                  i18n.changeLanguage(language)
                  localStorage.setItem("language", i18n.language)
                }}
                data-active={language === i18n.language}
              >
                {t(`selectlanguage.options.${language}`)}
              </Language>
            )
          })}
        </Languages>
      </Content>
    </Screen>
  )
}

export default SelectLanguage

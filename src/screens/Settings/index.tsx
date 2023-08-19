import React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import {
  Content,
  ArrowLeft,
  Options,
  Option,
  OptionLeft,
  OptionRight,
  ExitIcon,
  LanguageIcon
} from "./styles"

import Screen from "../../components/Screen"
import Header from "../../components/Header"
import LeftHeader from "../../components/Header/LeftHeader"
import ScreenTitle from "../../components/ScreenTitle"

import { auth } from "../../services/firebaseConfig"

const Settings: React.FC = () => {
  const { t } = useTranslation()

  const navigate: NavigateFunction = useNavigate()

  return (
    <Screen title={t("settings.title")}>
      <Content>
        <Header>
          <LeftHeader>
            <ArrowLeft onClick={() => navigate(-1)} />
            <ScreenTitle text={t("settings.title")} />
          </LeftHeader>
        </Header>
        <Options>
          <Option
            onClick={() => {
              navigate("/settings/language")
            }}
          >
            <OptionLeft>
              <h3>{t("settings.options.language.name")}</h3>
              <p>{t("settings.options.language.description")}</p>
            </OptionLeft>
            <OptionRight>
              <LanguageIcon />
            </OptionRight>
          </Option>
          <Option
            onClick={() => {
              if (auth.currentUser) {
                auth.signOut()
                navigate("/login")
              }
            }}
          >
            <OptionLeft>
              <h3>{t("settings.options.exit.name")}</h3>
              <p>{t("settings.options.exit.description")}</p>
            </OptionLeft>
            <OptionRight>
              <ExitIcon />
            </OptionRight>
          </Option>
        </Options>
      </Content>
    </Screen>
  )
}

export default Settings

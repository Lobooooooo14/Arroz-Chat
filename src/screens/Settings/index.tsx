import React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"

import {
  Content,
  ArrowLeft,
  Options,
  Option,
  OptionLeft,
  OptionRight,
  ExitIcon
} from "./styles"

import Screen from "../../components/Screen"
import Header from "../../components/Header"
import LeftHeader from "../../components/Header/LeftHeader"
import ScreenTitle from "../../components/ScreenTitle"

import { auth } from "../../services/firebaseConfig"

const Settings: React.FC = () => {
  const navigate: NavigateFunction = useNavigate()

  return (
    <Screen title="Configurações">
      <Content>
        <Header>
          <LeftHeader>
            <ArrowLeft onClick={() => navigate(-1)} />
            <ScreenTitle text="Configurações" />
          </LeftHeader>
        </Header>
        <Options>
          <Option
            onClick={() => {
              if (auth.currentUser) {
                auth.signOut()
                navigate("/login")
              }
            }}
          >
            <OptionLeft>
              <h3>Sair</h3>
              <p>Sair da conta</p>
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

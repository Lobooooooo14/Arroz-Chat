import React, { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Chat from "../../components/Chat"
import Screen from "../../components/Screen"

import { auth } from "../../services/firebaseConfig"

const ChatRoom: React.FC = () => {
  const { t } = useTranslation()

  const navigate: NavigateFunction = useNavigate()
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (!user) {
      navigate("/login")
      return
    }
  }, [user])

  return (
    <Screen title={t("app.name")}>
      <Chat />
    </Screen>
  )
}

export default ChatRoom

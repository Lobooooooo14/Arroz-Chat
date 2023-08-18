import React, { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { NavigateFunction, useNavigate } from "react-router-dom"

import Chat from "../../components/Chat"
import Screen from "../../components/Screen"

import { auth } from "../../services/firebaseConfig"

const ChatRoom: React.FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (!user) {
      navigate("/login")
      return
    }
  }, [user])

  return (
    <Screen title="Arroz Chat">
      <Chat />
    </Screen>
  )
}

export default ChatRoom

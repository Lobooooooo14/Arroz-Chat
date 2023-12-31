import React from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import {
  DocumentData,
  collection,
  limit,
  orderBy,
  query
} from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import {
  IDOptions,
  InitialValueOptions
} from "react-firebase-hooks/firestore/dist/firestore/types"
import { useTranslation } from "react-i18next"

import { Avatar, Content, SettingsIcon } from "./styles"

import Header from "../Header"
import ChatInput from "./ChatInput"
import ScreenTitle from "../ScreenTitle"
import LeftHeader from "../Header/LeftHeader"
import RightHeader from "../Header/RightHeader"
import Messages from "../../components/Messages"

import { auth, databaseApp } from "../../services/firebaseConfig"

const Chat: React.FC = () => {
  const { t } = useTranslation()

  const navigate: NavigateFunction = useNavigate()

  const messageRef = collection(databaseApp, "messages")

  const queryMessages = query(
    messageRef,
    orderBy("createdAt", "desc"),
    limit(50)
  )

  const [collectionMessages] = useCollectionData<DocumentData>(queryMessages, {
    idField: "id"
  } as IDOptions<DocumentData> & InitialValueOptions<DocumentData[]>)

  return (
    <Content>
      <Header>
        <LeftHeader>
          {auth.currentUser && <Avatar src={auth.currentUser.photoURL!} />}
          <ScreenTitle text={t("app.name")} />
        </LeftHeader>
        <RightHeader>
          <SettingsIcon onClick={() => navigate("/settings")} />
        </RightHeader>
      </Header>
      <Messages messages={collectionMessages?.reverse()!} />
      <ChatInput />
    </Content>
  )
}

export default Chat

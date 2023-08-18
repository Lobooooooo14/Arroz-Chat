import React, { useState } from "react"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

import { Content, SendBtn, SendBtnIcon } from "./styles"

import Input from "../../Input"

import { auth, databaseApp } from "../../../services/firebaseConfig"

const ChatInput: React.FC = () => {
  const [inputText, setInputText] = useState("")

  const messageRef = collection(databaseApp, "messages")

  const sendMessage = async (text: string) => {
    await addDoc(messageRef, {
      text: text,
      uid: auth.currentUser?.uid,
      username: auth.currentUser?.displayName,
      createdAt: serverTimestamp()
    })
  }

  const send = (text: string) => {
    if (text.trim().length > 0) {
      sendMessage(text)
      setInputText("")
    }
  }

  return (
    <Content>
      <Input
        placeholder="Digite sua mensagem..."
        value={inputText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setInputText(event.target.value)
        }
        onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => {
          if (event.key === "Enter" && !event.shiftKey) send(inputText)
        }}
      />
      <SendBtn>
        <SendBtnIcon onClick={() => send(inputText)} />
      </SendBtn>
    </Content>
  )
}

export default ChatInput

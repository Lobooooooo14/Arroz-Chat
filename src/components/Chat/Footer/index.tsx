import React, { useState } from "react"
import { Content, Input, SendBtn, SendBtnIcon } from "./styles"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { auth, databaseApp } from "../../../services/firebaseConfig"


const Footer: React.FC = () => {
    const [text, setText] = useState("")

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
            setText("")
        }
    }

    return (
        <Content>
            <Input
                placeholder="Digite sua mensagem..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        send(text)
                    }
                }}
            />
            <SendBtn>
                <SendBtnIcon
                    onClick={
                        () => send(text)
                    }
                />
            </SendBtn>
        </Content>
    )
}

export default Footer
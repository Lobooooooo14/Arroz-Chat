import React, { useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import {
    DocumentData,
    addDoc,
    collection,
    limit,
    orderBy,
    query,
    serverTimestamp
} from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { IDOptions, InitialValueOptions } from "react-firebase-hooks/firestore/dist/firestore/types"

import {
    Avatar,
    Content,
    InputContent,
    SendBtn,
    SendBtnIcon,
    SettingsIcon
} from "./styles"

import Input from "../Input"
import Header from "../Header"
import ScreenTitle from "../ScreenTitle"
import LeftHeader from "../Header/LeftHeader"
import RightHeader from "../Header/RightHeader"
import Messages from "../../components/Messages"

import { auth, databaseApp } from "../../services/firebaseConfig"


const Chat: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()

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
        
    const queryMessages = query(
        messageRef,
        orderBy("createdAt", "desc"),
        limit(50)
    )

    const [messages] = useCollectionData<DocumentData>(
        queryMessages, 
        { idField: "id"} as IDOptions<DocumentData> & InitialValueOptions<DocumentData[]>
    )

    return (
        <Content>
            <Header>
                <LeftHeader>
                    {auth.currentUser && (
                        <Avatar src={auth.currentUser.photoURL!} />
                    )}
                    <ScreenTitle text="Arroz Chat" />
                </LeftHeader>
                <RightHeader>
                    <SettingsIcon onClick={() => navigate("/settings")}/>
                </RightHeader>
            </Header>
            <Messages messages={messages?.reverse()!}/>
            <InputContent>
                <Input
                    placeholder="Digite sua mensagem..."
                    value={text}
                    onChange={
                        (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)
                    }
                    onKeyDown={
                        (event: React.KeyboardEvent<HTMLInputElement>) => {
                            if (event.key === "Enter" && !event.shiftKey) send(text)
                        }
                    }
                />
                <SendBtn>
                    <SendBtnIcon
                        onClick={
                            () => send(text)
                        }
                    />
                    </SendBtn>
            </InputContent>
        </Content>
    )
}

export default Chat
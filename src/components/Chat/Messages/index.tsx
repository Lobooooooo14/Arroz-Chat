import React from "react"
import { Content } from "./styles"
import Message from "../Message"
import { DocumentData, collection, limit, orderBy, query } from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { databaseApp } from "../../../services/firebaseConfig"
import { IDOptions, InitialValueOptions } from "react-firebase-hooks/firestore/dist/firestore/types"


const Messages: React.FC = () => {
    const messageRef = collection(databaseApp, "messages")
    const queryMessages = query(messageRef, orderBy("createdAt", "desc"), limit(50))
    const [messages] = useCollectionData<DocumentData>(queryMessages, { idField: "id"} as IDOptions<DocumentData> & InitialValueOptions<DocumentData[]>)

    return (
        <Content>
            {messages && messages?.reverse().map((message) => (
                <Message key={message.id} text={message.text} uid={message.uid} username={message.username} createdAt={message.createdAt}/>
            ))}
        </Content>
    )
}

export default Messages
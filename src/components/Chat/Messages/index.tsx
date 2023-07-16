import React, { useRef } from "react"
import { Content } from "./styles"
import Bubble from "../Bubble"
import { DocumentData, collection, limit, orderBy, query } from "firebase/firestore"
import { useCollectionData } from "react-firebase-hooks/firestore"
import { databaseApp } from "../../../services/firebaseConfig"
import { IDOptions, InitialValueOptions } from "react-firebase-hooks/firestore/dist/firestore/types"


const Messages: React.FC = () => {
    const dummy = useRef<HTMLDivElement>(null)
    const scrollRef = useRef(null)

    const messageRef = collection(databaseApp, "messages")
    const queryMessages = query(messageRef, orderBy("createdAt", "desc"), limit(50))
    const [messages] = useCollectionData<DocumentData>(queryMessages, { idField: "id"} as IDOptions<DocumentData> & InitialValueOptions<DocumentData[]>)

    dummy.current?.scrollIntoView({behavior: 'smooth'})
    
    return (
        <Content
            ref={scrollRef}
        >
            {messages && messages?.reverse().map((message, index) => (
                <Bubble
                    key={index}
                    text={message.text}
                    uid={message.uid}
                    username={message.username}
                    scrollRef={scrollRef}
                />
            ))}
            <div ref={dummy}></div>
        </Content>
    )
}

export default Messages
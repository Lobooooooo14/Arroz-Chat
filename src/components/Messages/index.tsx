import React, { useRef } from "react"
import { DocumentData } from "firebase/firestore"

import { Content } from "./styles"

import Bubble from "./Bubble"


interface Props {
    messages: DocumentData[]
}

const Messages: React.FC<Props> = ({ messages }) => {
    const dummy = useRef<HTMLDivElement>(null)
    const scrollRef = useRef(null)

    dummy.current?.scrollIntoView({behavior: "smooth"})
    
    return (
        <Content
            ref={scrollRef}
        >
            {messages && messages?.map((message, index) => (
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
import React from "react"
import { Content, Info, Text } from "./styles"
import { auth } from "../../../services/firebaseConfig"


interface Props {
    text: string
    uid: string
    createdAt: any
}

const Message: React.FC<Props> = ({ text, uid, createdAt }) => {
    return (
        <Content $sent={uid === auth.currentUser?.uid}>
            <Info>{createdAt}</Info>
            <Text>{text}</Text>
        </Content>
    )
}

export default Message
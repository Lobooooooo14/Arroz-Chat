import React from "react"
import { Content, Info, Text } from "./styles"
import { auth } from "../../../services/firebaseConfig"


interface Props {
    text: string
    uid: string
    username: string
}

const Message: React.FC<Props> = ({ text, uid, username }) => {

    return (
        <Content $sent={uid === auth.currentUser?.uid}>
            <Info>{username}</Info>
            <Text>{text}</Text>
        </Content>
    )
}

export default Message
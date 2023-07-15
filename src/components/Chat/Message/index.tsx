import React from "react"
import { Content, Text } from "./styles"
import { auth } from "../../../services/firebaseConfig"


interface Props {
    text: string
    uid: string
}

const Message: React.FC<Props> = ({ text, uid }) => {
    return (
        <Content $sent={uid === auth.currentUser?.uid}>
            <Text>{text}</Text>
        </Content>
    )
}

export default Message
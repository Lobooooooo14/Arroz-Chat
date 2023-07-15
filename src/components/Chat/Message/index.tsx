import React from "react"
import { Content, Info, Text } from "./styles"
import { auth } from "../../../services/firebaseConfig"


interface Props {
    text: string
    uid: string
    username: string
    createdAt: {
        seconds: number,
        nanoseconds: number
    }
}

const Message: React.FC<Props> = ({ text, uid, username, createdAt }) => {

    let hour: number = new Date(createdAt.seconds).getHours()
    let minute: number = new Date(createdAt.seconds).getMinutes()

    let h: string = (hour < 10) ? '0' + hour : hour.toString()
    let m: string = (minute < 10) ? '0' + minute : minute.toString()

    const time = h + ':' + m

    return (
        <Content $sent={uid === auth.currentUser?.uid}>
            <Info>{username} - {time}</Info>
            <Text>{text}</Text>
        </Content>
    )
}

export default Message
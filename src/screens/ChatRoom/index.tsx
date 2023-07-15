import React, { useEffect } from "react"
import { Content } from "./styles"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../services/firebaseConfig"
import { NavigateFunction, useNavigate } from "react-router-dom"

import Chat from "../../components/Chat"


const ChatRoom: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (!user) {
            navigate("/login")
            return
        }
    }, [user])
    
    return (
        <Content>
            <Chat />
        </Content>
    )
}

export default ChatRoom
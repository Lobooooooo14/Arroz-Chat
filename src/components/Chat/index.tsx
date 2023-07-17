import React from "react"

import { Content } from "./styles"

import Header from "../../components/Chat/Header"
import Footer from "../../components/Chat/Footer"
import Messages from "../../components/Chat/Messages"


const Chat: React.FC = () => {
    return (
        <Content>
            <Header />
            <Messages />
            <Footer />
        </Content>
    )
}

export default Chat
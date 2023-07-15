import React from "react"
import { Content } from "./styles"

import Header from "../../components/Chat/Header"
import Messages from "../../components/Chat/Messages"
import Footer from "../../components/Chat/Footer"


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
import React from "react"
import { Content, AppName, SignOutIcon } from "./styles"
import { auth } from "../../../services/firebaseConfig"

const Header: React.FC = () => {
    return (
        <Content>
            <AppName>
                Arroz Chat
            </AppName>
            <SignOutIcon onClick={() => auth.currentUser && auth.signOut()}/>
        </Content>
    )
}

export default Header
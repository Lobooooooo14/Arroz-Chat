import React from "react"

import {
    Content,
    AppName,
    SignOutIcon,
    LeftContent,
    RightContent,
    Avatar
} from "./styles"

import { auth } from "../../../services/firebaseConfig"


const Header: React.FC = () => {
    return (
        <Content>
            <LeftContent>
                {auth.currentUser && (
                    <Avatar src={auth.currentUser.photoURL!} />
                )}
                <AppName>
                    Arroz Chat
                </AppName>
            </LeftContent>
            <RightContent>
                <SignOutIcon onClick={() => auth.currentUser && auth.signOut()}/>
            </RightContent>
        </Content>
    )
}

export default Header
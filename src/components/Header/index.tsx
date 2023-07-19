import React from "react"

import { Content } from "./styles"


interface Props {
    children?: React.ReactNode
}

const Header: React.FC<Props> = ({ children }) => {
    return (
        <Content>
            {children}
        </Content>
    )
}

export default Header
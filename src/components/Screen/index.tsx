import React from "react"

import { Content, Warpper } from "./styles"


interface Props {
    children?: React.ReactNode
}

const Screen: React.FC<Props> = ({ children }) => {
    return (
        <Content>
            <Warpper
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
            >
                {children}
            </Warpper>
        </Content>
    )
}

export default Screen
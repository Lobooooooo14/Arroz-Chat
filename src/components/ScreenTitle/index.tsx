import React from "react"

import { Content } from "./styles"


interface Props {
    text: string
}

const ScreenTitle: React.FC<Props> = ({ text }) => {
    document.title = text

    return (
        <Content>{text}</Content>
    )
}

export default ScreenTitle
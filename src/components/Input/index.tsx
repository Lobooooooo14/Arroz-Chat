import React from "react"
import { InputBar } from "./styles"


const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <InputBar {...props}/>
    )
}

export default Input
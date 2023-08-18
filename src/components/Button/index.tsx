import React from "react"

import { StyledButton } from "./styles"

interface Props {
  children: React.ReactNode
}

const Button: React.FC<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button

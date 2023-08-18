import React from "react"

import { Content } from "./styles"

interface Props {
  children?: React.ReactNode
}

const LeftHeader: React.FC<Props> = ({ children }) => {
  return <Content>{children}</Content>
}

export default LeftHeader

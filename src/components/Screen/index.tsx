import React from "react"

import { Content, Warpper } from "./styles"

interface Props {
  title: string
  children?: React.ReactNode
}

const Screen: React.FC<Props> = ({ title, children }) => {
  document.title = title

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

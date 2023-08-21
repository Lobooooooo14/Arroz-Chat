import React from "react"
import { AnimatePresence } from "framer-motion"

import { Content } from "./styles"
import CircularLoading from "../../anim/CircularLoading"

interface Props {
  isVisible: boolean
}

const Loading: React.FC<Props> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <Content
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CircularLoading />
        </Content>
      )}
    </AnimatePresence>
  )
}

export default Loading

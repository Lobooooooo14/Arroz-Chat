import React from "react"

import { Content, Info, Text } from "./styles"

import { auth } from "../../../services/firebaseConfig"

interface Props {
  text: string
  uid: string
  username: string
  scrollRef: React.RefObject<HTMLDivElement>
}

const Bubble: React.FC<Props> = ({ text, uid, username, scrollRef }) => {
  return (
    <Content
      $sent={uid === auth.currentUser?.uid}
      transition={{ type: "spring", stiffness: 700, damping: 20 }}
      initial={{ opacity: 0.8, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ root: scrollRef }}
    >
      <Info>{username}</Info>
      <Text>{text}</Text>
    </Content>
  )
}

export default Bubble

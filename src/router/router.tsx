import React from "react"
import { Routes, Route } from "react-router-dom"

import LogIn from "../screens/LogIn"
import SignUp from "../screens/SingUp"
import ChatRoom from "../screens/ChatRoom"
import Settings from "../screens/Settings"
import SelectLanguage from "../screens/SelectLanguage"

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ChatRoom />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="settings" element={<Settings />} />
      <Route path="settings/language" element={<SelectLanguage />} />
    </Routes>
  )
}

export default Router

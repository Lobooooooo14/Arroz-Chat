import React from "react"
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./styles/globals"
import dark from "./styles/themes/dark"

import LogIn from "./screens/LogIn"
import SignUp from "./screens/SingUp"
import ChatRoom from "./screens/ChatRoom"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <Routes>
          <Route path="/" element={ <ChatRoom /> } />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App

export const validateUsername = (username: string) => {
  const re = /^[A-Za-z\d@#$!%*?&.\s ]{2,32}$/
  return re.test(String(username).toLowerCase())
}

export const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const validatePassword = (password: string) => {
  const re = /^(?=.*\d)(?=.*\W)[\w\W\d\s ]{8,32}$/
  return re.test(password)
}

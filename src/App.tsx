import React from "react"
import { ThemeProvider } from "styled-components"

import Router from "./router/router"

import GlobalStyle from "./styles/globals"
import dark from "./styles/themes/dark"

import "./classes/translation"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <Router />
      </ThemeProvider>
    </>
  )
}

export default App

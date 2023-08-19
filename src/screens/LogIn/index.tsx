import React, { useEffect } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useAuthState
} from "react-firebase-hooks/auth"
import { useTranslation } from "react-i18next"

import {
  Box,
  Content,
  LogoBox,
  LogInBox,
  GoogleIcon,
  GithubIcon,
  ContinueWithButton
} from "./styles"

import LeafIcon from "../../assets/LeafIcon"
import Screen from "../../components/Screen"

import { auth } from "../../services/firebaseConfig"

const SignUp: React.FC = () => {
  const { t } = useTranslation()

  const navigate: NavigateFunction = useNavigate()
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      navigate("/")
      return
    }
  }, [user])

  const [signInWithGoogle] = useSignInWithGoogle(auth)
  const [signInWithGithub] = useSignInWithGithub(auth)

  return (
    <Screen title="Login">
      <Content>
        <Box
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <LogoBox
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <LeafIcon />
            <h2>Arroz Chat</h2>
          </LogoBox>
          <LogInBox
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 2 }}
          >
            <ContinueWithButton
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 700, damping: 20 }}
              onClick={() => signInWithGoogle()}
            >
              <GoogleIcon />
              {t("login.continue.google")}
            </ContinueWithButton>
            <ContinueWithButton
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 700, damping: 20 }}
              onClick={() => signInWithGithub()}
            >
              <GithubIcon />
              {t("login.continue.github")}
            </ContinueWithButton>
          </LogInBox>
        </Box>
      </Content>
    </Screen>
  )
}

export default SignUp

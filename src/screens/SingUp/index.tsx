import React, { useState } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { validateEmail, validatePassword, validateUsername } from "../../utils"
import {
  Box,
  Content,
  Form,
  Input,
  Inputs,
  LogoBox,
  Messages,
  ErrorsMessages
} from "./styles"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"

import LeafIcon from "../../assets/LeafIcon"
import { StyledButton } from "../../components/Button/styles"
import { auth } from "../../services/firebaseConfig"

const SignUp: React.FC = () => {
  const navigate: NavigateFunction = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const [
    createUserWithEmailAndPassword
    // user,
    // loading,
    // error,
  ] = useCreateUserWithEmailAndPassword(auth)

  const handleInputUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <Content>
        <Box
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <h2>Criar conta</h2>
          <LogoBox>
            <LeafIcon />
          </LogoBox>
          <Form>
            <Inputs>
              <Input
                type="username"
                placeholder="Nome de usuário"
                maxLength={32}
                minLength={2}
                autoComplete="username"
                onChange={handleInputUsername}
              />
              <Input
                type="email"
                placeholder="Email"
                autoComplete="email"
                onChange={handleInputEmail}
              />
              <Input
                type="password"
                placeholder="Senha"
                maxLength={32}
                minLength={8}
                autoComplete="curret-password"
                onChange={handleInputPassword}
              />
            </Inputs>
            <Messages>
              <div
                style={{
                  overflow: "auto",
                  maxHeight: "100px",
                  marginBottom: "10px"
                }}
              >
                <ErrorsMessages>
                  {validateUsername(username) ? (
                    ""
                  ) : (
                    <p>
                      Nome de usuário inválido:
                      <br />- deve estar entre 2 a 32 caracteres.
                    </p>
                  )}
                  {validateEmail(email) ? "" : <p>Email inválido</p>}
                  {validatePassword(password) ? (
                    ""
                  ) : (
                    <p>
                      Sua senha deve conter:
                      <br />
                      - pelo menos um número;
                      <br />
                      - pelo menos um caractere especial;
                      <br />- entre 8 a 32 caracteres.
                    </p>
                  )}
                </ErrorsMessages>
              </div>
              <p>Bem vindo!</p>
              <br />
              <p>
                Já tem uma conta?
                <span onClick={() => navigate("/login")}> Entrar</span>
              </p>
            </Messages>
            {validateUsername(username) &&
            validateEmail(email) &&
            validatePassword(password) ? (
              <StyledButton
                onClick={() => createUserWithEmailAndPassword(email, password)}
              >
                Entrar
              </StyledButton>
            ) : (
              <StyledButton disabled>Entrar</StyledButton>
            )}
          </Form>
        </Box>
      </Content>
    </>
  )
}

export default SignUp

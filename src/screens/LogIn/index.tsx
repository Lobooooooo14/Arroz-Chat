import React, { useEffect } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
// import { validateEmail, validatePassword } from '../../App'
import { 
    Box, 
    Content, 
    // Form, 
    // Input, 
    // Inputs, 
    LogoBox, 
    // Messages,
    // ErrorsMessages,
    OthersMethods,
    GoogleLoginIcon
} from './styles'
import { 
    // useSignInWithEmailAndPassword,
    useSignInWithGoogle,
    useAuthState
} from 'react-firebase-hooks/auth'

import LeafIcon from '../../assets/LeafIcon'
// import { StyledButton } from '../../components/Button/styles'
import { auth } from '../../services/firebaseConfig'


const SignUp: React.FC = () => {
    const [user] = useAuthState(auth)
    const navigate: NavigateFunction = useNavigate()

    useEffect(() => {
        if (user) {
            navigate("/")
            return
        }
    }, [user])

    
    // const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    
    // const [
    //     signInWithEmailAndPassword,
    //     // user,
    //     // loading,
    //     // error,
    //   ] = useSignInWithEmailAndPassword(auth)

    const [
        signInWithGoogle,
        // user,
        // loading,
        // error,
      ] = useSignInWithGoogle(auth)

    // const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(event.target.value)
    // }
    
    // const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(event.target.value)
    // }

    return (
        <>
            <Content>
                <Box
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", duration: 1}}
                >
                    <h2>Arroz Chat</h2>
                    <LogoBox>
                        <LeafIcon />    
                    </LogoBox>
                    <p>Logar com:</p>
                    <OthersMethods>
                        <GoogleLoginIcon
                            onClick={() => signInWithGoogle()}
                        />
                    </OthersMethods>
                    {/*
                    <Form>
                        <Inputs>
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
                            <div style={{
                                overflow: "auto",
                                maxHeight: "100px",
                                marginBottom: "10px"
                            }}>
                                <ErrorsMessages>
                                    
                                </ErrorsMessages>
                            </div>
                            <OthersMethods>
                                <GoogleLoginIcon  onClick={
                                    () => signInWithGoogle()
                                        .then(() => navigate("/"))
                                    }
                                />
                            </OthersMethods>
                             <br/>
                            <p>
                                Não tem uma conta?
                                <span onClick={() => navigate("/signup")}> Cadastre-se</span>
                            </p> 
                        </Messages>
                        {
                            validateEmail(email) &&
                            validatePassword(password) 
                            ? <StyledButton onClick={() => signInWithEmailAndPassword(email, password)}>Entrar</StyledButton> : <StyledButton disabled>Entrar</StyledButton>
                        }
                    </Form>*/}
                </Box>
            </Content>
        </>
    )
}

export default SignUp
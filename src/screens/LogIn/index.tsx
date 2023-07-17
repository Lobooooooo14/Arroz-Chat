import React, { useEffect } from "react"
import { NavigateFunction, useNavigate } from "react-router-dom"
import { useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth'

import { 
    Box, 
    Content,
    LogoBox,
    LogInBox,
    GoogleIcon,
    ContinueWithButton
} from './styles'

import LeafIcon from '../../assets/LeafIcon'
import { auth } from '../../services/firebaseConfig'


const SignUp: React.FC = () => {
    const navigate: NavigateFunction = useNavigate()
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            navigate("/")
            return
        }
    }, [user])

    const [
        signInWithGoogle,
        // user,
        // loading,
        // error,
    ] = useSignInWithGoogle(auth)
    
    return (
        <Content>
            <Box
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 1}}
            >
                <LogoBox
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", duration: 1}}
                >
                    <LeafIcon />    
                    <h2>Arroz Chat</h2>
                </LogoBox>
                <LogInBox
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", duration: 2}}
                >
                    <ContinueWithButton
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 700, damping: 20 }}
                        onClick={() => signInWithGoogle()}
                    >
                        <GoogleIcon/>
                        Continuar com o Google
                    </ContinueWithButton>
                </LogInBox>
            </Box>
        </Content>
    )
}

export default SignUp
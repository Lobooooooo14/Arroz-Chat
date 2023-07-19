import styled from "styled-components"
import { shade } from "polished"
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"


export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.textColor};
    background-image: linear-gradient(
        45deg,
        ${props => shade(0.9, props.theme.colors.secondary)},
        ${props => shade(0.8, props.theme.colors.secondary)}
        );
    overflow-y: hidden;
`

export const Box = styled(motion.div)`
    width: 90%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 10px;
    border-radius: 10px;
`

export const ContinueWithButton = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 50px;
    transition: background 100ms ease;

    &:active {
        background-color: ${props => props.theme.colors.secondary};
    }
`

const LoginIcon = styled.div`
    width: 32px;
    height: 32px;
`

export const GoogleIcon = styled(LoginIcon).attrs({
    as: FcGoogle
})`
    background-color: white;
    border-radius: 50px;
    padding: 5px;
`

export const GithubIcon = styled(LoginIcon).attrs({
    as: BsGithub
})``

export const LogoBox = styled(motion.div)`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

export const LogInBox = styled(motion.div).attrs({
    as: LogoBox
})``
import styled from "styled-components"
import { shade, transparentize } from "polished"
import { motion } from "framer-motion"


export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
    background-image: linear-gradient(135deg, ${props => shade(0.3, props.theme.colors.primaryGradient)}, ${props => shade(0.9, props.theme.colors.secondaryGradient)});
    color: ${props => props.theme.colors.textColor};
    overflow-y: hidden;
`

export const Box = styled(motion.div)`
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: ${props => transparentize(0.4, shade(0.8, props.theme.colors.primary))};
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 ${props => transparentize(0.8, props.theme.colors.shadow)};
`

export const LogoBox = styled.div`
    margin: 10px;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Input = styled.input`
    width: 100%;
    background-color: transparent;
    border: solid 3px transparent;
    border-bottom: solid 3px ${props => props.theme.colors.primary};
    padding: 10px;
    color: ${props => props.theme.colors.textColor};
    transition: all 300ms ease;
    border-radius: 5px;

    &::placeholder {
        color: ${props => transparentize(0.5, props.theme.colors.textColor)};
    }

    &:focus {
        border: solid 3px ${props => props.theme.colors.secondary};
    }
`

export const Messages = styled.div`
    text-align: center;
    font-size: 14pt;

    & span {
        color: ${props => props.theme.colors.primary};
        cursor: pointer;
        transition: all 300ms ease;
    }

    & span:hover, & span:active {
        color: ${props => props.theme.colors.secondary};
        text-decoration: underline;
    }
`

export const ErrorsMessages = styled.div`
    text-align: left;
    font-size: 12pt;
    font-family: monospace;
    color: ${props => props.theme.colors.error};
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
import { lighten, shade, transparentize } from "polished"
import styled from "styled-components"
import { motion } from "framer-motion"


export const Content = styled(motion.div)`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => transparentize(0.6, shade(0.6, props.theme.colors.background))};
    z-index: 9999;
    overflow-y: hidden;
`

export const Box = styled(motion.div)`
    width: 90%;
    max-width: 350px;
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => lighten(0.1, props.theme.colors.background)};
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 20px 0 ${props => transparentize(0.2, props.theme.colors.shadow)};
`

export const Title = styled.h3`
    color: ${props => props.theme.colors.headingColor};
    border-bottom: solid 3px ${props => props.theme.colors.primary};
    padding: 10px 0;
    margin-bottom: 10px;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
`

export const Button = styled.button`
    color: ${props => props.theme.colors.primary};
    background-color: transparent;
    transition: all 300ms ease;
    padding: 10px 25px;
    border-radius: 5px;
    font-weight: 600;

    &:hover, &:active {
        background-color: ${props => transparentize(0.8, props.theme.colors.secondary)};
    }
`
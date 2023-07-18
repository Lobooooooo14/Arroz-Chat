import { shade, transparentize } from "polished"
import styled from "styled-components"
import { IoMdSend } from "react-icons/io"


export const Content = styled.div`
    grid-area: footer;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background-color: ${props => props.theme.colors.primary};
    padding: 5px 10px;
    box-shadow: 0 0 20px 0 ${props => transparentize(0.6, props.theme.colors.shadow)};
    z-index: 1;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 50px;
    padding: 10px;
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.secondary};

    &::placeholder {
        color: ${props => transparentize(0.6, props.theme.colors.textColor)};
    }
`

export const SendBtn = styled.div`
    width: 100%;
    max-width: 40px;
    height: 100%;
    max-height: 40px;
    border-radius: 50px;
    background-color: ${props => props.theme.colors.secondary};
    transition: all 100ms ease;

    &:active {
        background-color: ${props => shade(0.4, props.theme.colors.secondary)};
    }
`

export const SendBtnIcon = styled(IoMdSend)`
    display: block;
    fill: ${props => props.theme.colors.iconColor};
    width: 100%;
    height: 100%;
    scale: 0.5;
    transform: translateX(3px);
`
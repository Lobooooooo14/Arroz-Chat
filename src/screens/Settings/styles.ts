import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa"
import { lighten, transparentize } from "polished"
import { IoMdExit } from "react-icons/io"


export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 50px 1fr;
`

export const ArrowLeft = styled(FaArrowLeft)`
    display: block;
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.iconColor};
    transition: all 300ms ease;

    &:hover, &:active {
        fill: ${props => transparentize(0.2, props.theme.colors.iconColor)};
    }
`

export const Options = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background-color: ${props => props.theme.colors.background};
    padding: 10px;
    overflow-y: auto;
`

export const Option = styled.div`
    width: 100%;
    max-width: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => lighten(0.1, props.theme.colors.background)};
    padding: 10px;
    border-radius: 5px;
    color: ${props => props.theme.colors.textColor};
    transition: all 100ms ease;

    &:active {
        background-color: ${props => lighten(0.02, props.theme.colors.background)};
    }
`

export const OptionLeft = styled.div`
    & h3 {
        color: ${props => props.theme.colors.headingColor};
        margin-bottom: 10px;
    }
`

export const OptionRight = styled.div`
    
`

export const ExitIcon = styled(IoMdExit)`
    display: block;
    width: 32px;
    height: 32px;
    fill: ${props => props.theme.colors.error};
`
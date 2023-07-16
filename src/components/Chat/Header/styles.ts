import styled from "styled-components"
import { PiSignOutBold } from "react-icons/pi"
import { shade, transparentize } from "polished"


export const Content = styled.div`
    grid-area: header;
    width: 100%;
    height: 100%;
    background-color:${props => shade(0.5, props.theme.colors.secondary)};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 20px 0 ${props => transparentize(0.6, props.theme.colors.shadow)};
    z-index: 1;
`

export const AppName = styled.h2`
    color: ${props => props.theme.colors.headingColor};
    font-family: "Sora", sans-serif;
    font-size: 16pt;
`

export const SignOutIcon = styled(PiSignOutBold)`
    width: 24px;
    height: 24px;
    fill: ${props => props.theme.colors.iconColor};
    transition: all 300ms ease;

    &:hover, &:active {
        fill: ${props => transparentize(0.2, props.theme.colors.iconColor)};
    }
`
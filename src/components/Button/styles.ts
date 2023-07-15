import styled from "styled-components"
import { shade } from "polished"

export const StyledButton = styled.button`
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textColor};
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 300ms ease;
    font-size: 14pt;

    &:hover, &:active {
        background-color: ${ props => shade(0.2, props.theme.colors.secondary)};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:disabled:hover, &:disabled:active {
        background-color: ${props => props.theme.colors.primary};
    }
`
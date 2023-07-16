import { shade } from "polished"
import styled from "styled-components"


export const Content = styled.div`
    grid-area: messages;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 0 10px;
    overflow-y: auto;
    background-image: linear-gradient(45deg, ${props => props.theme.colors.secondaryGradient}, ${props => shade(0.7, props.theme.colors.primaryGradient)});
`
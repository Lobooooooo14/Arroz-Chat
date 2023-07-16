import { shade } from "polished"
import styled from "styled-components"


export const Content = styled.div`
    width: 100%;
    max-width: 600px;
    height: 100%;
    display: grid;
    grid-template: 
        "header" 50px
        "messages" 1fr
        "footer" 50px;
    background-image: linear-gradient(
        45deg, 
        ${props => props.theme.colors.secondaryScreenGradient}, 
        ${props => shade(0.3, props.theme.colors.primaryScreenGradient)}
    );
`
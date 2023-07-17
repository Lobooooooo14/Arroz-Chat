import { shade } from "polished"
import styled from "styled-components"


export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        45deg, 
        ${props => props.theme.colors.secondaryScreenGradient}, 
        ${props => shade(0.6, props.theme.colors.secondary)}
    );
`
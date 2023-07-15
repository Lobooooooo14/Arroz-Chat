import styled from "styled-components"
import { shade } from "polished"


export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${props => shade(0.2, props.theme.colors.background)};
`
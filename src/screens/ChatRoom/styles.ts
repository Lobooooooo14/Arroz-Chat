import { shade } from "polished"
import styled from "styled-components"


export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(
        45deg,
        ${props => shade(0.9, props.theme.colors.primary)},
        ${props => shade(0.8, props.theme.colors.primary)}
    );
`
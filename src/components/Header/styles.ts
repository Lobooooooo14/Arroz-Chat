import styled from "styled-components"
import { transparentize } from "polished"


export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    padding: 10px;
    box-shadow: 0 0 20px 0 ${props => transparentize(0.6, props.theme.colors.shadow)};
    z-index: 1;
`
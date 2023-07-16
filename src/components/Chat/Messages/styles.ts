import { transparentize } from "polished"
import styled from "styled-components"


export const Content = styled.div`
    grid-area: messages;
    width: 100%;
    height: 100%;
    background-color: ${props => transparentize(0.4, props.theme.colors.shadow)};
    padding: 0 10px;
    overflow-y: auto;
`
import { shade } from "polished"
import styled from "styled-components"


export const Content = styled.div`
    grid-area: messages;
    width: 100%;
    height: 100%;
    background-color: ${props => shade(0.8, props.theme.colors.primary)};
    padding: 0 10px;
    overflow-y: auto;
`
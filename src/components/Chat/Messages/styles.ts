import styled from "styled-components"


export const Content = styled.div`
    grid-area: messages;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background};
    padding: 0 10px;
    overflow-y: auto;
`
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
`
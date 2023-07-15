import styled from "styled-components"


export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    height: 100vh;
    display: grid;
    grid-template-areas: 
        "header" 50px
        "messages" 1fr
        "footer" 50px;
`
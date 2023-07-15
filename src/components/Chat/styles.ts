import styled from "styled-components"


export const Content = styled.div`
    width: 100%;
    max-width: 400px;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr 50px;
    grid-template-areas: 
        "header"
        "messages"
        "footer";
`
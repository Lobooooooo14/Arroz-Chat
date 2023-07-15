import styled from "styled-components"


export const Content = styled.div<{ $sent?: boolean; }>`
    max-width: 70%;
    width: fit-content;
    min-width: fit-content;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0 10px 10px 10px;
    padding: 10px;
    margin: 10px 0;
    ${props => props.$sent && `
        border-radius: 10px 0 10px 10px;
        margin-left: auto;
        background-color: ${props.theme.colors.secondary};
    `}
`

export const Info = styled.div`
    width: 100%;
    margin-bottom: 10px;
    `

export const Text = styled.div`
    width: 100%;
    color: ${props => props.theme.colors.textColor};
`

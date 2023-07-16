import { shade } from "polished";
import styled from "styled-components"


export const Content = styled.div<{ $sent?: boolean; }>`
    max-width: 70%;
    width: fit-content;
    min-width: fit-content;
    background-color: transparent;
    border-radius: 0 10px 10px 10px;
    padding: 10px;
    margin: 10px 0;
    background-image: linear-gradient(315deg, ${props => shade(0.7, props.theme.colors.bubbleColor)}, ${props => shade(0.8, props.theme.colors.bubbleColor)});
    ${props => props.$sent && `
        border-radius: 10px 0 10px 10px;
        margin-left: auto;
        background-image: linear-gradient(45deg, ${shade(0.4, props.theme.colors.bubbleColor)}, ${shade(0.5, props.theme.colors.bubbleColor)});
    `}
`

export const Info = styled.div`
    width: 100%;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.headingColor};
    `

export const Text = styled.div`
    width: 100%;
    color: ${props => props.theme.colors.textColor};
    word-break: break-word;
    user-select: text;
`

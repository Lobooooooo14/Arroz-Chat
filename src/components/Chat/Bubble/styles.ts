import { motion } from "framer-motion";
import { shade, transparentize } from "polished"
import styled from "styled-components"


export const Content = styled(motion.div)<{ $sent?: boolean; }>`
    max-width: 70%;
    width: fit-content;
    min-width: fit-content;
    background-color: transparent;
    border-radius: 0 10px 10px 10px;
    padding: 10px;
    margin: 10px 0;
    background-image: linear-gradient(
        315deg,
        ${props => transparentize(0.5, shade(0.7, props.theme.colors.bubbleColor))},
        ${props => transparentize(0.6, shade(0.8, props.theme.colors.bubbleColor))}
    );

    ${props => props.$sent && `
        border-radius: 10px 0 10px 10px;
        margin-left: auto;
        background-image: linear-gradient(
            45deg,
            ${transparentize(0.6, shade(0.4, props.theme.colors.bubbleColor))},
            ${transparentize(0.5, shade(0.5, props.theme.colors.bubbleColor))}
        );
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

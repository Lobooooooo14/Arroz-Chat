import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Content = styled.div`
  width: 40px;
  height: 40px;
  border: solid 5px ${(props) => props.theme.colors.primary};
  border-top: solid 5px ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`

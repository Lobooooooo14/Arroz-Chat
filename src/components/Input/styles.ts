import { transparentize } from "polished"
import styled from "styled-components"

export const InputBar = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  padding: 10px;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.secondary};

  &::placeholder {
    color: ${(props) => transparentize(0.6, props.theme.colors.textColor)};
  }
`

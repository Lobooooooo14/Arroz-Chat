import { shade } from "polished"
import styled from "styled-components"

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  overflow-y: auto;
  scrollbar-gutter: stable both-edges;
  background-image: linear-gradient(
    45deg,
    ${(props) => shade(0.8, props.theme.colors.primary)},
    ${(props) => shade(0.4, props.theme.colors.primary)}
  );
`

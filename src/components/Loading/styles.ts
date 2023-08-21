import styled from "styled-components"
import { motion } from "framer-motion"
import { transparentize } from "polished"

export const Content = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    transparentize(0.6, props.theme.colors.shadow)};
`

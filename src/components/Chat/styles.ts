import { transparentize } from "polished"
import styled from "styled-components"
import { IoMdSettings } from "react-icons/io"

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`

export const SettingsIcon = styled(IoMdSettings)`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.colors.iconColor};
  transition: all 300ms ease;

  &:hover,
  &:active {
    fill: ${(props) => transparentize(0.2, props.theme.colors.iconColor)};
  }
`

export const Avatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50px;
`

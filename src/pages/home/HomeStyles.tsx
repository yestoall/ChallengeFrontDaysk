import styled from "styled-components"
import {
  PAGE_BACKGROUND,
  PRIMARY_COLOR,
  MOBILE_BREAKPOINT,
} from "../../configuration/theme"

export const Page = styled.div`
  background-color: ${PAGE_BACKGROUND};
  padding-top: 50px;
`

export const ContainerTop = styled.div`
  padding: 20px 100px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 10px;
  }
`

export const ContainerBottom = styled.div`
  padding: 20px 100px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 10px;
  }
`

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${PRIMARY_COLOR};
  margin-bottom: 20px;
`

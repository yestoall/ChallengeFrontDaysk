import styled from "styled-components"

import { MOBILE_BREAKPOINT } from "config/theme"

export const List = styled.div`
  display: flex;
  height: 200px;
  gap: 20px;
  align-items: stretch;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    align-items: center;
    flex-wrap: nowrap;
    flex-grow: 1;
    img {
      border-radius: 10px;
    }
  }
`

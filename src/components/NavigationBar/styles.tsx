import styled from "styled-components"
import { PRIMARY_COLOR, MOBILE_BREAKPOINT } from "config/theme"

export const Header = styled.div`
  background-color: ${PRIMARY_COLOR};
  box-shadow: ${PRIMARY_COLOR} 0px 0px 10px;
  padding: 0 100px;
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
    font-size: 2em;
    font-weight: bold;
  }
  h1 {
    font-size: 30px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0 10px;
    a {
      margin: 0 auto;
    }
  }
`

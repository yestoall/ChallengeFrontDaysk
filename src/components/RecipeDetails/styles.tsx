import styled from "styled-components"

import { PRIMARY_COLOR, SECONDARY_COLOR, MOBILE_BREAKPOINT } from "config/theme"

export const Top = styled.div`
  display: flex;
  padding: 20px 100px;
  img {
    height: 400px;
    border-radius: 20px;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    padding: 0px;
    img {
      object-fit: cover;
      width: 100%;
      height: 240px;
      border-radius: 0px;
    }
  }
`

export const Bottom = styled.div`
  padding: 20px 100px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 20px;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

export const Category = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${SECONDARY_COLOR};
`

export const Name = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`

export const Stuff = styled.h1`
  display: flex;
  margin-top: 10px;
  gap: 30px;
  p {
    font-size: 18px;
    color: #666;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0 30px;
    width: 100%;
    gap: 20px;
    justify-content: space-between;
    align-content: space-between;
  }
`

export const Ingredients = styled.div`
  margin-top: 40px;
  h4 {
    font-size: 20px;
    color: ${PRIMARY_COLOR};
    font-weight: bold;
  }
  p {
    margin-top: 10px;
    text-align: center;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    text-align: center;
    p {
      text-align: left;
      padding-left: 10px;
    }
  }
`

export const Description = styled.h4`
  font-size: 30px;
  font-weight: bold;
  color: ${PRIMARY_COLOR};
  margin-bottom: 20px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: center;
  }
`

export const DescriptionText = styled.p`
  font-size: 18px;
  color: ${SECONDARY_COLOR};
  line-height: 1.5;
  letter-spacing: 0.2px;
`

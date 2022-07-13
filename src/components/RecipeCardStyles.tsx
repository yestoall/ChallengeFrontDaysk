import styled from "styled-components"
import {
  CARD_BACKGROUND,
  CARD_SHADOW_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  MOBILE_BREAKPOINT,
} from "../configuration/theme"

export const Recipe = styled.div`
  display: flex;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${CARD_BACKGROUND};
  box-shadow: ${CARD_SHADOW_COLOR} 0px 0px 5px;
  margin-bottom: 30px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    border-radius: 4px;
    img {
      object-fit: cover;
      width: 100%;
      height: 50%;
    }
  }
`

export const RecipeInfo = styled.div`
  flex: 1;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    align-self: flex-end;
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 10px 20px;
  }
`

export const RecipeCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${SECONDARY_COLOR};
`

export const RecipeName = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: ${PRIMARY_COLOR};
  margin-top: 10px;
`

export const RecipeStuff = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`

export const RecipeButton = styled.div`
  width: fit-content;
  align-self: flex-end;
  background-color: ${PRIMARY_COLOR};
  color: ${CARD_BACKGROUND};
  padding: 10px 20px;
  border-radius: 20px;
  &:hover {
    align-self: flex-end;
    background-color: ${SECONDARY_COLOR};
    color: ${CARD_BACKGROUND};
    padding: 10px 20px;
    border-radius: 20px;
  }
  &:active {
    align-self: flex-end;
    background-color: ${PRIMARY_COLOR};
    color: ${CARD_BACKGROUND};
    padding: 10px 20px;
    border-radius: 20px;
    transform: scale(0.9);
  }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    text-indent: -9999px;
    border-radius: 0;
    color: transparent;
    background-color: white !important;
    width: 32px;
    height: 32px;
    padding: 0;
    background-image: url("data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTQuNTIzIDE4Ljc4N3M0LjUwMS00LjUwNSA2LjI1NS02LjI2Yy4xNDYtLjE0Ni4yMTktLjMzOC4yMTktLjUzcy0uMDczLS4zODMtLjIxOS0uNTNjLTEuNzUzLTEuNzU0LTYuMjU1LTYuMjU4LTYuMjU1LTYuMjU4LS4xNDQtLjE0NS0uMzM0LS4yMTctLjUyNC0uMjE3LS4xOTMgMC0uMzg1LjA3NC0uNTMyLjIyMS0uMjkzLjI5Mi0uMjk1Ljc2Ni0uMDA0IDEuMDU2bDQuOTc4IDQuOTc4aC0xNC42OTJjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE0LjY5MmwtNC45NzkgNC45NzljLS4yODkuMjg5LS4yODYuNzYyLjAwNiAxLjA1NC4xNDguMTQ4LjM0MS4yMjIuNTMzLjIyMi4xOSAwIC4zNzgtLjA3Mi41MjItLjIxNXoiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
    &:hover {
      color: transparent;
      background-color: transparent;
      transform: none;
      padding: 0;
    }
    &:active {
      color: transparent;
      background-color: transparent;
      transform: none;
    }
  }
`

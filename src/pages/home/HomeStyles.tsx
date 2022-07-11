import styled from "styled-components"

// styled components for Home

export const Loading = styled.div`
  padding: 15px;
  font-size: 22px;
  font-weight: bold;
  color: white;
  background: #333;
`

export const Error = styled.div`
  padding: 15px;
  font-size: 22px;
  font-weight: bold;
  color: white;
  background: #f20;
`

export const Header = styled.div`
  background-color: #333;
  box-shadow: #333 0px 0px 10px;
  padding: 0 100px;
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 600px) {
    padding: 0 10px;
    a {
      margin: 0 auto;
    }
  }
`

export const Page = styled.div`
  background-color: #fafafa;
  padding-top: 50px;
  /* @media (max-width: 600px) {
    background-color: #f20;
  } */
`

export const ContainerTop = styled.div`
  padding: 20px 100px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`

export const ContainerBottom = styled.div`
  padding: 20px 100px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`

export const RecommendedImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  @media (max-width: 600px) {
    object-fit: cover;
    width: 100%;
  }
`

export const Recommendations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 200px;
  align-items: stretch;
  @media (max-width: 600px) {
    height: 120px;
    justify-content: left;
    align-items: flex-end;
    overflow: hidden;
  }
`

export const Recipes = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`
export const RecipesTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`

export const Recipe = styled.div`
  display: flex;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: #bbb 0px 0px 5px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    flex-direction: column;
    border-radius: 4px;
  }
`

export const RecipeImage = styled.img`
  height: 100%;
  @media (max-width: 600px) {
    object-fit: cover;
    width: 100%;
    height: 50%;
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
  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`

export const RecipeCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #666;
`

export const RecipeName = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #333;
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
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  &:hover {
    align-self: flex-end;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: black;
  }
  &:active {
    align-self: flex-end;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: black;
    transform: scale(0.9);
  }
  @media (max-width: 600px) {
    /* display: none; */
    /* border: 3px solid red; */
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
      padding:0;
    }
    &:active {
      color: transparent;
      background-color: transparent;
      transform: none;
    }
  }
`

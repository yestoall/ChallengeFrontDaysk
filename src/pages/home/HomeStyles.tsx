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
`

export const Page = styled.div`
  background-color: #fafafa;
  padding-top: 50px;
`

export const ContainerTop = styled.div`
  padding: 20px 100px;
`

export const ContainerBottom = styled.div`
  padding: 20px 100px;
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
`

export const Recommendations = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 200px;
  align-items: stretch;
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
`

export const RecipeImage = styled.img`
  height: 100%;
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
`

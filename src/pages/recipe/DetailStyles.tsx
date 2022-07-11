import styled from "styled-components"

// styled components for Details

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
    font-size: 2em;
    font-weight: bold;
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
`

export const Top = styled.div`
  display: flex;
  padding: 20px 100px;
  img {
    height: 400px;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
    padding: 20px;
  }
`

export const TopInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

export const RecipeDetailCategory = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #666;
`

export const RecipeDetailName = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
`

export const RecipeDetailStuff = styled.h1`
  display: flex;
  margin-top: 10px;
  gap: 30px;
  p {
    font-size: 18px;
    color: #666;
  }
  @media (max-width: 600px) {
    padding: 0 30px;
    width: 100%;
    gap: 20px;
    justify-content: space-between;
    align-content: space-between;  
  }`

export const Ingredients = styled.div`
  margin-top: 40px;
  h4 {
    font-size: 20px;
    color: #333;
    font-weight: bold;
  }
  p {
    margin-top: 10px;
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    p {
      text-align: left;
      padding-left:10px;
    }
  }

`

export const Description = styled.h4`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    text-align: center;
  }
`

export const DescriptionText = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.5;
  letter-spacing: 0.2px;
`

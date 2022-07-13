import { RecipeType } from "config/types/recipes"
import RecipeImage from "components/RecipeImage"
import {
  Top,
  Bottom,
  Information,
  Category,
  Name,
  Stuff,
  Ingredients,
  Description,
  DescriptionText,
} from "./styles"

interface RecipeCardProps {
  recipe: RecipeType
}

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  return (
    <>
      <Top>
        <RecipeImage photo={recipe?.photo} />
        <Information>
          <Category>{recipe.categoryName}</Category>
          <Name>{recipe.name}</Name>
          <Stuff>
            <p>{recipe.duration} minutes</p>
            <p>{recipe.complexity}</p>
            <p>{recipe.people} people</p>
          </Stuff>
          <Ingredients>
            <h4>Ingredients</h4>
            {recipe.ingredients?.split("\r\n").map((ingredient, index) => (
              <p key={index}>{ingredient}</p>
            ))}
          </Ingredients>
        </Information>
      </Top>
      <Bottom>
        <Description>Info</Description>
        <DescriptionText>{recipe.description}</DescriptionText>
      </Bottom>
    </>
  )
}

export default RecipeCard

import { useAppContext } from "../context/appContext"
import { Link } from "react-router-dom"
import { RecipeType } from "../types/recipes"
import RecipeImage from "./RecipeImage"
import {
  Recipe,
  RecipeInfo,
  RecipeCategory,
  RecipeName,
  RecipeStuff,
  RecipeButton,
} from "./RecipeCardStyles"

interface RecipeCardProps {
  recipe: RecipeType
}

const RecipeCard = ({ recipe }: RecipeCardProps): JSX.Element => {
  const { select } = useAppContext()
  return (
    <Recipe>
      <RecipeImage photo={recipe.photo} />
      <RecipeInfo>
        <div>
          <RecipeCategory>{recipe.categoryName}</RecipeCategory>
          <RecipeName>{recipe.name}</RecipeName>
          <RecipeStuff>
            <p>{recipe.duration} minutes</p>
            <p>{recipe.complexity}</p>
            <p>{recipe.people} people</p>
          </RecipeStuff>
        </div>
        <Link
          to="/detail"
          onClick={() => {
            select(recipe)
          }}
        >
          <RecipeButton>See more</RecipeButton>
        </Link>
      </RecipeInfo>
    </Recipe>
  )
}

export default RecipeCard

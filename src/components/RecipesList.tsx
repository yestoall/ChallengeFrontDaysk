import { RecipeType } from "../types/recipes"
import { List } from "./RecipesListStyles"
import RecipeCard from "./RecipeCard"

interface RecipeListProps {
  recipes: RecipeType[]
}

const RecipeList = ({ recipes }: RecipeListProps): JSX.Element => {
  return (
    <List data-testid="recipes">
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={`recipe_${index}`} />
      ))}
    </List>
  )
}

export default RecipeList

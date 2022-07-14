import { RecipeType } from "config/types/recipes"
import RecipeCard from "components/RecipeCard"
import { List } from "./styles"

interface RecipeListProps {
  recipes: RecipeType[]
}

const RecipeList = ({ recipes }: RecipeListProps): JSX.Element => {
  return (
    <List>
      {recipes.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={`recipe_${index}`} />
      ))}
    </List>
  )
}

export default RecipeList

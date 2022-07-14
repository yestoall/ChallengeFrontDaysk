import { RecipeType } from "config/types/recipes"
import RecommendationCard from "../RecommendationCard"
import { List } from "./styles"

interface RecommendationsListProps {
  recipes: RecipeType[]
}

const RecommendationsList = ({
  recipes,
}: RecommendationsListProps): JSX.Element => {
  return (
    <List>
      {recipes.map((recipe, index) => (
        <RecommendationCard key={`recipe_${index}`} recipe={recipe} />
      ))}
    </List>
  )
}

export default RecommendationsList

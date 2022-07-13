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
    <List data-testid="recommendations">
      {recipes.map((recipe, index) => (
        <RecommendationCard recipe={recipe} key={`recipe_${index}`} />
      ))}
    </List>
  )
}

export default RecommendationsList

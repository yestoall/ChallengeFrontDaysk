import { RecipeType } from "../types/recipes"
import { List } from "./RecommendationsListStyle"
import RecommendationCard from "./RecommendationCard"

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

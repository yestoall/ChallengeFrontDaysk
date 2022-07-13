import { useAppContext } from "../context/appContext"
import { Link } from "react-router-dom"
import { RecipeType } from "../types/recipes"
import { Recommendation } from "./RecommendationCardStyle"
import RecipeImage from "./RecipeImage"

interface RecommendationCardProps {
  recipe: RecipeType
}

const RecommendationCard = ({
  recipe,
}: RecommendationCardProps): JSX.Element => {
  const { select } = useAppContext()
  return (
    <Recommendation>
      <Link
        to="/detail"
        onClick={() => {
          select(recipe)
        }}
      >
        <RecipeImage photo={recipe?.photo} />
      </Link>
    </Recommendation>
  )
}

export default RecommendationCard

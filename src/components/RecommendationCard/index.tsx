import { useAppContext } from "config/context/appContext"
import { RecipeType } from "config/types/recipes"
import { Link } from "react-router-dom"
import RecipeImage from "../RecipeImage"
import { Recommendation } from "./styles"

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

import { useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { useAppContext } from "../../context/appContext"
import * as Styles from "./DetailStyles"

const DEFAULT_IMAGE = "http://via.placeholder.com/640x360"

const Detail = () => {
  const app = useAppContext()
  const recipe = app?.selected
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!recipe) {
      navigate("/", { replace: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  if (!recipe) return <div>Loading...</div>

  return (
    <div>
      <Styles.Header>
        <Link to="/">Food recipes</Link>
      </Styles.Header>
      <Styles.Page>
        <Styles.Top>
          <img src={recipe?.photo || DEFAULT_IMAGE} />
          <Styles.TopInformation>
            <Styles.RecipeDetailCategory>
              {recipe.categoryName}
            </Styles.RecipeDetailCategory>
            <Styles.RecipeDetailName>{recipe.name}</Styles.RecipeDetailName>
            <Styles.RecipeDetailStuff>
              <p>{recipe.duration} minutes</p>
              <p>{recipe.complexity}</p>
              <p>{recipe.people} people</p>
            </Styles.RecipeDetailStuff>
            <Styles.Ingredients>
              <h4>Ingredients</h4>
              {recipe.ingredients?.split("\r\n").map((ingredient, index) => (
                <p key={index}>{ingredient}</p>
              ))}
            </Styles.Ingredients>
          </Styles.TopInformation>
        </Styles.Top>
        <Styles.Bottom>
          <Styles.Description>Info</Styles.Description>
          <Styles.DescriptionText>{recipe.description}</Styles.DescriptionText>
        </Styles.Bottom>
      </Styles.Page>
    </div>
  )
}

export default Detail

import { Link } from "react-router-dom"

import { useAppContext } from "../../context/appContext"
import * as Styles from "./HomeStyles"

//· global constants for external resources ·

const DEFAULT_IMAGE = "http://via.placeholder.com/640x360"

/*
  Just for comment with Paolo

  ADDED
    + added styled-components, prettier, typescript, tsconfig
    + types folder
    + context folder
*/

//· <Home> ·

const Home = () => {
  const app = useAppContext()

  const Recommended = () => {
    return (
      <>
        <Styles.Title>Recommended</Styles.Title>
        <Styles.Recommendations>
          {app.recommendations.map((recommendation, index) => {
            return (
              <div
                data-testid={`recommendation-${index}`}
                key={`recommendation_${index}`}
              >
                <Link to="/detail">
                  <Styles.RecommendedImage
                    src={recommendation?.photo || DEFAULT_IMAGE}
                    alt=""
                  />
                </Link>
              </div>
            )
          })}
        </Styles.Recommendations>
      </>
    )
  }

  const Recipes = () => (
    <div data-testid="recipes">
      {app.recipes.map((recipe, index) => (
        <Styles.Recipe key={`recipe_${index}`} data-testid={`recipe-${index}`}>
          <Styles.RecipeImage src={recipe?.photo || DEFAULT_IMAGE} alt="" />
          <Styles.RecipeInfo>
            <div>
              <Styles.RecipeCategory>
                {recipe.categoryName}
              </Styles.RecipeCategory>
              <Styles.RecipeName>{recipe.name}</Styles.RecipeName>
              <Styles.RecipeStuff>
                <p>{recipe.duration} minutes</p>
                <p>{recipe.complexity}</p>
                <p>{recipe.people} people</p>
              </Styles.RecipeStuff>
            </div>
            <Link
              to="/detail"
              key={index}
              onClick={() => {
                app.select(recipe)
              }}
            >
              <Styles.RecipeButton>See more</Styles.RecipeButton>
            </Link>
          </Styles.RecipeInfo>
        </Styles.Recipe>
      ))}
    </div>
  )

  return (
    <>
      {app.isLoading && <Styles.Loading>Loading...</Styles.Loading>}
      {app.error && <Styles.Error>{JSON.stringify(app.error)}</Styles.Error>}
      <Styles.Header>
        <Link to="/">
          <h1>Food recipes</h1>
        </Link>
      </Styles.Header>
      <Styles.Page>
        <Styles.ContainerTop>
          <Recommended />
        </Styles.ContainerTop>
        <Styles.ContainerBottom>
          <Styles.Recipes>
            <Styles.RecipesTitle>Top selection</Styles.RecipesTitle>
            <Recipes />
          </Styles.Recipes>
        </Styles.ContainerBottom>
      </Styles.Page>
    </>
  )
}

export default Home

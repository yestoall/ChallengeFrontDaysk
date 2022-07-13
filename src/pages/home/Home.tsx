import { useAppContext } from "../../context/appContext"
import Loading from "../../components/Loading"
import ErrorMessage from "../../components/ErrorMessage"
import NavigationBar from "../../components/NavigationBar"
import RecommendationsList from "../../components/RecommendationsList"
import RecipesList from "../../components/RecipesList"

import { Page, Title, ContainerTop, ContainerBottom } from "./HomeStyles"

//· <Home> ·

/*
  TODO: tests (components)
*/

const Home = () => {
  const { isLoading, error, recommendations, recipes } = useAppContext()
  return (
    <>
      {isLoading && <Loading />}
      {error && <ErrorMessage error={JSON.stringify(error)} />}
      <NavigationBar />
      <Page>
        <ContainerTop>
          <Title>Recommended</Title>
          <RecommendationsList recipes={recommendations} />
        </ContainerTop>
        <ContainerBottom>
          <Title>Top selection</Title>
          <RecipesList recipes={recipes} />
        </ContainerBottom>
      </Page>
    </>
  )
}

export default Home

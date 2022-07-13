import { useAppContext } from "config/context/appContext"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Loading from "components/Loading"
import NavigationBar from "components/NavigationBar"
import RecipeDetails from "components/RecipeDetails"
import { Page } from "./styles"

const Detail = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const app = useAppContext()
  const recipe = app?.selected

  useEffect(() => {
    if (!recipe) {
      navigate("/", { replace: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!recipe) return <Loading />

  return (
    <div>
      <NavigationBar />
      <Page>
        <RecipeDetails recipe={recipe} />
      </Page>
    </div>
  )
}

export default Detail

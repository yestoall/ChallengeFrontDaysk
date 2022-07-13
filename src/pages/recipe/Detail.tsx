import { useAppContext } from "../../context/appContext"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Page } from "./DetailStyles"
import Loading from "../../components/Loading"
import NavigationBar from "../../components/NavigationBar"
import RecipeDetails from "../../components/RecipeDetails"

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

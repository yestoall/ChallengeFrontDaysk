//· appContext ·

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react"
import { RecipeType } from "../types/recipes"

const API_GET_RECIPES = "https://virated-api.herokuapp.com/recipes"
const API_GET_RECOMMENDATIONS =
  "https://virated-api.herokuapp.com/recipes?recommended=1"

type appContextType = {
  isLoading: boolean
  error: string
  recipes: RecipeType[]
  recommendations: RecipeType[]
  selected?: RecipeType
  select: (recipe: RecipeType) => void
}

const appContextDefaultValues: appContextType = {
  isLoading: true,
  error: "",
  recipes: [],
  recommendations: [],
  select: (recipe: RecipeType) => {},
}

//· context ·

export const AppContext = createContext<appContextType>(appContextDefaultValues)

export function useAppContext() {
  return useContext(AppContext)
}

//· provider ·

type Props = {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const [recipes, setRecipes] = useState<RecipeType[]>([])
  const [recommendations, setRecommendations] = useState<RecipeType[]>([])
  const [selected, setSelected] = useState<RecipeType>()

  useEffect(() => {
    const loadRecipies = async () => {
      // recipes API call
      {
        const data = await APIcall(API_GET_RECIPES)
        if (data) setRecipes(data)
      }
      // recommendations API call
      {
        const data = await APIcall(API_GET_RECOMMENDATIONS)
        if (data) setRecommendations(data)
      }
      setIsLoading(false)
    }
    loadRecipies()
  }, [])

  const APIcall = async (url) => {
    try {
      const resp = await fetch(url)
      if (resp.status === 200) {
        const { data } = await resp.json()
        return data
      } else {
        setError(`ERROR loading ${url}`)
        return false
      }
    } catch (error) {
      setError(`ERROR loading ${url}`)
      return false
    }
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        recipes,
        recommendations,
        selected,
        select: (recipe: RecipeType) => setSelected(recipe),
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

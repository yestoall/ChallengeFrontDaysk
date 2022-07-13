//· appContext ·

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react"

import { API_GET_RECIPES, API_GET_RECOMMENDATIONS } from "../APIurls"
import { RecipeType } from "../types/recipes"

import APIcall from "../../lib/APIcall"

interface appContextType {
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
        const { error, errorMessage, data } = await APIcall(API_GET_RECIPES)
        if (error) setError(errorMessage)
        else if (data) setRecipes(data)
      }
      // recommendations API call
      {
        const { error, errorMessage, data } = await APIcall(
          API_GET_RECOMMENDATIONS
        )
        if (error) setError(errorMessage)
        else if (data) setRecommendations(data)
      }
      setIsLoading(false)
    }
    loadRecipies()
  }, [])

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

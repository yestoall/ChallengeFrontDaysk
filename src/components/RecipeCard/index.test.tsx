import { render, screen } from "@testing-library/react"
import RecipeCard from "components/RecipeCard"
import { BrowserRouter } from "react-router-dom"

const recipe = {
  categoryId: "test",
  categoryName: "test",
  complexity: "easy",
  description: "testing recipe",
  duration: "1 second",
  ingredients: "more",
  name: "Testing Recipe",
  createdAt: "now",
  updatedAt: "now",
}

const renderRecipe = () => {
  return render(
    <BrowserRouter>
      <RecipeCard recipe={recipe} />
    </BrowserRouter>
  )
}

describe("RecipeCard", () => {
  it("name rendered", async () => {
    renderRecipe()
    const testing = await screen.findByText(recipe.name)
    expect(testing).toBeTruthy()
  })
})

describe("RecipeCard", () => {
  it("category rendered", async () => {
    renderRecipe()
    const testing = await screen.findByText(recipe.categoryName)
    expect(testing).toBeTruthy()
  })
})

import { render, screen } from "@testing-library/react"
import RecipeDetails from "components/RecipeDetails"
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
      <RecipeDetails recipe={recipe} />
    </BrowserRouter>
  )
}

describe("RecipeCard", () => {
  it("name rendered", async () => {
    renderRecipe()
    const testing = await screen.findByText(recipe.name)
    expect(testing).toBeTruthy()
  })
  it("description rendered", async () => {
    renderRecipe()
    const testing = await screen.findByText(recipe.description)
    expect(testing).toBeTruthy()
  })
})

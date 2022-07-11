import { render, screen } from "@testing-library/react"
import { AppProvider, AppContext } from "./appContext"

describe("<AppContext>", () => {
  it("recipes loaded", async () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {(value) => (
            <span>
              {value.recipes.length > 0
                ? `${value.recipes.length} recipes`
                : "empty"}
            </span>
          )}
        </AppContext.Consumer>
      </AppProvider>
    )
    const testing = await screen.findByText(/recipes/i)
    expect(testing).toBeTruthy()
  })

  it("recommendations loaded", async () => {
    render(
      <AppProvider>
        <AppContext.Consumer>
          {(value) => (
            <span>
              {value.recommendations.length > 0
                ? `${value.recommendations.length} recommendations`
                : "empty"}
            </span>
          )}
        </AppContext.Consumer>
      </AppProvider>
    )
    const testing = await screen.findByText(/recommendations/i)
    expect(testing).toBeTruthy()
  })
})

import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context/appContext"
import App from "./App"

describe("<App>", () => {
  it("loaded recipes", async () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    )
    const test = await screen.findByTestId("recipe-0")
    expect(test).toBeTruthy()
  })

  it("loaded recommendations", async () => {
    render(
      <AppProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppProvider>
    )
    const test = await screen.findByTestId("recommendation-0")
    expect(test).toBeTruthy()
  })
})

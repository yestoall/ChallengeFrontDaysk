import { render, screen } from "@testing-library/react"
import RecipeImage from "components/RecipeImage"
import { DEFAULT_PHOTO_IMAGE } from "../../config/APIurls"

describe("RecipeCard", () => {
  it("without photo", async () => {
    render(<RecipeImage />)
    const image = screen.getByRole("img")
    expect(image.getAttribute("src") === DEFAULT_PHOTO_IMAGE).toBeTruthy()
  })

  it("with photo", async () => {
    const photo = "testing"
    render(<RecipeImage photo={photo} />)
    const image = screen.getByRole("img")
    expect(image.getAttribute("src") === photo).toBeTruthy()
  })
})

import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "./context/appContext"
import "./index.css"
import App from "./App"

const container = document.getElementById("app")
const root = createRoot(container)
root.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
)

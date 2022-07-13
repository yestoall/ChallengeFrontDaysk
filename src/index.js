import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { AppProvider } from "config/context/appContext"
import App from "App"
import "index.css"

const container = document.getElementById("app")
const root = createRoot(container)
root.render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
)

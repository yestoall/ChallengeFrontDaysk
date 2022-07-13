import { Route, Routes } from "react-router-dom"
import Home from "pages/home"
import Detail from "pages/recipe"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  )
}

export default AppRoutes

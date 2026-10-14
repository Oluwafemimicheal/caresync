import { Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import LandingPageLayout from "./layouts/LandingPageLayout"

const App = () => {
  return (
    <Routes>
        <Route element={<AuthLayout/>}>
        </Route>

        <Route path="/" element={<LandingPageLayout/>}>
        </Route>
    </Routes>
  )
}

export default App

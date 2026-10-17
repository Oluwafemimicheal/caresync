import { Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import LandingPageLayout from "./layouts/LandingPageLayout"
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>

      <Route index path="/" element={<LandingPageLayout />}></Route>
    </Routes>
  );
}

export default App

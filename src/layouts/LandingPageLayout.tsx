import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Hero from "../components/landing-page/Hero"

const LandingPageLayout = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Outlet/>
    </div>
  )
}

export default LandingPageLayout

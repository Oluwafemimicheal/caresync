import { Route, Routes } from "react-router-dom"
import AuthLayout from "./layouts/AuthLayout"
import LandingPageLayout from "./layouts/LandingPageLayout"
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import PatientPortal from "./layouts/PaitentPortal";
import Overview from "./components/patient-dashboard/Overview";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>

      <Route element={<PatientPortal />}>
        <Route path="/overview" element={<Overview />} />
        <Route path="book-appointment" element={<div>Book Appointment</div>} />
        <Route path="appointment" element={<div>Appointment</div>} />
        <Route path="health-records" element={<div>Health Records</div>} />
        <Route path="payments" element={<div>Payments</div>} />
      </Route>

      <Route index path="/" element={<LandingPageLayout />}></Route>
    </Routes>
  );
}

export default App

// src/App.jsx
import { Route,Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import RoleSelection from "./components/Role";
import Login from "./components/Login";
import RecruiterRegister from "./components/RecruiterRegister";
import SeekerRegister from "./components/SeekerRegister";
import RecruiterDashboard from "./components/RecruiterDashboard";
import SeekerDashboard from "./components/SeekerDashboard";

export default function App() {

  return(
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/role" element={<RoleSelection />} />
    <Route path="/" element={<LandingPage />} />
    <Route path="/register/recruiter" element={<RecruiterRegister />} />
    <Route path="/register/seeker" element={<SeekerRegister />} />
    <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
    <Route path="/seeker/dashboard" element={<SeekerDashboard />} />
  </Routes>
  )
}

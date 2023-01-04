import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { LadingPage } from "../pages/LandingPage";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LadingPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

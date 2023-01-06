import { Route, Routes } from "react-router-dom";
import { TournamentProvider } from "../context/TournamentContext";
import { Area51Page } from "../pages/Area51";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import { RegisterPage } from "../pages/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/area51" element={<TournamentProvider><Area51Page /></TournamentProvider>} />

      <Route path="*" element={<Homepage /> } />
    </Routes>
  );
};

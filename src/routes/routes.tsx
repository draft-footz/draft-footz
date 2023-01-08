import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import { RegisterPage } from "../pages/Register";
import { TournamentProvider } from "../context/TournamentContext";
import { TeamProvider } from "../context/TeamContext";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" 
        element={
        <TournamentProvider>
          <TeamProvider>
            <DashboardPage />
          </TeamProvider>
        </TournamentProvider>
        } />

      <Route path="*" element={<Homepage /> } />
    </Routes>
  );
};

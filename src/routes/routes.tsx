import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { LoginPage } from "../pages/LoginPage";
import Homepage from "../pages/Homepage";
import { RegisterPage } from "../pages/Register";
import { TournamentProvider } from "../context/TournamentContext";
import { TeamProvider } from "../context/TeamContext";
import { MatchesProvider } from "../context/MatchesContext";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" 
        element={
          <MatchesProvider>
            <TournamentProvider>
              <TeamProvider>
                <DashboardPage />
              </TeamProvider>
            </TournamentProvider>
          </MatchesProvider>
        } />
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
};

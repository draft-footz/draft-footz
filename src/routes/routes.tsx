import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import { TournamentProvider } from "../context/TournamentContext";
import { TeamProvider } from "../context/TeamContext";
import { MatchesProvider } from "../context/MatchesContext";
import Login from "../pages/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Homepage />} />
      <Route
        path="/dashboard"
        element={
          <MatchesProvider>
            <TournamentProvider>
              <TeamProvider>
                <DashboardPage />
              </TeamProvider>
            </TournamentProvider>
          </MatchesProvider>
        }
      />
    </Routes>
  );
};

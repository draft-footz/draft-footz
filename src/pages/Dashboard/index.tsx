import React, { useEffect, useState } from "react";
import { CreatePlayer } from "../../components/CreatePlayer";
import { CreateTeam } from "../../components/CreateTeam";
import { EditTeam } from "../../components/EditTeam";
import { MyTeamBlank } from "../../components/MyTeamBlank";
import { MyTeamDetails } from "../../components/MyTeamDetails";
import { MyTournaments } from "../../components/MyTournaments";
import { TournamentsViewPage } from "./TournamentsViewPage";
import { MyTeamPlayers } from "../../components/MyTeamPlayers";
import { TournamentCreation } from "../../components/TournamentCreation";
import { Welcome } from "../../components/Welcome";
import { TournamentProvider } from "../../context/TournamentContext";
import { api } from "../../services/api";
import { ButtonMenu } from "../../styles/Buttons/style";
import { FigureBackgroundDashboard } from "../../styles/Figures/style";
import {
  ButtonLogout,
  DivButtonLogout,
  DivLogoAndButtons,
  DivMenu,
  FigureLogo,
  Main,
  SectionDashboard,
} from "./style";

export const DashboardPage = () => {
  const [value, setValue] = useState(0);

  // APAGAR ASSIM QUE FINALIZAR

  useEffect(() => {
    const loginData = {
      email: "user@test.com",
      password: "test123",
    };

    async function autoLogin() {
      try {
        const request = await api.post("/login", loginData);

        localStorage.setItem("@AcessToken", request.data.accessToken);
      } catch (error) {
        console.error(error);
      }
    }

    autoLogin();
  }, []);

  // APAGAR ASSIM QUE FINALIZAR


  return (
    <>
      <FigureBackgroundDashboard>
        <img src="/bg-dashboard.png" alt="" />
      </FigureBackgroundDashboard>
      <Main>
        <SectionDashboard>
          <DivMenu>
            <DivLogoAndButtons>
              <FigureLogo>
                <img src="/logo.svg" alt="" />
              </FigureLogo>
              <ButtonMenu onClick={() => setValue(1)}> Criar torneio </ButtonMenu>
              <ButtonMenu onClick={() => setValue(2)}> Meus torneios </ButtonMenu>
              <ButtonMenu onClick={() => setValue(3)}> Meu time      </ButtonMenu>
            </DivLogoAndButtons>
            <DivButtonLogout>
              <ButtonLogout>
                <img src="/logout.png" alt="" />
                <p>Fazer logout</p>
              </ButtonLogout>
            </DivButtonLogout>
          </DivMenu>

          <TournamentProvider >
            {value === 0 && <Welcome />}
            {value === 1 && <TournamentCreation />}
            {value === 2 && <MyTournaments />     }
            {value === 14 && <MyTeamBlank />}
            {value === 15 && <MyTeamDetails />}
            {value === 16 && <MyTeamPlayers />}
            {value === 18 && <CreateTeam />}
            {value === 19 && <EditTeam />}
            {value === 20 && <CreatePlayer />}
          </TournamentProvider>
        </SectionDashboard>
      </Main>
    </>
  );
};

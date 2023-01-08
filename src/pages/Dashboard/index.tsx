import { useContext } from "react";
import { CreatePlayer } from "../../components/CreatePlayer";
import { CreateTeam } from "../../components/CreateTeam";
import { EditTeam } from "../../components/EditTeam";
import { MyTeamBlank } from "../../components/MyTeamBlank";
import { MyTeamDetails } from "../../components/MyTeamDetails";
import { MyTournaments } from "../../components/MyTournaments";
import { MyTeamPlayers } from "../../components/MyTeamPlayers";
import { TournamentCreation } from "../../components/TournamentCreation";
import { Welcome } from "../../components/Welcome";
import { TournamentContext } from "../../context/TournamentContext";
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
import { TournamentKeys } from "../../components/MyTournaments/TournamentKeys";
import { SubscriptionsProvider } from "../../context/SubscriptionsContext";
import { NoTournament } from "../../components/NoTournament";
import { TeamsTournament } from "../../components/TeamTournament";

export const DashboardPage = () => {
  const { setReadingTournament, dashboardPage ,setDashboardPage } = useContext(TournamentContext);

  function isSelected (pages: number[] | number) {
    if(typeof pages === 'number') {
      return dashboardPage === pages ? 'selected' : ''
    } else {
      return pages.includes(dashboardPage) ? 'selected' : ''
    };
  };

  return (
    <>
      <FigureBackgroundDashboard>
        <img src="/bg-dashboard.png" alt="" />
      </FigureBackgroundDashboard>
      <Main>
      
        <SectionDashboard>
            <DivMenu>
              <DivLogoAndButtons>
                <FigureLogo onClick={() => setDashboardPage(0)}>
                  <img src="/logo.svg" alt="" />
                </FigureLogo>
                <ButtonMenu className={isSelected([2, 5, 6])} onClick={() => {
                    setDashboardPage(2);
                    setReadingTournament(false);
                  }}> 
                  Meus torneios </ButtonMenu>
                <ButtonMenu className={dashboardPage === 3 ? 'selected' : ''} onClick={() => setDashboardPage(3)}> Meu time      </ButtonMenu>
              </DivLogoAndButtons>
              <DivButtonLogout>
                <ButtonLogout>
                  <img src="/logout.png" alt="" />
                  <p>Fazer logout</p>
                </ButtonLogout>
              </DivButtonLogout>
            </DivMenu>     

            <SubscriptionsProvider>
              {dashboardPage === 0  && <Welcome />}
              {dashboardPage === 1  && <TournamentCreation />}
              {dashboardPage === 2  && <MyTournaments />     }
              {dashboardPage === 5  && <NoTournament />}
              {dashboardPage === 6  && <TournamentKeys />}
              {dashboardPage === 7 && <TeamsTournament />}
              {dashboardPage === 14 && <MyTeamBlank />}
              {dashboardPage === 15 && <MyTeamDetails />}
              {dashboardPage === 16 && <MyTeamPlayers />}
              {dashboardPage === 18 && <CreateTeam />}
              {dashboardPage === 19 && <EditTeam />}
              {dashboardPage === 20 && <CreatePlayer />}
            </SubscriptionsProvider>
        </SectionDashboard>
      </Main>
    </>
  );
};

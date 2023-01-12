import { useContext } from "react";
import { CreatePlayer } from "../../components/CreatePlayer";
import { CreateTeam } from "../../components/CreateTeam";
import { EditTeam } from "../../components/EditTeam";
import { MyTeamBlank } from "../../components/MyTeamBlank";
import { MyTeamDetails } from "../../components/MyTeamDetails";
import { MyTeamPlayers } from "../../components/MyTeamPlayers";
import { MyTeamPosition } from "../../components/MyTeamPosition";
import { MyTournaments } from "../../components/MyTournaments";
import { TournamentKeys } from "../../components/MyTournaments/TournamentKeys";
import { NoTournament } from "../../components/NoTournament";
import { TeamTournament } from "../../components/TeamTournament";
import { TournamentCreation } from "../../components/TournamentCreation";
import { TournamentsView } from "../../components/TournamentsView";
import { Welcome } from "../../components/Welcome";
import { MatchesProvider } from "../../context/MatchesContext";
import { SubscriptionsProvider } from "../../context/SubscriptionsContext";
import { TournamentContext } from "../../context/TournamentContext";
import { DashboardMenu } from "./DashboardMenu";
import { StyledDashboard } from "./style";

export const DashboardPage = () => {
    const { dashboardPage } = useContext(TournamentContext);

    return (
        <StyledDashboard>
            <main>
                <DashboardMenu />
                <div>
                    <SubscriptionsProvider>
                        <MatchesProvider>
                            {dashboardPage === 0 && <Welcome />           }
                            {dashboardPage === 1 && <TournamentCreation />}
                            {dashboardPage === 2 && <MyTournaments />     }
                            {dashboardPage === 3 && <TournamentsView />   }
                            {dashboardPage === 5 && <NoTournament />      }
                            {dashboardPage === 6 && <TournamentKeys />    }
                            {dashboardPage === 7 && <TeamTournament />    }
                            {dashboardPage === 14 && <MyTeamBlank />      }
                            {dashboardPage === 15 && <MyTeamDetails />    }
                            {dashboardPage === 16 && <MyTeamPlayers />    }
                            {dashboardPage === 17 && <MyTeamPosition />   }
                            {dashboardPage === 18 && <CreateTeam />       }
                            {dashboardPage === 19 && <EditTeam />         }
                            {dashboardPage === 20 && <CreatePlayer />     } 
                        </MatchesProvider>
                    </SubscriptionsProvider>
                </div>
            </main>
        </StyledDashboard>
    );
}
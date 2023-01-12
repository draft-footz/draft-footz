import { useContext, useState } from "react";
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
    DivHeaderDashboard,
    DivLogo,
    DivLogoAndButtons,
    DivMenu,
    FigureLogo,
    HeaderDashboard,
    Main,
    SectionDashboard,

} from "./style";
import { TournamentKeys } from "../../components/MyTournaments/TournamentKeys";
import { SubscriptionsProvider } from "../../context/SubscriptionsContext";
import { NoTournament } from "../../components/NoTournament";
import { TeamTournament } from "../../components/TeamTournament";
import { MyTeamPosition } from "../../components/MyTeamPosition";
import { MatchesProvider } from "../../context/MatchesContext";
import { UserContext } from "../../context/UsersContext";
import { TournamentsView } from "../../components/TournamentsView";

export const DashboardPage = () => {

  const { setReadingTournament, dashboardPage, setDashboardPage } = useContext(TournamentContext);

    function isSelected(pages: number[] | number) {
        if (typeof pages === "number") {
            return dashboardPage === pages ? "selected" : "";
        } else {
            return pages.includes(dashboardPage) ? "selected" : "";
        }
    }
    
    const [open, setOpen] = useState(false);

    const { logoutDashboard } = useContext(UserContext);
    return (
        <>
            <HeaderDashboard>
                <DivHeaderDashboard>
                    <DivLogo>
                        <img src="/ball.png" alt="" />
                        <img src="/Draft Footz.png" alt="" />
                    </DivLogo>
                    <button
                        className={open === true ? "none" : ""}
                        onClick={() => setOpen(true)}
                    >
                        <img className="img-menu" src="/menu-line.png" alt="" />
                    </button>
                </DivHeaderDashboard>
                <div className={open === false ? "none" : "div-open"}>
                    <div className={open === false ? "none" : "div-x"}>
                        <button onClick={() => setOpen(false)}>X</button>
                    </div>
                    <button
                        onClick={() => {
                            setDashboardPage(2);
                            setReadingTournament(false);
                        }}
                    >
                        Meus torneio
                    </button>
                    <button onClick={() => setDashboardPage(14)}>
                        Meu time
                    </button>
                    <button onClick={() => setDashboardPage(3)}>
                        Torneios
                    </button>
                    <button onClick={() => logoutDashboard()}>Logouteeee</button>
                </div>
            </HeaderDashboard>
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
                            <ButtonMenu
                                className={isSelected([2, 5, 6, 7])}
                                onClick={() => {
                                setDashboardPage(2);
                                setReadingTournament(false);
                                }}
                            >
                                Meus torneios
                            </ButtonMenu>
                            <ButtonMenu
                                className={isSelected([14, 15, 16, 17, 19])}
                                onClick={() => setDashboardPage(14)}
                            >
                                Meu time
                            </ButtonMenu>

                            <ButtonMenu
                                className={isSelected(3)}
                                onClick={() => setDashboardPage(3)}
                            >
                                Torneios
                            </ButtonMenu>
                        </DivLogoAndButtons>
                        <DivButtonLogout onClick={logoutDashboard}>
                            <ButtonLogout>

                                <img src="/logout.png" alt="" />
                                <p>Fazer logout</p>
                            </ButtonLogout>
                        </DivButtonLogout>
                    </DivMenu>
                    <SubscriptionsProvider>
                        <MatchesProvider>
                            {dashboardPage === 0 && <Welcome />}
                            {dashboardPage === 1 && <TournamentCreation />}
                            {dashboardPage === 2 && <MyTournaments />}
                            {dashboardPage === 3 && <TournamentsView />}
                            {dashboardPage === 5 && <NoTournament />}
                            {dashboardPage === 6 && <TournamentKeys />}
                            {dashboardPage === 7 && <TeamTournament />}
                            {dashboardPage === 14 && <MyTeamBlank />}
                            {dashboardPage === 15 && <MyTeamDetails />}
                            {dashboardPage === 16 && <MyTeamPlayers />}
                            {dashboardPage === 17 && <MyTeamPosition />}
                            {dashboardPage === 18 && <CreateTeam />}
                            {dashboardPage === 19 && <EditTeam />}
                            {dashboardPage === 20 && <CreatePlayer />}
                        </MatchesProvider>
                    </SubscriptionsProvider>
                </SectionDashboard>
            </Main>
        </>
    );
};

import { StyledDashboardMenu } from "./style";
import { FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { TournamentContext } from "../../../context/TournamentContext";
import { UserContext } from "../../../context/UsersContext";

export const DashboardMenu = () => {

    const { dashboardPage, setDashboardPage, setReadingTournament } = useContext(TournamentContext);

    function isSelected(pages: number[] | number) {
        if (typeof pages === "number") {
            return dashboardPage === pages ? "selected" : "";
        } else {
            return pages.includes(dashboardPage) ? "selected" : "";
        }
    };

    const { logoutDashboard } = useContext(UserContext);

    function handleClickMyTournaments() {
        setDashboardPage(2);
        setReadingTournament(false);
    };

    return (
        <StyledDashboardMenu>
            <figure>
                <img src="./logo.svg" alt="DraftFootz logo"/> 
                <div>
                    <img src="./ball.png" alt="ball"/>
                    <img src="./Draft Footz.png" alt="Draft Footz" />
                </div>
            </figure>
            <div>
                <GiHamburgerMenu />
                <div>
                    <nav>
                        <button className={isSelected([2,5,6,7])}        onClick={handleClickMyTournaments}  > Meus torneios </button>
                        <button className={isSelected([14,15,16,17,19])} onClick={() => setDashboardPage(14)}> Meu time      </button>
                        <button className={isSelected(3)}                onClick={() => setDashboardPage(3)} > Torneios      </button>
                    </nav>
                    <button onClick={() => logoutDashboard()}>
                            <FaSignOutAlt />
                            Logout
                    </button>         
                </div>
            </div>
        </StyledDashboardMenu>
    );
};
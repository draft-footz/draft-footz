import { StyledTournamentCard } from "./style"
import { iDataTournament } from "../../../types/TournamentContextTypes";
import { ButtonRight } from "../../../styles/Buttons/style";
import { useContext } from "react";
import { TournamentContext } from "../../../context/TournamentContext";
import { SubscriptionsContext } from "../../../context/SubscriptionsContext";

interface iTournamentCardProps {
    tournament: iDataTournament;
}

export const TournamentCard = ({ tournament }: iTournamentCardProps) => {

    const { setDashboardPage } = useContext(TournamentContext);
    const { subscriptions } = useContext(SubscriptionsContext);

    const totalTeams = subscriptions.filter(subscription => subscription.accepted).length;

    return (
        <StyledTournamentCard>
            <div>
                <img src="./trofeu.svg" alt="troféu"/>
                <h1> {tournament.name} </h1>
            </div>

            <div>
                <div>
                    <span> Administrador do torneio: <h2> {tournament.userName} </h2></span>
                </div>

                <div>
                    <span> Tipo de campeonato: <h2> Eliminatórias </h2></span>
                    <span> Total de times: <h2>  {totalTeams}/8 </h2></span>
                </div>
                <ButtonRight onClick={() => {
                    setDashboardPage(6);
                }}> {'>'} </ButtonRight>
            </div>
        </StyledTournamentCard>
    );
};
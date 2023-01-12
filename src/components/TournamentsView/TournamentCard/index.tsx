import { useContext, useEffect, useState } from "react";
import { SubscriptionsContext } from "../../../context/SubscriptionsContext";
import { iSubscriptionData } from "../../../types/SubscriptionsContextTypes";
import { iDataTournament } from "../../../types/TournamentContextTypes";
import { StyledTournamentCard } from "./style"

interface iTournamentCardProps {
    tournament: iDataTournament;
};

export const TournamentCard = ({ tournament }: iTournamentCardProps) => {

    const { returnTournamentSubscriptions } = useContext(SubscriptionsContext);
    const [ tournamentSubs, setTournamentSubs ] = useState([] as iSubscriptionData[]);

    useEffect(() => {
        returnTournamentSubscriptions(tournament.id, setTournamentSubs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 
    
    return (
        <StyledTournamentCard>
            <div>
                <img src="./trofeu.svg" alt="troféu" />
                <h2> {tournament.name} </h2>
            </div>
            <div>
                <span> {tournamentSubs ? tournamentSubs.length : 0}
                {' '}de{' '}
                {tournament.numberOfTeams} 
                {' '}Equipes 
                </span>
                <button disabled={tournamentSubs.length>=8}> Entrar </button>
            </div>
        </StyledTournamentCard>
    );
};
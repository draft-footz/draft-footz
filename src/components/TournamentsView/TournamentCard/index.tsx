import { useContext, useEffect, useState } from "react";
import { SubscriptionsContext } from "../../../context/SubscriptionsContext";
import { TeamContext } from "../../../context/TeamContext";
import { iSubscriptionData } from "../../../types/SubscriptionsContextTypes";
import { iDataTournament } from "../../../types/TournamentContextTypes";
import { StyledTournamentCard } from "./style"

interface iTournamentCardProps {
    tournament: iDataTournament;
};

export const TournamentCard = ({ tournament }: iTournamentCardProps) => {

    const { returnTournamentSubscriptions, askToSubscribe} = useContext(SubscriptionsContext);
    const { teamData }                                     = useContext(TeamContext);

    const [ tournamentSubs, setTournamentSubs ] = useState([] as iSubscriptionData[]);
    const [ updater, setUpdater ]               = useState(0);
    const [ disabled, setDisabled ]             = useState(false);
    const [ buttonText, setButtonText ]         = useState("");

    useEffect(() => {
        returnTournamentSubscriptions(tournament.id, setTournamentSubs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updater]); 

    useEffect(() => {
        if(tournamentSubs.find(sub => sub.team.id === teamData.id)) {
            setDisabled(true);
            setButtonText("Entrou");
        }
        else if(tournamentSubs.length >=8) {
            setDisabled(true); 
            setButtonText("Lotado");
        }
        else {
            setDisabled(false);
            setButtonText("Entrar");
        }
    }, [tournamentSubs, teamData])


    function handleClick () {
        if(teamData) {
            askToSubscribe(tournament.id, teamData);
            setUpdater(updater+1);
        };
    };


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
                <button disabled={disabled} onClick={handleClick}> {buttonText} </button>
            </div>
        </StyledTournamentCard>
    );
};
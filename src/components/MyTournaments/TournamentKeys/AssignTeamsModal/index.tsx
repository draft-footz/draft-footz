import { useContext, useState, useEffect } from "react";
import { SubscriptionsContext } from "../../../../context/SubscriptionsContext";
import { ButtonCloseModal, ButtonSend } from "../../../../styles/Buttons/style";
import { StyledAssignTeamsModal } from "./style";
import { GoArrowSmallDown } from "react-icons/go"
import { iMatchData, iWinner } from "../../../../types/MatchesContextTypes";
import { TournamentContext } from "../../../../context/TournamentContext";
import { MdOutlineUpdate } from "react-icons/md";
import { MatchesContext } from "../../../../context/MatchesContext";

interface iAssignTeamsModalProps {
    match: iMatchData;
    changeModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AssignTeamsModal = ({ match, changeModalState }: iAssignTeamsModalProps) => {

    // Context functions and states
    const { subscriptions, getTournamentSubscriptions  } = useContext(SubscriptionsContext);
    const { updateMatchTeams } = useContext(MatchesContext);
    const { readingTournament } = useContext(TournamentContext);

    // This modal functions and states
    const [selectedTeamA, setSelectedTeamA] = useState<number | "">("");
    const [selectedTeamB, setSelectedTeamB] = useState<number | "">("");
    const filteredSelectTeamA = subscriptions.filter(sub => sub.team?.id !== selectedTeamB && !sub.accepted);
    const filteredSelectTeamB = subscriptions.filter(sub => sub.team?.id !== selectedTeamA && !sub.accepted);
    const findSelectedSubA = subscriptions.find(sub => sub.team?.id === selectedTeamA);
    const findSelectedSubB = subscriptions.find(sub => sub.team?.id === selectedTeamB);

    function updateSubscriptions () {
        if (readingTournament) {
            getTournamentSubscriptions(readingTournament.id);
        };
    };

    function handleUpdateMatch () {
        if( findSelectedSubA && findSelectedSubB ) {
            let matchData = {
                teamA: {
                    id: findSelectedSubA.team.id,
                    name: findSelectedSubA.team.name
                },
                teamB: {
                    id: findSelectedSubB.team.id,
                    name: findSelectedSubB.team.name
                }
            };

            let subscriptions = [ findSelectedSubA.id, findSelectedSubB.id ];
            updateMatchTeams(match.id, matchData, subscriptions);
            changeModalState(false);
        };
    };

    const matchesArr = ["", "Quartas de Final 1", "Quartas de Final 2", "Quartas de Final 3", "Quartas de Final 4"];

    return (
        <StyledAssignTeamsModal>
            <ButtonCloseModal
                onClick={() => changeModalState(false)}
            > x 
            </ButtonCloseModal>
            {subscriptions.length === 0  ? 
            (
                <span>
                    Seu torneio ainda não tem nenhum time inscrito.
                    <MdOutlineUpdate onClick={updateSubscriptions}/>
                </span>
            )
            :
            (   
            <>
                <h3> {matchesArr[match.order]} <MdOutlineUpdate onClick={updateSubscriptions}/> </h3>
                <div>
                    <label> Time A </label>
                    <div>
                        <select onChange={(e) => setSelectedTeamA(Number(e.target.value))}>
                        <option value=""> Selecione um time </option>
                            {filteredSelectTeamA.map(sub => <option key={`teamA_${sub.team.id}`} value={sub.team.id}> {sub.team.name} </option>)}
                        </select>
                        <GoArrowSmallDown />
                    </div>
                </div>
                <div>
                    <label> Time B </label>
                    <div>
                        <select onChange={(e) => setSelectedTeamB(Number(e.target.value))}>
                        <option value=""> Selecione um time </option>
                            {filteredSelectTeamB.map(sub => <option key={`teamB_${sub.team.id}`} value={sub.team.id}> {sub.team.name} </option>)}
                        </select>
                        <GoArrowSmallDown />
                    </div>
                </div>
                <ButtonSend onClick={handleUpdateMatch}> Salvar </ButtonSend>
            </> 
            )
            }
        </StyledAssignTeamsModal>
    );
};
import { useContext, useState } from "react";
import { SubscriptionsContext } from "../../../../context/SubscriptionsContext";
import { ButtonCloseModal, ButtonSend } from "../../../../styles/Buttons/style";
import { StyledAssignTeamsModal } from "./style";
import { GoArrowSmallDown } from "react-icons/go"
import { iMatchData } from "../../../../types/MatchesContextTypes";
import { TournamentContext } from "../../../../context/TournamentContext";
import { MdOutlineUpdate } from "react-icons/md"

interface iAssignTeamsModalProps {
    match: iMatchData;
    changeModalState: React.Dispatch<React.SetStateAction<boolean>>
}
export const AssignTeamsModal = ({ match, changeModalState }: iAssignTeamsModalProps) => {

    const { subscriptions, getTournamentSubscriptions  } = useContext(SubscriptionsContext);
    const { readingTournament } = useContext(TournamentContext);


    const [selectedTeamA, setSelectedTeamA] = useState<number>();
    const [selectedTeamB, setSelectedTeamB] = useState<number>();
    const [scoreTeamA, setScoreTeamA ] = useState<number>();
    const [scoreTeamB, setScoreTeamB ] = useState<number>();
    const [winnerId, setWinnerId ] = useState<number>();

    const filteredSubscriptionsA = subscriptions.filter(sub => sub.team.id !== selectedTeamB);
    const filteredSubscriptionsB = subscriptions.filter(sub => sub.team.id !== selectedTeamA);

    const winnerOptions = subscriptions.filter(sub => sub.team.id === selectedTeamA || sub.team.id === selectedTeamB);

    function updateSubscriptions () {
        if (readingTournament) {
            getTournamentSubscriptions(readingTournament.id);
        };
    };

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
                </span>
            )
            :
            (
                <>
                <h3> Editar Partida {match.order} <MdOutlineUpdate onClick={updateSubscriptions}/> </h3>
                <div>
                    <label> Time A </label>
                    <div>
                        <select onChange={(e) => setSelectedTeamA(Number(e.target.value))} value={match.teamA ? match.teamA.id : ''}>
                            {filteredSubscriptionsA.map(sub => <option value={sub.team.id}> {sub.team.name} </option>)}
                        </select>
                        <GoArrowSmallDown />
                        <input type="number" onChange={(e) => setScoreTeamA(Number(e.target.value))}/>
                    </div>
                </div>
                <div>
                    <label> Time B </label>
                    <div>
                        <select onChange={(e) => setSelectedTeamB(Number(e.target.value))}>
                            {filteredSubscriptionsB.map(sub => <option value={sub.team.id}> {sub.team.name} </option>)}
                        </select>
                        <GoArrowSmallDown />
                        <input type="number" onChange={(e) => setScoreTeamB(Number(e.target.value))}/>
                    </div>
                </div>
                {
                    scoreTeamA === scoreTeamB &&
                    <div>
                        <label> Ganhador </label>
                        <div>
                            <select onChange={(e) => setWinnerId(Number(e.target.value))}>
                                {winnerOptions.map(sub => <option value={sub.team.id}> {sub.team.name} </option>)}
                            </select>
                            <GoArrowSmallDown />
                        </div>
                    </div>
                }
                <ButtonSend> Salvar </ButtonSend>
            </> 
            )
            }

            
        </StyledAssignTeamsModal>
    );
};
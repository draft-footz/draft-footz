import { useContext, useState, useEffect } from "react";
import { ButtonCloseModal, ButtonSend } from "../../../../styles/Buttons/style";
import { StyledAssignTeamsModal } from "./style";
import { GoArrowSmallDown } from "react-icons/go"
import { iMatchData, iWinner } from "../../../../types/MatchesContextTypes";
import { TournamentContext } from "../../../../context/TournamentContext";
import { MatchesContext } from "../../../../context/MatchesContext";

interface iAssignResultsModalProps {
    match: iMatchData;
    changeModalState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AssignResultsModal = ({ match, changeModalState }: iAssignResultsModalProps) => {

    const { updateMatchScores } = useContext(MatchesContext);
    const { readingTournament, setTournamentChampion } = useContext(TournamentContext);

    const [scoreTeamA, setScoreTeamA ] = useState<number>();
    const [scoreTeamB, setScoreTeamB ] = useState<number>();
    const [winnerId, setWinnerId ] = useState<number>();
    const [winnerData, setWinnerData ] = useState<iWinner>();

    const matchesArr = ["", "Quartas de Final 1", "Quartas de Final 2", "Quartas de Final 3", "Quartas de Final 4", "Semi Final 1", "Semi Final 2", "Final"];

    // Função do evento de selecionar ganhador
    function handleSetWinner (e: React.ChangeEvent<HTMLSelectElement>) {
        setWinnerId(Number(e.target.value));
    };

    // Selecionar WinnerId automaticamente baseado na diferença do placar
    useEffect(() => {
        if(scoreTeamA !== undefined && scoreTeamB !== undefined && match.teamA && match.teamB){
            if(scoreTeamA > scoreTeamB ){ 
                setWinnerId(match.teamA.id);
            };
            if(scoreTeamB > scoreTeamA) { 
                setWinnerId(match.teamB.id);
            };
        };
    }, [scoreTeamA, scoreTeamB, match]);

    // Setar WinnerData automaticamente baseado no winnerId
    useEffect(() => {
        if(match.teamA && match.teamB && match.teamA.id === winnerId) {
            let data = {...match.teamA, team: "teamA"};
            setWinnerData(data);
        };
        if(match.teamA && match.teamB && match.teamB.id === winnerId) {
            let data = {...match.teamB, team: "teamB"};
            setWinnerData(data)  ;
        };
    }, [winnerId, match]);

    // Função do botão de salvar 
    function handleSaveButton () {
        if( winnerData && scoreTeamA !== undefined && scoreTeamB !== undefined && readingTournament) {
            let data = {
                winner: winnerData,
                scores: {
                    teamA: scoreTeamA,
                    teamB: scoreTeamB
                }
            }
            updateMatchScores(match.id, data, match.order);

            if( match.order === 7) {
                const champion = {
                    id: winnerData.id,
                    name: winnerData.name
                };
                setTournamentChampion(champion, readingTournament.id )
            };

            changeModalState(false);

        }
    };

    return (
        <StyledAssignTeamsModal>
            <ButtonCloseModal
                onClick={() => changeModalState(false)}
            > x 
            </ButtonCloseModal>
            <h3> {matchesArr[match.order]} </h3>
            <div>
                <label> Time A </label>
                <div>
                    {match.teamA?.name}:
                    <input type="number" onChange={(e) => setScoreTeamA(Number(e.target.value))}/>
                </div>
            </div>
            <div>
                <label> Time B </label>
                <div>
                    {match.teamB?.name}:
                    <input type="number" onChange={(e) => setScoreTeamB(Number(e.target.value))}/>
                </div>
            </div>
            {
                (scoreTeamA === scoreTeamB && scoreTeamA !== undefined && scoreTeamB !== undefined) &&
                <div>
                    <label> Ganhador </label>
                    <div>
                        <select onChange={handleSetWinner}>
                            <option value=""> Selecione um time </option>
                            { match.teamA && <option value={match.teamA.id}> {match.teamA.name} </option>}
                            { match.teamB && <option value={match.teamB.id}> {match.teamB.name} </option>}
                        </select>
                        <GoArrowSmallDown />
                    </div>
                </div>
            }
            <ButtonSend onClick={handleSaveButton}> Salvar </ButtonSend>
        </StyledAssignTeamsModal>
    );
};
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

    const { subscriptions, getTournamentSubscriptions  } = useContext(SubscriptionsContext);
    const { updateMatchTeams, updateMatchScores } = useContext(MatchesContext);
    const { readingTournament } = useContext(TournamentContext);

    const [selectedTeamA, setSelectedTeamA] = useState<number | "">("");
    const [selectedTeamB, setSelectedTeamB] = useState<number | "">("");
    const [scoreTeamA, setScoreTeamA ] = useState<number>();
    const [scoreTeamB, setScoreTeamB ] = useState<number>();
    const [winnerId, setWinnerId ] = useState<number>();
    const [winnerData, setWinnerData ] = useState<iWinner>();

    const filteredSelectTeamA = subscriptions.filter(sub => sub.team?.id !== selectedTeamB);
    const filteredSelectTeamB = subscriptions.filter(sub => sub.team?.id !== selectedTeamA);


    const winnerOptions = subscriptions.filter(sub => sub.team.id === selectedTeamA || sub.team.id === selectedTeamB);

    function updateSubscriptions () {
        if (readingTournament) {
            getTournamentSubscriptions(readingTournament.id);
        };
    };

    // Selecionar WinnerId automaticamente baseado na diferença do placar
    useEffect(() => {
        if(scoreTeamA !== undefined && scoreTeamB !== undefined && selectedTeamA !== "" && selectedTeamB !== ""){
            if(scoreTeamA > scoreTeamB ){ setWinnerId(selectedTeamA);};
            if(scoreTeamB > scoreTeamA) { setWinnerId(selectedTeamB);};
        };
    }, [subscriptions, scoreTeamA, scoreTeamB, selectedTeamA, selectedTeamB, winnerId]);

    // Definir qual time ganhou baseado no WinnerId
    useEffect(() => {
        let findWinner = subscriptions.find(sub => sub.team.id === winnerId);

        if (findWinner) {
            let winnerData = {
                ...findWinner.team,
                team: winnerId === selectedTeamA ? "teamA" : "teamB"
            };

            setWinnerData(winnerData);
        };

    }, [winnerId, subscriptions, selectedTeamA])

    useEffect(() => {
        console.log(subscriptions)
    }, [subscriptions]);
    

    // Função do evento de selecionar ganhador
    function handleSetWinner (e: React.ChangeEvent<HTMLSelectElement>) {
        setWinnerId(Number(e.target.value));
    };

    // Função do botão de salvar 
    function handleUpdateMatch () {
        let findNameA = subscriptions.find(sub => sub.team.id === selectedTeamA);
        let findNameB = subscriptions.find(sub => sub.team.id === selectedTeamB);

        if(subscriptions.length > 0 && selectedTeamA && selectedTeamB && (!scoreTeamA || !scoreTeamB) && findNameA && findNameB) {
            let data = {
                teamA: {
                    id: selectedTeamA,
                    name: findNameA.team.name
                },
                teamB: {
                    id: selectedTeamB,
                    name: findNameB.team.name
                }
            };
            updateMatchTeams(match.id, data);
            changeModalState(false);
        };

        if(subscriptions.length > 0 && selectedTeamA && selectedTeamB && scoreTeamA && scoreTeamB && findNameA && findNameB && winnerData) {
            let data = {
                winner: winnerData,
                teamA: {
                    id: selectedTeamA,
                    name: findNameA.team.name
                },
                teamB: {
                    id: selectedTeamB,
                    name: findNameB.team.name
                },
                scores: {
                    teamA: scoreTeamA,
                    teamB: scoreTeamB
                }
            };
            updateMatchScores(match.id, data);
            changeModalState(false);
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
                    <MdOutlineUpdate onClick={updateSubscriptions}/>
                </span>
            )
            :
            (
                <>
                <h3> Editar Partida {match.order} <MdOutlineUpdate onClick={updateSubscriptions}/> </h3>
                <div>
                    <label> Time A </label>
                    <div>
                        <select onChange={(e) => setSelectedTeamA(Number(e.target.value))}>
                            <option value=""> Selecione um time </option>
                            {filteredSelectTeamA.map(sub => <option key={`teamA_${sub.team.id}`} value={sub.team.id}> {sub.team.name} </option>)}
                        </select>
                        <GoArrowSmallDown />
                        <input type="number" onChange={(e) => setScoreTeamA(Number(e.target.value))}/>
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
                        <input type="number" onChange={(e) => setScoreTeamB(Number(e.target.value))}/>
                    </div>
                </div>
                {
                    ((((scoreTeamA === scoreTeamB && scoreTeamA !== undefined) && scoreTeamB !== undefined) && selectedTeamA !== "") && selectedTeamB !== "") 
                    &&
                    <div>
                        <label> Ganhador </label>
                        <div>
                            <select onChange={handleSetWinner}>
                                <option value=""> Selecione um time </option>
                                {winnerOptions.map(sub => <option key={`winner_${sub.team.id}`} value={sub.team.id}> {sub.team.name} </option>)}
                            </select>
                            <GoArrowSmallDown />
                        </div>
                    </div>
                }
                <ButtonSend onClick={handleUpdateMatch}> Salvar </ButtonSend>
            </> 
            )
            }
        </StyledAssignTeamsModal>
    );
};
import { ReactNode, useContext, useEffect, useState } from "react";
import { MatchesContext } from "../../../context/MatchesContext";
import { TournamentContext } from "../../../context/TournamentContext";
import { ButtonLeft, ButtonRight } from "../../../styles/Buttons/style";
import { iMatchData } from "../../../types/MatchesContextTypes";
import { ModalWrapper } from "../../ModalWrapper";
import { AssignResultsModal } from "./AssignResultsModal";
import { AssignTeamsModal } from "./AssignTeamsModal";
import { StyledTournamentKeys } from "./style";
import { TournamentKey } from "./TournamentKey";

export const TournamentKeys = () => {

    const { tournamentMatches } = useContext(MatchesContext);
    const { setDashboardPage } = useContext(TournamentContext);

    const quarterFinals = tournamentMatches.filter(match => match.order <=4 ).sort((matchA, matchB) => {
        if ( matchA.order < matchB.order ) { return -1 };
        if ( matchA.order > matchB.order ) { return  1 };
        return 0;
    });

    const semiFinals = tournamentMatches.filter(match => match.order>4 && match.order<7);
    const grandFinal = tournamentMatches.find(match => match.order === 7 );

    const [isModalOpen, changeModalState] = useState(false);
    const [currentModal, setCurrentModal] = useState(null as ReactNode);

    function handleClick (match: iMatchData) {
        if(match.order <= 4 && (!match.teamA || !match.teamB)) {
            setCurrentModal(<AssignTeamsModal match={match} changeModalState={changeModalState} />);
            changeModalState(true);
        };
        if(match.teamA && match.teamB && !match.scores) {
            setCurrentModal(<AssignResultsModal match={match} changeModalState={changeModalState} />);
            changeModalState(true);
        };
    };

    return (
        <StyledTournamentKeys>
            <h1> Chaves do Torneio </h1>
            <div>
                 <ButtonLeft onClick={() => setDashboardPage(2)}> {"<"} </ButtonLeft>
                <div>
                    
                    <div>
                        {
                            quarterFinals.map(match => <TournamentKey key={match.id} match={match}  onClickFunc={handleClick}/>)
                        }
                    </div>
                    <div>
                        {
                            semiFinals.map(match => <TournamentKey key={match.id} match={match} onClickFunc={handleClick}/>)
                        }
                    </div>
                    <div>
                        {
                            grandFinal && <TournamentKey key={grandFinal.id} match={grandFinal} onClickFunc={handleClick}/>
                        }
                    </div>
                        {
                            grandFinal?.winner &&
                            <div>
                                <h2> Vencedor: </h2>
                                <span> 
                                    <img src="./trofeu.svg" alt="troféu"/> 
                                    <h2> {grandFinal.winner.name} </h2>
                                </span>
                            </div>
                        }
                </div>
                <ButtonRight onClick={() => setDashboardPage(7)}> {">"} </ButtonRight>
            </div>
            {
                isModalOpen &&
                <ModalWrapper>
                    {currentModal}
                </ModalWrapper>
            }
        </StyledTournamentKeys>
    )
}
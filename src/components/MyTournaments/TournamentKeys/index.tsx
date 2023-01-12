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
    const [showingPhase, changePhase] = useState<"quarters" | "semi" | "final">("quarters");

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
        <StyledTournamentKeys showingPhase={showingPhase}>
            
            <h1> Chaves do Torneio </h1>
            <nav>
                <a href="#quarter-finals" onClick={() => changePhase("quarters")}> Quartas </a>
                <a href="#semi-finals"    onClick={() => changePhase("semi")}> Semi </a>
                <a href="#final"          onClick={() => changePhase("final")}> Final </a>
            </nav>
            <ButtonLeft onClick={() => setDashboardPage(2)}> {"<"} </ButtonLeft>
            <div>
                <div>
                    <div id="quarter-finals">
                        {
                            quarterFinals.map(match => <TournamentKey key={match.id} match={match}  onClickFunc={handleClick}/>)
                        }
                    </div>
                    <div id="semi-finals">
                        {
                            semiFinals.map(match => <TournamentKey key={match.id} match={match} onClickFunc={handleClick}/>)
                        }
                    </div>
                    <div id="final">
                        {
                            grandFinal?.winner &&
                            <aside className="champion">
                                <img src="./trofeu.svg" alt="troféu"/> 
                                <h2> {grandFinal.winner.name} </h2>
                            </aside>
                        }
                        {
                            grandFinal && <TournamentKey key={grandFinal.id} match={grandFinal} onClickFunc={handleClick}/>
                        }
                    </div>

                </div>
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
import { ReactNode, useContext, useEffect, useState } from "react";
import { MatchesContext } from "../../../context/MatchesContext";
import { iMatchData } from "../../../types/MatchesContextTypes";
import { ModalWrapper } from "../../ModalWrapper";
import { AssignTeamsModal } from "./AssignTeamsModal";
import { StyledTournamentKeys } from "./style";
import { TournamentKey } from "./TournamentKey";

export const TournamentKeys = () => {

    const { tournamentMatches } = useContext(MatchesContext);

    const quarterFinals = tournamentMatches.filter(match => match.order <=4 ).sort((matchA, matchB) => {
        if ( matchA.order < matchB.order ) { return -1 };
        if ( matchA.order > matchB.order ) { return  1 };
        return 0;
    });

    const semiFinals = tournamentMatches.filter(match => match.order>4 && match.order<7);
    const grandFinal = tournamentMatches.find(match => match.order === 7);

    const [isModalOpen, changeModalState] = useState(false);
    const [currentModal, setCurrentModal] = useState(null as ReactNode);

    function handleClick (match: iMatchData) {
        setCurrentModal(<AssignTeamsModal match={match}changeModalState={changeModalState}/>);
        changeModalState(true);
    };

    return (
        <StyledTournamentKeys>
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
import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import { StyledMyTournaments } from "./style";
import { TournamentCard } from "./TournamentCard";
import { TournamentList } from "./TournamentList";

export const MyTournaments = () => {

    const { readingTournament } = useContext(TournamentContext)
    return (
        <StyledMyTournaments>
            { !readingTournament ?
                <TournamentList />
                :
                <TournamentCard tournament={readingTournament} />
        
            }
        </StyledMyTournaments>
    );
};
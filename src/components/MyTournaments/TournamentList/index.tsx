import { StyledTournamentList } from "./style";
import { useContext } from "react";
import { TournamentContext } from "../../../context/TournamentContext";
import { TournamentListCard } from "./TournamentListCard";

export const TournamentList = () => {

    const { myTournaments } = useContext(TournamentContext);
    

    return (
        <StyledTournamentList>
            <h1> Meus torneios </h1>
            <span> 1/1 </span>
            <ul>
                { myTournaments.map(tournament => <TournamentListCard tournament={tournament} />)}
            </ul>
            <button> + </button>
        </StyledTournamentList>
    );
};
import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import { StyledTournamentsView } from "./style";
import { TournamentCard } from "./TournamentCard";

export const TournamentsView = () => {
    const { allTournaments } = useContext(TournamentContext);

    return (
        <StyledTournamentsView>
            <h1> Torneios </h1>
            <ul>
                {allTournaments.map(tournament => <TournamentCard key={tournament.id} tournament={tournament}/>)}
            </ul>
        </StyledTournamentsView>
    );
};
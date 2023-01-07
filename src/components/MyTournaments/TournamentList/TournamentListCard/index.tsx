import { iDataTournament } from "../../../../types/TournamentContextTypes";
import { StyledTournamentListCard } from "./style";
import { FaTrash } from "react-icons/fa"

interface iTournamentListCard {
    tournament: iDataTournament
}

export const TournamentListCard = ({ tournament }: iTournamentListCard) => {
    return (
        <StyledTournamentListCard>
            <div>
                <img src="trofeu.svg" alt="troféu" />
                <h2> {tournament.name} </h2>
            </div>
            <div>
                <span> {tournament.champion ? "Concluído" : "Em andamento" } </span>
                <FaTrash />
            </div>
        </StyledTournamentListCard>

    );
};
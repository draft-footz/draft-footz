import { StyledTournamentCard } from "./style"
import { IoMdSettings } from "react-icons/io"
import { iDataTournament } from "../../../types/TournamentContextTypes";
import { ButtonRight } from "../../../styles/Buttons/style";

interface iTournamentCardProps {
    tournament: iDataTournament;
}

export const TournamentCard = ({ tournament }: iTournamentCardProps) => {
    return (
        <StyledTournamentCard>
            <div>
                <img src="./trofeu.svg" alt="troféu"/>
                <h1> {tournament.name} </h1>
            </div>

            <div>
                <div>
                    <span> Administrador do torneio: <h2> {tournament.userId} </h2></span>
                    <IoMdSettings />
                </div>

                <div>
                    <span> Tipo de campeonato: <h2> Eliminatórias </h2></span>
                    <span> Total de times: <h2>  </h2></span>
                </div>
                <ButtonRight> {'>'} </ButtonRight>
            </div>

        </StyledTournamentCard>
    );
};
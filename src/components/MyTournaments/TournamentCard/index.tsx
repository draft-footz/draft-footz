import { StyledTournamentCard } from "./style"
import { IoMdSettings } from "react-icons/io"

export const TournamentCard = () => {
    return (
        <StyledTournamentCard>
            <div>
                <img src="./trofeu.svg" alt="troféu"/>
                <h1> Kenzie Cup </h1>
            </div>

            <div>
                <div>
                    <span> Administrador do torneio: <h2> Lorem Ipsum</h2></span>
                    <IoMdSettings />
                </div>

                <div>
                    <span> Tipo de campeonato: <h2> Eliminatórias </h2></span>
                    <span> Total de times: <h2> 7 </h2></span>
                </div>
            </div>
        </StyledTournamentCard>
    );
};
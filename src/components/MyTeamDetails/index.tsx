import { MainStyled, TeamDetails, TeamHeaderStyled } from "./style"
import teamlogo from "../../img/teamlogoholder.svg"
import editIcon from "../../img/edit_icon.svg"

export const MyTeamDetails = () => {
    return (
        <MainStyled>
            <TeamHeaderStyled>
                <figure>
                    <img src={teamlogo} alt="Team name" />
                </figure>
                <h2>Team Name</h2>
                <button>
                    <img src={editIcon} alt="Editar" />
                </button>
            </TeamHeaderStyled>
            <TeamDetails>
                <h3>Capitão do time: <span>Name</span></h3>
                <div>
                    <h4>Gols em campeonatos: <span>-</span></h4>
                    <h4>Torneios em andamento: <span>X</span></h4>
                    <h4>Quantidade de jogadores: <span>array.length</span></h4>
                    <h4>Torneios finalizados: <span>X</span></h4>
                </div>
                <div>
                    <h4>Títulos:</h4>
                    <span>Copa Brahma, Liga Hillston, Los Grandes, La Liga</span>
                </div>
            </TeamDetails>
        </MainStyled>
    )
}
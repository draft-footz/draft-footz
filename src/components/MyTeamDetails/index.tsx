import { MainStyled, TeamDetails, TeamHeaderStyled } from "./style";
import teamlogo from "../../img/teamlogoholder.svg";
import editIcon from "../../img/edit_icon.svg";
import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import { useEffect } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../context/UsersContext";
import { TeamContext } from "../../context/TeamContext";

export const MyTeamDetails = () => {
  const { setDashboardPage } = useContext(TournamentContext);
  const { user } = useContext(UserContext);
  const { teamData, setTeamData } = useContext(TeamContext);

  const teamId = user.teamId;

  useEffect(() => {
    async function getMyTeam() {
      try {
        const requisition = await api.get(`teams/${teamId}`);
        setTeamData(requisition.data);
      } catch (err) {
        console.log(err);
      }
    }
    getMyTeam();
  }, []);

  return (
    <MainStyled>
      <TeamHeaderStyled>
        <figure>
          <img src={teamlogo} alt="Team name" />
        </figure>
        <h2>{teamData.name}</h2>
        <button>
          <img
            src={editIcon}
            alt="Editar"
            onClick={() => setDashboardPage(19)}
          />
        </button>
      </TeamHeaderStyled>
      <TeamDetails>
        <h3>
          Capitão do time: <span>Name</span>
        </h3>
        <div>
          <h4>
            Gols em campeonatos: <span>-</span>
          </h4>
          <h4>
            Torneios em andamento: <span>X</span>
          </h4>
          <h4>
            Quantidade de jogadores: <span>array.length</span>
          </h4>
          <h4>
            Torneios finalizados: <span>X</span>
          </h4>
        </div>
        <div>
          <h4>Títulos:</h4>
          <span>Copa Brahma, Liga Hillston, Los Grandes, La Liga</span>
        </div>
      </TeamDetails>
    </MainStyled>
  );
};

import { MainStyled, TeamDetails, TeamHeaderStyled } from "./style";
import editIcon from "../../img/edit_icon.svg";
import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import { useEffect } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../context/UsersContext";
import { TeamContext } from "../../context/TeamContext";
import { ButtonRight } from "../../styles/Buttons/style";
import emblem from "../../img/standard_emblem.jpg";
import standard_team_shield from "../../img/standard_team_shield.png";

export const MyTeamDetails = () => {
  const { setDashboardPage, allTournaments} = useContext(TournamentContext);
  const { user } = useContext(UserContext);
  const { teamData, setTeamData, getPlayersFromATeam, playersData } =
    useContext(TeamContext);

  const teamId = user.teamId;

  useEffect(() => {
    async function getMyTeam() {
      try {
        const requisition = await api.get(`teams/${teamId}`);
        setTeamData(requisition.data);
      } catch (err) {
        console.error(err);
      }
    }

    getPlayersFromATeam();
    getMyTeam();
  }, []);

  const tournamentsWin = allTournaments.filter(tournament => tournament.champion?.id === user.teamId).length

  return (
    <MainStyled>
      <TeamHeaderStyled>
        <figure>
          {teamData.logo !== "" ? (
            <img src={teamData.logo} alt={teamData.name} />
          ) : (
            <img src={standard_team_shield} alt={teamData.name}></img>
          )}
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
        <ButtonRight onClick={() => setDashboardPage(16)}>{">"}</ButtonRight>
        <h3>
          Dono do time: <span>{user.name}</span>
        </h3>
        <div>
          <h4>
            Gols em campeonatos: <span>-</span>
          </h4>
          <h4>
            Torneios em andamento: <span>-</span>
          </h4>
          <h4>
            Quantidade de jogadores: <span>{playersData.length}</span>
          </h4>
          <h4>
            Torneios finalizados: <span>-</span>
          </h4>
        </div>
        <div>
          <h4> Torneios Vencidos: </h4>
          {tournamentsWin}
        </div>
      </TeamDetails>
    </MainStyled>
  );
};

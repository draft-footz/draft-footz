import { MainStyled, TeamDetails, TeamHeaderStyled } from "./style";
import editIcon from "../../img/edit_icon.svg";
import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import { useEffect } from "react";
import { api } from "../../services/api";
import { UserContext } from "../../context/UsersContext";
import { TeamContext } from "../../context/TeamContext";
import { ButtonRight } from "../../styles/Buttons/style";
import standard_team_shield from "../../img/standard_team_shield.png";
import { SubscriptionsContext } from "../../context/SubscriptionsContext";

export const MyTeamDetails = () => {
  const { setDashboardPage, allTournaments} = useContext(TournamentContext);
  const { user } = useContext(UserContext);
  const { teamData, setTeamData, getPlayersFromATeam, playersData } =
    useContext(TeamContext);
  const { allSubscriptions } = useContext(SubscriptionsContext)

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
  const tournamentsCurrent = allSubscriptions.filter(sub => sub.team.id === teamData.id)

  return (
    <MainStyled>
              <ButtonRight onClick={() => setDashboardPage(16)}>{">"}</ButtonRight>
      <TeamHeaderStyled>
        <figure>
          {teamData.logo !== "" ? (
            <img src={teamData.logo} alt={teamData.name} />
          ) : (
            <img src={standard_team_shield} alt={teamData.name}></img>
          )}
        </figure>
        <h2>{teamData.name}</h2>
      </TeamHeaderStyled>
      <TeamDetails>
        <h3>
          Dono do time: <span>{user.name}</span>
        </h3>
        <div>
          <h4>
            Torneios Disputados: <span> {tournamentsCurrent.length}</span>
          </h4>
          <h4>
            Quantidade de jogadores: <span>{playersData.length}</span>
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

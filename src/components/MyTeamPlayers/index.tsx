import {
  ButtonLeft,
  ButtonRight,
  ButtonSend,
} from "../../styles/Buttons/style";
import { MyTeamPlayersStyled, PlayerListStyled } from "./style";
import trashIcon from "../../img/trash.svg";
import { useContext, useEffect } from "react";
import { TeamContext } from "../../context/TeamContext";
import { TournamentContext } from "../../context/TournamentContext";
import gk from "../../img/team_positions/goleiro.svg";
import zag from "../../img/team_positions/zagueiro.svg";
import lat from "../../img/team_positions/lateral.svg";
import meia from "../../img/team_positions/meia.svg";
import ata from "../../img/team_positions/atacante.svg";
import { FaTrash } from "react-icons/fa"

export const MyTeamPlayers = () => {
  const { deletePlayer, getPlayersFromATeam, playersData } =
    useContext(TeamContext);
  const { setDashboardPage } = useContext(TournamentContext);

  useEffect(() => {
    getPlayersFromATeam();
  }, []);

  const handleClick = async (playerId: number) => {
    await deletePlayer(playerId);
    await getPlayersFromATeam();
  };

  return (
    <MyTeamPlayersStyled>
      <ButtonLeft onClick={() => setDashboardPage(15)}>{"<"}</ButtonLeft>
      <PlayerListStyled>
        <h2>{playersData.length}/7 Jogadores</h2>
        <ul>
          {playersData.map((player) => {
            return (
              <li key={player.id}>
                <div>
                  {player.position === "Goleiro" && (
                    <img src={gk} alt={player.position} />
                  )}
                  {player.position === "Zagueiro" && (
                    <img src={zag} alt={player.position} />
                  )}
                  {player.position === "Lateral Direito" && (
                    <img src={lat} alt={player.position} />
                  )}
                  {player.position === "Lateral Esquerdo" && (
                    <img src={lat} alt={player.position} />
                  )}
                  {player.position === "Meia Esquerda" && (
                    <img src={meia} alt={player.position} />
                  )}
                  {player.position === "Meia Direita" && (
                    <img src={meia} alt={player.position} />
                  )}
                  {player.position === "Atacante" && (
                    <img src={ata} alt={player.position} />
                  )}
                  <h5>{player.name}</h5>
                </div>
                <div>
                  <h3>{player.position}</h3>
                  <h4>{player.number}</h4>
                  <FaTrash onClick={() => handleClick(player.id)}/>
                </div>
              </li>
            );
          })}
        </ul>
      </PlayerListStyled>
      <ButtonSend onClick={() => setDashboardPage(20)}>
        Adicionar jogador
      </ButtonSend>
    </MyTeamPlayersStyled>
  );
};

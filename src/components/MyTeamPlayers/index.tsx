import {
  ButtonLeft,
  ButtonRight,
  ButtonSend,
} from "../../styles/Buttons/style";
import { StyledFormInput } from "../../styles/Inputs/style";
import {
  MyTeamPlayersStyled,
  PlayerListStyled,
  SearchPlayerStyled,
} from "./style";
import trashIcon from "../../img/trash.svg";
import { useContext, useEffect, useState } from "react";
import { TeamContext } from "../../context/TeamContext";
import { TournamentContext } from "../../context/TournamentContext";
import { api } from "../../services/api";
import gk from "../../img/team_positions/goleiro.svg";
import zag from "../../img/team_positions/zagueiro.svg";
import lat from "../../img/team_positions/lateral.svg";
import meia from "../../img/team_positions/meia.svg";
import ata from "../../img/team_positions/atacante.svg";

interface iPlayer {
  name: string;
  position: string;
  number: string;
  userId: number;
  teamId: number;
  id: number;
}

export const MyTeamPlayers = () => {
  const { setPlayerId, deletePlayer, getPlayersFromATeam, teamId } =
    useContext(TeamContext);
  const { setDashboardPage } = useContext(TournamentContext);
  const [players, setPlayers] = useState<iPlayer[]>([]);

  useEffect(() => {
    async function getPlayers() {
      try {
        const request = await api.get(`players?&teamId=${teamId}`);
        setPlayers(request.data);
      } catch (err) {
        console.error(err);
      }
    }
    getPlayers();
  });

  const handleClick = (playerId: number) => {
    setPlayerId(playerId);
    deletePlayer();
  };

  return (
    <MyTeamPlayersStyled>
      <SearchPlayerStyled>
        <StyledFormInput placeholder="Nome do jogador"></StyledFormInput>
        <ButtonSend>Buscar jogador</ButtonSend>
      </SearchPlayerStyled>
      <PlayerListStyled>
        <ButtonLeft onClick={() => setDashboardPage(15)}>{"<"}</ButtonLeft>
        <ButtonRight onClick={() => setDashboardPage(17)}>{">"}</ButtonRight>
        <h2>{players.length}/7 Jogadores</h2>
        <ul>
          {players.map((player) => {
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
                  {player.position === "Meia" && (
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
                  <img
                    src={trashIcon}
                    alt="Apagar jogador"
                    onClick={() => handleClick(player.id)}
                  />
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

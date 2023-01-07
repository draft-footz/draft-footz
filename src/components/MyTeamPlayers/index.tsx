import { ButtonSend } from "../../styles/Buttons/style";
import { StyledFormInput } from "../../styles/Inputs/style";
import {
  MyTeamPlayersStyled,
  PlayerListStyled,
  SearchPlayerStyled,
} from "./style";
import gk from "../../img/GK_icon.svg";
import trashIcon from "../../img/trash.svg";
import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";

export const MyTeamPlayers = () => {
  const { setPlayerId, deletePlayer } = useContext(TeamContext);

  const handleClick = () => {
    //  setPlayerId();
    //  deletePlayer();
  };

  return (
    <MyTeamPlayersStyled>
      <SearchPlayerStyled>
        <StyledFormInput placeholder="Nome do jogador"></StyledFormInput>
        <ButtonSend>Buscar jogador</ButtonSend>
      </SearchPlayerStyled>
      <PlayerListStyled>
        <h2>X/7 Jogadores</h2>
        <ul>
          <li>
            <div>
              <img src={gk} alt="Goleiro" />
              <h5>Name</h5>
            </div>
            <div>
              <h3>Goleiro</h3>
              <h4>1</h4>
              <img
                src={trashIcon}
                alt="Apagar jogador"
                onClick={() => handleClick}
              />
            </div>
          </li>
          <li>
            <div>
              <img src={gk} alt="Goleiro" />
              <h5>Name</h5>
            </div>
            <div>
              <h3>Goleiro</h3>
              <h4>1</h4>
              <img
                src={trashIcon}
                alt="Apagar jogador"
                onClick={() => handleClick}
              />
            </div>
          </li>
          <li>
            <div>
              <img src={gk} alt="Goleiro" />
              <h5>Name</h5>
            </div>
            <div>
              <h3>Goleiro</h3>
              <h4>1</h4>
              <img
                src={trashIcon}
                alt="Apagar jogador"
                onClick={() => handleClick}
              />
            </div>
          </li>
          <li>
            <div>
              <img src={gk} alt="Goleiro" />
              <h5>Name</h5>
            </div>
            <div>
              <h3>Goleiro</h3>
              <h4>1</h4>
              <img
                src={trashIcon}
                alt="Apagar jogador"
                onClick={() => handleClick}
              />
            </div>
          </li>
          <li>
            <div>
              <img src={gk} alt="Goleiro" />
              <h5>Name</h5>
            </div>
            <div>
              <h3>Goleiro</h3>
              <h4>1</h4>
              <img
                src={trashIcon}
                alt="Apagar jogador"
                onClick={() => handleClick}
              />
            </div>
          </li>
          <li>
            <div>
              <img src={gk} alt="Goleiro" />
              <h5>Name</h5>
            </div>
            <div>
              <h3>Goleiro</h3>
              <h4>1</h4>
              <img
                src={trashIcon}
                alt="Apagar jogador"
                onClick={() => handleClick}
              />
            </div>
          </li>
          <li>
            <div>
              <img src={gk} alt="Goleiro" />
              <h5>Name</h5>
            </div>
            <div>
              <h3>Goleiro</h3>
              <h4>1</h4>
              <img
                src={trashIcon}
                alt="Apagar jogador"
                onClick={() => handleClick}
              />
            </div>
          </li>
        </ul>
      </PlayerListStyled>
      <ButtonSend>Adicionar jogador</ButtonSend>
    </MyTeamPlayersStyled>
  );
};

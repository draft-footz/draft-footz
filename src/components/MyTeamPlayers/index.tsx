import { ButtonSend } from "../../styles/Buttons/style"
import { StyledFormInput } from "../../styles/Inputs/style"
import { MyTeamPlayersStyled, PlayerListStyled, SearchPlayerStyled } from "./style"
import gk from "../../img/GK_icon.svg"
import trashIcon from "../../img/trash.svg"

export const MyTeamPlayers = () => {
    return (
        <MyTeamPlayersStyled>
            <SearchPlayerStyled>
                <StyledFormInput
                placeholder="Nome do jogador"></StyledFormInput>
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
                            <img src={trashIcon} alt="Apagar jogador" />
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
                            <img src={trashIcon} alt="Apagar jogador" />
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
                            <img src={trashIcon} alt="Apagar jogador" />
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
                            <img src={trashIcon} alt="Apagar jogador" />
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
                            <img src={trashIcon} alt="Apagar jogador" />
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
                            <img src={trashIcon} alt="Apagar jogador" />
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
                            <img src={trashIcon} alt="Apagar jogador" />
                        </div>
                    </li>
                </ul>
            </PlayerListStyled>
            <ButtonSend>Adicionar jogador</ButtonSend>
        </MyTeamPlayersStyled>
    )
}
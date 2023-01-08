import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { UserContext } from "../../context/UsersContext";
import { ButtonSend } from "../../styles/Buttons/style";
import { NoTeamDiv } from "./style";

export const MyTeamBlank = () => {
  const { directToCreateTeamPage } = useContext(TeamContext);
  const { user } = useContext(UserContext);

  //Fazer a lógica de renderização usando a chave "myTeam" que estará dentro do objeto user

  return (
    <NoTeamDiv>
      <h2>Você ainda não possui nenhum time! </h2>
      <ButtonSend onClick={() => directToCreateTeamPage}>Criar time</ButtonSend>
    </NoTeamDiv>
  );
};

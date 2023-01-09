import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { UserContext } from "../../context/UsersContext";
import { ButtonSend } from "../../styles/Buttons/style";
import { NoTeamDiv } from "./style";

export const MyTeamBlank = () => {
  const { directToCreateTeamPage, teamId } = useContext(TeamContext);

  //Fazer a lógica de renderização usando a chave "myTeam" que estará dentro do objeto user. Se não tiver time, renderizar o return abaixo. Se tiver time, renderizar o componente MyTeamDetails

  return (
    <NoTeamDiv>
      <h2>Você ainda não possui nenhum time! </h2>
      <ButtonSend onClick={() => directToCreateTeamPage}>Criar time</ButtonSend>
    </NoTeamDiv>
  );
};

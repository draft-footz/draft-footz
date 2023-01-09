import { ButtonSend } from "../../styles/Buttons/style";
import { MainNoTeam } from "./style";

export const NoTeam = () => {
  return (
    <>
      <MainNoTeam>
        <h1>Você ainda não possui nenhum time :/</h1>
        <ButtonSend>Criar torneio</ButtonSend>
      </MainNoTeam>
    </>
  );
};

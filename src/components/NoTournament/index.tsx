import { ButtonSend } from "../../styles/Buttons/style";
import { MainNoTournament } from "./style";

export const NoTournament = () => {
  return (
    <>
      <MainNoTournament>
        <h1>Você ainda não possui nenhum torneio :/</h1>
        <ButtonSend>Criar torneio</ButtonSend>
      </MainNoTournament>
    </>
  );
};

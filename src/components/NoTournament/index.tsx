import { useState } from "react";
import { ButtonSend } from "../../styles/Buttons/style";
import { TournamentCreation } from "../TournamentCreation";
import { MainNoTournament } from "./style";

export const NoTournament = () => {
  const [creatingTournament, setCreatingTournament] = useState(false);
  return (
    <>
      {creatingTournament ? (
        <TournamentCreation />
      ) : (
        <MainNoTournament>
          <h2>Você ainda não possui nenhum torneio :/</h2>
          <ButtonSend onClick={() => setCreatingTournament(true)}>
            Criar torneio
          </ButtonSend>
        </MainNoTournament>
      )}
    </>
  );
};

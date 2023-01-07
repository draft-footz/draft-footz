import { ButtonSend } from "../../styles/Buttons/style";
import {
  DivButtonCreateTournament,
  DivGlobalTournament,
  DivInputDisabled,
  DivInputInfoTournament,
  DivInputTitle,
  FormTournamentCreation,
  InputTournamentCreation,
  InputTournamentType,
} from "./style";

export const TournamentCreation = () => {
  return (
    <FormTournamentCreation>
      <DivGlobalTournament>
        <DivInputTitle>
          <label htmlFor="name">Nome do torneio</label>
          <InputTournamentCreation type="text" placeholder="Título" />
        </DivInputTitle>
        <DivInputDisabled>
          <DivInputInfoTournament>
            <label htmlFor="step">Fases do campeonato</label>
            <InputTournamentType
              className="input-tournament-type"
              type="text"
              disabled
              placeholder="Eliminatórias"
            />
          </DivInputInfoTournament>
          <DivInputInfoTournament>
            <label htmlFor="teams">Número de times</label>
            <InputTournamentType type="text" disabled placeholder="8" />
          </DivInputInfoTournament>
        </DivInputDisabled>
        <DivButtonCreateTournament>
          <ButtonSend>Criar torneio</ButtonSend>
        </DivButtonCreateTournament>
      </DivGlobalTournament>
    </FormTournamentCreation>
  );
};

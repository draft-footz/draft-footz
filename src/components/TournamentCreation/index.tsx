import { ButtonSend } from "../../styles/Buttons/style";
import { StyledFormInput } from "../../styles/Inputs/style";
import { FormTournamentCreation } from "./style";

export const TournamentCreation = () => {
  return (
    <FormTournamentCreation>
      <div className="div-global-tournament">
        <div className="div-input-title">
          <label htmlFor="name">Nome do torneio</label>
          <StyledFormInput
            className="input-tournament-creation"
            type="text"
            placeholder="Título"
          />
        </div>
        <div className="div-input-disbled">
          <div className="div-inputs-info-tournament">
            <label htmlFor="step">Fases do campeonato</label>
            <StyledFormInput
              className="input-tournament-type"
              type="text"
              disabled
              placeholder="Eliminatórias"
            />
          </div>
          <div className="div-inputs-info-tournament">
            <label htmlFor="teams">Número de times</label>
            <StyledFormInput
              className="input-teams-number"
              type="text"
              disabled
              placeholder="8"
            />
          </div>
        </div>
        <div className="div-button-create-tournament">
          <ButtonSend className="button-create-tournament">
            Criar torneio
          </ButtonSend>
        </div>
      </div>
    </FormTournamentCreation>
  );
};

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

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { tournamentSchema } from "./schema";
import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import { iDataCreateTournament } from "../../types/TournamentContextTypes";

export const TournamentCreation = () => {
  const { createNewTournament, disableButton } = useContext(TournamentContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataCreateTournament>({
    resolver: yupResolver(tournamentSchema),
  });

  function onSubmit(data: iDataCreateTournament) {
    createNewTournament(data);
  }

  return (
    <FormTournamentCreation onSubmit={handleSubmit(onSubmit)} noValidate>
      <DivGlobalTournament>
       
          <DivInputTitle>
            <label htmlFor="name"> Nome do torneio </label>
            <InputTournamentCreation
              type="text"
              placeholder="Título"
              {...register("name")}
            />
            {errors.name && <span> errors.name.message </span>}
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
          <ButtonSend disabled={disableButton}>Criar torneio</ButtonSend>
        </DivButtonCreateTournament>
      </DivGlobalTournament>
    </FormTournamentCreation>
  );
};

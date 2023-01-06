import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iDataNewTeam, iUpdateTeam } from "../../types/TeamContextTypes";
import { teamFormSchema } from "../CreateTeam/schema";
import { EditTeamStyled } from "./style";
import { StyledFormInput } from "../../styles/Inputs/style";
import { ButtonSend } from "../../styles/Buttons/style";

export const EditTeam = () => {
  const { updateTeam } = useContext(TeamContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataNewTeam>({
    mode: "onChange",
    resolver: yupResolver(teamFormSchema),
  });

  return (
    <EditTeamStyled>
      <form
      onSubmit={handleSubmit(updateTeam)}
      noValidate>
        <div>
          <label htmlFor="name">Nome do time</label>
          <StyledFormInput
          {...register("name")}
          placeholder="Nome"
          id="name"/>
        </div>
        <div>
          <label htmlFor="logo">Logo do time</label>
          <StyledFormInput
          {...register("logo")}
          placeholder="URL da logo"
          id="logo"/>
        </div>
        <ButtonSend
        type="submit">Salvar alterações</ButtonSend>
      </form>
    </EditTeamStyled>
  );
};

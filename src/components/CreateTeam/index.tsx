import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { teamFormSchema } from "./schema";
import { iDataNewTeam } from "../../types/TeamContextTypes";
import { CreateTeamStyled } from "./style";
import { StyledFormInput } from "../../styles/Inputs/style"
import { ButtonSend } from "../../styles/Buttons/style";

export const CreateTeam = () => {
  const { createNewTeam } = useContext(TeamContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataNewTeam>({
    mode: "onChange",
    resolver: yupResolver(teamFormSchema),
  });

  return (
    <CreateTeamStyled>
      <form
      onSubmit={handleSubmit(createNewTeam)}
      noValidate>
        <div>
          <label htmlFor="name">Nome do time</label>
          <StyledFormInput
          {...register("name")}
          placeholder="Nome"
          id="name"/>
          {errors.name?.message && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="logo">Logo do time</label>
          <StyledFormInput
          {...register("logo")}
          placeholder="URL da logo"
          id="logo"/>
          {errors.logo?.message && <span>{errors.logo.message}</span>}
        </div>
        <ButtonSend
        type="submit">Criar time</ButtonSend>
      </form>
    </CreateTeamStyled>
  );
};

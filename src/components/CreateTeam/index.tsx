import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createTeamFormSchema } from "./schema";
import { iDataNewTeam } from "../../types/TeamContextTypes";
import { CreateTeamStyled } from "./style";
import { StyledFormInput } from "../../styles/Inputs/style";
import { ButtonSend } from "../../styles/Buttons/style";
import { UserContext } from "../../context/UsersContext";
import { Loading } from "../../pages/Register/style";


export const CreateTeam = () => {
  const { createNewTeam } = useContext(TeamContext);
  const { loading } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataNewTeam>({
    mode: "onChange",
    resolver: yupResolver(createTeamFormSchema),
  });

  return (
    <CreateTeamStyled>
      <form onSubmit={handleSubmit(createNewTeam)} noValidate>
        <div>
          <label htmlFor="name">Nome do time</label>
          <StyledFormInput {...register("name")} placeholder="Nome" id="name" />
          {errors.name?.message && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="logo">Logo do time</label>
          <StyledFormInput
            {...register("logo")}
            placeholder="URL do logo"
            id="logo"
          />
          {errors.logo?.message && <span>{errors.logo.message}</span>}
        </div>
        <ButtonSend type="submit">{loading ? <Loading src="/spinner.png" /> : "Criar time"}</ButtonSend>
      </form>
    </CreateTeamStyled>
  );
};

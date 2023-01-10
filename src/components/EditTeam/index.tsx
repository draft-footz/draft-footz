import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iDataNewTeam } from "../../types/TeamContextTypes";
import { EditTeamStyled } from "./style";
import { StyledFormInput } from "../../styles/Inputs/style";
import { ButtonSend } from "../../styles/Buttons/style";
import { editTeamFormSchema } from "./schema";

export const EditTeam = () => {
  const { updateTeam } = useContext(TeamContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataNewTeam>({
    mode: "onChange",
    resolver: yupResolver(editTeamFormSchema),
  });

  const handleUpdate = (data: iDataNewTeam) => {
    if(data.logo === ""){
      data = {
        name: data.name,
      }
    } else if (data.name === ""){
      data = {
        logo: data.logo
      }
    }
    updateTeam(data)
  }

  return (
    <EditTeamStyled>
      <form onSubmit={handleSubmit(handleUpdate)} noValidate>
        <div>
          <label htmlFor="name">Nome do time</label>
          <StyledFormInput {...register("name")} placeholder="Nome" id="name" />
          {errors.name?.message && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="logo">Logo do time</label>
          <StyledFormInput
            {...register("logo")}
            placeholder="URL da logo"
            id="logo"
          />
          {errors.logo?.message && <span>{errors.logo.message}</span>}
        </div>
        <ButtonSend type="submit">Salvar alterações</ButtonSend>
      </form>
    </EditTeamStyled>
  );
};

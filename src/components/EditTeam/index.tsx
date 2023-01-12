import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iDataNewTeam } from "../../types/TeamContextTypes";
import { EditTeamStyled } from "./style";
import { StyledFormInput } from "../../styles/Inputs/style";
import { ButtonSend, ButtonSent } from "../../styles/Buttons/style";
import { editTeamFormSchema } from "./schema";
import { TournamentContext } from "../../context/TournamentContext";
import { Loading } from "../../pages/Register/style";
import { UserContext } from "../../context/UsersContext";

export const EditTeam = () => {
  const { updateTeam } = useContext(TeamContext);
  const { setDashboardPage } = useContext(TournamentContext);
  const { loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataNewTeam>({
    mode: "onChange",
    resolver: yupResolver(editTeamFormSchema),
  });

  const handleUpdate = (data: iDataNewTeam) => {
    if (data.logo === "") {
      data = {
        name: data.name,
      };
    } else if (data.name === "") {
      data = {
        logo: data.logo,
      };
    }
    updateTeam(data);
  };

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
        <div>
          <ButtonSend onClick={() => setDashboardPage(15)}>Voltar</ButtonSend>
          <ButtonSend type="submit">
            {loading ? <Loading src="/spinner.png" /> : "Salvar alterações"}
          </ButtonSend>
        </div>
      </form>
    </EditTeamStyled>
  );
};

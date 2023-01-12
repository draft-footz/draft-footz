import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { playerFormSchema } from "./schema";
import { iDataNewPlayer } from "../../types/TeamContextTypes";
import { StyledFormInput } from "../../styles/Inputs/style";
import { ButtonSend } from "../../styles/Buttons/style";
import { CreatePlayerStyled } from "./style";
import { TournamentContext } from "../../context/TournamentContext";
import { UserContext } from "../../context/UsersContext";
import { Loading } from "../../pages/Register/style";

export const CreatePlayer = () => {
  const { createNewPlayer } = useContext(TeamContext);
  const { setDashboardPage } = useContext(TournamentContext);
  const { loading } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataNewPlayer>({
    mode: "onChange",
    resolver: yupResolver(playerFormSchema),
  });

  return (
    <CreatePlayerStyled>
      <form onSubmit={handleSubmit(createNewPlayer)} noValidate>
        <fieldset>
          <label htmlFor="name">Nome do jogador</label>
          <StyledFormInput {...register("name")} placeholder="Nome" id="name" />
          {errors.name?.message && <span>{errors.name.message}</span>}
        </fieldset>
        <div>
          <fieldset>
            <label htmlFor="position">Posição do jogador</label>
            <select {...register("position")} name="position" id="position">
              <option value="Goleiro">Goleiro</option>
              <option value="Zagueiro">Zagueiro</option>
              <option value="Lateral Esquerdo">Lateral Esquerdo</option>
              <option value="Lateral Direito">Lateral Direito</option>
              <option value="Meia Esquerda">Meia Esquerda</option>
              <option value="Meia Direita">Meia Direita</option>
              <option value="Atacante">Atacante</option>
            </select>
            {errors.position?.message && <span>{errors.position.message}</span>}
          </fieldset>
          <fieldset>
            <label htmlFor="number">Nº da camisa</label>
            <StyledFormInput
              {...register("number")}
              placeholder="Nº"
              id="number"
            />
            {errors.number?.message && <span>{errors.number.message}</span>}
          </fieldset>
        </div>
        <div>
          <ButtonSend onClick={() => setDashboardPage(16)}>Voltar</ButtonSend>
          <ButtonSend type="submit">{loading ? <Loading src="/spinner.png" /> : "Cadastrar jogador"}</ButtonSend>
        </div>
      </form>
    </CreatePlayerStyled>
  );
};

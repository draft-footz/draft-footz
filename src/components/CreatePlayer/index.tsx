import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { playerFormSchema } from "./schema";
import { iDataNewPlayer } from "../../types/TeamContextTypes";

export const CreatePlayer = () => {
  const { createNewPlayer } = useContext(TeamContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataNewPlayer>({
    mode: "onChange",
    resolver: yupResolver(playerFormSchema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(createNewPlayer)}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Nome do jogador"
          {...register("name")}
        />
        {errors.name?.message && <p>{errors.name.message}</p>}

        <label htmlFor="position">Posição</label>
        <select {...register("position")}>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>

        <label htmlFor="number">Número da camisa</label>
        <input type="number" placeholder="0" {...register("number")} />
        {errors.number?.message && <p>{errors.number.message}</p>}

        <label htmlFor="number">Idade</label>
        <input type="number" placeholder="0" {...register("age")} />
        {errors.age?.message && <p>{errors.age.message}</p>}

        <button type="submit">Cadastrar jogador</button>
      </form>
    </>
  );
};

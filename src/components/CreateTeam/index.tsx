import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createTeamFormSchema } from "./schema";
import { iDataNewTeam } from "../../types/TeamContextTypes";

export const CreateTeam = () => {
  const { createNewTeam } = useContext(TeamContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iDataNewTeam>({
    mode: "onChange",
    resolver: yupResolver(createTeamFormSchema),
  });
  //logo é opcional, porém precisa definir um default value.

  return (
    <>
      <form onSubmit={handleSubmit(createNewTeam)}>
        <label htmlFor="name">Nome do time</label>
        <input type="text" placeholder="Nome do time" {...register("name")} />
        {errors.name?.message && <p>{errors.name.message}</p>}

        <label htmlFor="logo">Logo do time</label>
        <input type="text" placeholder="Url do logo" {...register("logo")} />
        {errors.logo?.message && <p>{errors.logo.message}</p>}

        <button type="submit">Criar Time</button>
      </form>
    </>
  );
};

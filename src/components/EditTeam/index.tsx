import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iDataNewTeam } from "../../types/TeamContextTypes";
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

  return (
    <>
      <form onSubmit={handleSubmit(updateTeam)}>
        <label htmlFor="name">Nome do time</label>
        <input type="text" placeholder="Nome do time" {...register("name")} />
        {errors.name?.message && <p>{errors.name.message}</p>}

        <label htmlFor="logo">Logo do time</label>
        <input type="text" placeholder="Url do logo" {...register("logo")} />
        {errors.logo?.message && <p>{errors.logo.message}</p>}

        <button type="submit">Salvar alterações</button>
      </form>
    </>
  );
};

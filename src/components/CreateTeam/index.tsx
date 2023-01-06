import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { teamFormSchema } from "./schema";
import { iDataNewTeam } from "../../types/TeamContextTypes";

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
    <>
      <form>
        <input />
        <input />
        <button>Criar Time</button>
      </form>
    </>
  );
};

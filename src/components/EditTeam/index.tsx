import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { iDataNewTeam } from "../../types/TeamContextTypes";
import { teamFormSchema } from "../CreateTeam/schema";

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
    <>
      <form>
        <input />
        <input />
        <button>Criar Time</button>
      </form>
    </>
  );
};

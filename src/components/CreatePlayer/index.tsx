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
      <form>
        <input />
        <select />
        <input />
        <button>Cadastrar Jogador</button>
      </form>
    </>
  );
};

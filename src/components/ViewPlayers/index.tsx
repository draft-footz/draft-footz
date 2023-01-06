import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";

export const ViewPlayers = () => {
  const { getPlayersFromATeam } = useContext(TeamContext);

  return <div>index</div>;
};

import { useContext } from "react";
import { TeamContext } from "../../context/TeamContext";
import { TournamentContext } from "../../context/TournamentContext";
import { ButtonSend } from "../../styles/Buttons/style";
import { MyTeamDetails } from "../MyTeamDetails";
import { NoTeamDiv } from "./style";

export const MyTeamBlank = () => {
  const { teamId } = useContext(TeamContext);
  const { setDashboardPage } = useContext(TournamentContext);

  if (!teamId || teamId === 0) {
    return (
      <NoTeamDiv>
        <h2>Você ainda não possui nenhum time! </h2>
        <ButtonSend onClick={() => setDashboardPage(18)}>Criar time</ButtonSend>
      </NoTeamDiv>
    );
  }
  return <MyTeamDetails />;
};

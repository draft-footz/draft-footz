import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import {
  DivName,
  DivNumber,
  ImgTeam,
  MainTeamsTournament,
  Number,
  SectionTeams,
  TeamsNumber,
  Title,
  UlTeams,
} from "./style";

export const TeamTournament = () => {
  const { setDashboardPage } = useContext(TournamentContext);
  return (
    <>
      <MainTeamsTournament>
        <Title>Times do torneio</Title>
        <SectionTeams>
          <button onClick={() => setDashboardPage(6)} className="button-left">
            {"<"}
          </button>
          <TeamsNumber>8/8 Times</TeamsNumber>
          <UlTeams>
            <li>
              <DivName>
                <ImgTeam src="favicon.svg" alt="" />
                <p>Lorem Ipsum</p>
              </DivName>
              <DivNumber>
                <p>Qntd. Jogadores</p>
                <Number>8</Number>
              </DivNumber>
              <button>
                <img src="/trash.png" alt="" />
              </button>
            </li>
            <li>
              <DivName>
                <ImgTeam src="favicon.svg" alt="" />
                <p>Lorem Ipsum</p>
              </DivName>
              <DivNumber>
                <p>Qntd. Jogadores</p>
                <Number>8</Number>
              </DivNumber>
              <button>
                <img src="/trash.png" alt="" />
              </button>
            </li>
            <li>
              <DivName>
                <ImgTeam src="favicon.svg" alt="" />
                <p>Lorem Ipsum</p>
              </DivName>
              <DivNumber>
                <p>Qntd. Jogadores</p>
                <Number>8</Number>
              </DivNumber>
              <button>
                <img src="/trash.png" alt="" />
              </button>
            </li>
            <li>
              <DivName>
                <ImgTeam src="favicon.svg" alt="" />
                <p>Lorem Ipsum</p>
              </DivName>
              <DivNumber>
                <p>Qntd. Jogadores</p>
                <Number>8</Number>
              </DivNumber>
              <button>
                <img src="/trash.png" alt="" />
              </button>
            </li>
          </UlTeams>
        </SectionTeams>
      </MainTeamsTournament>
    </>
  );
};

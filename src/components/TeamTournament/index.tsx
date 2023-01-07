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

export const TeamsTournament = () => {
  return (
    <>
      <MainTeamsTournament>
        <Title>Times do torneio</Title>
        <SectionTeams>
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

import { useContext, useEffect } from "react";
import { TeamContext } from "../../context/TeamContext";
import { TournamentContext } from "../../context/TournamentContext";
import { ButtonLeft } from "../../styles/Buttons/style";
import {
  DivPlayers,
  DivPosition,
  ImgPosition,
  LiPosition,
  MainTeamPosition,
  SectionPosition,
  TitlePosition,
  UlPosition,
} from "./style";

export const MyTeamPosition = () => {
  const { setDashboardPage } = useContext(TournamentContext);
  const { getPlayersFromATeam, playersData } = useContext(TeamContext);

  useEffect(() => {
    getPlayersFromATeam();
  }, []);

  const sort = playersData.sort((a, b) => {
    if (+a.number < +b.number) {
      return -1;
    }
    if (+a.number > +b.number) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      <MainTeamPosition>
        <DivPosition>
          <ButtonLeft
            onClick={() => setDashboardPage(16)}
            className="button-left"
          >
            {"<"}
          </ButtonLeft>
          <DivPlayers>
            <ImgPosition src="/camp-team.png" alt="" />
            <ul>
              <li>
                {playersData.map((e) => {
                  if (e.position === "Atacante") {
                    return (
                      <>
                        <div>
                          <p>{e.number}</p>
                        </div>
                        <span>{e.name}</span>
                      </>
                    );
                  }
                })}
              </li>
              <li>
                {playersData.map((e) => {
                  if (e.position === "Goleiro") {
                    return (
                      <>
                        <div>
                          <p>{e.number}</p>
                        </div>
                        <span>{e.name}</span>
                      </>
                    );
                  }
                })}
              </li>
              <li>
                {playersData.map((e) => {
                  if (e.position === "Meia Direita") {
                    return (
                      <>
                        <div>
                          <p>{e.number}</p>
                        </div>
                        <span>{e.name}</span>
                      </>
                    );
                  }
                })}
              </li>
              <li>
                {playersData.map((e) => {
                  if (e.position === "Lateral Direito") {
                    return (
                      <>
                        <div>
                          <p>{e.number}</p>
                        </div>
                        <span>{e.name}</span>
                      </>
                    );
                  }
                })}
              </li>
              <li>
                {playersData.map((e) => {
                  if (e.position === "Zagueiro") {
                    return (
                      <>
                        <div>
                          <p>{e.number}</p>
                        </div>
                        <span>{e.name}</span>
                      </>
                    );
                  }
                })}
              </li>
              <li>
                {playersData.map((e) => {
                  if (e.position === "Lateral Esquerdo") {
                    return (
                      <>
                        <div>
                          <p>{e.number}</p>
                        </div>
                        <span>{e.name}</span>
                      </>
                    );
                  }
                })}
              </li>
              <li>
                {playersData.map((e) => {
                  if (e.position === "Meia Esquerda") {
                    return (
                      <>
                        <div>
                          <p>{e.number}</p>
                        </div>
                        <span>{e.name}</span>
                      </>
                    );
                  }
                })}
              </li>
            </ul>
          </DivPlayers>
        </DivPosition>
        <SectionPosition>
          <TitlePosition>{playersData.length}/7 Jogadores</TitlePosition>
          <UlPosition>
            {playersData[0] ? (
              <LiPosition>
                <h3>{playersData[0].number}</h3>
                <h3>{playersData[0].name}</h3>
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[1] ? (
              <LiPosition>
                <h3>{playersData[1].number}</h3>
                <h3>{playersData[1].name}</h3>
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[2] ? (
              <LiPosition>
                <h3>{playersData[2].number}</h3>
                <h3>{playersData[2].name}</h3>
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[3] ? (
              <LiPosition>
                <h3>{playersData[3].number}</h3>
                <h3>{playersData[3].name}</h3>
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[4] ? (
              <LiPosition>
                <h3>{playersData[4].number}</h3>
                <h3>{playersData[4].name}</h3>
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[5] ? (
              <LiPosition>
                <h3>{playersData[5].number}</h3>
                <h3>{playersData[5].name}</h3>
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[6] ? (
              <LiPosition>
                <h3>{playersData[6].number}</h3>
                <h3>{playersData[6].name}</h3>
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
          </UlPosition>
        </SectionPosition>
      </MainTeamPosition>
    </>
  );
};

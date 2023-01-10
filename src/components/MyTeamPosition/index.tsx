import { useContext, useEffect } from "react";
import { TeamContext } from "../../context/TeamContext";
import { TournamentContext } from "../../context/TournamentContext";
import { ButtonLeft } from "../../styles/Buttons/style";
import {
  DivPlayers,
  DivPosition,
  ImgPlayer,
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
                <div>
                  <p>9</p>
                </div>
                <span>Player 1</span>
              </li>
              <li>
                <div>
                  <p>1</p>
                </div>
                <span>Player 2</span>
              </li>
              <li>
                <div>
                  <p>7</p>
                </div>
                <span>Player 3</span>
              </li>
              <li>
                <div>
                  <p>8</p>
                </div>
                <span>Player 4</span>
              </li>
              <li>
                <div>
                  <p>2</p>
                </div>
                <span>Player 5</span>
              </li>
              <li>
                <div>
                  <p>4</p>
                </div>
                <span>Player 6</span>
              </li>
              <li>
                <div>
                  <p>10</p>
                </div>
                <span>Player 7</span>
              </li>
            </ul>
          </DivPlayers>
        </DivPosition>
        <SectionPosition>
          <TitlePosition>{playersData.length}/7 Jogadores</TitlePosition>
          <UlPosition>
            {playersData[0] ? (
              <LiPosition>
                <h3>{playersData[0].number} - </h3>
                <h3>{playersData[0].name}</h3>
                <ImgPlayer src="/favicon.svg" alt="" />
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[1] ? (
              <LiPosition>
                <h3>{playersData[1].number} - </h3>
                <h3>{playersData[1].name}</h3>
                <ImgPlayer src="/favicon.svg" alt="" />
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[2] ? (
              <LiPosition>
                <h3>{playersData[2].number} - </h3>
                <h3>{playersData[2].name}</h3>
                <ImgPlayer src="/favicon.svg" alt="" />
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[3] ? (
              <LiPosition>
                <h3>{playersData[3].number} - </h3>
                <h3>{playersData[3].name}</h3>
                <ImgPlayer src="/favicon.svg" alt="" />
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[4] ? (
              <LiPosition>
                <h3>{playersData[4].number} - </h3>
                <h3>{playersData[4].name}</h3>
                <ImgPlayer src="/favicon.svg" alt="" />
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[5] ? (
              <LiPosition>
                <h3>{playersData[5].number} - </h3>
                <h3>{playersData[5].name}</h3>
                <ImgPlayer src="/favicon.svg" alt="" />
              </LiPosition>
            ) : (
              <LiPosition></LiPosition>
            )}
            {playersData[6] ? (
              <LiPosition>
                <h3>{playersData[6].number} - </h3>
                <h3>{playersData[6].name}</h3>
                <ImgPlayer src="/favicon.svg" alt="" />
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

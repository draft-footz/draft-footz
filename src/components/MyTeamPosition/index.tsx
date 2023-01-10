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
            {playersData.map((player) => {
              return (
                <>
                  <LiPosition>
                    <h3>{player.number} - </h3>
                    <h3>{player.name}</h3>
                    <ImgPlayer src="/favicon.svg" alt="" />
                  </LiPosition>
                </>
              );
            })}
          </UlPosition>
        </SectionPosition>
      </MainTeamPosition>
    </>
  );
};

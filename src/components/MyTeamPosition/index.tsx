import { useContext } from "react";
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
          <TitlePosition>Jogadores 7/7</TitlePosition>
          <UlPosition>
            <LiPosition>
              <h3>1 -</h3>
              <h3>Player 1</h3>
              <ImgPlayer src="/favicon.svg" alt="" />
            </LiPosition>
            <LiPosition>
              <h3>1 -</h3>
              <h3>Player 2</h3>
              <ImgPlayer src="/favicon.svg" alt="" />
            </LiPosition>
            <LiPosition>
              <h3>10 -</h3>
              <h3>Player 3</h3>
              <ImgPlayer src="/favicon.svg" alt="" />
            </LiPosition>
            <LiPosition>
              <h3>9 -</h3>
              <h3>Player 4</h3>
              <ImgPlayer src="/favicon.svg" alt="" />
            </LiPosition>
            <LiPosition>
              <h3>7 -</h3>
              <h3>Player 5</h3>
              <ImgPlayer src="/favicon.svg" alt="" />
            </LiPosition>
            <LiPosition>
              <h3>2 -</h3>
              <h3>Player 6</h3>
              <ImgPlayer src="/favicon.svg" alt="" />
            </LiPosition>
            <LiPosition>
              <h3>3 -</h3>
              <h3>Player 7</h3>
              <ImgPlayer src="/favicon.svg" alt="" />
            </LiPosition>
          </UlPosition>
        </SectionPosition>
      </MainTeamPosition>
    </>
  );
};

import styled from "styled-components";

export const MainTeamPosition = styled.main`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 700px;
  overflow-x: scroll;
  scrollbar-color: green #0202023d;
  h3 {
    font-size: 16px;
  }
`;

export const TitlePosition = styled.h3`
  margin-bottom: 10px;
`;
export const DivPosition = styled.div`
  background: rgba(7, 6, 6, 0.37);
  width: 45%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
`;

export const DivPlayers = styled.div`
  width: 85%;
  height: 60%;
  z-index: 3;
  min-width: 261px;
  max-width: 261px;
  position: relative;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    li {
      width: 60px;
      height: 40px;
    }
    > :first-child {
      position: absolute;
      right: 100px;
      top: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #1818d6;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 14px;
      }
    }
    > :nth-child(2) {
      position: absolute;
      right: 100px;
      top: 340px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #a66004;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 14px;
      }
    }
    > :nth-child(3) {
      position: absolute;
      right: 70px;
      top: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #24a424;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 14px;
      }
    }
    > :nth-child(4) {
      position: absolute;
      right: 40px;
      top: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #d69010;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 14px;
      }
    }
    > :nth-child(5) {
      position: absolute;
      right: 100px;
      top: 260px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #d69010;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 14px;
      }
    }
    > :nth-child(6) {
      position: absolute;
      right: 160px;
      top: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #d69010;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 14px;
      }
    }
    > :nth-child(7) {
      position: absolute;
      right: 132px;
      top: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #24a424;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      span {
        font-size: 14px;
      }
    }
  }
`;

export const ImgPosition = styled.img`
  position: fixed;
  z-index: 0;
`;

export const SectionPosition = styled.section`
  background: rgba(7, 6, 6, 0.37);
  width: 45%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const UlPosition = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const LiPosition = styled.li`
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: #2121216b;
  height: 40px;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
`;

export const ImgPlayer = styled.img`
  width: 40px;
  border-radius: 50%;
  background-color: red;
`;

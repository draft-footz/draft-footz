import styled from "styled-components";

export const MainTeamPosition = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 700px;
  overflow-x: scroll;
  scrollbar-color: green #0202023d;
  animation: translateShow 0.4s ease;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 147%;
    margin-top: 417px;
  }

  @keyframes translateShow {
    0% {
      opacity: 0;
      transform: translateX(-70%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
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
  @media (max-width: 800px) {
    border-radius: 6px;
    width: 37%;
    background-color: transparent;
    button {
      top: 20%;
      z-index: 4;
    }
  }
`;

export const DivPlayers = styled.div`
  width: 85%;
  height: 68%;
  z-index: 3;
  min-width: 261px;
  max-width: 261px;
  position: relative;
  @media (max-width: 800px) {
    top: -25%;
    height: 46%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    li {
      width: 150px;
      height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    > :first-child {
      position: absolute;
      right: 55px;
      top: 80px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 25px;
        height: 25px;
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
      right: 55px;
      top: 340px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 25px;
        height: 25px;
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
      right: -10px;
      top: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 25px;
        height: 25px;
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
      right: -10px;
      top: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 25px;
        height: 25px;
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
      right: 55px;
      top: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 25px;
        height: 25px;
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
      right: 120px;
      top: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 25px;
        height: 25px;
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
      right: 120px;
      top: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        width: 25px;
        height: 25px;
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
  @media (max-width: 800px) {
    display: none;
  }
`;

export const UlPosition = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const LiPosition = styled.li`
  display: flex;
  gap: 32px;
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

import styled from "styled-components";

export const MainTeamsTournament = styled.main`
  position: sticky;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 14px;
  }

  li {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #2121216b;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 20px;
    min-width: 350px;
    line-height: 60px;
  }
  button {
    background-color: transparent;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
`;

export const SectionTeams = styled.section`
  width: 80%;
  height: 60%;
  background-color: red;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #0202023d;
  gap: 20px;
`;

export const TeamsNumber = styled.h2`
  font-size: 22px;
  margin-top: 20px;
`;

export const Number = styled.h3`
  font-size: 16px;
`;

export const UlTeams = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: scroll;
  scrollbar-color: green #0202023d;
  padding: 0 40px;
`;

export const DivName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  gap: 10px;
`;

export const DivNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImgTeam = styled.img`
  width: 40px;
  border-radius: 100%;
  background-color: grey;
`;

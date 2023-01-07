import styled from "styled-components";

export const StyledTournamentCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 55px;
  padding: 15px 20px;

  background: rgba(7, 6, 6, 0.37);
  border-radius: 6px;

  > div {
    display: flex;
    align-items: center;
  }

  div:nth-child(1) {
    gap: 15px;
  }
  div:nth-child(2) {
    gap: 25px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;


    height: 33px;
    width: 90px;

    background: var(--primary);
    border-radius: 6px;

    font-size: 12px;
  }

  button:disabled{
    background-color: var(--gray1);
    cursor: default;
  }
`;

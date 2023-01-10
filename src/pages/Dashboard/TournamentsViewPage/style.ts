import styled from "styled-components";

export const StyledTournamentsViewPage = styled.main`
  display: flex;
  flex-direction: column;

  padding: 70px 0;

  align-items: center;

  width: 70%;
  height: 100%;

  > div {
    width: 80%;
    text-align: center;
  }
  @media (max-width: 800px) {
    > div {
      width: 120%;
    }
    h3 {
      font-size: 16px;
    }
    span {
      font-size: 14px;
    }
  }
`;

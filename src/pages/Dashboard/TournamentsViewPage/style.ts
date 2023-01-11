import styled from "styled-components";

export const StyledTournamentsViewPage = styled.main`
  display: flex;
  flex-direction: column;

  padding: 70px 0;

  align-items: center;

  width: 70%;
  height: 100%;
   animation: translateShow 0.4s ease;

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

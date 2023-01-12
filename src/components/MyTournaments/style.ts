import styled from "styled-components";

export const StyledMyTournaments = styled.div`
  box-sizing: border-box;
  width: 100%;
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
`;

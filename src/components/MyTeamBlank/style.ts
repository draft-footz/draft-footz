import styled from "styled-components";

export const NoTeamDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
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

  h2 {
    font-size: 20px;
    text-align: center;
  }

  button {
    width: 50%;
    max-width: 284px;
    height: 44px;
  }
`;

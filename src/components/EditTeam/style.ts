import styled from "styled-components";

export const EditTeamStyled = styled.section`
  width: 100%;
  max-width: 477px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
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

  form {
    display: flex;
    flex-direction: column;
    max-width: 477px;
    gap: 32px;
    width: 100%;

    div:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 14px;

      label {
        font-weight: 500;
        font-size: 18px;
      }

      input {
        font-weight: 700;
        font-size: 14px;
        padding: 17px;
      }
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 14px;

      label {
        font-weight: 500;
        font-size: 18px;
      }

      input {
        font-weight: 700;
        font-size: 14px;
        padding: 17px;
      }
    }
    div:nth-child(3) {
      display: flex;
      justify-content: space-between;
      gap: 32px;
      @media (max-width: 800px) {
        flex-direction: column;
      }
    }

    button {
      max-width: 250px;
      margin: 0 auto;
    }
  }
`;

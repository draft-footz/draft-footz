import styled from "styled-components";

export const CreatePlayerStyled = styled.section`
  width: 70%;
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
    max-width: 477px;
    display: flex;
    flex-direction: column;
    gap: 29px;

    label,
    input,
    select,
    option {
      font-weight: 500;
      font-size: 18px;
    }

    fieldset:nth-child(1) {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 63px;
      @media (max-width: 800px) {
        flex-direction: column;
        align-items: flex-start;
      }

      fieldset {
        display: flex;
        flex-direction: column;
        gap: 15px;
        min-height: 110px;
        width: 100%;

        select {
          width: 100%;
          height: 40px;

          background-color: var(--inputsBackground);

          border-radius: 4px;
          padding-left: 10px;
          color: white;
          font-size: 12px;

          :focus {
            border-color: var(--gray0);
            background-color: var(--inputsBackgroundFocus);
          }
        }
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

    span {
      color: #f94646;
      font-weight: 700;
      font-size: 9px;
    }

    button {
      max-width: 250px;
      margin: 0 auto;
    }
  }
`;

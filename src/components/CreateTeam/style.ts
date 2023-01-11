import styled from "styled-components";

export const CreateTeamStyled = styled.section`
    width: 100%;
    max-width: 329px;
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
        gap: 32px;
        width: 100%;

        div {
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

        span {
            color: #F94646;
            font-weight: 700;
            font-size: 9px;
        }

        button {
            max-width: 250px;
            margin: 0 auto;
        }
    }
`
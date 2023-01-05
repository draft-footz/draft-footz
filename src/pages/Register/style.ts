import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  background: url("/background1.svg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 500;
    font-size: 18px;

    align-self: left;
  }

  .window {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    width: 40%;

    padding: 45px 70px;
    border-radius: 20px;

    background-color: var(--windowBackground);
  }

  @media (max-width: 950px) {
    .window {
      width: 80%;
    }
  }
  .social {
    display: flex;
    justify-content: center;
    gap: 35px;
    width: 100%;
  }

  @media screen {
  }

  .linkLogin {
    font-weight: 700;
    font-size: 14px;
    color: var(--primary);
  }
`;

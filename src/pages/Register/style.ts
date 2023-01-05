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

  transition: 1s;

  h1 {
    font-weight: 500;
    font-size: 1.125rem;

    align-self: left;
  }

  .window {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 650px;

    padding: 45px 70px;
    border-radius: 20px;

    background-color: var(--windowBackground);
  }

  @media (max-width: 768px) {
    .window {
      width: 75%;
     padding: 30px 55px;
    }
  }
  @media (max-width: 450px) {
    

    .window {
      width: 85%;
     padding: 20px 35px;

     gap: 10px
    }
  }
  
  .social {
    display: flex;
    justify-content: center;
    gap: 35px;
    width: 100%;
  }

  .linkLogin {
    font-weight: 700;
    font-size: 0.875rem;
    color: var(--primary);
  }
`;

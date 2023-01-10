import { Link } from "react-router-dom";
import styled from "styled-components";

export const ParentRg = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    height: 100vh;
  }
`;

export const StyledRegister = styled.div`
  background-image: url("./gramado.png");
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  filter: brightness(0.3);
`;

export const ContainerDivLogin = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: absolute;
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

  .container-div-rg {
    display: flex;
    margin-top: 25px;
  }

  .register-div-rg {
    width: 300px;
    top: 60px;
    height: 505px;
    background: rgba(33, 33, 33, 0.68);
    border-radius: 10px;
    display: flex;

    @media (min-width: 375px) {
      width: 340px;
    }

    @media (min-width: 900px) {
      width: 430px;
      height: 530px;
    }
  }

  .container-form-rg {
    display: flex;

    flex-direction: column;

    margin: 0 auto;

    .btn-register-rg {
      width: 270px;
      margin: 0 auto;
      height: 45px;
      background: #00b148;
      border-radius: 6px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.06em;
      color: #ffffff;
      margin-top: 15px;

      @media (min-width: 375px) {
        width: 300px;
      }

      @media (min-width: 900px) {
        margin-top: 30px;
      }
    }
  }

  .social-rg {
    display: flex;
    gap: 10px;
    margin: 0 auto;
    margin-top: 17px;

    @media (min-width: 900px) {
      margin-bottom: 5px;
    }
  }

  .register-with-rg {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .span-rg-rg {
    font-size: 11px;
    display: block;

    @media (min-width: 900px) {
      font-size: 13px;
      margin-right: 5px;
      margin-left: 5px;
    }
  }

  .bg-1-rg {
    background: radial-gradient(
      50% 50% at 50% 50%,
      #ffffff 0%,
      rgba(217, 217, 217, 0) 100%
    );
    width: 75px;
    height: 2px;

    @media (min-width: 900px) {
      width: 90px;
    }
  }

  .form-register-rg {
    display: flex;
    flex-direction: column;

    .one-rg-rg {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    .two-rg-rg {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
    }

    .rg-form-rg {
      display: flex;
      flex-direction: column;

      @media (min-width: 900px) {
        flex-direction: row;
        gap: 50px;
      }
    }

    input {
      width: 270px;
      height: 48px;
      background: rgba(21, 20, 20, 0.37);
      outline: none;
      border-radius: 6px;
      padding-left: 10px;

      margin-bottom: 10px;

      @media (min-width: 375px) {
        width: 300px;
      }

      @media (min-width: 900px) {
        width: 350px;
      }

      ::placeholder {
        font-style: normal;
        font-weight: 500;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.06em;
        color: #b5b5b5;
      }

      :focus {
        border: 1px solid #ffffff;
      }
    }
  }

  .account-rg {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #ffffff;
    display: block;
  }

  .logo-div-rg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 8px;

    @media (min-width: 900px) {
      margin-top: 25px;
    }

    img {
      height: 26px;
      width: 30px;
    }

    h1 {
      font-size: 26px;
    }
  }

  .footer-rg-rg {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .top-rg-rg {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    margin-bottom: 18px;
    width: 100%;

    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.06em;
      color: #ffffff;
    }
  }
`;

export const LinkToLog = styled(Link)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  color: #00b148;

  &:hover {
    text-decoration: underline;
  }
`;

export const BackToHome = styled(Link)`
  background-color: #1c1b1bb0;
  width: 80px;
  height: 30px;
  display: flex;
  font-size: 13px;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    height: 34px;
    width: 100px;
  }
`;

export const MsgError = styled.span`
  color: #ff577f;
  font-size: 11px;
  display: block;
  margin: 0 auto;
  margin-left: 0px;
  margin-top: -6px;
  margin-bottom: 10px;
`;

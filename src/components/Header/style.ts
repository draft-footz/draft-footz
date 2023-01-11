import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderNav = styled.header`
  height: 90px;
  background: rgba(6, 0, 0, 0.55);
  border: 0px solid #00b148;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .none {
    display: none;
  }

  .div-menu {
    background: rgba(6, 0, 0, 0.55);
    position: fixed;
    top: 90px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
      margin-top: 10px;
      font-size: 20px;
    }
    > div {
      display: flex;
      justify-content: end;
      padding-right: 10px;
      button {
        margin-top: 0;
        font-size: 24px;
      }
    }
  }

  .div-header {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 120px;
    height: 96px;
    margin-top: 4px;
    margin-left: -16px;
  }

  .title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    margin-left: -24px;
  }

  .div-dropdown {
    display: flex;
  }

  .dropdown {
    margin-right: 15px;
    height: 24px;
    width: 34px;
    margin-top: 7px;
  }

  .buttons-header {
    margin-right: 40px;
    gap: 30px;
    display: none;
  }

  button {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 27px;
    color: #ffffff;
    background-color: transparent;
  }

  button:hover {
    text-decoration: underline;
    transition: 0.8s ease;
    filter: brightness(0.9);
  }

  @media (min-width: 375px) {
    .dropdown {
      margin-right: 20px;
    }
  }

  @media (min-width: 600px) {
    .div-header {
      margin-left: 10px;
    }

    .div-dropdown {
      display: none;
    }

    .buttons-header {
      display: flex;
    }
  }

  @media (min-width: 900px) {
    .div-header {
      margin-left: 30px;
    }

    .title {
      font-size: 22px;
    }

    .logo {
      margin-left: 8px;
    }

    .buttons-header {
      margin-right: 50px;
    }
  }
`;

export const LoginNavigate = styled(Link)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 27px;
  width: 97px;
  height: 41px;
  background: #00b148;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: brightness(0.9);
  }
`;

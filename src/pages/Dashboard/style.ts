import styled from "styled-components";

export const Main = styled.main`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .section-dashboard {
    background-color: #21212191;
    width: 80%;
    height: 80%;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
  }
  .div-menu {
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    align-items: center;
  }
  .div-menu button {
    width: 100%;
  }
  .logo {
    margin-top: 40px;
    margin-bottom: 33px;
  }
  .first-button-menu {
    margin-top: 60px;
  }
  .button-logout {
    height: 51px;
  }
  .div-logo-and-buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .div-button-logout {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    background-color: #1e1e1e;
  }
`;

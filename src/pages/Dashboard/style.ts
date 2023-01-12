import styled from "styled-components";

export const Main = styled.main`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .selected {
    background-color: var(--primary);
  }
`;

export const DivBg = styled.div`
  position: relative;
`;

export const FigureBg = styled.div`
  background-image: url("./gramado.png");
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  filter: brightness(0.3);
`;

export const SectionDashboard = styled.section`
  background-color: #21212191;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  max-width: 75rem;

  > main {
    width: 70%;
    overflow-x: hidden;
  }
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    width: 90%;
  }
`;

export const DivMenu = styled.div`
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const DivLogoAndButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FigureLogo = styled.figure`
  margin-top: 80px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const DivButtonLogout = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-color: #1e1e1e;
`;

export const ButtonLogout = styled.button`
  width: 100%;
  background-color: #2f2f2f;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 54px;

  img {
    width: 20px;
  }
  p {
    color: #a8a8a8;
    font-weight: 600;
  }
`;

export const HeaderDashboard = styled.header`
  button {
    background-color: transparent;
  }
  .none {
    display: none;
  }
  .img-menu {
    width: 25px;
  }

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

  position: fixed;
  @media (max-width: 800px) {
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    z-index: 5;
    width: 100vw;
    padding: 20px;
  }

  .div-open {
    display: flex;
    flex-direction: column;
    button {
      margin-top: 10px;
      font-size: 20px;
    }
  }
  .div-x {
    display: flex;
    justify-content: end;
    button {
      font-size: 24px;
    }
  }
`;
export const DivHeaderDashboard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DivLogo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

// @media(max-width: 800px){

// }

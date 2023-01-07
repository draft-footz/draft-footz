import styled from "styled-components";

export const DivGlobalDashboard = styled.div`
  background-color: red;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;

  .green {
    background-color: var(--primary);
  }
`;

export const SectionDashboard = styled.section`
  background-color: #21212191;
  width: 80%;
  height: 80%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
`;

export const DivMenu = styled.div`
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  align-items: center;
`;

export const DivLogoAndButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FigureLogo = styled.figure`
  margin-top: 80px;
  margin-bottom: 80px;
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

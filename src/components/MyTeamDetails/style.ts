import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

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
`;

export const TeamHeaderStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;

  figure {
    width: 100%;
    max-width: 50px;
  }

  img {
    width: 100%;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    outline: inherit;
  }
`;

export const TeamDetails = styled.section`
  width: 80%;
  max-width: 700px;

  @media (max-width: 800px) {
    width: 110%;
  }
  
  background: rgba(7, 6, 6, 0.37);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  position: relative;

  h3,
  div {
    padding: 20px 41px;
  }

  h4,
  h3 {
    font-weight: 700;
    font-size: 15px;
    color: var(--gray0);
    @media (max-width: 800px) {
      font-size: 14px;
    }
  }

  span {
    font-weight: 700;
    font-size: 15px;
    color: #b6b6b6;
  }

  div {
    display: flex;
    flex-direction: column;
    border-top: 2px solid rgba(255, 255, 255, 0.06);
    gap: 1.5rem;
  }


  >div:nth-child(4){
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
`;

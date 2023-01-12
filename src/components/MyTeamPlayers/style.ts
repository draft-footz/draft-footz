import styled from "styled-components";

export const MyTeamPlayersStyled = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;

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

  button:last-child {
    max-width: 190px;
  }
`;

export const SearchPlayerStyled = styled.section`
  display: flex;
  width: 100%;
  max-width: 462px;
  gap: 16px;
  align-items: center;

  input {
    width: 100%;
    max-width: 285px;
    font-weight: 700;
    font-size: 14px;
    padding: 25px;
  }
`;

export const PlayerListStyled = styled.section`
  background: rgba(7, 6, 6, 0.37);
  border-radius: 6px;
  padding: 14px 34px;
  width: 80%;
  @media (max-width: 800px) {
    width: 110%;
  }
  max-width: 710px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  padding-top: 32px;

  h2 {
    font-weight: 700;
    font-size: 16px;
  }

  ul {
    height: 100%;
    max-height: 210px;
    overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      display: flex;
      gap: 89px;
      align-items: center;
      justify-content: space-between;
      background: rgba(33, 33, 33, 0.58);
      border-radius: 20px;
      padding: 10px 30px;
      @media (max-width: 400px) {
        width: 167%;
      }

      div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 21px;
      }

      div:nth-child(2) {
        display: flex;
        align-items: center;
        gap: 27px;

        svg:hover {
          cursor: pointer;
          filter: brightness(0.9);
        }
      }

      h5 {
        font-weight: 700;
        font-size: 13px;
      }

      h4 {
        color: #b6b6b6;
        font-weight: 700;
        font-size: 14px;
      }

      h3 {
        font-weight: 700;
        font-size: 10px;
      }
    }

    h5 {
      font-weight: 700;
      font-size: 13px;
    }
  }

  ul::-webkit-scrollbar {
    width: 10px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 10px;
  }
`;

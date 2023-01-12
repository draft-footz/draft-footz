import styled, { css } from "styled-components";

interface iProps {
  showingPhase: "quarters" | "semi" | "final";
}

const options = {
  quarters: css`
    > div:nth-child(1) {
      display: flex;
      gap: 2rem;
    }
    > div:nth-child(2) {
      display: none;
    }
    > div:nth-child(3) {
      display: none;
    }
  `,
  semi: css`
    > div:nth-child(1) {
      display: none;
    }
    > div:nth-child(2) {
      display: flex;
    }
    > div:nth-child(3) {
      display: none;
    }
  `,
  final: css`
    > div:nth-child(1) {
      display: none;
    }
    > div:nth-child(2) {
      display: none;
    }
    > div:nth-child(3) {
      display: flex;
    }
  `,
};

export const StyledTournamentKeys = styled.div<iProps>`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  > nav {
    width: 100%;
    height: 3rem;
    background-color: rgba(0, 0, 0, 50%);
    border-bottom: 1px solid white;
    transform: translateY(1.5rem);
    z-index: 1;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    display: flex;

    > a {
      width: 33%;
      height: 100%;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        transform: scale(1.25);
        color: lightgreen;
      }
    }
    @media (min-width: 800px) {
      display: none;
    }
  }

  > h1 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  > div {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
    position: relative;
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

    > div {
      display: flex;
      align-items: center;
      gap: 4rem;
      background-color: rgba(7, 6, 6, 37%);
      width: 100%;
      border-radius: 1rem;
      padding: 2rem 4rem;
      position: relative;
      overflow-y: auto;
      transition: .5s;

      height: 100%;
      justify-content: center;

      @media (max-width: 1050px) {
        gap: 2rem;
        padding: 1rem;

        >div {
          width: 100%;
          align-items: center;
        }

        >div > div {
          width: 95%;
        }
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      > div:nth-child(1) {
        gap: 4.5rem;
      }

      > div:nth-child(2) {
        gap: 12rem;
      }

      > div:nth-child(3) {
        position: relative;

        > aside.champion {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 4rem;

          position: absolute;
          top: -2rem;
          right: 3rem;

          > h2 {
            font-size: 0.875rem;
          }

          > img {
            height: 1.5rem;
            width: 1.5rem;
          }
        }
      }

      @media (max-width: 799px) {
        ${props => options[props.showingPhase]}
        >div {
          > div:nth-child(1) {
            top: -4rem !important;
            right: calc(50% + 1rem) !important;
          }
          > div:nth-child(1) > h2 {
            font-size: 2rem !important;
            font-weight: 500;
          }
          > div:nth-child(1) > img {
            height: 3rem !important;
            width: 3rem !important;
          }
        }
      }
    }
  }
`;

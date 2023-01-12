import styled from "styled-components";

export const StyledTournamentListCard = styled.li`
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: rgba(7, 6, 6, 37%);
  width: 100%;
  border-radius: 0.25rem;

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;

    > img {
      width: 2rem;
      height: 2rem;
    }

    > h2 {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    > span {
      font-size: 0.875rem;
      font-weight: 500;
      @media (max-width: 800px) {
        font-size: 12px;
      }
    }

    > svg {
      width: 21px;
      height: 21px;
      opacity: 65%;

      :hover {
        opacity: 100%;
      }
    }
  }

  :hover {
    background-color: rgba(7, 6, 6, 74%);
    transform: scale(1.0125);
    cursor: pointer;
  }

  @media (max-width: 799px) {
    >div:nth-child(2) {
      >span {
        display: none;
      }
    }
  }

  @media (max-width: 400px) {
    >div:nth-child(1) {
      >img {
        display: none;
      }
    }
  }

  @media (max-width: 320px) {
    >div:nth-child(1) {
      >h2 {
        font-size: 0.875rem;
      }
    }
  }
`;

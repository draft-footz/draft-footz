import styled from "styled-components";

export const StyledTournamentKeys = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
    
    >div {
        width: 40rem;
        display: flex;
        align-items: center;
        gap: 3rem;
        position: relative;

        >div {
            display: flex;
            flex-direction: column;
        }

        >div:nth-child(1) {
            gap: 4rem;
        }

        >div:nth-child(2) {
            gap: 14rem;
        }

        >div:nth-child(3) {
            position: absolute;
            right: 0rem;
        }
    }
`;

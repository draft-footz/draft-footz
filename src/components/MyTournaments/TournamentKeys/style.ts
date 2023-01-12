import styled from "styled-components";

export const StyledTournamentKeys = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    justify-content: center;
    animation: translateShow 0.4s ease;
    width: 100%;
    height: 100%;

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
    >div{
        position: relative;
        >div {
        width: max-content;
        height: max-content;
        display: flex;
        align-items: center;
        gap: 3rem;
        background-color: rgba(7,6,6,37%);
        border-radius: 1rem;
        padding: 2rem 4rem;
        position: relative;
        overflow-y: auto;

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
            position: relative;
            width: 6rem;
            >div {
                position: absolute;
                left: -8rem;
                top: calc( 50% - 2rem);
            }
        }
        // Champion
        >div:nth-child(4) {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            >h2 {
                font-size: 1.25rem;
                font-weight: 500;
            }
            >span {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                >h2 {
                    font-size: 1.5rem;
                    font-weight: 500;
                }
            }
        }
    }
    }
    
`;

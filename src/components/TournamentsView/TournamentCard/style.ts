import styled from "styled-components";

export const StyledTournamentCard = styled.li`
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;

    display: flex;
    justify-content: space-between;
    gap: 1rem;

    background-color: rgba(7,6,6, 40%);
    border-radius: 1rem;

    >div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    >div:nth-child(1) {
        >img {
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
        }
        >h2 {
            font-size: 1rem;
            font-weight: 500;
        }
    }

    >div:nth-child(2) {
        gap: 1.5rem;
        >span {
            font-size: 1rem;
            font-weight: 400;
        }

        >button {
            
            background-color: #00B148;
            font-size: 1rem;
            font-weight: 500;
            padding: 0.375rem 1.25rem;
            border-radius: 0.375rem;

            :hover{
                filter: brightness(1.1);
            }
        }

        >button[disabled] {
            background-color: #808080;
            :hover {
                filter: brightness(1);
            }
        }
    }

    @media (max-width: 1050px) {
        >div:nth-child(2) {
            >span {
                display: none;
            }
        }
    }

    @media (max-width: 900px) {
        >div:nth-child(1) {
            >img {
                display: none;
            }
        }
    }

    @media (max-width: 800px) {
        >div:nth-child(1) {
            >img {
                display: block;
            }
        }
        >div:nth-child(2) {
            >span {
                display: block;
            }
        }
    }

    @media (max-width: 730px) {
        >div:nth-child(1) {
            >img {
                display: block;
            }
        }
        >div:nth-child(2) {
            >span {
                display: none;
            }
        }
    }

    @media (max-width: 550px) {
        >div:nth-child(1) {
            >img {
                display: none;
            }
        }
        >div:nth-child(2) {
            >span {
                display: none;
            }
        }
    }

    @media (max-width: 500px) {
        padding: 0.75rem 1rem 0.75rem 1.5rem;
        >div:nth-child(1) >h2 {
            font-size: 0.875rem;
        }
        >div:nth-child(2) >button {
            font-size: 0.875rem;
        }
    }

`;
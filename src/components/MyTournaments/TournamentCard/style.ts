import styled from "styled-components";

export const StyledTournamentCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2.25rem;
margin: auto;
    >div {
        display: flex;
        align-items: center;
        gap: 1rem;

        >img {
            width: 4rem;
        }

        >h1{
            font-size: 2rem;
            font-weight: 500;
        }
        
        >svg {
            height: 2em;
            width: 2em;
        }
    }

    >div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.125rem;
        width: 37.5rem;

        >div:nth-child(1) {
            box-sizing: border-box;
            width: 100%;
            position: relative;

            padding: 1.25rem 2.5rem;
            background-color: rgba(7,6,6, 37%);

            border-top-left-radius: 1.25rem;
            border-top-right-radius: 1.25rem;

            >span {
                display: flex;
                gap: 2.875rem;
                font-size: 1.25rem;
                font-weight: 600;
                >h2 {
                    font-size: 1.25rem;
                    color: #B6B6B6;
                }
            }
            >svg {
                position: absolute;
                right: 2em;
                top: 1.25rem;
                height: 2em;
                width: 2em;
                opacity: 65%;
                transition: 200ms ease-in-out;
                
                :hover {
                    opacity: 1;
                }
            }
        }

        >div:nth-child(2) {
            box-sizing: border-box;
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: 1.125rem;
            padding: 1.875rem 2.5rem;

            background-color: rgba(7,6,6, 37%);

            border-bottom-left-radius: 1.25rem;
            border-bottom-right-radius: 1.25rem;


            >span {
                display: flex;
                gap: 2.875rem;
                font-size: 1rem;
                font-weight: 600;
                >h2 {
                    font-size: 1rem;
                    color: #B6B6B6;
                    font-weight: 500;
                }
            }
        }
    }
`
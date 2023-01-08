import styled from "styled-components";

export const StyledTournamentList = styled.div`
    display: flex;
    flex-direction: column;
    

    >h1 {
        font-size: 1.5rem;
        font-weight: 600;
        align-self: center;
        margin-bottom: 7.5vh;
    }

    >span {
        align-self: end;
        padding-right: 2%;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }

    >ul {
        display: flex;
        flex-direction: column;
        gap: 8px;

        height: calc( 62vh - 11rem);
        overflow: auto;
        padding: 0.375rem;


        ::-webkit-scrollbar {
            background-color: rgba(7,6,6, 37%);
            border-radius: 0.25rem;
            width: 0.875rem;
        }

        ::-webkit-scrollbar-thumb {
            background-color: black;
            border-radius: 0.25rem;
        }

    }

    >button {
        font-size: 2rem;
        font-weight: 600;
        width: 4rem;
        height: 3.75rem;
        border-radius: 4px;
        background-color: #00B148;
        align-self: center;
        margin-top: 2rem;

        :hover {
            filter: brightness(1.1);
        }
    }

    >button[disabled] {
        display: none;
    }
`;

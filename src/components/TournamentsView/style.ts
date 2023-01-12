import styled from "styled-components";

export const StyledTournamentsView = styled.div`
    box-sizing: border-box;
    padding: 5vh 5vw;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;


    >h1 {
        font-weight: 400;
    }

    >ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: calc( 100% - 6rem);
        width: 100%;
        overflow: auto;
    }
`;
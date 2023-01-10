import styled from "styled-components";

export const StyledTournamentKeys = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
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

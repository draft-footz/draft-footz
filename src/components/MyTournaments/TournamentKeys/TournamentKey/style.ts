import styled, { css } from "styled-components";

interface iMatchProps {
    winner: "teamA" | "teamB" | null;
}

const options = {
    teamA: css`
        >div:nth-child(2) {
            >div {
                color: rgba( 255, 255, 255, 10%);
            }
        }
    `,
    teamB: css`
        >div:nth-child(1) {
            >div {
                color: rgba( 255, 255, 255, 10%);
            }
        }
    `
}

export const StyledTournamentKey = styled.div<iMatchProps>`
    border: 2px solid #E5E5E5;
    border-radius: 1rem;
    background-color: #212121;

    // Tamanho das chaves
    width: 9em;
    height: 3.25rem;

    display: flex;
    flex-direction: column;

    ${props => props.winner && options[props.winner]};

    // Time A 
    >div:nth-child(1) {
        border-bottom: 2px solid white;
        width: 100%;
        height: 50%;
        display: flex;

        // Time A - NOME
        >div:nth-child(1) {
            height: 100%;
            width: 79%;
            border-right: 2px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            font-weight: 400;
        }

        // Time A - GOLS
        >div:nth-child(2) {
            height: 100%;
            width: 21%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            font-weight: 400;
        }
    }

    // Time B
    >div:nth-child(2) {
        width: 100%;
        height: 50%;
        display: flex;

        // Time B - NOME
        >div:nth-child(1) {
            height: 100%;
            width: 79%;
            border-right: 2px solid white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            font-weight: 400;

        }
        
        // Time B - GOLS
        >div:nth-child(2) {
            height: 100%;
            width: 21%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.875rem;
            font-weight: 400;
        }
    }

    @media (max-width: 799px) {
        // Tamanho das chaves
        width: 20rem;
        min-height: 6rem;

    }
`
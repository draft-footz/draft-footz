import { ReactNode } from "react";

export interface iMatchesProvider {
    children: ReactNode;
};

export interface iMatchesContext {
    createMultipleTournamentMatches: (numberOfMatches: number) => void;

}

export interface iCreateMatchData {
    tournamentId: number,
    order: number,
    teamA: number | null,
    teamB: number | null,
    winner: number | null,
    scores?: {
        regular: {
            teamA: number | null,
            teamB: number | null
        },
        penalties?: {
            teamA: number | null,
            teamB: number | null
        }
    }
};

export interface iMatchData extends iCreateMatchData {
    id: number
};

export interface iMatchTeams {
    teamA: {
        id: number;
        name: string;
    }
    teamB: {
        id: number;
        name: string;
    }
}

export interface iMatchScores {
    winner: {
        id: number;
        name: string;
    };
    scores: {
        regular: {
            teamA: number | null,
            teamB: number | null
        },
        penalties?: {
            teamA: number | null,
            teamB: number | null
        }
    };
};


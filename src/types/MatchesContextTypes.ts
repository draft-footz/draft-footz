import { ReactNode } from "react";

export interface iMatchesProvider {
    children: ReactNode;
};

export interface iMatchesContext {
    createMultipleTournamentMatches: (tournamentId: number, numberOfMatches: number) => void;
    createTournamentMatch: (tournamentId: number, order: number) => void;
    deleteAllMatchesFromTournament: (tournamentId: number) => void;
    tournamentMatches: iMatchData[];
    updateMatchTeams: (matchId: number, data: iMatchTeams, subscriptions?: number[]) => void;
    updateMatchScores: (matchId: number, data: iMatchScores, order: number) => void;
};

export interface iMatchData {
    id: number;
    userId: number;
    tournamentId: number;
    order: number;
    winner?: {
        id: number;
        name: string;
        team: "teamA" | "teamB";
    };
    teamA?: {
        id: number;
        name: string;
    };
    teamB?: {
        id: number;
        name: string;
    };
    scores?: {
        teamA: number;
        teamB: number;
    };
};

export interface iMatchTeams {
    teamA?: {
        id: number;
        name: string;
    }
    teamB?: {
        id: number;
        name: string;
    }
}

export interface iWinner {
    id: number;
    name: string;
    team: string;
}

export interface iMatchScores extends iMatchTeams {
    winner: iWinner;
    scores: {
        teamA: number;
        teamB: number;
    };
};
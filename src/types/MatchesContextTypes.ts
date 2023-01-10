import { ReactNode } from "react";
import { iDataTournament } from "./TournamentContextTypes";

export interface iMatchesProvider {
    children: ReactNode;
};

export interface iMatchesContext {
    createMultipleTournamentMatches: (tournamentId: number, numberOfMatches: number) => void;
    createTournamentMatch: (tournamentId: number, order: number) => void;
    deleteAllMatchesFromTournament: (tournamentId: number) => void;
    tournamentMatches: iMatchData[];
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
        penalties?: {
            teamA: number;
            teamB: number;
        };
    };
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
        team: "teamA" | "teamB";
    };
    scores: {
        teamA: number;
        teamB: number;
        penalties?: {
            teamA: number;
            teamB: number;
        };
    };
};


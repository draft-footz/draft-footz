import { ReactNode } from "react";

export interface iTournamentProvider {
    children: ReactNode;
};

export interface iTournamentContext {
    createNewTournament: (data:iDataNewTournament) => void;
}

export interface iDataNewTournament {
    userId: number;
    name: string;
    type: "qualifiers";
    numberOfTeams: 8;
    champion: number | null;
}
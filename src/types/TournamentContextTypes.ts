import { ReactNode } from "react";



export interface iTournamentProvider {
    children: ReactNode;
};

export interface iTournamentContext {
    createNewTournament: (data: iDataTournament) => void;
    updateTournament: (data: iDataUpdateTournament) => void;
    getMyTournaments: () => void;
    getAllTournaments: () => void;
    setTournamentChampion: (teamId: number, tournamentId: number) => void;
    tournamentData: iDataTournament | null;
};

export interface iDataCreateTournament {
    userId: number;
    name: string;
    type: tTournamentType;
    numberOfTeams: tNumberOfTeams;
    champion: number | null;
};

export interface iDataTournament extends iDataCreateTournament{
    id: number;
    userId: number;
};

export interface iDataUpdateTournament {
    userId: number;
    name?: string;
    type?: tTournamentType;
    numberOfTeams?: tNumberOfTeams;
    champion?: number | null;
};
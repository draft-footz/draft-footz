import { ReactNode } from "react";

type tTournamentType = "qualifiers";
type tNumberOfTeams = 8;

export interface iTournamentProvider {
    children: ReactNode;
};

export interface iTournamentContext {
    createNewTournament: (data: iDataCreateTournament) => void;
    updateTournament: (data: iDataUpdateTournament) => void;
    getMyTournaments: () => void;
    getAllTournaments: () => void;
    setTournamentChampion: (teamId: number, tournamentId: number) => void;
    tournamentData: iDataTournament | null;
    disableButton: boolean;
    myTournaments: iDataTournament[];
    readingTournament: boolean;
    setReadingTournament: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface iDataCreateTournament {
    name: string;
    type?: tTournamentType;
    numberOfTeams?: tNumberOfTeams;
    champion?: number | null;
    userId: number;
    id: number;
};

export interface iDataTournament {
    id: number;
    userId: number;
    name: string;
    type: tTournamentType;
    numberOfTeams: tNumberOfTeams;
    champion?: number | null;
};

export interface iDataUpdateTournament {
    userId: number;
    name?: string;
    type?: tTournamentType;
    numberOfTeams?: tNumberOfTeams;
    champion?: number | null;
};
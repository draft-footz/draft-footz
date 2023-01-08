import { ReactNode } from "react";

type tTournamentType = "qualifiers";
type tNumberOfTeams = 8;

export interface iTournamentProvider {
    children: ReactNode;
};

export interface iTournamentContext {

    createNewTournament: (data: iDataCreateTournament) => void;
    updateTournament: (data: iDataUpdateTournament) => void;
    setTournamentChampion: (teamId: number, tournamentId: number) => void;
    deleteTournament: (teamId: number) => void;
    getMyTournaments: () => void;
    getAllTournaments: () => void;

    setReadingTournament: React.Dispatch<React.SetStateAction<tReadingTournament>>;
    setDashboardPage: React.Dispatch<React.SetStateAction<number>>;
    setAllTournaments: React.Dispatch<React.SetStateAction<iDataTournament[]>>

    myTournaments: iDataTournament[];
    allTournaments: iDataTournament[];
    tournamentData: iDataTournament | null;

    disableButton: boolean;
    readingTournament: tReadingTournament;
    dashboardPage: number;


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

export type tReadingTournament = false | iDataTournament;
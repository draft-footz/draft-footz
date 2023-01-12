import { ReactNode } from "react";

export interface iTeamProvider {
  children: ReactNode;
}

export interface iTeamContext {
  createNewTeam: (data: iDataNewTeam) => Promise<void>;
  updateTeam: (data: iDataNewTeam) => Promise<void>;
  deleteTeam: () => Promise<void>;
  getAllTeams: () => Promise<void>;
  createNewPlayer: (data: iDataNewPlayer) => Promise<void>;
  deletePlayer: (playerId: number) => Promise<void>;
  getPlayersFromATeam: () => Promise<void>;
  disableButton: boolean;
  teamId: number | null;
  teamData: iTeamData;
  setTeamData: React.Dispatch<React.SetStateAction<iTeamData>>;
  userId: number;
  playersData: iPlayerData[];
}

export interface iDataNewTeam {
  userId?: number;
  name?: string;
  logo?: string;
}

export interface iDataNewPlayer {
  userId: number;
  teamId: number | null;
  name: string;
  position: null | string;
  number: string;
}

export interface iUpdatePlayer {
  userId: number;
  name: string;
  age: number;
  avatar: string;
  contact: string;
  position: null | string;
}

export interface iTeamData {
  userId: number;
  name: string;
  logo: string;
  id: number;
}

export interface iPlayerData {
  userId: number;
  teamId: number | null;
  name: string;
  number: string;
  position: null | string;
  id: number;
}

export interface iPlayer {
  name: string;
  position: string;
  number: string;
  userId: number;
  teamId: number;
  id: number;
}

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
  updatePlayer: (data: iUpdatePlayer) => Promise<void>;
  deletePlayer: () => Promise<void>;
  getPlayersFromATeam: () => Promise<void>;
  setPlayerId: React.Dispatch<React.SetStateAction<number | null>>;
  disableButton: boolean;
  teamId: number | null;
  teamData: iTeamData;
  setTeamData: React.Dispatch<React.SetStateAction<iTeamData>>;
}

export interface iDataNewTeam {
  userId: number;
  name: string;
  logo: string;
}

export interface iDataNewPlayer {
  userId: number;
  teamId: number | null;
  name: string;
  position: null | string;
  number: number;
  avatar?: string;
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

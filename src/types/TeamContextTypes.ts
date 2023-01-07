import { ReactNode } from "react";

export interface iTeamProvider {
  children: ReactNode;
}

export interface iTeamContext {
  createNewTeam: (data: iDataNewTeam) => Promise<void>;
  updateTeam: (data: iUpdateTeam) => Promise<void>;
  deleteTeam: () => Promise<void>;
  getAllTeams: () => Promise<void>;
  getMyTeam: () => Promise<void>;
  createNewPlayer: (data: iDataNewPlayer) => Promise<void>;
  updatePlayer: (data: iUpdatePlayer) => Promise<void>;
  deletePlayer: () => Promise<void>;
  getPlayersFromATeam: () => Promise<void>;
}

export interface iDataNewTeam {
  userId: number;
  name: string;
  logo: string;
}

export interface iUpdateTeam {
  userId: number;
  name: string;
  logo: string;
}

export interface iDataNewPlayer {
  userId: number;
  teamId: number;
  name: string;
  age: number;
  position: null | string;
  number: number;
}

export interface iUpdatePlayer {
  userId: number;
  name: string;
  age: number;
  avatar: string;
  contact: string;
  position: null | string;
}

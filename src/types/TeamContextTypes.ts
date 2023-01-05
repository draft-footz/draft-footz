import { ReactNode } from "react";

export interface iTeamProvider {
  children: ReactNode;
}

export interface iTeamContext {
  createNewTeam: (data: iDataNewTeam, token: string) => Promise<void>;
  updateTeam: (data: iUpdateTeam, id: tId, token: string) => Promise<void>;
  deleteTeam: (data: number, id: tId, token: string) => Promise<void>;
  getAllTeams: () => Promise<void>;
  getMyTeam: (id: tId) => Promise<void>;
  createNewPlayer: (data: iDataNewPlayer, token: string) => Promise<void>;
  updatePlayer: (data: iUpdatePlayer, id: tId, token: string) => Promise<void>;
  deletePlayer: (userId: number, id: tId, token: string) => Promise<void>;
  getPlayersFromATeam: (id: tId) => Promise<void>;
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
  avatar: string;
  contact: string;
  position: null | string;
}

export interface iUpdatePlayer {
  userId: number;
  name: string;
  age: number;
  avatar: string;
  contact: string;
  position: null | string;
}

export type tId = number;

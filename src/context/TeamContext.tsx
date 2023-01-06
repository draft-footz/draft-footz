import { createContext, useState } from "react";
import { api } from "../services/api";
import {
  iDataNewPlayer,
  iDataNewTeam,
  iTeamContext,
  iTeamProvider,
  iUpdatePlayer,
  iUpdateTeam,
} from "../types/TeamContextTypes";

const TeamContext = createContext({} as iTeamContext);

export const TeamProvider = ({ children }: iTeamProvider) => {
  //const token = localStorage.getItem("@token");
  //const userId = localStorage.getItem("@userId");
  //const teamId = localStorage.getItem("@teamId");
  const [playerId, setPlayerId] = useState<number | null>(null);

  async function createNewTeam(data: iDataNewTeam) {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.post("teams", data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateTeam(data: iUpdateTeam) {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.patch(`teams/${teamId}`, data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTeam() {
    let data = {
      userId: userId,
    };

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.delete(`teams/${teamId}`, {
        data: data,
      });
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllTeams() {
    try {
      const requisition = await api.get("teams");
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function getMyTeam() {
    try {
      const requisition = await api.get(`teams/${teamId}`);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function createNewPlayer(data: iDataNewPlayer) {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.post("players", data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function updatePlayer(data: iUpdatePlayer) {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.patch(`players/${playerId}`, data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePlayer() {
    let data = {
      userId: userId,
    };

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.delete(`teams/${playerId}`, {
        data: data,
      });
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPlayersFromATeam() {
    try {
      const requisition = await api.get(`players?&teamId=${playerId}`);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <TeamContext.Provider
      value={{
        createNewTeam,
        updateTeam,
        deleteTeam,
        getAllTeams,
        getMyTeam,
        createNewPlayer,
        updatePlayer,
        deletePlayer,
        getPlayersFromATeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

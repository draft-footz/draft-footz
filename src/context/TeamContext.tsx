import { createContext } from "react";
import { api } from "../services/api";
import {
  iDataNewPlayer,
  iDataNewTeam,
  iTeamContext,
  iTeamProvider,
  iUpdatePlayer,
  iUpdateTeam,
  tId,
} from "../types/TeamContextTypes";

const TeamContext = createContext({} as iTeamContext);

export const TeamProvider = ({ children }: iTeamProvider) => {
  async function createNewTeam(data: iDataNewTeam, token: string) {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.post("teams", data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateTeam(data: iUpdateTeam, id: tId, token: string) {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.patch(`teams/${id}`, data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteTeam(userId: number, id: tId, token: string) {
    let data = {
      userId: userId,
    };

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.delete(`teams/${id}`, {
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

  async function getMyTeam(id: tId) {
    try {
      const requisition = await api.get(`teams/${id}`);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function createNewPlayer(data: iDataNewPlayer, token: string) {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.post("players", data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function updatePlayer(data: iUpdatePlayer, id: tId, token: string) {
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.patch(`players/${id}`, data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePlayer(userId: number, id: tId, token: string) {
    let data = {
      userId: userId,
    };

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.delete(`teams/${id}`, {
        data: data,
      });
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  async function getPlayersFromATeam(id: tId) {
    try {
      const requisition = await api.get(`players?&teamId=${id}`);
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

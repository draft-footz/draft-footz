import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import {
  iDataNewPlayer,
  iDataNewTeam,
  iTeamContext,
  iTeamProvider,
  iUpdatePlayer,
} from "../types/TeamContextTypes";

import { UserContext } from "./UsersContext";

export const TeamContext = createContext({} as iTeamContext);

export const TeamProvider = ({ children }: iTeamProvider) => {
  const { user, token } = useContext(UserContext);

  const userId = user.id;
  const teamId = user.myTeam;

  const [playerId, setPlayerId] = useState<number | null>(null);

  async function createNewTeam(data: iDataNewTeam) {
    data.userId = userId;
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.post("teams", data);
      if (requisition.status === 201) {
        //toast de sucesso
        //direcionar para a página do time - componente MyTeamDetails
      }
      console.log(requisition);
    } catch (err) {
      console.log(err);
      //toast de erro
    }
  }

  async function updateTeam(data: iDataNewTeam) {
    data.userId = userId;
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.patch(`teams/${teamId}`, data);
      if (requisition.status === 200) {
        //toast de sucesso
        //direcionar para a página do time - componente MyTeamDetails
      }
      console.log(requisition);
    } catch (err) {
      console.log(err);
      //toast de erro
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
    data.userId = userId;
    data.teamId = teamId;
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.post("players", data);
      if (requisition.status === 201) {
        //toast de sucesso
        //direcionar para a página do time - componente MyTeamPlayers
      }
      console.log(requisition);
    } catch (err) {
      console.log(err);
      //toast de erro
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
      if (requisition.status === 200) {
        //toast de sucesso
        //renderizar a lista de jogadores novamente
      }
      console.log(requisition);
    } catch (err) {
      console.log(err);
      //toast de erro
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
        setPlayerId,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

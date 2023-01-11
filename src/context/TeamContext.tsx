import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import {
  iDataNewPlayer,
  iDataNewTeam,
  iPlayerData,
  iTeamContext,
  iTeamData,
  iTeamProvider,
  iUpdatePlayer,
} from "../types/TeamContextTypes";
import { TournamentContext } from "./TournamentContext";

import { UserContext } from "./UsersContext";

export const TeamContext = createContext({} as iTeamContext);

export const TeamProvider = ({ children }: iTeamProvider) => {
  const { user, token, updateUserTeam } = useContext(UserContext);
  const { setDashboardPage } = useContext(TournamentContext);
  const [disableButton, setDisableButton] = useState(false);
  const [teamData, setTeamData] = useState({} as iTeamData);
  const [playersData, setPlayersData] = useState<iPlayerData[]>([]);

  const userId = user.id;
  const teamId = user.teamId;

  //const [playerId, setPlayerId] = useState<number | null>(null);

  async function createNewTeam(data: iDataNewTeam) {
    data.userId = userId;
    setDisableButton(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.post("teams", data);
      if (requisition.status === 201) {
        toast.success("Time criado com sucesso!");
        updateUserTeam(requisition.data.id);
        setTeamData(requisition.data);
        setDashboardPage(15);
      }
    } catch (err) {
      toast.error("Ops...algo deu errado!");
    } finally {
      setDisableButton(true);
    }
  }

  async function updateTeam(data: iDataNewTeam) {
    data.userId = userId;
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.patch(`teams/${teamId}`, data);
      if (requisition.status === 200) {
        toast.success("Alterações no time feitas com sucesso!");
        setDashboardPage(15);
      }
    } catch (err) {
      toast.error("Ops...algo deu errado!");
    }
  }

  async function deleteTeam() {
    let data = {
      userId: userId,
    };

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.delete(`teams/${teamId}`, {
        data: data,
      });
      updateUserTeam(null);
    } catch (err) {
      toast.error("Ops...algo deu errado!");
    }
  }

  async function getAllTeams() {
    try {
      await api.get("teams");
    } catch (err) {
      toast.error("Ops...algo deu errado!");
    }
  }

  async function createNewPlayer(data: iDataNewPlayer) {
    data.userId = userId;
    data.teamId = teamId;

    await getPlayersFromATeam();
    let checkPosition = playersData.filter((e) => {
      return e.position === data.position;
    });

    let checkNumber = playersData.filter((e) => {
      return e.number === data.number;
    });

    if (checkPosition.length > 0) {
      toast.error("Já existe um jogador nessa posição!");
      return;
    }

    if (checkNumber.length > 0) {
      toast.error("Já existe um jogador com esse número!");
      return;
    }

    setDisableButton(true);
    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const requisition = await api.post("players", data);
      if (requisition.status === 201) {
        toast.success("Jogador criado com sucesso!");
        setDashboardPage(16);
      }
    } catch (err) {
      toast.error("Ops...algo deu errado!");
    } finally {
      setDisableButton(true);
    }
  }

  //async function updatePlayer(data: iUpdatePlayer) {
  //  try {
  //    api.defaults.headers.common.authorization = `Bearer ${token}`;
  //    await api.patch(`players/${playerId}`, data);
  //  } catch (err) {
  //    toast.error("Ops...algo deu errado!");
  //  }
  //}

  async function deletePlayer(playerId: number) {
    let data = {
      userId: userId,
    };

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.delete(`players/${playerId}`, {
        data: data,
      });
      toast.success("Jogador excluído com sucesso!");
    } catch (err) {
      toast.error("Ops...algo deu errado!");
    }
  }

  async function getPlayersFromATeam() {
    try {
      const requisition = await api.get(`players?&teamId=${teamId}`);
      setPlayersData(requisition.data);
    } catch (err) {
      toast.error("Ops...algo deu errado!");
    }
  }

  return (
    <TeamContext.Provider
      value={{
        createNewTeam,
        updateTeam,
        deleteTeam,
        getAllTeams,
        createNewPlayer,
        deletePlayer,
        getPlayersFromATeam,
        disableButton,
        teamId,
        teamData,
        setTeamData,
        userId,
        playersData,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../../context/UsersContext";
import { api } from "../../../../services/api";
import { StyledUlTournaments } from "./style";
import { TournamentCard } from "./TournamentCard";

interface iTournament {
  userId: number;
  name: string;
  type: string;
  numberOfTeams: number;
  champion: string | null;
  id: number;
}

interface iSubscription {
  id: number;
  tournament: number;
  teamId: number;
  accepted: boolean;
}

interface iTeam {
  userId: number;
  name: string;
  logo: string;
  id: number;
}

export const TournamentsList = () => {
  const token = localStorage.getItem("@draft-footz/userToken");
  api.defaults.headers.common.authorization = `Bearer ${token}`;

  const { user } = useContext(UserContext);

  const [tournaments, setTournaments] = useState([] as iTournament[]);
  const [subscriptions, setSubscriptions] = useState([] as iSubscription[]);
  const [team, setTeam] = useState({} as iTeam);

  async function getTournaments() {
    const { data } = await api.get("tournaments");
    setTournaments(data);
  }

  async function getSubscriptions() {
    try {
      const { data } = await api.get(`subscriptions`);
      setSubscriptions(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getTeam(id: number) {
    const { data } = await api.get(`/teams/${id}`);
    setTeam(data);
  }

  function updateAll() {
    getSubscriptions();
    getTournaments();
    if (user.teamId != null) {
      getTeam(user.teamId);
    }
  }

  useEffect(() => {
    getSubscriptions();
    getTournaments();
    if (user.teamId != null) {
      getTeam(user.teamId);
    }
  }, []);

  return (
    <StyledUlTournaments>
      {tournaments.map((e, i) => (
        <TournamentCard
          key={i}
          subscriptions={subscriptions}
          tournament={e}
          team={team}
          updateAll={updateAll}
        />
      ))}
    </StyledUlTournaments>
  );
};

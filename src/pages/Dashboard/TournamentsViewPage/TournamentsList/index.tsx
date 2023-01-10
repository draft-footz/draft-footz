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
  tournamentId: number;
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
  const token = localStorage.getItem("@authToken");
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
    const { data } = await api.get(`subscriptions`);
    setSubscriptions(data);
  }

  async function getTeam(id: number) {
    const { data } = await api.get(`/teams/${id}`);
    setTeam(data);
  }

  useEffect(() => {
    getTournaments();
    getSubscriptions();

    if (user.teamId != null) {
      getTeam(user.teamId);
    }
  }, []);

  return (
    <StyledUlTournaments>
      {tournaments.map((e, i) => (
        <TournamentCard
          key={i}
          tournament={e}
          subscriptions={subscriptions}
          team={team}
        />
      ))}
    </StyledUlTournaments>
  );
};

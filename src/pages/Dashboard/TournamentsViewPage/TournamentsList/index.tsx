import React, { useEffect, useState } from "react";
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

export const TournamentsList = () => {
  const token = localStorage.getItem("@authToken");
  api.defaults.headers.common.authorization = `Bearer ${token}`;

  const [tournaments, setTournaments] = useState([] as iTournament[]);
  const [subscriptions, setSubscriptions] = useState([] as iSubscription[]);

  async function getTournaments() {
    const { data } = await api.get("tournaments");
    setTournaments(data);
  }

  async function getSubscriptions() {
    const { data } = await api.get("/subscriptions");
    setSubscriptions(data);
  }

  useEffect(() => {
    getTournaments();
    getSubscriptions();
  }, []);

  return (
    <StyledUlTournaments>
      {tournaments.map((e, i) => (
        <TournamentCard key={i} tournament={e} subscriptions={subscriptions} />
      ))}
    </StyledUlTournaments>
  );
};

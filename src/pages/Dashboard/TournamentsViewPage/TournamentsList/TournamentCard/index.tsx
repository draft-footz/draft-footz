import React, { useEffect, useState } from "react";
import { api } from "../../../../../services/api";
import { StyledTournamentCard } from "./style";

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

interface iProps {
  tournament: iTournament;
  subscriptions: iSubscription[];
}

export const TournamentCard = ({ tournament, subscriptions }: iProps) => {
  const [isSubscribed, setSubscribed] = useState(false);

  const [countSubscriptions, setCountSubscriptions] = useState(0);

  const myTeam = {
    userId: 1,
    name: "Kenzie FC",
    logo: "https://imgs.search.brave.com/B9RMHDqmhcs6PqdPKbzkPdzqdx1eZzjjBwq4cuX01SU/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/QnNGVk1pdzR6Nk9x/Y3VJQm14UWJRSGFI/YSZwaWQ9QXBp",
    id: 4,
  };

  function filterData() {
    const subscriptionsToThisTournament = subscriptions.filter(
      (e: iSubscription) => e.tournamentId === tournament.id
    );

    if (
      subscriptionsToThisTournament.find((e: any) => e.teamId === myTeam.id)
    ) {
      setSubscribed(true);
    }

    const teamsAccepted = subscriptionsToThisTournament.reduce(
      (s: number, e: iSubscription) => {
        return e.accepted === true ? s + 1 : s;
      },
      0
    );

    setCountSubscriptions(teamsAccepted);
  }

  useEffect(() => {
    filterData();
  });

  return (
    <StyledTournamentCard>
      <div>
        <img src="/trofeu.svg" alt="" />
        <h3>{tournament.name}</h3>
      </div>
      <div>
        <span>
          {countSubscriptions}/{tournament.numberOfTeams} times
        </span>
        <button type="button" disabled={isSubscribed}>
          {isSubscribed ? "Cadastrado" : "Entrar"}
        </button>
      </div>
    </StyledTournamentCard>
  );
};

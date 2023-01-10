import React, { useEffect, useState } from "react";
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

interface iTeam {
  userId: number;
  name: string;
  logo: string;
  id: number;
}

interface iProps {
  tournament: iTournament;
  subscriptions: iSubscription[];
  team: iTeam;
}

export const TournamentCard = ({ tournament, subscriptions, team }: iProps) => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [countSubscriptions, setCountSubscriptions] = useState(0);

  function filterData() {
    const subscriptionsToThisTournament = subscriptions.filter(
      (e: iSubscription) => e.tournamentId === tournament.id
    );

    if (subscriptionsToThisTournament.find((e: any) => e.teamId === team.id)) {
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

  useEffect(()=>{
    if(team){
      filterData()
    }
  }, [])

  console.log(team);
  

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
        {team.id &&
          <button type="button" disabled={isSubscribed}>
            {isSubscribed ? "Cadastrado" : "Entrar"}
          </button>
        }
      </div>
    </StyledTournamentCard>
  );
};

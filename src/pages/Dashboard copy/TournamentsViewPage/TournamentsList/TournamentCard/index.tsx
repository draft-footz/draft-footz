import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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

interface iProps {
  tournament: iTournament;
  subscriptions: iSubscription[];
  team: iTeam;
  updateAll: () => void;
}

export const TournamentCard = ({
  tournament,
  subscriptions,
  team,
  updateAll,
}: iProps) => {
  let token = localStorage.getItem("@draft-footz/userToken");

  api.defaults.headers.common.authorization = `Bearer ${token}`;

  const [isSubscribed, setSubscribed] = useState(false);
  const [countSubscriptions, setCountSubscriptions] = useState(0);

  function filterData() {
    const subscriptionsToThisTournament = subscriptions.filter(
      (e: iSubscription) => e.tournament === tournament.id
    );

    if (subscriptionsToThisTournament.find((e: any) => e.team.id === team.id)) {
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

  async function sendInscription() {
    const data = {
      tournament: tournament.id,
      team: {
        id: team.id,
        name: team.name
      },
      accepted: false,
    };

    const subscriptionsToThisTournament = subscriptions.filter(
      (e: iSubscription) => e.tournament === tournament.id
    );

    if (subscriptionsToThisTournament.find((e: any) => e.team.id === team.id)) {
      setSubscribed(true);
      toast.error("Você já está inscrito");
      return;
    }

    try {
      await api.post("/subscriptions", data);
      toast.success("Pedido de inscrição enviado");
    } catch (error) {
      toast.error("Não foi possível fazer a inscrição");
    } finally {
      updateAll();
    }
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
        {team.id && (
          <button
            type="button"
            disabled={isSubscribed}
            onClick={() => sendInscription()}
          >
            {isSubscribed ? "Cadastrado" : "Entrar"}
          </button>
        )}
      </div>
    </StyledTournamentCard>
  );
};

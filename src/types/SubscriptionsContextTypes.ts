import { ReactNode } from "react";

export interface iSubscriptionsProvider {
    children: ReactNode;
};

export interface iSubscriptionsContext {
    subscriptions: iSubscriptionData[];
    getTournamentSubscriptions: (tournamentId: number) => void;
}

export interface iSubscriptionData {
    team: {
        id: number;
        name: string;
    };
    tournamentId: number;
    accepted: boolean;
    id: number;
};
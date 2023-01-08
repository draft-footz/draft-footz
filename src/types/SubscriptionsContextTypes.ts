import { ReactNode } from "react";

export interface iSubscriptionsProvider {
    children: ReactNode;
};

export interface iSubscriptionsContext {
    subscriptions: iSubscriptionData[];
}

export interface iSubscriptionData {
    teamId: number,
    tournamentId: number,
    accepted: boolean,
    id: number
};
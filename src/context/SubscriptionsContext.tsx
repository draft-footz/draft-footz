import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iSubscriptionData, iSubscriptionsContext, iSubscriptionsProvider } from "../types/SubscriptionsContextTypes";
import { TournamentContext } from "./TournamentContext";
import { UserContext } from "./UsersContext";

export const SubscriptionsContext = createContext({} as iSubscriptionsContext);

export const SubscriptionsProvider = ({children}: iSubscriptionsProvider) => {

    const { readingTournament } = useContext(TournamentContext);
    const { token, user } = useContext(UserContext);

    useEffect(() => {
        if(readingTournament) {
            getTournamentSubscriptions(readingTournament.id);
        }
    }, [readingTournament]);

    // Subscriptions Data
    const [subscriptions, setSubscriptions] = useState([] as iSubscriptionData[]);

    // Functions

    async function getTournamentSubscriptions(tournamentId: number) {
        try {   
            api.get<iSubscriptionData[]>('subscriptions', {
                params: { tournamentId: tournamentId }
            })
            .then((response) => {
                setSubscriptions(response.data);
            });
        } catch {
            toast.error('Falha ao ler pedidos de inscrição do torneio.');
            setSubscriptions([]);
        };
    };

    async function deleteSubscription(subscriptionId: number) {
        try {
            api.delete(`subscriptions/${subscriptionId}`, {
                headers: { authorization:  `Bearer ${token}`},
                data: { userId: user.id }
            })
        }  catch {
            console.log("falha ao deletar subscription")
        }
    }

    async function deleteAllTournamentSubscriptions(tournamentId: number) {
        let tournamentSubscriptions = [] as iSubscriptionData[];
        try {   
            api.get<iSubscriptionData[]>('subscriptions', {
                params: { tournamentId: tournamentId }
            })
            .then((response) => {
                tournamentSubscriptions = response.data;
            });
        } finally {
            if(tournamentSubscriptions) {
                tournamentSubscriptions.forEach(subscription => deleteSubscription(subscription.id))
            }
        }
    };

    return (
        <SubscriptionsContext.Provider value={{
            subscriptions,
            getTournamentSubscriptions,
            deleteAllTournamentSubscriptions
        }} >
            {children}
        </SubscriptionsContext.Provider>
    )
} 
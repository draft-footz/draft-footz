import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iSubscriptionData, iSubscriptionsContext, iSubscriptionsProvider } from "../types/SubscriptionsContextTypes";
import { TournamentContext } from "./TournamentContext";

export const SubscriptionsContext = createContext({} as iSubscriptionsContext);

export const SubscriptionsProvider = ({children}: iSubscriptionsProvider) => {

    const { readingTournament } = useContext(TournamentContext);

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

    return (
        <SubscriptionsContext.Provider value={{
            subscriptions,
            getTournamentSubscriptions
        }} >
            {children}
        </SubscriptionsContext.Provider>
    )
} 
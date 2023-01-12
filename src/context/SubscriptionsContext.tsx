import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iSubscriptionData, iSubscriptionsContext, iSubscriptionsProvider } from "../types/SubscriptionsContextTypes";
import { iTeamData } from "../types/TeamContextTypes";
import { TournamentContext } from "./TournamentContext";
import { UserContext } from "./UsersContext";

export const SubscriptionsContext = createContext({} as iSubscriptionsContext);

export const SubscriptionsProvider = ({children}: iSubscriptionsProvider) => {

    const { readingTournament } = useContext(TournamentContext);
    const { token } = useContext(UserContext);
    const [ updater, setUpdater ] = useState(0);

    const refreshSubscriptions = () => setUpdater(updater+1);
    

    useEffect(() => {
        console.log(`readingTournament`, readingTournament);
        console.log(`updater`, updater)
        if(readingTournament) {
            getTournamentSubscriptions(readingTournament.id);
            console.log(subscriptions)
        }
    }, [readingTournament, updater]);

    // Subscriptions Data
    const [subscriptions, setSubscriptions] = useState([] as iSubscriptionData[]);

    // Functions
    async function askToSubscribe(tournamentId: number, team: iTeamData) {
        let data = {
            tournament: tournamentId,
            team: {
                name: team.name,
                id: team.id
            },
            accepted: false
        }
        try {
            api.post('subscriptions', data, {
                headers: { authorization: `Bearer ${token}` }
            })
            .then(() => {
                toast.success('Pedido de inscrição feito com sucesso!')
            })
        } catch {
            toast.error('Falha na inscrição')
        }
    }

    async function getTournamentSubscriptions(tournamentId: number) {
        try {   
            api.get<iSubscriptionData[]>(`subscriptions?&tournamentId=${tournamentId}`)
            .then((response) => {
                setSubscriptions(response.data);
            });
        } catch {
            toast.error('Falha ao ler pedidos de inscrição do torneio.');
        };
    };

    async function deleteSubscription(subscriptionId: number) {
        await api.delete(`subscriptions/${subscriptionId}`, {
            headers: { authorization:  `Bearer ${token}`}
        });
    };

    async function deleteAllTournamentSubscriptions(tournamentId: number) {
        let tournamentSubscriptions = [] as iSubscriptionData[];
        try {   
            api.get<iSubscriptionData[]>(`subscriptions?&tournamentId=${tournamentId}`)
            .then((response) => {
                tournamentSubscriptions = response.data;
                console.log(tournamentSubscriptions);
            })
        } finally {
            if(tournamentSubscriptions) {
                tournamentSubscriptions.forEach(subscription => deleteSubscription(subscription.id))
            }
        };
    };

    async function updateSubscription(subscriptionId: number, accepted: boolean) {
        let data = {
            accepted: accepted
        };
        try {
            api.patch(`subscriptions/${subscriptionId}`, data , {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
        } catch {
            console.log('deu ruim')
        } finally {
            refreshSubscriptions();
        }
    }

    return (
        <SubscriptionsContext.Provider value={{
            subscriptions,
            getTournamentSubscriptions,
            deleteAllTournamentSubscriptions,
            updateSubscription,
            askToSubscribe,
            refreshSubscriptions
        }} >
            {children}
        </SubscriptionsContext.Provider>
    )
} 
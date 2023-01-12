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
        if(readingTournament) {
            getTournamentSubscriptions(readingTournament.id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [readingTournament, updater]);

    // Subscriptions Data
    const [subscriptions, setSubscriptions] = useState([] as iSubscriptionData[]);
    const [allSubscriptions, setAllSubscriptions] = useState([] as iSubscriptionData[]);

    // Functions
    async function askToSubscribe(tournamentId: number, team: iTeamData) {
        let data = {
            tournamentId: tournamentId,
            team: {
                name: team.name,
                id: team.id
            },
            accepted: false
        }
        try {
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            api.post('subscriptions', data)
            .then((res) => {
                toast.success('Pedido de inscrição feito com sucesso!');   
            })
        } catch {
            toast.error('Falha na inscrição')
        }
    }

    async function getAllSubscriptions() {
        await api.get<iSubscriptionData[]>(`subscriptions`)
        .then((response) => {
            setAllSubscriptions(response.data);
        });
    }

    async function getTournamentSubscriptions(tournamentId: number) {
        try {   
            await api.get<iSubscriptionData[]>(`subscriptions?&tournamentId=${tournamentId}`)
            .then((response) => {
                setSubscriptions(response.data);
                getAllSubscriptions();
            });
        } catch {
            toast.error('Falha ao ler pedidos de inscrição do torneio.');
        };
    };

    async function returnTournamentSubscriptions(tournamentId: number, setState: React.Dispatch<React.SetStateAction<iSubscriptionData[]>>) {
        try {   
            const response = await api.get<iSubscriptionData[]>(`subscriptions?&tournamentId=${tournamentId}`)
            if(response.status === 200) {
                setState(response.data);
            }
        } catch {
            setState([]);
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
            await api.get<iSubscriptionData[]>(`subscriptions?&tournamentId=${tournamentId}`, {
                headers: { authorization: `Bearer ${token}`}
            })
            .then((response) => { tournamentSubscriptions = response.data})

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
            refreshSubscriptions,
            returnTournamentSubscriptions,
            allSubscriptions
        }} >
            {children}
        </SubscriptionsContext.Provider>
    )
} 
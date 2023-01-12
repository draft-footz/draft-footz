import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iMatchData, iMatchesContext, iMatchesProvider, iMatchScores, iMatchTeams } from "../types/MatchesContextTypes";
import { failMatch } from "../utils/toast";
import { SubscriptionsContext } from "./SubscriptionsContext";
import { TournamentContext } from "./TournamentContext";
import { UserContext } from "./UsersContext";
export const MatchesContext = createContext({} as iMatchesContext);

export const MatchesProvider = ({children}: iMatchesProvider) => {
    const { user, token }         = useContext(UserContext);
    const { readingTournament }   = useContext(TournamentContext);
    const { updateSubscription }  = useContext(SubscriptionsContext);
    const [ updater, setUpdater ] = useState(true);

    // Matches Data
    const [tournamentMatches, setTournamentMatches] = useState([] as iMatchData[]);
    useEffect(() => {
        if(readingTournament) {
            readThisTournamentMatches(readingTournament.id);
        };
    }, [readingTournament, updater]);

    const semiFinalsI  = tournamentMatches.find(match => match.order === 5);
    const semiFinalsII = tournamentMatches.find(match => match.order === 6);
    const grandFinal   = tournamentMatches.find(match => match.order === 7);
    // Functions
    async function createTournamentMatch(tournamentId: number, order: number) {
        let data = {
            userId: user.id,
            tournamentId: tournamentId,
            order: order,
        };
        try {
            api.post<iMatchData>('matches', data, {
                headers: { authorization: `Bearer ${token}`}
            });
        } catch {
            failMatch()
        };
    };
    async function createMultipleTournamentMatches(tournamentId: number, numberOfMatches: number) {
        let created = 0;
        while ( numberOfMatches > created){
            createTournamentMatch(tournamentId, created+1)
            created++
        };
    };
    async function deleteTournamentMatch(matchId: number) {
        api.delete(`matches/${matchId}`, {
            headers : { authorization: `Bearer ${token}`},
            data: { userId: user.id }
        })
    };
    async function deleteAllMatchesFromTournament(tournamentId: number) {
        await api.get<iMatchData[]>(`matches?&tournamentId=${tournamentId}`)
        .then((response) => response.data.map(match => match.id))
        .then((response) => response.forEach(id => {
            deleteTournamentMatch(id);
        }));
    };
    async function readThisTournamentMatches(tournamentId: number) {
        await api.get<iMatchData[]>(`matches?&tournamentId=${tournamentId}`)
        .then((response) => setTournamentMatches(response.data));
    };
    async function updateMatchTeams(matchId: number, data: iMatchTeams, subscriptions?: number[]) {
        try {
            api.patch(`matches/${matchId}`, data, { headers: { authorization: `Bearer ${token}`}})
            .then(() => {
                toast.success('Você definiu os times da partida com sucesso!');
                setUpdater(!updater);
                if(subscriptions){
                    subscriptions.forEach(sub => updateSubscription(sub, true))
                };
            });
        } catch {
            toast.error('Falha ao definir times da partida.');
        };
    };

    async function updateMatchScores(matchId: number,data: iMatchScores, order: number) {
        try {
            api.patch(`matches/${matchId}`, data, { headers: { authorization: `Bearer ${token}`}})
            .then(() => {
                toast.success('Você definiu o palcar da partida com sucesso!');
                setUpdater(!updater);
                if ( order === 1) {
                    if(semiFinalsI) { updateMatchTeams(semiFinalsI.id, {
                        teamA: {
                            id: data.winner.id,
                            name: data.winner.name
                        }
                    })};
                 };
                 if ( order === 2) {
                    if(semiFinalsI) { updateMatchTeams(semiFinalsI.id, {
                        teamB: {
                            id: data.winner.id,
                            name: data.winner.name
                        }
                    })};
                 };
                 if ( order === 3) {
                    if(semiFinalsII) { updateMatchTeams(semiFinalsII.id, {
                        teamA: {
                            id: data.winner.id,
                            name: data.winner.name
                        }
                    })};
                 };
                 if ( order === 4) {
                    if(semiFinalsII) { updateMatchTeams(semiFinalsII.id, {
                        teamB: {
                            id: data.winner.id,
                            name: data.winner.name
                        }
                    })};
                 };
                 if ( order === 5) {
                    if(grandFinal) { updateMatchTeams(grandFinal.id, {
                        teamA: {
                            id: data.winner.id,
                            name: data.winner.name
                        }
                    })};
                 };
                 if ( order === 6) {
                    if(grandFinal) { updateMatchTeams(grandFinal.id, {
                        teamB: {
                            id: data.winner.id,
                            name: data.winner.name
                        }
                    })};
                 };
                 
            });
        } catch {
            toast.error('Falha ao definir placar da partida.');
        };
    };
    return (
        <MatchesContext.Provider value={{
            createMultipleTournamentMatches,
            deleteAllMatchesFromTournament,
            createTournamentMatch,
            tournamentMatches,
            updateMatchTeams,
            updateMatchScores
        }} >
            {children}
        </MatchesContext.Provider>
    );
} ;
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iMatchData, iMatchesContext, iMatchesProvider, iMatchScores, iMatchTeams } from "../types/MatchesContextTypes";
import { failMatch } from "../utils/toast";
import { TournamentContext } from "./TournamentContext";
import { UserContext } from "./UsersContext";


export const MatchesContext = createContext({} as iMatchesContext);

export const MatchesProvider = ({children}: iMatchesProvider) => {

    const { user, token } = useContext(UserContext);
    const { readingTournament } = useContext(TournamentContext)

    // Matches Data
    const [tournamentMatches, setTournamentMatches] = useState([] as iMatchData[]);

    useEffect(() => {
        if(readingTournament) {
            readThisTournamentMatches(readingTournament.id);
        };
        console.log(tournamentMatches)
    }, [readingTournament]);

    // Functions
    async function createTournamentMatch(tournamentId: number, order: number) {
        let data = {
            userId: user.id,
            tournamentId: tournamentId,
            order: order,
        };


        try {
            console.log(`Criando partida ${order}`)
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
        try {
            api.delete(`matches/${matchId}`, {
                headers : { authorization: `Bearer ${token}`},
                data: { userId: user.id }
            })
        } catch {
            console.log('deu ruim');
        };
    };

    async function deleteAllMatchesFromTournament(tournamentId: number) {
        try {
            await api.get<iMatchData[]>(`matches?&tournamentId=${tournamentId}`)
            .then((response) => response.data.map(match => match.id))
            .then((response) => response.forEach(id => {
                deleteTournamentMatch(id);
            }));
        } catch {
            console.log('Falha ao deletar partidas do torneio.');
        };
    };

    async function readThisTournamentMatches(tournamentId: number) {
        try {
            await api.get<iMatchData[]>(`matches?&tournamentId=${tournamentId}`)
            .then((response) => setTournamentMatches(response.data));
        } catch {
            console.log('Falha ao ler partidas do torenio.');
        };
    };

    /* async function updateMatchTeams(matchId: number, data: iMatchTeams) {
        try {
            api.patch(`matches/${matchId}`, {
                headers: { authorization : `Bearer ${token}`},
                data: data
            })
            .then(() => {
                toast.success('Você definiu os times da partida com sucesso!');
            });
        } catch {
            toast.error('Falha ao definir times da partida.');
        };
    }; */

    /* async function updateMatchScores(matchId: number,data: iMatchScores) {
        try {
            api.patch(`matches/${matchId}`, {
                headers: { authorization : `Bearer ${token}`},
                data: data
            })
            .then(() => {
                toast.success('Você definiu o palcar da partida com sucesso!');
            });
        } catch {
            toast.error('Falha ao definir placar da partida.')
        };
    }; */

    return (
        <MatchesContext.Provider value={{
            createMultipleTournamentMatches,
            deleteAllMatchesFromTournament,
            createTournamentMatch,
            tournamentMatches
        }} >
            {children}
        </MatchesContext.Provider>
    );
} ;
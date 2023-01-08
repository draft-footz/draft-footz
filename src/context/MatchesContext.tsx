import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iMatchesContext, iMatchesProvider, iMatchScores, iMatchTeams } from "../types/MatchesContextTypes";
import { TournamentContext } from "./TournamentContext";
import { UserContext } from "./UsersContext";

export const MatchesContext = createContext({} as iMatchesContext);

export const MatchesProvider = ({children}: iMatchesProvider) => {

    const { readingTournament } = useContext(TournamentContext);
    const { user, token } = useContext(UserContext);

    // Matches Data
    const [tournamentMatches, setTournamentMatches] = useState([]);

    // Functions

    function createTournamentMatch(order: number) {
        if(readingTournament) {
            let data = {
                tournamentId: readingTournament.id,
                order: order,
                teamA: null,
                teamB: null,
                winner: null
            }
            try {
                api.post('matches', data);
            } catch {
                toast.error('Falha ao criar partida.');
            };
        };
    };

    function createMultipleTournamentMatches(numberOfMatches: number) {
        let created = 0;
        while ( numberOfMatches > created){
            createTournamentMatch(created+1)
            created++
        };
    };

    function updateMatchTeams(matchId: number, data: iMatchTeams) {
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
        }
       
    };

    function updateMatchScores(matchId: number,data: iMatchScores) {
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
    };

    return (
        <MatchesContext.Provider value={{
            createMultipleTournamentMatches
        }} >
            {children}
        </MatchesContext.Provider>
    )
} 
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iDataCreateTournament, iDataTournament, iDataUpdateTournament, iTournamentContext, iTournamentProvider } from "../types/TournamentContextTypes";

export const TournamentContext = createContext({} as iTournamentContext);

export const TournamentProvider = ({children}: iTournamentProvider) => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NzI5NTA0MTEsImV4cCI6MTY3Mjk1NDAxMSwic3ViIjoiMiJ9._7cTlq2gDBmrq0RIIdkbdTeunDJeD-lU21sVhbpR0_Q";
    const [userId, setUserId]                 = useState<number>(2);
    const [tournamentId, setTournamentId]     = useState<number | null>(null);
    const [tournamentData, setTournamentData] = useState<iDataTournament | null>(null);

    useEffect(() => {
        getMyTournaments();
    }, []);

    async function createNewTournament(data: iDataCreateTournament) {
        data.champion = null;
        data.userId  = userId;
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        if(!tournamentData) {
            try {
                const requisition = await api.post<iDataTournament>('tournaments', data)
                if(requisition.data.id){
                    setTournamentId(requisition.data.id);
                    setTournamentData(requisition.data);
                };
            } catch (err){
                toast.error('Falha na requisição');
            };
        } else {
            console.log("já possui um torneio em andamento")
        }
    };

    async function updateTournament(data: iDataUpdateTournament) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        try {
            const requisition = await api.patch<iDataTournament>(`tournaments/${tournamentId}`);
            console.log(requisition);
        } catch (err){
            console.log(err);
        };
    };

    async function getMyTournaments() {
        try {
            const requisition = await api.get<iDataTournament[]>(`tournaments?&userId=${userId}`);
            if(requisition.data){
                let findTournament = requisition.data.filter(tournament => !tournament.champion)
                let tournament = findTournament && findTournament[0]
                console.log(tournament)
                setTournamentId(tournament.id)
                setTournamentData(tournament);
            }
        } catch (err){
            console.log(err);
        };
    };

    async function getAllTournaments() {
        try {
            const requisition = await api.get(`tournaments`);
            console.log(requisition);
        } catch (err){
            console.log(err);
        };
    };

    async function setTournamentChampion(teamId: number, tournamentId: number) {

        api.defaults.headers.common.authorization = `Bearer ${token}`;
        
        let data = {
            champion: teamId
        };

        try {
            const requisition = await api.patch(`tournaments/${tournamentId}`, data);
            console.log(requisition);
        } catch (err){
            console.log(err);
        };
    };
    
    return (
        <TournamentContext.Provider value={{
            createNewTournament,
            updateTournament,
            getMyTournaments,
            getAllTournaments,
            setTournamentChampion,
            tournamentData
        }}>
            {children}
        </TournamentContext.Provider>
    );
};

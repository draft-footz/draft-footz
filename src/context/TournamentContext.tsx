import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iDataCreateTournament, iDataTournament, iDataUpdateTournament, iTournamentContext, iTournamentProvider } from "../types/TournamentContextTypes";
import { UserContext } from "./UsersContext";

export const TournamentContext = createContext({} as iTournamentContext);

export const TournamentProvider = ({children}: iTournamentProvider) => {

    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAdGVzdC5jb20iLCJpYXQiOjE2NzI5NTA0MTEsImV4cCI6MTY3Mjk1NDAxMSwic3ViIjoiMiJ9._7cTlq2gDBmrq0RIIdkbdTeunDJeD-lU21sVhbpR0_Q";
    const { user, token } = useContext(UserContext);

    const [tournamentData, setTournamentData] = useState({} as iDataTournament);

    useEffect(() => {
        getMyTournaments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function createNewTournament(data: iDataCreateTournament) {
        data.champion = null;
        data.userId  = user.id;
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        if(!tournamentData) {
            try {
                const requisition = await api.post<iDataTournament>('tournaments', data)
                if(requisition.data.id){
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
            const requisition = await api.patch<iDataTournament>(`tournaments/${tournamentData.id}`);
            console.log(requisition);
        } catch (err){
            console.log(err);
        };
    };

    async function getMyTournaments() {
        try {
            const requisition = await api.get<iDataTournament[]>(`tournaments?&userId=${user.id}`);
            if(requisition.data){
                let findTournament = requisition.data.filter(tournament => !tournament.champion)
                let tournament = findTournament && findTournament[0]
                console.log(tournament)
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

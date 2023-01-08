import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iDataCreateTournament, iDataTournament, iDataUpdateTournament, iTournamentContext, iTournamentProvider, tReadingTournament } from "../types/TournamentContextTypes";
import { UserContext } from "./UsersContext";

export const TournamentContext = createContext({} as iTournamentContext);

export const TournamentProvider = ({children}: iTournamentProvider) => {

    const { user, token } = useContext(UserContext);

    // Tournaments data
    const [myTournaments, setMyTournaments ] = useState([] as iDataTournament[]);
    const [allTournaments, setAllTournaments ] = useState([] as iDataTournament[]);

    const [tournamentData, setTournamentData] = useState({} as iDataTournament);

    // Dashboard page conditional rendering
    const [disableButton, setDisableButton] = useState(false);
    const [readingTournament, setReadingTournament] = useState(false as tReadingTournament);
    const [dashboardPage, setDashboardPage] = useState(7);

    useEffect(() => {
        getMyTournaments();
        console.log(myTournaments)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // Functions 
    async function createNewTournament(data: iDataCreateTournament) {
        data.champion = null;
        data.userId  = user.id;
        data.userName = user.name;
        data.type = "qualifiers";
        data.numberOfTeams = 8;

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        setDisableButton(true);

        if(!tournamentData) {
            try {
                await api.post<iDataTournament>("tournaments", data)
                .then((response) => {
                    setTournamentData(response.data);
                    toast.success("Torneio criado com sucesso!");
                    
                    getMyTournaments();
                    getAllTournaments();
                });
            } catch (err){
                toast.error("Falha ao criar torneio");
            } finally {
                setDisableButton(false);
            };
        } 
        else {
            toast.error("Você já possui um torneio em andamento");
            setDisableButton(false);
        };
    };

    async function updateTournament(data: iDataUpdateTournament) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        try {
            await api.patch<iDataTournament>(`tournaments/${tournamentData.id}`, data)
            .then(() => {
                toast.success('Torneio atualizado com sucesso!');
                getAllTournaments();
                getMyTournaments();
            })
        } catch (err){
            toast.error('Falha ao atualizar torneio.');
        };
    };
    
    async function setTournamentChampion(teamId: number, tournamentId: number) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        let data = { champion: teamId };

        try {
            await api.patch(`tournaments/${tournamentId}`, data)
            .then(() => {
                toast.success('Campeão do torneio foi definido com sucesso!');
            });
        } catch {
            toast.error('Falha ao definir campeão do torneio.');
        };
    };

    async function deleteTournament(tournamentId: number) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        let data = { userId: user.id };

        try {
            await api.delete(`tournaments/${tournamentId}`, { data: data})
            .then(() => {
                toast.success('Torneio deletado com sucesso!');
                getMyTournaments();
            });
        } catch {
            toast.error('Falha ao deletar torneio.')
        };
    };

    async function getMyTournaments() {
        try {
             await api.get<iDataTournament[]>(`tournaments?&userId=${user.id}`)
            .then((response) => {
                let findTournament = response.data.filter(tournament => !tournament.champion)
                let tournament = findTournament && findTournament[0]

                setTournamentData(tournament);
                setMyTournaments(response.data);
                setDashboardPage(2);
            });
        } catch {
            toast.error('Falha no servidor ao ler torneios.');
        };
    };

    async function getAllTournaments() {
        try {
            await api.get<iDataTournament[]>(`tournaments`)
            .then((response) => {
                setAllTournaments(response.data);
            });
        } catch {
            toast.error('Falha no servidor ao ler torneios.');
        };
    };
    
    return (
        <TournamentContext.Provider value={{
            createNewTournament,
            updateTournament,
            getMyTournaments,
            getAllTournaments,
            setTournamentChampion,
            tournamentData,
            disableButton,
            myTournaments,
            readingTournament,
            setReadingTournament,
            deleteTournament,
            dashboardPage,
            setDashboardPage,
            allTournaments,
            setAllTournaments
        }}>
            {children}
        </TournamentContext.Provider>
    );
};

import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { iDataCreateTournament, iDataTournament, iDataUpdateTournament, iTournamentContext, iTournamentProvider, tReadingTournament } from "../types/TournamentContextTypes";
import { UserContext } from "./UsersContext";

export const TournamentContext = createContext({} as iTournamentContext);

export const TournamentProvider = ({children}: iTournamentProvider) => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlbmFuQG1haWwuY29tIiwiaWF0IjoxNjczMTgxMzA5LCJleHAiOjE2NzMxODQ5MDksInN1YiI6IjMifQ.7SZ4YisRppfDs26OK1k6eH0p7UpI5hMsDD8uPNADY88";
    const user =  {
                    email: "renan@mail.com",
                    name: "Renan Dutra",
                    contact: "51984449218",
                    myTeam: null,
                    id: 3
                  };   
    
    //const { user, token } = useContext(UserContext);

    const [myTournaments, setMyTournaments ] = useState([] as iDataTournament[]);
    const [tournamentData, setTournamentData] = useState({} as iDataTournament);
    const [disableButton, setDisableButton] = useState(false);
    const [readingTournament, setReadingTournament] = useState(false as tReadingTournament);

    useEffect(() => {
        getMyTournaments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function createNewTournament(data: iDataCreateTournament) {
        data.champion = null;
        data.userId  = user.id;
        data.type = "qualifiers";
        data.numberOfTeams = 8;

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        (async () => {
            setDisableButton(true);
            if(!tournamentData) {
                try {
                    const requisition = await api.post<iDataTournament>("tournaments", data)
                    if(requisition.data.id){
                        setTournamentData(requisition.data);
                        getMyTournaments()
                        toast.success("Torneio criado com sucesso!");
                        console.log("Torneio criado com sucesso!");
                    };
                } catch (err){
                    toast.error("Falha na requisição");
                    console.log("Falha na requisição");
                } finally {
                    setDisableButton(false);
                };
            } else {
                toast.error("Você já possui um torneio em andamento");
                console.log("Você já possui um torneio em andamento");
                setDisableButton(false);
            }
        })()
       
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
        console.log('lul')
        try {
            const requisition = await api.get<iDataTournament[]>(`tournaments?&userId=${user.id}`);
            if(requisition.data){
                let findTournament = requisition.data.filter(tournament => !tournament.champion)
                let tournament = findTournament && findTournament[0]

                setTournamentData(tournament);
                setMyTournaments(requisition.data);
                console.log(requisition)
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
            tournamentData,
            disableButton,
            myTournaments,
            readingTournament,
            setReadingTournament
        }}>
            {children}
        </TournamentContext.Provider>
    );
};

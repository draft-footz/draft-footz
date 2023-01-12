import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import {
  iChampion,
  iDataCreateTournament,
  iDataTournament,
  iDataUpdateTournament,
  iTournamentContext,
  iTournamentProvider,
  tReadingTournament,
} from "../types/TournamentContextTypes";
import { MatchesContext } from "./MatchesContext";
import { SubscriptionsContext } from "./SubscriptionsContext";
import { UserContext } from "./UsersContext";

export const TournamentContext = createContext({} as iTournamentContext);

export const TournamentProvider = ({ children }: iTournamentProvider) => {
  const { user, token } = useContext(UserContext);
  const {
    createMultipleTournamentMatches,
    deleteAllMatchesFromTournament,
  } = useContext(MatchesContext);

  const { deleteAllTournamentSubscriptions } = useContext(SubscriptionsContext);

  const [myTournaments, setMyTournaments] = useState([] as iDataTournament[]);
  const [allTournaments, setAllTournaments] = useState([] as iDataTournament[]);
  const [tournamentData, setTournamentData] = useState({} as iDataTournament);

  // Dashboard page conditional rendering
  const [disableButton, setDisableButton] = useState(false);
  const [readingTournament, setReadingTournament] = useState(
    false as tReadingTournament
  );
  const [dashboardPage, setDashboardPage] = useState(0);
  const [updater, setUpdater] = useState(0);

  const refreshMyTournaments = () => setUpdater(updater+1)
  
  useEffect(() => {
    getMyTournaments();
    getAllTournaments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, updater]);

  // Functions
  async function createNewTournament(data: iDataCreateTournament) {
    data.userId = user.id;
    data.userName = user.name;
    data.type = "qualifiers";
    data.numberOfTeams = 8;

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    setDisableButton(true);

    if (!tournamentData) {
      try {
        await api
          .post<iDataTournament>("tournaments", data)
          .then((response) => {
            setTournamentData(response.data);
            toast.success("Torneio criado com sucesso!");

            getMyTournaments();
            getAllTournaments();

            createMultipleTournamentMatches(response.data.id, 7);
            setDashboardPage(2);
            setReadingTournament(response.data)
          });
      } catch {
        toast.error("Falha ao criar torneio...");
      } finally {
        setDisableButton(false);
      }
    } else {
      toast.error("Você já possui um torneio em andamento");
      setDisableButton(false);
    }
  }

  async function updateTournament(data: iDataUpdateTournament) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    try {
      await api
        .patch<iDataTournament>(`tournaments/${tournamentData.id}`, data)
        .then(() => {
          toast.success("Torneio atualizado com sucesso!");
          getAllTournaments();
          getMyTournaments();
        });
    } catch (err) {
      toast.error("Falha ao atualizar torneio.");
    }
  }

  async function setTournamentChampion(champion: iChampion, tournamentId: number) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    let data = { 
      userId: user.id,
      champion: champion 
    };

    try {
      await api.patch(`tournaments/${tournamentId}`, data).then(() => {
        toast.success("Campeão do torneio foi definido com sucesso!");
        refreshMyTournaments()
      });
    } catch {
      toast.error("Falha ao definir campeão do torneio.");
    }
  }

  async function deleteTournament(tournamentId: number) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    let data = { userId: user.id };

    try {
      await api
        .delete(`tournaments/${tournamentId}`, { data: data })
        .then(async () => {
          toast.success("Torneio deletado com sucesso!");
          getMyTournaments();
        })
        .then(() => deleteAllMatchesFromTournament(tournamentId))
        .then(() => deleteAllTournamentSubscriptions(tournamentId))
    } catch (err){
      toast.error("Falha ao deletar torneio.");
    }
  }

  async function getMyTournaments() {
    try {
      await api
        .get<iDataTournament[]>(`tournaments?&userId=${user.id}`)
        .then((response) => {
          let findTournament = response.data.filter(
            (tournament) => !tournament.champion
          );
          let tournament = findTournament && findTournament[0];

          setTournamentData(tournament);
          setMyTournaments(response.data);
        });
    } catch {
      toast.error("Falha no servidor ao ler torneios.");
    }
  }

  async function getAllTournaments() {
    try {
      await api.get<iDataTournament[]>(`tournaments`)
      .then((response) => { setAllTournaments(response.data) });

    } catch {
      toast.error("Falha no servidor ao ler torneios.");
    }
  }

  return (
    <TournamentContext.Provider
      value={{
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
        setAllTournaments,
      }}
    >
      {children}
    </TournamentContext.Provider>
  );
};

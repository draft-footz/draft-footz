import { createContext } from "react";
import { api } from "../services/api";
import {
  iDataNewTournament,
  iTournamentContext,
  iTournamentProvider,
} from "../types/TournamentContextTypes";

const TournamentContext = createContext({} as iTournamentContext);

export const TournamentProvider = ({ children }: iTournamentProvider) => {
  async function createNewTournament(data: iDataNewTournament) {
    try {
      const requisition = await api.post("tournaments", data);
      console.log(requisition);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <TournamentContext.Provider
      value={{
        createNewTournament,
      }}
    >
      {children}
    </TournamentContext.Provider>
  );
};

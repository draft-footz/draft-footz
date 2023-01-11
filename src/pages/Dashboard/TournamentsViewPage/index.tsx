import React, { useState } from "react";
import { StyledTournamentsViewPage } from "./style";
import { TournamentsList } from "./TournamentsList";

export const TournamentsViewPage = () => {
  return (
    <StyledTournamentsViewPage>
      <div>
        <h1>Torneios</h1>
        <TournamentsList />
      </div>
    </StyledTournamentsViewPage>
  );
};

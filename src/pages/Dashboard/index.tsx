import React, { useState } from "react";
import { TournamentCreation } from "../../components/TournamentCreation";
import { ButtonMenu } from "../../styles/Buttons/style";
import { FigureBackgroundDashboard } from "../../styles/Figures/style";
import {
  ButtonLogout,
  DivButtonLogout,
  DivLogoAndButtons,
  DivMenu,
  FigureLogo,
  Main,
  SectionDashboard,
} from "./style";

export const DashboardPage = () => {
  const [value, setValue] = useState(0);
  function handleClick(num: number) {
    setValue(num);
  }

  return (
    <>
      <FigureBackgroundDashboard>
        <img src="/bg-dashboard.png" alt="" />
      </FigureBackgroundDashboard>
      <Main>
        <SectionDashboard>
          <DivMenu>
            <DivLogoAndButtons>
              <FigureLogo>
                <img src="/logo.svg" alt="" />
              </FigureLogo>
              <ButtonMenu onClick={() => handleClick(0)}>
                Criar torneio
              </ButtonMenu>
              <ButtonMenu onClick={() => handleClick(1)}>
                Meus torneios
              </ButtonMenu>
              <ButtonMenu onClick={() => handleClick(2)}>Meu time</ButtonMenu>
            </DivLogoAndButtons>
            <DivButtonLogout>
              <ButtonLogout>
                <img src="/logout.png" alt="" />
                <p>Fazer logout</p>
              </ButtonLogout>
            </DivButtonLogout>
          </DivMenu>
          {value === 0 && <div />}
          {value === 1 && <TournamentCreation />}
        </SectionDashboard>
      </Main>
    </>
  );
};

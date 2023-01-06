import React, { useState } from "react";
import { TournamentCreation } from "../../components/TournamentCreation";
import { ButtonLogout, ButtonMenu } from "../../styles/Buttons/style";
import { FigureBackgroundDashboard } from "../../styles/Figures/style";
import { Main } from "./style";

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
        <section className="section-dashboard">
          <div className="div-menu">
            <div className="div-logo-and-buttons">
              <figure className="logo">
                <img src="/logo.svg" alt="" />
              </figure>
              <ButtonMenu
                onClick={() => handleClick(0)}
                className="first-button-menu"
              >
                Criar torneio
              </ButtonMenu>
              <ButtonMenu
                onClick={() => handleClick(1)}
                className="secound-button-menu"
              >
                Meus torneios
              </ButtonMenu>
              <ButtonMenu className="third-button-menu">Meu time</ButtonMenu>
            </div>
            <div className="div-button-logout">
              <ButtonLogout className="button-logout">
                <img className="icon-logout" src="/logout.png" alt="" />
                <p className="text-button">Fazer logout</p>
              </ButtonLogout>
            </div>
          </div>
          {value === 0 && <div />}
          {value === 1 && <TournamentCreation />}
        </section>
      </Main>
    </>
  );
};

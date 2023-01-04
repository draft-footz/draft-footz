import React from "react";
import { ButtonLogout, ButtonMenu } from "../../styles/Buttons/styled";
import { FigureBackgroundDashboard } from "../../styles/Figures/styles";
import { Main } from "./style";

export const DashboardPage = () => {
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
              <ButtonMenu className="first-button-menu">
                Criar torneio
              </ButtonMenu>
              <ButtonMenu className="secound-button-menu">
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
        </section>
      </Main>
    </>
  );
};

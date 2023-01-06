import React, { useState, useEffect } from "react";
import { TournamentCreation } from "../../components/TournamentCreation";
import { api } from "../../services/api";
import { ButtonLogout, ButtonMenu } from "../../styles/Buttons/style";
import { FigureBackgroundDashboard } from "../../styles/Figures/style";
import { Main } from "./style";
import { TournamentsViewPage } from "./TournamentsViewPage";

export const DashboardPage = () => {
  const [value, setValue] = useState(0);

  // APAGAR ASSIM QUE FINALIZAR

  useEffect(() => {
    const loginData = {
      email: "user@test.com",
      password: "test123",
    };

    async function autoLogin() {
      try {
        const request = await api.post("/login", loginData);

        localStorage.setItem("@AcessToken", request.data.accessToken);
      } catch (error) {
        console.error(error);
      }
    }

    autoLogin()
  }, []);

  // APAGAR ASSIM QUE FINALIZAR

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
                onClick={() => setValue(0)}
                className="first-button-menu"
              >
                Criar torneio
              </ButtonMenu>
              <ButtonMenu
                onClick={() => setValue(1)}
                className="secound-button-menu"
              >
                Meus torneios
              </ButtonMenu>
              <ButtonMenu
                className="third-button-menu"
                onClick={() => setValue(2)}
              >
                Meu time
              </ButtonMenu>
              <ButtonMenu onClick={() => setValue(3)}>Torneios</ButtonMenu>
            </div>
            <div className="div-button-logout">
              <ButtonLogout className="button-logout">
                <img className="icon-logout" src="/logout.png" alt="" />
                <p className="text-button">Fazer logout</p>
              </ButtonLogout>
            </div>
          </div>
          {value === 0 && <TournamentCreation />}
          {value === 1 && <div>Criar Torneio</div>}
          {value === 2 && <div>Meu time</div>}
          {value === 3 && <TournamentsViewPage />}
        </section>
      </Main>
    </>
  );
};

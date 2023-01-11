import React from "react";
import FooterHome from "../../components/FooterHome";
import Header from "../../components/Header";
import SecHomepage from "../../components/SecHomepage";
import {
  BgPosition,
  DivHomeCenter,
  FigureBackground,
  FigureSecBackground,
  LinkToRegister,
} from "./style";

const Homepage = () => {
  return (
    <FigureBackground>
      <Header />
      <DivHomeCenter>
        <h1>
          Com a Draft Footz você organiza torneios e times amadores de futebol
          com poucos cliques e foca naquilo que é mais importante: a diversão
          com os amigos!
        </h1>
        <h2>Crie seu campeonato agora</h2>
        <LinkToRegister to="/register">Novo campeonato</LinkToRegister>
      </DivHomeCenter>
      <FooterHome />
    </FigureBackground>
  );
};

export default Homepage;

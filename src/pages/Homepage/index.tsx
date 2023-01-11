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
        <h2>Crie seu campeonato agora</h2>
        <LinkToRegister to="/register">Novo campeonato</LinkToRegister>
      </DivHomeCenter>
      <FooterHome />
    </FigureBackground>
  );
};

export default Homepage;

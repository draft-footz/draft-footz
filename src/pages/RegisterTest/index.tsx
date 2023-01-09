import React from "react";
import { AppleButton } from "../../components/SocialLogin/Apple";
import { GoogleButton } from "../../components/SocialLogin/Google";
import {
  BackToHome,
  ContainerDiv,
  LinkToLogin,
  ParentRg,
  StyledRegister,
} from "./style";

const RegisterTest = () => {

  

  return (
    <ParentRg>
      <StyledRegister />
      <ContainerDiv>
        <div className="container-div">
          <div className="register-div">
            <div className="container-form">
              <div className="logo-div">
                <img src="./ball.png" alt="Logo" />
                <h1>Draft Footz</h1>
              </div>
              <div className="top-rg">
                <h2>Cadastro</h2>
        
              </div>

              <form className="form-register">
                <div className="rg-form">
                  <div className="one-rg">
                    <input type="text" placeholder="Nome completo" />
                    <input type="text" placeholder="Apelido" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirme sua senha" />
                  </div>
                  <div className="two-rg">
                    <input type="text" placeholder="Endereço de e-mail" />
                    <input type="text" placeholder="Confirme seu e-mail" />
                    <input type="text" placeholder="Telefone para contato" />
                    <input
                      type="text"
                      placeholder="Como nos encontrou? (Ex: Linkedin)"
                    />
                  </div>
                </div>
                <button className="btn-register">Cadastrar</button>
              </form>
              <div className="register-with">
                <div className="bg-1"></div>
                <span className="span-rg">Cadastre-se com</span>
                <div className="bg-1"></div>
              </div>
              <div className="social">
                <AppleButton />
                <GoogleButton />
              </div>
              <div className="footer-rg">
                <span className="account">Já possui uma conta?</span>
                <LinkToLogin to="/login">Login</LinkToLogin>
              </div>
            </div>
          </div>
        </div>
      </ContainerDiv>
    </ParentRg>
  );
};

export default RegisterTest;

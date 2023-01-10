import React from "react";
import { AppleButton } from "../../components/SocialLogin/Apple";
import { GoogleButton } from "../../components/SocialLogin/Google";
import {
  BackToHome,
  ContainerDivLogin,
  LinkToLog,
  ParentRg,
  StyledRegister,
} from "./style";

const LoginTest = () => {

  

  return (
    <ParentRg>
      <StyledRegister />
      <ContainerDivLogin>
        <div className="container-div-rg">
          <div className="register-div-rg">
            <div className="container-form-rg">
              <div className="logo-div-rg">
                <img src="./ball.png" alt="Logo" />
                <h1>Draft Footz</h1>
              </div>
              <div className="top-rg-rg">
                <h2>Login</h2>
              </div>

              <form className="form-register-rg">
                <div className="rg-form-rg">
                  <div className="one-rg-rg">
                    <input type="text" placeholder="Endereço de e-mail" />
                    <input type="password" placeholder="Senha" />
                  </div>
                </div>
                <button className="btn-register-rg">Login</button>
              </form>
              <div className="register-with-rg">
                <div className="bg-1-rg"></div>
                <span className="span-rg-rg">Logue com</span>
                <div className="bg-1-rg"></div>
              </div>
              <div className="social-rg">
                <AppleButton />
                <GoogleButton />
              </div>
              <div className="footer-rg-rg">
                <span className="account-rg">Ainda não possui uma conta?</span>
                <LinkToLog to="/register">Registre-se</LinkToLog>
              </div>
            </div>
          </div>
        </div>
      </ContainerDivLogin>
    </ParentRg>
  );
};

export default LoginTest;

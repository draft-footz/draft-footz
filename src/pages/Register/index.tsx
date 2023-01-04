import React from "react";
import { Logo } from "../../components/Logo";
import { RegisterForm } from "./RegisterForm";
import { Link } from "react-router-dom";
import { AppleButton } from "../../components/SocialLogin/Apple";
import { GoogleButton } from "../../components/SocialLogin/Google";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <div className="window">
        <Logo />
        <h1>Registro</h1>
        <RegisterForm />
        <h4>Faça login com</h4>
        <div>
          <AppleButton/>
          <GoogleButton/>
        </div>
        <div>
          <span>Já tem conta?</span> <Link to={"/login"}>Faça login</Link>
        </div>
      </div>
    </StyledRegisterPage>
  );
};

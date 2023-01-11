import React, { useContext, useState } from "react";
import { AppleButton } from "../../components/SocialLogin/Apple";
import { GoogleButton } from "../../components/SocialLogin/Google";
import {
  BackToHome,
  ContainerDivLogin,
  LinkToLog,
  MsgError,
  ParentRg,
  StyledRegister,
} from "./style";
import { iLoginFormData } from "../../types/UsersContextTypes";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../context/UsersContext";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from "../../utils/schema";
import { sucessLogin } from "../../utils/toast";
import { api } from "../../services/api";
import { Loading } from "../Register/style";

const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<iLoginFormData>({ resolver: yupResolver(formSchemaLogin) });

    const navigate = useNavigate();
    
    const { userLogin, login, loading, setLogin } = useContext(UserContext)

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

              <form onSubmit={handleSubmit(userLogin)} className="form-register-rg">
                <div className="rg-form-rg">
                  <div className="one-rg-rg">
                    <input type="text" placeholder="Endereço de e-mail" {...register("email")} onKeyUp={() => setLogin(true)} />
                    <input type="password" placeholder="Senha" {...register("password")} onKeyUp={() => setLogin(true)} />
                    {errors.email && <MsgError>{errors.email.message}</MsgError>}
                    {!login ? ( <MsgError>Usuário e/ou senha inválidos.</MsgError> ) : <></> }

                  </div>
                </div>
                <button className="btn-register-rg">{loading ? <Loading src="/spinner.png" /> : "Login"}</button>
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

export default Login;

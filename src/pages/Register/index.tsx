import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AppleButton } from "../../components/SocialLogin/Apple";
import { GoogleButton } from "../../components/SocialLogin/Google";
import { formSchema } from "../../utils/schema";
import {
  ContainerDiv,
  InputMsk,
  LinkToLogin,
  Loading,
  MessageError,
  ParentRg,
  StyledRegister,
} from "./style";
import { FormInputs } from "../../types/UsersContextTypes";
import { UserContext } from "../../context/UsersContext";
import { api } from "../../services/api";
import { notify, verify } from "../../utils/toast";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>({ resolver: yupResolver(formSchema) });
  const { loading, setLoading } = useContext(UserContext)
  const navigate = useNavigate()

   const onSubmitFunction: SubmitHandler<FormInputs> = async data => {
    try {
      
      setLoading(true);
      const response =
      await api.post("register", data);
      verify();
      navigate("/login");     
    } 
    
    catch (err) {
      notify();
    } 
    
    finally {
      reset({ email: "", password: "", passwordConfirmation: "" });
      setLoading(false);
    }
  };


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

              <form onSubmit={handleSubmit(onSubmitFunction)} className="form-register">
                <div className="rg-form">
                  <div className="one-rg">

                    <input style={{border: `${errors.name ? '1px solid #ff577f' : '1px solid transparent'}`}} type="text" placeholder="Nome completo" {...register("name")} />
                    {errors.name && <MessageError>{errors.name.message}</MessageError>}

                    <input type="text" placeholder="Apelido" {...register("username")} />

                    <input style={{border: `${errors.email ? '1px solid #ff577f' : '1px solid transparent'}`}}  type="text" placeholder="Endereço de e-mail" {...register("email")} />
                    {errors.email && <MessageError>{errors.email.message}</MessageError>}
                    
                  </div>
                  <div className="two-rg">

                  <input style={{border: `${errors.password ? '1px solid #ff577f' : '1px solid transparent'}`}}  type="password" placeholder="Senha" {...register("password")} />
                    {errors.password && <MessageError>{errors.password.message}</MessageError>}

                    <input style={{border: `${errors.passwordConfirmation ? '1px solid #ff577f' : '1px solid transparent'}`}}  type="password" placeholder="Confirme sua senha" {...register("passwordConfirmation")} />
                    {errors.passwordConfirmation && <MessageError>{errors.passwordConfirmation.message}</MessageError>}
              
                  <InputMsk type="text" mask="(99) 99999-9999" placeholder="Telefone para contato" {...register("contact")} />
                    
                  </div>
                </div>
                <button type='submit' className="btn-register">{loading ? <Loading src="/spinner.png" /> : "Cadastrar"}</button>
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

export default Register;

import React, { useState } from "react";
import { StyledForm } from "./style";
import { useForm, FormState } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../utils/schema";
import { AiFillEye } from "react-icons/ai";
import { StyledFormInput } from "../../../styles/Inputs/style";
import { ButtonSend } from "../../../styles/Buttons/style";

interface FormInputs {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  telephone: number;
}

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInputs>({
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
  });

  const [revealPSWD, setRevealPSWD] = useState(false);
  const [revealConfirmPSWD, setRevealConfirmPSWD] = useState(false);

  return (
    <StyledForm>
      <div className="inputsArea">
        <fieldset>
          <StyledFormInput
            {...register("name")}
            type="text"
            id="name"
            placeholder="Nome de usuário"
          />
          {errors.name?.message && (
            <label htmlFor="name" className="error">
              {errors.name?.message}
            </label>
          )}
        </fieldset>
        <fieldset>
          <StyledFormInput
            {...register("email")}
            type="email"
            id="email"
            placeholder="E-mail"
          />
          {errors.email?.message && (
            <label htmlFor="email" className="error">
              {errors.email?.message}
            </label>
          )}
        </fieldset>
        <fieldset>
          <StyledFormInput
            {...register("password")}
            type={revealPSWD ? "text" : "password"}
            id="password"
            placeholder="Senha"
          />
          <i onClick={() => setRevealPSWD(!revealPSWD)}>
            <AiFillEye />
          </i>
          {errors.password?.message && (
            <label htmlFor="password" className="error">
              {errors.password?.message}
            </label>
          )}
        </fieldset>
        <fieldset>
          <StyledFormInput
            {...register("passwordConfirmation")}
            type={revealConfirmPSWD ? "text" : "password"}
            id="passwordConfirmation"
            placeholder="Confirme a senha"
          />
          <i onClick={() => setRevealConfirmPSWD(!revealConfirmPSWD)}>
            <AiFillEye />
          </i>
          {errors.passwordConfirmation?.message && (
            <label htmlFor="passwordConfirmation" className="error">
              {errors.passwordConfirmation?.message}
            </label>
          )}
        </fieldset>
      </div>

      <ButtonSend disabled={!isValid} type="submit">
        Cadastrar
      </ButtonSend>
    </StyledForm>
  );
};

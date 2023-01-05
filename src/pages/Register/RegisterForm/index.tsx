import React, { useState } from "react";
import { StyledForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../../utils/schema";
import { AiFillEye } from "react-icons/ai";
import { StyledFormInput, StyledInputMask } from "../../../styles/Inputs/style";
import { ButtonSend } from "../../../styles/Buttons/style";

interface FormInputs {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  contact: number;
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
    <StyledForm
      noValidate
      action="submit"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="inputsArea">
        <fieldset>
          <StyledFormInput
            {...register("name")}
            type="text"
            id="name"
            placeholder="Nome de usuário"
            className={errors.name ? "wrongInput" : undefined}
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
            className={errors.email ? "wrongInput" : undefined}
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
            className={errors.password ? "wrongInput" : undefined}
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
            className={errors.passwordConfirmation ? "wrongInput" : undefined}
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

        <fieldset>
          <StyledInputMask
            mask="(99) 99999-9999"
            {...register("contact")}
            id="contact"
            placeholder="(00) 00000-0000"
            className={errors.contact ? "wrongInput" : undefined}
          />

          {errors.contact?.message && (
            <label htmlFor="contact" className="error">
              {errors.contact?.message}
            </label>
          )}
        </fieldset>
      </div>

      <ButtonSend type="submit" className={isValid ? undefined : "invalid"}>
        Cadastrar
      </ButtonSend>
    </StyledForm>
  );
};

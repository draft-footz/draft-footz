import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "Insira um nome válido"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("Insira um email válido"),
  password: yup
    .string()
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .matches(/(?=.*[A-Z])/, "A senha deve ter uma letra maiúscula")
    .matches(/(?=.*[a-z])/, "A senha deve ter uma letra minúscula")
    .matches(/(?=.*[0-9])/, "A senha deve ter pelo menos um número")
    .matches(
      /([^A-Za-z0-9])/,
      "A senha deve ter pelo menos um caractere especial"
    ),
  passwordConfirmation: yup
    .string()
    .required("Esse campo é obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

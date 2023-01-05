import * as yup from "yup";

export const registerSchema = yup.object().shape({
    email: yup
    .string()
    .required("Digite seu e-mail")
    .email("É necessário fornecer um email válido"),
    password: yup
    .string()
    .required("Digite sua senha"),
})
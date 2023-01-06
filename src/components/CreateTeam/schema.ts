import * as yup from "yup";

export const createTeamFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "Insira um nome válido"),
  logo: yup.string(),
});

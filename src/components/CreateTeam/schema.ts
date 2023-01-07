import * as yup from "yup";

export const createTeamFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 letras"),
  logo: yup.string(),
});

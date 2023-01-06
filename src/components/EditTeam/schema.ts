import * as yup from "yup";

export const editTeamFormSchema = yup.object().shape({
  name: yup.string().min(3, "Insira um nome válido"),
  logo: yup.string(),
});

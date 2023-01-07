import * as yup from "yup";

export const editTeamFormSchema = yup.object().shape({
  name: yup.string().min(3, "O nome deve ter no mínimo 3 letras"),
  logo: yup.string(),
});

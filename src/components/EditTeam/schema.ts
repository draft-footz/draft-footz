import * as yup from "yup";

export const editTeamFormSchema = yup.object().shape({
  name: yup.string(),
  logo: yup.string(),
});

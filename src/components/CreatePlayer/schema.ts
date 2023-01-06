import * as yup from "yup";

export const playerFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "Insira um nome válido"),
  number: yup.string().required("O número da camisa é obrigatório.").min(1).max(2),
  age: yup.string().required("A idade é obrigatória.").min(1),
});

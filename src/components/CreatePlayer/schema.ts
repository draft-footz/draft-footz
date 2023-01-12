import * as yup from "yup";

export const playerFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve ter no mínimo 3 letras"),
  position: yup.string().required("Selecione uma posição"),
  number: yup
    .string()
    .required("O número da camisa é obrigatório")
    .min(1)
    .max(2),
});

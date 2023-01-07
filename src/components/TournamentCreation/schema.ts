import * as yup from "yup";

export const tournamentSchema = yup.object().shape({
    name: yup.string().required("Digite o nome do seu torneio")
});
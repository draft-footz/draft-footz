import { StyledFormInput } from "../../styles/Inputs/style";
import { StyledArea51 } from "./style";
import { useContext } from "react";
import { TournamentContext } from "../../context/TournamentContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { iDataTournament } from "../../types/TournamentContextTypes";
import { ButtonSend } from "../../styles/Buttons/style";

export const Area51Page = () => {

    const formSchema = yup.object().shape({
        name: yup.string().required(),
        type: yup.string().required(),
        numberOfTeams: yup.number().required()
    });


    const { register, handleSubmit } = useForm<iDataTournament>({
        resolver: yupResolver(formSchema)
    });

    const { createNewTournament, tournamentData} = useContext(TournamentContext)

    return (
        <StyledArea51>
            <form onSubmit={handleSubmit(createNewTournament)} noValidate>
                <StyledFormInput placeholder="Nome do Torneio" {...register('name')}/>
                <StyledFormInput placeholder="Tipo do torneio" value="qualifiers" {...register('type')}/>
                <StyledFormInput placeholder="número de times" value={8} {...register('numberOfTeams')}/>
                <ButtonSend type="submit">
                    Submit
                </ButtonSend>
            </form>
            <div>
                {tournamentData && <>
                    <div> Nome:  {tournamentData.name} </div>
                    <div> Tipo:  {tournamentData.type} </div>
                    <div> Times: {tournamentData.numberOfTeams} </div>
                </>}
            </div>
        </StyledArea51>
    );
};
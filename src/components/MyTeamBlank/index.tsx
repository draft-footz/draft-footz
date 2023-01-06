import React from "react"
import { ButtonSend } from "../../styles/Buttons/style"
import { NoTeamDiv } from "./style"

export const MyTeamBlank = () => {
    return (
        <NoTeamDiv>
            <h2>Você ainda não possui nenhum time! </h2>
            <ButtonSend>Criar time</ButtonSend>
        </NoTeamDiv>
    )
}
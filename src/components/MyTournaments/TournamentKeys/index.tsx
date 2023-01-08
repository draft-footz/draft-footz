import { StyledTournamentKeys } from "./style";
import { TournamentKey } from "./TournamentKey";

export const TournamentKeys = () => {
    return (
        <StyledTournamentKeys>
            <div>
                <div>
                    <TournamentKey teamA="" teamB="" scoreA={0} scoreB={0} winner="teamA"/>
                    <TournamentKey teamA="" teamB="" scoreA={0} scoreB={0} winner="teamA"/>
                    <TournamentKey teamA="" teamB="" scoreA={0} scoreB={0} winner="teamA"/>
                    <TournamentKey teamA="" teamB="" scoreA={0} scoreB={0} winner="teamA"/>
                </div>
                <div>
                    <TournamentKey teamA="" teamB="" scoreA={0} scoreB={0} winner="teamA"/>
                    <TournamentKey teamA="" teamB="" scoreA={0} scoreB={0} winner="teamA"/>
                </div>
                <div>
                    <TournamentKey teamA="" teamB="" scoreA={0} scoreB={0} winner="teamA"/>
                </div>
            </div>
        </StyledTournamentKeys>
    )
}
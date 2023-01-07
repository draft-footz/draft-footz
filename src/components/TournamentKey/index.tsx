import { StyledTournamentKey } from "./style"

interface iMatchProps {
    winner: "teamA" | "teamB";
    teamA: string;
    teamB: string;
    scoreA: number;
    scoreB: number;
};

export const TournamentKey = ({ teamA, teamB, scoreA, scoreB, winner}: iMatchProps) => {

    return (
        <StyledTournamentKey winner={winner}>
            <div>
                <div>
                    {teamA}
                </div>
                <div>
                    {scoreA}
                </div>
            </div>
            <div>
                <div>
                    {teamB}
                </div>
                <div>
                    {scoreB}
                </div>
            </div>
        </StyledTournamentKey>
    )
}
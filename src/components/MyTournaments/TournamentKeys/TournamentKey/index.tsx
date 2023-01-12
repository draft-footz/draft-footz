import { iMatchData } from "../../../../types/MatchesContextTypes";
import { StyledTournamentKey } from "./style"

interface iMatchProps {
    onClickFunc: (match: iMatchData) => void;
    match: iMatchData;
};

export const TournamentKey = ({ match, onClickFunc}: iMatchProps) => {

    return (
        <StyledTournamentKey winner={match.winner? match.winner.team : null} onClick={() => onClickFunc(match)}>
            <div>
                <div>
                    {match.teamA ? match.teamA.name : 'À definir...'}
                </div>
                <div>
                    {match.scores ? match.scores.teamA : ''}
                </div>
            </div>
            <div>
                <div>
                    {match.teamB ? match.teamB.name : 'À definir...'}
                </div>
                <div>
                    {match.scores ? match.scores.teamB : ''}
                </div>
            </div>
        </StyledTournamentKey>
    )
}
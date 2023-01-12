import { useContext } from "react";
import { SubscriptionsContext } from "../../context/SubscriptionsContext";
import { TeamContext } from "../../context/TeamContext";
import { TournamentContext } from "../../context/TournamentContext";

import {
    DivName,
    DivNumber,
    ImgTeam,
    MainTeamsTournament,
    Number,
    SectionTeams,
    TeamsNumber,
    Title,
    UlTeams,
} from "./style";

export const TeamTournament = () => {
    const { setDashboardPage } = useContext(TournamentContext);
    const { subscriptions } = useContext(SubscriptionsContext);
    const { playersData } = useContext(TeamContext);

    const approvedSubscriptions = subscriptions.filter(subscription => subscription.accepted);

    return (
        <>
            <MainTeamsTournament>
                <Title>Times do torneio</Title>
                <SectionTeams>
                    <button
                        onClick={() => setDashboardPage(6)}
                        className="button-left"
                    >
                        {"<"}
                    </button>
                    <TeamsNumber>
                        {approvedSubscriptions.length}/8 Times
                    </TeamsNumber>
                    <UlTeams>
                        {approvedSubscriptions.map((subscription) => (
                            <>
                                <DivName key={subscription.id}>
                                    <ImgTeam src="favicon.svg" alt="" />
                                    <p>{subscription.team.name}</p>
                                </DivName>
                                <DivNumber>
                                    <p>Qntd. Jogadores</p>
                                    <Number>{playersData.length}</Number>
                                </DivNumber>
                            </>
                        ))}
                    </UlTeams>
                </SectionTeams>
            </MainTeamsTournament>
        </>
    );
};

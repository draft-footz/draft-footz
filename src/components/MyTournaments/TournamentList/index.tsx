import { StyledTournamentList } from "./style";
import { useContext, useState, useEffect} from "react";
import { TournamentContext } from "../../../context/TournamentContext";
import { TournamentListCard } from "./TournamentListCard";
import { NoTournament } from "../../NoTournament";

export const TournamentList = () => {

    const { myTournaments } = useContext(TournamentContext);
    
    const [sortedTournaments, setSortedTournaments] = useState(myTournaments);
    const tournamentsQuantity = myTournaments.some(obj => !obj.champion) ? 1 : 0;

    useEffect(() => {
        let newArr = [...myTournaments];
        let current = myTournaments.find(obj => !obj.champion);
        let currentIndex = myTournaments.findIndex(obj => !obj.champion);
        if(currentIndex > -1) {
            newArr.splice(currentIndex, 1);
        }
        if(current) {
            newArr.unshift(current);
        }
        setSortedTournaments(newArr);
    }, [myTournaments])

    return (
        <>
            {
                myTournaments.length > 0 ?
                (
                    <StyledTournamentList>
                        <h1> Meus torneios </h1>
                        <span> {tournamentsQuantity}/1 </span>
                        <ul>
                            { sortedTournaments.map(tournament => <TournamentListCard tournament={tournament} />)}
                        </ul>
                        <button onClick={() => console.log(myTournaments)}> + </button>
                    </StyledTournamentList> 
                )
                :
                (
                    <NoTournament />
                )
            }

        </>
    );
};
import { FC } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";
import {
    DivTitleSC,
    DivContainerTagsTabSC,
    DivTitleTables,
    DivTextTabsSC,
    DivTitleTablesSC,
} from "./styles.leaderboard";
import LeaderBoardRow from "../components/leaderboard_row";
const Leaderboard: FC = () => (
    <DivDefaultContainerSC style={{ marginTop: "140px", justifyItems: 'center', }} >
        <DivTitleSC> Leaderboard</DivTitleSC>
        <DivContainerTagsTabSC>
            
            <DivTitleTables style={{ gap:'180px',  }}>
                <DivTextTabsSC>Nickname</DivTextTabsSC>
                <DivTextTabsSC>Adress</DivTextTabsSC>
            </DivTitleTables>
            <DivTitleTablesSC>
                <DivTextTabsSC>Tokens now</DivTextTabsSC>
                <DivTextTabsSC>Tokens after launch</DivTextTabsSC>
            </DivTitleTablesSC>
        </DivContainerTagsTabSC>
        {Array.from({ length: 8 }, (_, index) => (
        <LeaderBoardRow nickname={'Vasya007'} adress={'0x99b5bfCc1f48bc0Be23695B1543208C624BF96A7'} tokensNow={11000000} tokensAfter={33000000} />
      ))}
        
    </DivDefaultContainerSC>
);

export default Leaderboard;

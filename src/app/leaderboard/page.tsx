import { FC } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";
import {
    DivTitleSC,
    DivContainerTagsTabSC,
    DivTitleTables,
    DivTextTabsSC,
    DivTitleTablesSC,
    DivHideX,
} from "./styles.leaderboard";
import LeaderBoardRow from "../components/leaderboard_row";
import teamLogo from "../images/Team.jpg";
const Leaderboard: FC = () => (
    <DivDefaultContainerSC style={{ marginTop: "140px", justifyItems: 'center', }} >
        <DivTitleSC> Leaderboard</DivTitleSC>
        <DivHideX>
        <DivContainerTagsTabSC>
            
            <DivTitleTables style={{ gap:'150px',  }}>
                <DivTextTabsSC>Nickname</DivTextTabsSC>
                <DivTextTabsSC>Address</DivTextTabsSC>
            </DivTitleTables>
            <DivTitleTablesSC>
                <DivTextTabsSC>Tokens now</DivTextTabsSC>
                <DivTextTabsSC>Tokens after launch</DivTextTabsSC>
            </DivTitleTablesSC>
        </DivContainerTagsTabSC>
        {Array.from({ length: 8 }, (_, index) => (
        <LeaderBoardRow images={teamLogo} nickname={'Vasya007'} adress={'0x99b5bfCc1f48bc0Be23695B1543208C624BF96A7'} tokensNow={11000000} tokensAfter={33000000} />
      ))}
      </DivHideX>
        
    </DivDefaultContainerSC>
);

export default Leaderboard;

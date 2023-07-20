"use client";
import { FC } from "react";
import { useRouter } from 'next/navigation';

import { DivDefaultContainerSC } from "../../styles.page";
import ButtonWrapper from "../custom_button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import { 
    DivContainerTagsTabSC,
    DivTitleTables,
    DivTextTabsSC,
    DivTitleTablesSC,
    DivLogoSC,
    DivUserInfo,
 } from "./styles.leaderboard_row";
import { StaticImageData } from "next/image";

type RowProps = {
  nickname: string;
  adress: string;
  tokensNow: number;
  tokensAfter:number;
  images:StaticImageData,

}
// Определим функцию
const formatAddress = (address:string) => {
  if (address.length > 9) {
    return `${address.substring(0, 5)}...${address.slice(-4)}`;
  }
  return address;
}




const LeaderBoardRow: FC<RowProps> = ({ nickname, adress, tokensNow,tokensAfter,images }) => {
 
  return (


    <DivDefaultContainerSC style={{width:'100%', marginTop: "-10px", justifyItems: 'center', }} >
    
    <DivContainerTagsTabSC>
        <DivTitleTables>
          <DivUserInfo>
          <DivLogoSC logo={images}/>
            <DivTextTabsSC>{nickname}</DivTextTabsSC>
            </DivUserInfo>
            <DivTextTabsSC>{formatAddress(adress)}</DivTextTabsSC>
        </DivTitleTables>
        <DivTitleTablesSC style={{ gap:'120px',  }}>
            <DivTextTabsSC>{tokensNow}</DivTextTabsSC>
            <DivTextTabsSC>{tokensAfter}</DivTextTabsSC>
        </DivTitleTablesSC>
    </DivContainerTagsTabSC>
</DivDefaultContainerSC>
  );


};

export default LeaderBoardRow;

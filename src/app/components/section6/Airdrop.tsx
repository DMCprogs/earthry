"use client";
import React, { useState } from "react";
import BlogCard from "../blog/BlogCard";
import {
    DivContainerAirdrop,
    DivTitleAirdrop,
    DivInfoAirdrop,
    DivTextAirdrop,
    DivContainerGif,
} from "./styles.airdrop";
import image from "../../images/ItemBlogExample.png";
import coin2 from "../../images/coin2.gif";
import Link from "next/link";
import Image from 'next/image'
import ButtonWrapper from "../custom_button";
const Airdrop = () => {

   
    return (
    <DivContainerAirdrop>
<DivTitleAirdrop>Airdrop</DivTitleAirdrop>
<DivInfoAirdrop>
    <DivTextAirdrop>An increase in the number of holders of the Earthy Chain token is envisaged.
         Registered participants will be given a free giveaway of one Earthy Chain token.
         These over-the-air tokens will be locked up for 360 days before they can be traded. This is to prevent pump and dump tactics.</DivTextAirdrop>
    <DivContainerGif>
        <Image src={coin2}
      width={345}
      height={509}
      alt="Picture of the author"/>
    </DivContainerGif>
</DivInfoAirdrop>
<Link href={"https://discord.gg/C2RmpabE"}>
                <ButtonWrapper
                    primary={true}
                    width={187}
                    height={74}
                    directionRadius={"center"}>
                    <span>Register Now</span>
                </ButtonWrapper>
            </Link>
    </DivContainerAirdrop>
    );
};

export default Airdrop;

"use client";
import React, { useState } from "react";
import {
    DivContainerContactsSC,
    TitleSC,
    DivBoxTitlesSC,
    DivBoxItemTitles,
    DivBoxImagesSC,
    DivWrapperContactsImageSC,
    TitleBoldSC,
    TitleContactsSC
} from "./styles.contacts";
import Image from "../../images/twitter.svg";
import Image2 from "../../images/telegram.svg";
import Image3 from "../../images/etherscan.svg";

const Contacts = () => {

    type Title = {
        title1: string;
        title2: string;
        id: number;
    };

    const [titles, setTitles] = useState<Title[]>([
        { id: 1, title1: "telegram:", title2: "@earthytoken" },
        { id: 2, title1: "email:", title2: "admin@cyberzenlabs.com" },
    ]);

    return (
        <DivContainerContactsSC>
                <TitleContactsSC>
                    Contacts
                </TitleContactsSC>
            <DivBoxTitlesSC>
                {titles.map((title, i) => {
                    return (
                        <DivBoxItemTitles key={`deghghfffefda${i}`}>
                            <TitleBoldSC>{title.title1}</TitleBoldSC>
                            <TitleSC>{title.title2}</TitleSC>
                        </DivBoxItemTitles>
                    );
                })}
            </DivBoxTitlesSC>
            <DivBoxImagesSC>
                <DivWrapperContactsImageSC $path={Image.src} />
                <a href="https://t.me/earthytoken">
                    <DivWrapperContactsImageSC $path={Image2.src} />
                </a>
                <DivWrapperContactsImageSC $path={Image3.src} />
            </DivBoxImagesSC>
        </DivContainerContactsSC>
    );
};

export default Contacts;

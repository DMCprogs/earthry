"use client";

import React, {MutableRefObject} from "react";
import {DivContentSC, DivSectionsContainerSC} from "@/app/styles.page";
import Section2 from "./components/section2/Informations";
import Section3 from "./components/section3";
import Section4 from "./components/section4/WaysToAchieve"
import Section5 from "./components/section5/Tokenomic";
import Section6 from "./components/section6/Airdrop";
import Section7 from "./components/section7/Roadmap";
import Section8 from "./components/section8/JoinUs"
import Section9 from "./components/section9/LatestNews";
import Section10 from "./components/section10/Form";
import Section11 from "./components/section11/Contacts";


const Landing = (props: any) => {
    const {
        bottomRefHome,
        bottomRefTokenomics,
        bottomRefAbout,
        bottomRefLeaderboard,
        bottomRefNFT,
        bottomRefBlog,
        bottomRefFAQ,
        bottomRefExchange,
    } = props;
    return (
        <DivContentSC>
            {/* <Section1/> */}
            <DivSectionsContainerSC>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section7/>
                <Section8/>
                <Section9/>
                <Section10/>
                <Section11/>
            </DivSectionsContainerSC>
        </DivContentSC>
    );
};
export default Landing;

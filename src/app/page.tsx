"use client";
import React, { MutableRefObject } from "react";
import { DivContentSC, DivSectionsContainerSC } from "@/app/styles.page";
import Contacts from "./components/section11/Contacts";
import Informations from "./components/section2/Informations";

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
                <Informations/>
                <Contacts/>
            </DivSectionsContainerSC>
        </DivContentSC>
    );
};
export default Landing;

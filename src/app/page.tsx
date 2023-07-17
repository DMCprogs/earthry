"use client";
import React, { MutableRefObject } from "react";
import { DivContentSC, DivSectionsContainerSC } from "@/app/styles.page";

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
                <h1>landing page</h1>
                {/* all sections */}
            </DivSectionsContainerSC>
        </DivContentSC>
    );
};
export default Landing;

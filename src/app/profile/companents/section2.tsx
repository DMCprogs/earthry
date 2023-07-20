import React from 'react';
import {DivSection1SC, DivWrapperTwoSectionsSC, H5SC} from "@/app/profile/styles.profile";
import HarvestElement from "@/app/profile/companents/harvest_element";
import SwapBlock from "@/app/components/swapBlock/SwapBlock";

const Section2 = () => {
    return (
        <DivWrapperTwoSectionsSC>
            <DivSection1SC>
                <H5SC>Balance</H5SC>
                <SwapBlock/>
            </DivSection1SC>
            <DivSection1SC>
                <H5SC>Harvest</H5SC>
                <HarvestElement/>
            </DivSection1SC>
        </DivWrapperTwoSectionsSC>
    );
};

export default Section2;
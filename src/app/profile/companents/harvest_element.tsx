import React from 'react';
import {DivDash2SC, DivDashSC, DivLogoSC, DivWrapperHarvestSC, SpanNumSC} from "@/app/profile/styles.profile";
import Image from '../../images/eth_logo.svg'
const HarvestElement = () => {
    return (
        <DivWrapperHarvestSC>
            <DivDashSC>
                <DivLogoSC
                    $image={Image.src}
                >
                </DivLogoSC>
                <SpanNumSC>
                    120
                </SpanNumSC>
            </DivDashSC>
            <div></div>
            <DivDash2SC>
                <SpanNumSC>
                    $12,000
                </SpanNumSC>
            </DivDash2SC>
        </DivWrapperHarvestSC>
    );
};

export default HarvestElement;
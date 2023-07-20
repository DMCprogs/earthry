import React from 'react';
import {DivDash2SC, DivDashSC, DivLogoSC, DivWrapperHarvestSC} from "@/app/profile/styles.profile";
import Image from '../../images/eth_logo.svg'
const HarvestElement = () => {
    return (
        <DivWrapperHarvestSC>
            <DivDashSC>
                <DivLogoSC
                    $image={Image.src}
                >
                </DivLogoSC>
            </DivDashSC>
            <div></div>
            <DivDash2SC></DivDash2SC>
        </DivWrapperHarvestSC>
    );
};

export default HarvestElement;
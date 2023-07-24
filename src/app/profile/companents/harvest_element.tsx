import React, {useEffect, useState} from 'react';
import {
    DivDash2SC,
    DivDashSC,
    DivImageCenterSC,
    DivLogoSC,
    DivWrapperHarvestSC,
    SpanNumSC
} from "@/app/profile/styles.profile";
import Image from '../../images/eth_logo.svg'
import Image2 from '../../images/rvno.svg'
import Image3 from '../../images/path343.svg'
const HarvestElement = (props: any) => {
    const {isProject} = props;
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        window.onload = handleResize;
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    return (
        <DivWrapperHarvestSC $isProject={isProject}>
            <DivDashSC $isProject={isProject}>
                <DivLogoSC
                    $image={Image.src}
                >
                </DivLogoSC>
                <SpanNumSC>
                    120
                </SpanNumSC>
            </DivDashSC>
            <DivImageCenterSC
                $img={width > 768 ? isProject ? Image3.src : Image2.src : Image2.src}
            ></DivImageCenterSC>
            <DivDash2SC $isProject={isProject}>
                <SpanNumSC>
                    $12,000
                </SpanNumSC>
            </DivDash2SC>
        </DivWrapperHarvestSC>
    );
};

export default HarvestElement;
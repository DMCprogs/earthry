import React, {useEffect, useState} from 'react';
import {DivImageBoxSC, DivSection1SC, DivTempHeSC, DivWrapperTwoSectionsSC, H5SC} from "@/app/profile/styles.profile";
import HarvestElement from "@/app/profile/companents/harvest_element";
import SwapBlock from "@/app/components/swapBlock/SwapBlock";
import Image from '../../images/coin2.gif'

const Section2 = () => {
    const [
        dataLayout,
        setData
    ] = useState({
        w: 0,
        h: 0
    })

    useEffect(() => {
        setData({
            w: window.innerWidth,
            h: window.outerHeight
        })
        window.addEventListener('resize', resize)
    }, [])

    const resize = (e: any) => {
        setData({
            w: e.target.innerWidth,
            h: e.target.outerHeight
        })
    }



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

            {
                dataLayout.w > 1350 ?
                <DivSection1SC>
                <DivTempHeSC></DivTempHeSC>
                    <DivImageBoxSC
                    $img={Image.src}
                    ></DivImageBoxSC>
                </DivSection1SC> :
                null
            }
        </DivWrapperTwoSectionsSC>
    );
};

export default Section2;
"use client";
import { useState, useEffect } from "react";

import {
    DivWrapperContentSC,
    H2SC,
    DivUpperGridblockSC,
    DivUpperBlockInnerWrapper,
    DivEarthyBigImgSC,
    PTextRewardSC,
    DivDiagramWrapperBlock,
    PTextDestinationSC,
    H2LeaderboardTitleSC,
    DivForButtonContain,
    DivForStepsWrapper,
    H2StepsTitleSC
} from "./styles.buy_token";

import {DivDefaultContainerSC} from "../styles.page";
import ButtonWrapper from "../components/custom_button";

import SwapBlock from "../components/swapBlock/SwapBlock";
import EarthyCourse from "./earthyCourse/EarthyCourse";
import ChainConvert from "./chainConvert/ChainConvert";
import ConvertDiagram from "./convertDiagram/ConvertDiagram";
import EstimatedPrice from "./estimatedPrice/EstimatedPrice";
import Table from "../components/table";

import earthyImg from '../images/eth_logo.svg';
import StepsBuyToken from "./stepsBuyToken/StepsBuyToken";
import Image from '../images/Team.jpg'

const listData = [
    {
        'Nickname': {
            text:'Vasya007',
            img: Image.src
        },
        'Address': {text:'d90a...94f1'},
        'Tokens now': {text:'11,000,000'},
        'Tokens after launch': {text:'33,000,000'}
    },
    {
        'Nickname': {
            text:'Vasya007',
            img: Image.src
        },
        'Address': {text:'d90a...94f1'},
        'Tokens now': {text:'11,000,000'},
        'Tokens after launch': {text:'33,000,000'}
    },
    {
        'Nickname': {
            text:'Vasya007',
            img: Image.src
        },
        'Address': {text:'d90a...94f1'},
        'Tokens now': {text:'11,000,000'},
        'Tokens after launch': {text:'33,000,000'}
    },
]

const listColumn: string[] = [
    'Nickname',
    'Address',
    'Tokens now',
    'Tokens after launch'
]

const BuyToken = () => {

    const [
        dataLayout,
        setData
    ] = useState({
        w: 0,
        h: 0
    })

    
    let directionRadius = 'right';
    if (dataLayout.w < 480) {
        directionRadius = 'center'
    }


    useEffect(() => {

         setData({
            w: window.outerWidth,
            h: window.outerHeight
        })
        window.addEventListener('resize', resize)
    }, [])

    const resize = (e: any) => {
        // console.log('>>>>>>>>>>>>>>>>>>>>', dataLayout.w)
        setData({
            w: e.target.outerWidth,
            h: e.target.outerHeight
        })
    }

    return (
        <DivDefaultContainerSC>
            <DivWrapperContentSC>
            
                <H2SC>You can purchase these tokens to invest in the development of the Earthy platform</H2SC>

                <DivUpperGridblockSC>
                    <SwapBlock/>
                    {dataLayout.w > 750 && <DivEarthyBigImgSC path={earthyImg.src}></DivEarthyBigImgSC>}
                    <DivUpperBlockInnerWrapper>
                    <EarthyCourse/>
                    <ChainConvert/>
                    {dataLayout.w <= 750 && <DivEarthyBigImgSC path={earthyImg.src}></DivEarthyBigImgSC>}
                    </DivUpperBlockInnerWrapper>
                </DivUpperGridblockSC>     

                <PTextRewardSC>When the Earthy Chain is launched, Earthy token holders will receive 20% of the Earthy
                    mainnet tokens allocated from the general pool (main reserve), as an encouragement and reward for
                    their continued support and commitment to the project. </PTextRewardSC>


                <DivDiagramWrapperBlock>
                    <ConvertDiagram/>
                    <div>
                        <PTextDestinationSC>These 20% of Earthy Chain will be distributed in proportion to the number of Earthy tokens among their holders.</PTextDestinationSC>
                        <PTextDestinationSC>This money will be used to develop the Earthy platform and fund its development, after which the mainnet tokens will be airdropped to the wallet which purchased the dev tokens</PTextDestinationSC>
                    </div>
                </DivDiagramWrapperBlock>
                

                <EstimatedPrice/>

                <H2LeaderboardTitleSC>
                    Leaderboard
                </H2LeaderboardTitleSC>

                <div
                    style={{
                        display: 'grid',
                        maxWidth: '100%'
                    }}
                >
                    <Table
                        columns={listColumn}
                        data={listData}
                    />
                </div>


                <DivForButtonContain>
                    <ButtonWrapper
                        width={202}
                        height={84}
                        directionRadius={"rtl"}
                        primary={true}
                    >
                        <span>View all</span>
                    </ButtonWrapper>
                </DivForButtonContain>

                <H2StepsTitleSC>How to buy Earthy token?</H2StepsTitleSC>
                <DivForStepsWrapper>
                    {dataLayout.w > 1040 && <DivEarthyBigImgSC path={earthyImg.src}></DivEarthyBigImgSC>}  
                    <StepsBuyToken/>
                </DivForStepsWrapper>
                
                

                <DivForButtonContain>
                    <ButtonWrapper
                        width={265}
                        height={74}
                        directionRadius={directionRadius}
                        primary={true}>
                        <span>Buy Earthy Token</span>
                    </ButtonWrapper>
                </DivForButtonContain>

            </DivWrapperContentSC>
        </DivDefaultContainerSC>
    )
};

export default BuyToken;

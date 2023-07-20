"use client";

import {
    DivWrapperContentSC,
    H2SC,
    DivEarthyBigImgSC,
    PTextRewardSC,
    PTextDestinationSC,
    H2LeaderboardTitleSC,
    DivForButtonContain
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
    return (
        <DivDefaultContainerSC>
            <DivWrapperContentSC>
            
                <H2SC>You can purchase these tokens to invest in the development of the Earthy platform</H2SC>
                <SwapBlock/>
                <EarthyCourse/>
                <ChainConvert/>

                <DivEarthyBigImgSC path={earthyImg.src}></DivEarthyBigImgSC>
                <PTextRewardSC>When the Earthy Chain is launched, Earthy token holders will receive 20% of the Earthy
                    mainnet tokens allocated from the general pool (main reserve), as an encouragement and reward for
                    their continued support and commitment to the project. </PTextRewardSC>

                <ConvertDiagram/>

                <PTextDestinationSC>These 20% of Earthy Chain will be distributed in proportion to the number of Earthy
                    tokens among their holders.</PTextDestinationSC>

                <PTextDestinationSC>This money will be used to develop the Earthy platform and fund its development,
                    after which the mainnet tokens will be airdropped to the wallet which purchased the dev
                    tokens</PTextDestinationSC>
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

                <StepsBuyToken/>

                <DivForButtonContain>
                    <ButtonWrapper
                        width={281}
                        height={74}
                        directionRadius={"center"}
                        primary={true}>
                        <span>Buy Earthy Token</span>
                    </ButtonWrapper>
                </DivForButtonContain>

            </DivWrapperContentSC>
        </DivDefaultContainerSC>
    )
};

export default BuyToken;

"use client";

import {
    DivBlancSC,
    DivWrapperContentSC,
    H2SC,
    DivWrapperGradientSC,
    DivWrapperGradientLightSC,
    DivEarthyBigImgSC,
    PTextRewardSC,
    PTextDestinationSC,
    H2LeaderboardTitleSC
  } from "./styles.buy_token";

import ButtonWrapper from "../components/custom_button";

import SwapBlock from "./swapBlock/SwapBlock";
import EarthyCourse from "./earthyCourse/EarthyCourse";
import ChainConvert from "./chainConvert/ChainConvert";
import ConvertDiagram from "./convertDiagram/ConvertDiagram";
import EstimatedPrice from "./estimatedPrice/EstimatedPrice";

import earthyImg from '../images/eth_logo.svg';
import StepsBuyToken from "./stepsBuyToken/StepsBuyToken";

const BuyToken = () => {
  return (
  <DivWrapperContentSC>
    <DivWrapperGradientSC>
      <H2SC>You can purchase these tokens to invest in the development  of the Earthy platform</H2SC>
      <SwapBlock />
      <EarthyCourse />
    </DivWrapperGradientSC>
    <ChainConvert />
    <DivEarthyBigImgSC path={earthyImg.src}></DivEarthyBigImgSC>
    <PTextRewardSC>When the Earthy Chain is launched, Earthy token holders will receive 20% of the Earthy mainnet tokens allocated from the general pool (main reserve), as an encouragement and reward for their continued support and commitment to the project. </PTextRewardSC>
    <ConvertDiagram />
    <PTextDestinationSC>These 20% of Earthy Chain will be distributed in proportion to the number of Earthy tokens among their holders.</PTextDestinationSC>

    <DivWrapperGradientLightSC>
      <PTextDestinationSC>This money will be used to develop the Earthy platform and fund its development, after which the mainnet tokens will be airdropped to the wallet which purchased the dev tokens</PTextDestinationSC>
      <EstimatedPrice />
      <H2LeaderboardTitleSC>Leaderboard</H2LeaderboardTitleSC>
    </DivWrapperGradientLightSC>

    <DivBlancSC></DivBlancSC>

    <ButtonWrapper
        width={202}
        height={84}
        directionRadius={"rtr"}
        primary={true}
      >
        <span>View all</span>
    </ButtonWrapper>

    <StepsBuyToken />

    <ButtonWrapper
      width={281}
      height={74}
      directionRadius={"center"}
      primary={true}>
      <span>Buy Earthy Token</span>
    </ButtonWrapper>
    
  </DivWrapperContentSC>
)
};

export default BuyToken;

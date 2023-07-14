"use client";
import React, { useEffect, useState } from "react";
import {
  DivWrapperCellImageSC,
  DivWrapperContentSC,
  H4SC,
  TitleTokenomicsSC,
  DivBoxOptionsTokensSC,
  DivBoxInputTokenSC,
  DivTitleTokenSC,
  DivCountTokenSC,
  DivBoxShadowSC,
  DivBoxCounterSC,
  ImagePlanetTokenSC,
  DivWrapImgTitleSC,
} from "./styles.tokenomics";
import Image from "../images/chart.png";
import Image2 from "../images/planet_token.svg";
import { SpanTextSC } from "./styles.tokenomics";
import ButtonWrapper from "../components/custom_button";

const Tokenomics = () => {
  const [titlesTokens, setTitlesToken] = useState([
    { id: 1, name: "Total platform investment", count: "3,000,000" },
    { id: 2, name: "Already purchased", count: "1,500,000" },
    { id: 3, name: "Already invested", count: "1,500,000" },
  ]);
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
    <DivWrapperContentSC>
      <TitleTokenomicsSC>Tokenomics</TitleTokenomicsSC>
      <DivWrapperCellImageSC path={Image.src}></DivWrapperCellImageSC>
      <ButtonWrapper
        width={270}
        height={74}
        directionRadius={"center"}
        primary={true}
      >
        <span>Buy on Uniswap</span>
      </ButtonWrapper>
      <H4SC positionText={"center"}>
        A total of 1,000,000,000 Earthy tokens will be issued
      </H4SC>
      {width >= 480 ? (
        <SpanTextSC>
          <H4SC positionText={"center"}>What is the Earthy Token for?</H4SC>
          <br />
          We have a smart contract mechanism for monthly withdrawal of a fixed
          amount of liquidity from a contract totaling $140,000 in Ethereum
          coins.
        </SpanTextSC>
      ) : (
        <SpanTextSC>
          <H4SC positionText={"center"}>What is the Earthy Token for?</H4SC>
          We have a smart contract mechanism for monthly withdrawal of a fixed
          amount of liquidity from a contract totaling $140,000 in Ethereum
          coins.
        </SpanTextSC>
      )}
      <DivBoxCounterSC>
        <DivBoxShadowSC />
        <DivBoxOptionsTokensSC>
          {titlesTokens.map((itemToken, i) => {
            return (
              <DivBoxInputTokenSC key={`defshsrefda${i}`}>
                <DivTitleTokenSC>{itemToken.name}</DivTitleTokenSC>
                <DivCountTokenSC>{itemToken.count}</DivCountTokenSC>
              </DivBoxInputTokenSC>
            );
          })}
        </DivBoxOptionsTokensSC>
      </DivBoxCounterSC>
      <DivWrapImgTitleSC>
        <ImagePlanetTokenSC path={Image2.src}></ImagePlanetTokenSC>
        {width >= 1000 ? (
          <H4SC>
            The withdrawn funds are securely transferred to the specified
            development wallet. Of which: $60,000 is allocated to cover
            development costs, the next $20,000 is allocated to marketing
            expenses to promote the platform and attract users, $30,000 is
            allocated to consulting services and legal expenses to ensure a safe
            and compliant operating environment, travel expenses and equipment
            $20,000 in month, the infrastructure costs $10,000 per month.
          </H4SC>
        ) : (
          <H4SC positionText={"center"}>
            The withdrawn funds are securely transferred to the specified
            development wallet. Of which: $60,000 is allocated to cover
            development costs, the next $20,000 is allocated to marketing
            expenses to promote the platform and attract users, $30,000 is
            allocated to consulting services and legal expenses to ensure a safe
            and compliant operating environment, travel expenses and equipment
            $20,000 in month, the infrastructure costs $10,000 per month.
          </H4SC>
        )}
      </DivWrapImgTitleSC>
      <ButtonWrapper
        width={326}
        height={84}
        directionRadius={"ltr"}
        primary={true}
      >
        <span>Buy token</span>
      </ButtonWrapper>
    </DivWrapperContentSC>
  );
};

export default Tokenomics;

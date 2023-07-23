/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC, MutableRefObject, useState } from "react";
import BlogCard from "../blog/BlogCard";
import {
  DivTitleTokenomic,
  DivContainerTokenomic,
  DivInfoTocenomic,
  DivWrapperCellImageSC,
  DivTextTokenomics,
  DivButtons,
} from "./styles.tokenomic";
import image from "../../images/ItemBlogExample.png";
import coin2 from "../../images/coin2.gif";
import Link from "next/link";
import ButtonWrapper from "../custom_button";
import Image from "../../images/chart.svg";
import { motion } from "framer-motion";
const Tokenomic: FC<{
  forRefW: MutableRefObject<undefined | any>;
}> = (props) => {
  const { forRefW } = props;

  return (
    <DivContainerTokenomic ref={forRefW}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            y: -85,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          },
        }}
      >
        <DivTitleTokenomic>Tokenomics</DivTitleTokenomic>
      </motion.div>
      <DivInfoTocenomic>
        {" "}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              x: -100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            },
          }}
        >
        <DivWrapperCellImageSC path={Image.src}></DivWrapperCellImageSC>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              x: 100,
              opacity: 0,
            },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.6 },
            },
          }}
        >
          <DivTextTokenomics>
            Earthy Tools' tokenomics ensures fairness and stability by reserving
            tokens for project development and rewarding early adopters. Funds
            are secured for continued operations and enhancements, while early
            users are incentivized via airdrops of tokens and exclusive NFTs at
            mainnet launch. Measures like vesting schedules and withdrawal
            limits maintain market stability and discourage manipulation,
            creating a balanced rewarding ecosystem for our early supporters.
          </DivTextTokenomics>
        </motion.div>
      </DivInfoTocenomic>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            y: 100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          },
        }}
      >
        <DivButtons>
          <Link href={"/buy_token"}>
            <ButtonWrapper
              primary={true}
              width={233}
              directionRadius="right"
              type="submit"
              height={64}
            >
              <span>Buy token</span>
            </ButtonWrapper>
          </Link>
          <Link href={"/tokenomics"}>
            <ButtonWrapper
              primary={true}
              width={233}
              directionRadius="left"
              type="submit"
              height={64}
            >
              <span>Learn more</span>
            </ButtonWrapper>
          </Link>
        </DivButtons>
      </motion.div>
    </DivContainerTokenomic>
  );
};

export default Tokenomic;

"use client";
import React, { useEffect, useState } from "react";
import {
  DivButtonsBlockSC,
  DivContentWrapSC,
  DivGifSC,
  DivLeftBlockSC,
  DivPhotoSC,
  DivSectionSC,
  DivTextSC,
} from "./styles.earthy";
import coin from "./../../images/coin.gif";
import Image from "next/image";
import EarthyLogo from "./../../images/Earthy.svg";
import ButtonWrapper from "../custom_button";
import { DivOneRowSC } from "@/app/airdrop/styles.airdrop";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
const Earthy = () => {
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
    <DivSectionSC>
      <DivContentWrapSC>
        <DivLeftBlockSC>
          {" "}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                opacity: 0,
              },
              visible: {
                rotateX: 360,
                scale: 1,
                opacity: 1,
                transition: { duration: 0.8, delay: 1 },
              },
            }}
          >
            <DivPhotoSC src={EarthyLogo} alt="Earthy" />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                x: -300,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                x: width <= 1000 ? 0 : -140,
                transition: { duration: 0.7, delay: 1.5 },
              },
            }}
          >
            <DivTextSC>Co-creation of the Future</DivTextSC>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                y: 200,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay: 1.5 },
              },
            }}
          >
            <DivButtonsBlockSC>
              <ButtonWrapper
                colorButton="#195946"
                primary={true}
                width={326}
                directionRadius={"center"}
                height={74}
              >
                <span>Buy Earthy Token</span>
              </ButtonWrapper>
              <ButtonWrapper
                colorButton="3px solid #201E1C"
                primary={false}
                width={326}
                directionRadius={"center"}
                height={74}
              >
                <DivOneRowSC>
                  Join the community
                  <AiOutlineArrowRight color={"black"} size={20} />
                </DivOneRowSC>
              </ButtonWrapper>
            </DivButtonsBlockSC>
          </motion.div>
        </DivLeftBlockSC>
        <DivGifSC src={coin} alt="Picture of the author" />
      </DivContentWrapSC>
    </DivSectionSC>
  );
};

export default Earthy;

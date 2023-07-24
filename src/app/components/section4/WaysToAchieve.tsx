/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import {
  DivContainerRowsSC,
  TitleWaysToAchieveSC,
  DivWrapperContentSC,
  Image1SC,
  Image2SC,
  DivBoxRowsTextSC,
  TextBoldSC,
  TextNormalSC,
  DivBoxButtonSC,
  DivBoxButtonsWaysSC
} from "./styles.ways_to_achieve";
import Img1 from "../../images/img1_section4.svg";
import Img2 from "../../images/img2_section4.svg";
import ButtonWrapper from "../custom_button";
import Link from "next/link";
import { motion } from "framer-motion";
const WaysToAchieve = () => {
  const [width, setWidth] = useState<number>(1200);
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
    <DivContainerRowsSC>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            scale: 1,
            y: -100,
            opacity: 0,
          },
          visible: {
            scale: 1,
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, delay: 0.5 },
          },
        }}
      >
        <TitleWaysToAchieveSC>
          Ways to achieve the programmatic goals of the Earthy platform
        </TitleWaysToAchieveSC>
      </motion.div>
      {width >= 1000 ? (
        <DivWrapperContentSC $isGap={true}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                scale: 1,
                x: -100,
                opacity: 0,
              },
              visible: {
                scale: 1,
                x: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.5 },
              },
            }}
          >
            <Image1SC $path={Img1.src} alt="Img1" />
          </motion.div>
          <DivBoxRowsTextSC>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  scale: 1,
                  x: 100,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.5 },
                },
              }}
            >
              <TextBoldSC>
                1. Non-profit adaptation of environmental and charitable
                projects.
              </TextBoldSC>
              <TextNormalSC>
                The process of registering non-profit organizations on the
                Earthy platform is an important aspect of our ecosystem. Our
                goal is to make sure that all the organizations listed on the
                platform are legitimate and have proven experience of making a
                positive impact on the world. Here's how this process works:
              </TextNormalSC>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  scale: 1,
                  y: 100,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.5 },
                },
              }}
            >
              <DivBoxButtonsWaysSC>
              <Link style={{ width: "fit-content" }} href={"/non_profit1"}>
                <ButtonWrapper
                  directionRadius={"center"}
                  width={201}
                  height={74}
                  primary={true}
                >
                  <span>Learn more</span>
                </ButtonWrapper>
              </Link>
                <Link style={{ width: "fit-content" }} href={"https://forms.gle/fxEcSnhQArMr4WW9A"}>
                  <ButtonWrapper
                      directionRadius={"center"}
                      width={200}
                      height={74}
                      primary={true}
                  >
                    <span>Open form</span>
                  </ButtonWrapper>
                </Link>
              </DivBoxButtonsWaysSC>
            </motion.div>
          </DivBoxRowsTextSC>
        </DivWrapperContentSC>
      ) : (
        <DivWrapperContentSC $isGap={true}>
          <DivBoxRowsTextSC>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  scale: 1,
                  x: 100,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.5 },
                },
              }}
            >
              <TextBoldSC>
                1. Non-profit adaptation of environmental and charitable
                projects.
              </TextBoldSC>
              <TextNormalSC>
                The process of registering non-profit organizations on the
                Earthy platform is an important aspect of our ecosystem. Our
                goal is to make sure that all the organizations listed on the
                platform are legitimate and have proven experience of making a
                positive impact on the world. Here's how this process works:
              </TextNormalSC>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {
                  scale: 0,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.7, delay: 0.5 },
                },
              }}
            >
              <DivBoxButtonsWaysSC>
                <Link style={{ width: "fit-content" }} href={"/non_profit1"}>
                  <ButtonWrapper
                      directionRadius={"center"}
                      width={201}
                      height={74}
                      primary={true}
                  >
                    <span>Learn more</span>
                  </ButtonWrapper>
                </Link>
                <Link style={{ width: "fit-content" }} href={"https://forms.gle/fxEcSnhQArMr4WW9A"}>
                  <ButtonWrapper
                      directionRadius={"center"}
                      width={200}
                      height={74}
                      primary={true}
                  >
                    <span>Open form</span>
                  </ButtonWrapper>
                </Link>
              </DivBoxButtonsWaysSC>
            </motion.div>
          </DivBoxRowsTextSC>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                x: -100,
                scale: 1,
                opacity: 0,
              },
              visible: {
                x: 0,
                scale: 1,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.5 },
              },
            }}
          >
            <Image1SC $path={Img1.src} alt="Img1" />
          </motion.div>
        </DivWrapperContentSC>
      )}
      <DivWrapperContentSC $isGap={true}>
        <DivBoxRowsTextSC>
          {" "}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                scale: 1,
                x: -100,
                opacity: 0,
              },
              visible: {
                scale: 1,
                x: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.5 },
              },
            }}
          >
            <TextBoldSC>
              2. Tools For Non-Porfits, Charities and People to make a
              difference.
            </TextBoldSC>
            <TextNormalSC>
              Earthy Tools empowers non-profits, charities, and individuals to
              impact the world. We ensure transparency in fund utilization,
              locate talent globally, and offer a crowdfunding system rewarding
              contributors. Our social media platform connects like-minded
              individuals, promoting participation in local and global projects.
              Verified companies can offer tokens and NFTs to volunteers,
              fostering a community committed to kindness.
            </TextNormalSC>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {
                scale: width >= 1000 ? 1 : 0,
                y: width >= 1000 ? 100 : 0,
                opacity: 0,
              },
              visible: {
                scale: 1,
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0.5 },
              },
            }}
          >
            <DivBoxButtonSC>
              <Link style={{ width: "fit-content" }} href={"/non_profit2"}>
                <ButtonWrapper
                  directionRadius={"center"}
                  width={201}
                  height={74}
                  primary={true}
                >
                  <span>Learn more</span>
                </ButtonWrapper>
              </Link>
            </DivBoxButtonSC>
          </motion.div>
        </DivBoxRowsTextSC>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {
              x: 100,
              scale: 1,
              opacity: 0,
            },
            visible: {
              x: 0,
              scale: 1,
              opacity: 1,
              transition: { duration: 0.7, delay: 0.5 },
            },
          }}
        >
          <Image2SC $path={Img2.src} alt="Img2" />
        </motion.div>
      </DivWrapperContentSC>
    </DivContainerRowsSC>
  );
};

export default WaysToAchieve;

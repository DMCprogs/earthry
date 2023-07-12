"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import styles from "./Header.module.css";
import {
  DivBoxHeaderSC,
  DivBoxColumnsSC,
  IconLogoSC,
  DivBoxTabsButtonsSC,
  DivBoxTabsSC,
  DivBoxTabSC,
  DivBoxButtonsSC,
  DivBoxBurgerSC,
  DivBoxButtonsMenuSC,
} from "./styles.header";
import logo from "../../images/Logo.svg";
import ButtonWrapper from "../custom_button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Header = (props: any) => {
  const {
    onClickScrollHome,
    onClickScrollTokenomics,
    onClickScrollAbout,
    onClickScrollLeaderboard,
    onClickScrollNFT,
    onClickScrollFAQ,
    onClickScrollBlog,
    onClickScrollExchange,
  } = props;

  const [isChosen, setIsChosen] = useState();

  const router = useRouter();
  const [valueTab, setValueTab] = useState<string>("About");
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    window.onload = handleResize;
    setWidth(window.outerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const onTabSelect = (event: any, data: any) => {
    setValueTab(data.value);
    setIsChosen(data.value);
    switch (data.value) {
      case "Home":
        return onClickScrollHome();
      case "Tokenomics":
        return onClickScrollTokenomics();
      case "About":
        return onClickScrollAbout();
      case "Leaderboard":
        return onClickScrollLeaderboard();
      case "Howtoby":
        return onClickScrollNFT();
      case "NFT":
        return onClickScrollFAQ();
      case "Blog":
        return onClickScrollBlog();
      case "Exchange":
        return onClickScrollExchange();
    }
  };
  const handleResize = () => {
    setWidth(window.outerWidth);
  };

  return (
    <DivBoxHeaderSC>
      <DivBoxColumnsSC>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: -85,
              opacity: 0,
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.7, delay: 0 },
            },
          }}
        >
          {" "}
          <IconLogoSC src={logo} alt="logo"></IconLogoSC>
        </motion.div>
        <DivBoxTabsButtonsSC>
          {width === 0 ? null : width >= 1301 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 1,
                },
                visible: {
                  y: 0,
                  opacity: 1,

                  transition: { duration: 0.7, delay: 0 },
                },
              }}
            >
              {" "}
              <DivBoxTabsSC
                onTabSelect={onTabSelect}
                selectedValue={valueTab}
                {...props}
              >
                <DivBoxTabSC onClick={onClickScrollTokenomics}>
                  Home
                </DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollTokenomics}>
                  Tokenomics
                </DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollAbout}>About</DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollLeaderboard}>
                  Leaderboard
                </DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollNFT}>NFT</DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollBlog}>Blog</DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollFAQ}>FAQ</DivBoxTabSC>
              </DivBoxTabsSC>
            </motion.div>
          ) : (
            <DivBoxTabsSC
              onTabSelect={onTabSelect}
              selectedValue={valueTab}
              {...props}
            >
              <DivBoxTabSC onClick={onClickScrollTokenomics}>Home</DivBoxTabSC>
              <DivBoxTabSC onClick={onClickScrollTokenomics}>
                Tokenomics
              </DivBoxTabSC>
              <DivBoxTabSC onClick={onClickScrollAbout}>About</DivBoxTabSC>
              <DivBoxTabSC onClick={onClickScrollLeaderboard}>
                Leaderboard
              </DivBoxTabSC>
              <DivBoxTabSC onClick={onClickScrollNFT}>NFT</DivBoxTabSC>
              <DivBoxTabSC onClick={onClickScrollBlog}>Blog</DivBoxTabSC>
              <DivBoxTabSC onClick={onClickScrollFAQ}>FAQ</DivBoxTabSC>
            </DivBoxTabsSC>
          )}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                y: -85,
                opacity: 1,
              },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.7, delay: 0 },
              },
            }}
          >
            <DivBoxButtonsSC>
              <ButtonWrapper
                onClick={onClickScrollExchange}
                width={222}
                primary={true}
                directionRadius="center"
                height={64}
              >
                <span> Buy on Uniswap</span>
              </ButtonWrapper>

              <ButtonWrapper
                width={222}
                primary={true}
                directionRadius="center"
                height={64}
              >
                <span>Buy with card</span>
              </ButtonWrapper>
            </DivBoxButtonsSC>
          </motion.div>
          <div className={styles.hamburger_menu}>
            <input id={styles.menu__toggle} type="checkbox" />
            <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
              <span></span>
            </label>
            <div className={styles.menu__box}>
              <DivBoxBurgerSC
                onTabSelect={onTabSelect}
                selectedValue={valueTab}
                className={styles.menu}
                {...props}
              >
                <DivBoxTabSC onClick={onClickScrollTokenomics}>
                  Home
                </DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollTokenomics}>
                  Tokenomics
                </DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollAbout}>About</DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollLeaderboard}>
                  Leaderboard
                </DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollNFT}>NFT</DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollBlog}>Blog</DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollFAQ}>FAQ</DivBoxTabSC>
                <DivBoxButtonsMenuSC>
                  <ButtonWrapper
                    width={222}
                    primary={true}
                    directionRadius="center"
                    height={64}
                    onClick={onClickScrollExchange}
                  >
                    <span> Buy on Uniswap</span>
                  </ButtonWrapper>
                  <ButtonWrapper
                    width={222}
                    primary={true}
                    directionRadius="center"
                    height={64}
                  >
                    <span>Buy with card</span>
                  </ButtonWrapper>
                </DivBoxButtonsMenuSC>
              </DivBoxBurgerSC>
            </div>
          </div>
        </DivBoxTabsButtonsSC>
      </DivBoxColumnsSC>
    </DivBoxHeaderSC>
  );
};

export default Header;

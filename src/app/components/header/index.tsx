"use client";
import React, { useEffect, useState } from "react";
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
  DivBoxLinkSC,
} from "./styles.header";
import logo from "../../images/Logo.svg";
import ButtonWrapper from "../custom_button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Menu from "@/app/components/header/Menu/Menu";

const Header = (props: any) => {
  const {
    onClickScrollHome,
    onClickScrollTokenomics,
    onClickScrollBlog,
    onClickScrollProject,
  } = props;
  const [width, setWidth] = useState<number>(0);
  const [isLanding, setIsLanding] = useState(true)
  const [menuActive, setMenuActive] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setIsLanding(true)
        break;
      case "/non_profit1":
      case "/non_profit2":
      case "/about":
      case "/faq":
      case "/tokenomics":
      case "/leaderboard":
      case "/buy_token":
      case "/airdrop":
      case "/airdrop/success":
      case "/profile":
      case "/project":
        setIsLanding(false)
        break;
    }
  }, [pathname]);

  useEffect(() => {
    window.onload = handleResize;
    setWidth(window.outerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    setWidth(window.outerWidth);
  };

  return (
    <DivBoxHeaderSC $isLanding={isLanding}>
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
          <Link href={"/"}>
            <IconLogoSC src={logo} alt="logo"></IconLogoSC>
          </Link>
        </motion.div>
        <DivBoxTabsButtonsSC>
          {width === 0 ? null : width >= 1301 ? (
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
              <DivBoxTabsSC>
                <DivBoxTabSC onClick={onClickScrollHome}>Home</DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollProject}>
                  Projects
                </DivBoxTabSC>
                <DivBoxTabSC onClick={onClickScrollTokenomics}>
                  Tokenomics
                </DivBoxTabSC>
                <DivBoxLinkSC href={"/about"}>About</DivBoxLinkSC>
                <DivBoxLinkSC href={"/leaderboard"}>Leaderboard</DivBoxLinkSC>
                <DivBoxTabSC onClick={onClickScrollBlog}>Blog</DivBoxTabSC>
                <DivBoxLinkSC href={"/faq"}>FAQ</DivBoxLinkSC>
                <DivBoxLinkSC href={"/profile"}>Profile</DivBoxLinkSC>
              </DivBoxTabsSC>
            </motion.div>
          ) : (
            <DivBoxTabsSC>
              <DivBoxTabSC onClick={onClickScrollHome}>Home</DivBoxTabSC>
              <DivBoxTabSC onClick={onClickScrollProject}>Projects</DivBoxTabSC>
              <DivBoxTabSC onClick={onClickScrollTokenomics}>
                Tokenomics
              </DivBoxTabSC>
              <DivBoxLinkSC href={"/about"}>About</DivBoxLinkSC>
              <DivBoxLinkSC href={"/leaderboard"}>Leaderboard</DivBoxLinkSC>
              <DivBoxTabSC onClick={onClickScrollBlog}>Blog</DivBoxTabSC>
              <DivBoxLinkSC href={"/faq"}>FAQ</DivBoxLinkSC>
              <DivBoxLinkSC href={"/profile"}>Profile</DivBoxLinkSC>
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
              <Link href={"/buy_token"}>
                <ButtonWrapper
                  width={233}
                  primary={true}
                  directionRadius="center"
                  height={64}
                >
                  <span>Buy Earthy token</span>
                </ButtonWrapper>
              </Link>
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
          <div className={styles.burger_btn} onClick={() => setMenuActive(!menuActive)}>
            <span/>
          </div>
          <Menu
              active={menuActive} setActive={setMenuActive}
              onClickScrollHome={onClickScrollHome}
              onClickScrollTokenomics={onClickScrollTokenomics}
              onClickScrollBlog={onClickScrollBlog}
              onClickScrollProject={onClickScrollProject}/>
        </DivBoxTabsButtonsSC>
      </DivBoxColumnsSC>
    </DivBoxHeaderSC>
  );
};

export default Header;

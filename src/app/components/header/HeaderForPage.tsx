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
  DivBoxHeaderForPageSC
} from "./styles.header";
import logo from "../../images/Logo.svg";
import ButtonWrapper from "../custom_button";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Menu from "@/app/components/header/Menu/Menu";

const HeaderForPage = (props: any) => {
  const [width, setWidth] = useState<number>(0);
  const [isPages, setIsPages] = useState(true)
  const [menuActive, setMenuActive] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setIsPages(false)
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
      case "/blog":
      case "/blog_detail":

        setIsPages(true)
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
    <DivBoxHeaderForPageSC $isPages={isPages}>
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
              <DivBoxTabsSC>
                <DivBoxLinkSC href={"/"}>Home</DivBoxLinkSC>
                <DivBoxLinkSC href={"/project"}>Projects</DivBoxLinkSC>
                <DivBoxLinkSC href={"/tokenomics"}>Tokenomics</DivBoxLinkSC>
                <DivBoxLinkSC href={"/about"}>About</DivBoxLinkSC>
                <DivBoxLinkSC href={"/leaderboard"}>Leaderboard</DivBoxLinkSC>
                <DivBoxLinkSC href={"/blog"}>Blog</DivBoxLinkSC>
                <DivBoxLinkSC href={"/faq"}>FAQ</DivBoxLinkSC>
                <DivBoxLinkSC href={"/profile"}>Profile</DivBoxLinkSC>
              </DivBoxTabsSC>
            </motion.div>
          ) : (
            <DivBoxTabsSC>
              <DivBoxLinkSC href={"/"}>Home</DivBoxLinkSC>
              <DivBoxLinkSC href={"/project"}>Projects</DivBoxLinkSC>
              <DivBoxLinkSC href={"/tokenomics"}>Tokenomics</DivBoxLinkSC>
              <DivBoxLinkSC href={"/about"}>About</DivBoxLinkSC>
              <DivBoxLinkSC href={"/leaderboard"}>Leaderboard</DivBoxLinkSC>
              <DivBoxLinkSC href={"/blog"}>Blog</DivBoxLinkSC>
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
              <Link href="/buy_token">
                <ButtonWrapper
                  width={222}
                  primary={true}
                  directionRadius="center"
                  height={64}
                >
                  <span>Buy Earthy token</span>
                </ButtonWrapper>
              </Link>
              <Link href="#">
                <ButtonWrapper
                  width={222}
                  primary={true}
                  directionRadius="center"
                  height={64}
                >
                  <span>Buy with card</span>
                </ButtonWrapper>
              </Link>
            </DivBoxButtonsSC>
          </motion.div>
          <div className={styles.burger_btn} onClick={() => setMenuActive(!menuActive)}>
            <span />
          </div>
          <Menu
            active={menuActive} setActive={setMenuActive} />
        </DivBoxTabsButtonsSC>
      </DivBoxColumnsSC>
    </DivBoxHeaderForPageSC>
  );
};

export default HeaderForPage;

"use client";
import React, {useEffect, useState} from "react";
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
import {motion} from "framer-motion";
import {usePathname} from "next/navigation";
import Link from "next/link";

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
    const [isScrollFooter, setIsScrollFooter] = useState(true);
    const [width, setWidth] = useState<number>(0);
    const [isBgColor, setIsBgColor] = useState<boolean>(true);
    const pathname = usePathname();

    useEffect(() => {
        switch (pathname) {
            case "/":
                setIsBgColor(true);
                setIsScrollFooter(true);
                break;
            case "/non_profit1":
            case "/non_profit2":
            case "/about":
            case "/faq":
            case "/tokenomics":
            case "/buy_token":
            case "/airdrop":
            case "/airdrop/success":
            case "/profile":
            case "/projects":
                setIsBgColor(false);
                setIsScrollFooter(false);
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
        <DivBoxHeaderSC $isBgColor={isBgColor}>
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
                            transition: {duration: 0.7, delay: 0},
                        },
                    }}
                >
                    {" "}
                    <Link href={"/"}>
                        <IconLogoSC src={logo} alt="logo"></IconLogoSC>
                    </Link>
                </motion.div>
                {isScrollFooter ? (
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

                                        transition: {duration: 0.7, delay: 0},
                                    },
                                }}
                            >
                                {" "}
                                <DivBoxTabsSC>
                                    <DivBoxTabSC onClick={onClickScrollHome}>Home</DivBoxTabSC>
                                    <DivBoxLinkSC href={"/projects"}>Projects</DivBoxLinkSC>
                                    <DivBoxTabSC onClick={onClickScrollTokenomics}>
                                        Tokenomics
                                    </DivBoxTabSC>
                                    <DivBoxTabSC onClick={onClickScrollAbout}>About</DivBoxTabSC>
                                    <DivBoxTabSC onClick={onClickScrollLeaderboard}>
                                        Leaderboard
                                    </DivBoxTabSC>
                                    <DivBoxTabSC onClick={onClickScrollBlog}>Blog</DivBoxTabSC>
                                    <DivBoxTabSC onClick={onClickScrollFAQ}>FAQ</DivBoxTabSC>
                                    <DivBoxLinkSC href={"/profile"}>Profile</DivBoxLinkSC>
                                </DivBoxTabsSC>
                            </motion.div>
                        ) : (
                            <DivBoxTabsSC>
                                <DivBoxTabSC onClick={onClickScrollHome}>Home</DivBoxTabSC>
                                <DivBoxLinkSC href={"/projects"}>Projects</DivBoxLinkSC>
                                <DivBoxTabSC onClick={onClickScrollTokenomics}>
                                    Tokenomics
                                </DivBoxTabSC>
                                <DivBoxTabSC onClick={onClickScrollAbout}>About</DivBoxTabSC>
                                <DivBoxTabSC onClick={onClickScrollLeaderboard}>
                                    Leaderboard
                                </DivBoxTabSC>
                                <DivBoxTabSC onClick={onClickScrollBlog}>Blog</DivBoxTabSC>
                                <DivBoxTabSC onClick={onClickScrollFAQ}>FAQ</DivBoxTabSC>
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
                                    transition: {duration: 0.7, delay: 0},
                                },
                            }}
                        >
                            <DivBoxButtonsSC>
                                <Link href={"/buy_token"}>
                                    <ButtonWrapper
                                        onClick={onClickScrollExchange}
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
                        <div className={styles.hamburger_menu}>
                            <input id={styles.menu__toggle} type="checkbox"/>
                            <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
                                <span></span>
                            </label>
                            <div className={styles.menu__box}>
                                <DivBoxBurgerSC className={styles.menu}>
                                    <DivBoxTabSC onClick={onClickScrollHome}>Home</DivBoxTabSC>
                                    <DivBoxLinkSC href={"/projects"}>Projects</DivBoxLinkSC>
                                    <DivBoxTabSC onClick={onClickScrollTokenomics}>
                                        Tokenomics
                                    </DivBoxTabSC>
                                    <DivBoxTabSC onClick={onClickScrollAbout}>About</DivBoxTabSC>
                                    <DivBoxTabSC onClick={onClickScrollLeaderboard}>
                                        Leaderboard
                                    </DivBoxTabSC>
                                    <DivBoxTabSC onClick={onClickScrollBlog}>Blog</DivBoxTabSC>
                                    <DivBoxTabSC onClick={onClickScrollFAQ}>FAQ</DivBoxTabSC>
                                    <DivBoxLinkSC href={"/profile"}>Profile</DivBoxLinkSC>
                                    <DivBoxButtonsMenuSC>
                                        <Link href={"/buy_token"}>
                                            <ButtonWrapper
                                                width={222}
                                                primary={true}
                                                directionRadius="center"
                                                height={64}
                                                onClick={onClickScrollExchange}
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
                                    </DivBoxButtonsMenuSC>
                                </DivBoxBurgerSC>
                            </div>
                        </div>
                    </DivBoxTabsButtonsSC>
                ) : (
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

                                        transition: {duration: 0.7, delay: 0},
                                    },
                                }}
                            >
                                {" "}
                                <DivBoxTabsSC>
                                    <DivBoxLinkSC href={"/"}>Home</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/projects"}>Projects</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/tokenomics"}>Tokenomics</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/about"}>About</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"#"}>Leaderboard</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"#"}>Blog</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/faq"}>FAQ</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/profile"}>Profile</DivBoxLinkSC>
                                </DivBoxTabsSC>
                            </motion.div>
                        ) : (
                            <DivBoxTabsSC>
                                <DivBoxLinkSC href={"/"}>Home</DivBoxLinkSC>
                                <DivBoxLinkSC href={"/projects"}>Projects</DivBoxLinkSC>
                                <DivBoxLinkSC href={"#"}>Tokenomics</DivBoxLinkSC>
                                <DivBoxLinkSC href={"/about"}>About</DivBoxLinkSC>
                                <DivBoxLinkSC href={"#"}>Leaderboard</DivBoxLinkSC>
                                <DivBoxLinkSC href={"#"}>Blog</DivBoxLinkSC>
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
                                    transition: {duration: 0.7, delay: 0},
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
                        <div className={styles.hamburger_menu}>
                            <input id={styles.menu__toggle} type="checkbox"/>
                            <label className={styles.menu__btn} htmlFor={styles.menu__toggle}>
                                <span></span>
                            </label>
                            <div className={styles.menu__box}>
                                <DivBoxBurgerSC className={styles.menu}>
                                    <DivBoxLinkSC href={"/"}>Home</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/projects"}>Projects</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/tokenomics"}>Tokenomics</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/about"}>About</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"#"}>Leaderboard</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"#"}>Blog</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/faq"}>FAQ</DivBoxLinkSC>
                                    <DivBoxLinkSC href={"/profile"}>Profile</DivBoxLinkSC>
                                    <DivBoxButtonsMenuSC>
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
                                    </DivBoxButtonsMenuSC>
                                </DivBoxBurgerSC>
                            </div>
                        </div>
                    </DivBoxTabsButtonsSC>
                )}
            </DivBoxColumnsSC>
        </DivBoxHeaderSC>
    );
};

export default Header;

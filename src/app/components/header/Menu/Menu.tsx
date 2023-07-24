import React, {useEffect, useState} from 'react';
import "./Menu.css"
import {
    DivBoxButtonsMenuSC,
    DivBoxLinkSC,
    DivBoxTabSC,
    DivBoxBurgerSC,
    DivButtonCloseSC,
    AnimatedComponent
} from "@/app/components/header/styles.header";
import Link from "next/link";
import ButtonWrapper from "@/app/components/custom_button";
import close from "../../../images/close.svg"
import {usePathname} from "next/navigation";

const Menu = (props: any) => {
    const {
        onClickScrollHome,
        onClickScrollTokenomics,
        onClickScrollBlog,
        onClickScrollProject,
        active,
        setActive
    } = props;
    const [isPages, setIsPages] = useState(true)
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
                setIsPages(true)
                break;
        }
    }, [pathname]);

    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <AnimatedComponent>
            <DivButtonCloseSC $path={close.src}></DivButtonCloseSC>
                </AnimatedComponent>
            <div className="menu__content">

                {isPages ? (
                    <DivBoxBurgerSC>
                        <DivBoxLinkSC href={"/"}>Home</DivBoxLinkSC>
                        <DivBoxLinkSC href={"/project"}>Projects</DivBoxLinkSC>
                        <DivBoxLinkSC href={"/tokenomics"}>Tokenomics</DivBoxLinkSC>
                        <DivBoxLinkSC href={"/about"}>About</DivBoxLinkSC>
                        <DivBoxLinkSC href={"/leaderboard"}>Leaderboard</DivBoxLinkSC>
                        <DivBoxLinkSC href={"/blog"}>Blog</DivBoxLinkSC>
                        <DivBoxLinkSC href={"/faq"}>FAQ</DivBoxLinkSC>
                        <DivBoxLinkSC href={"/profile"}>Profile</DivBoxLinkSC>
                        <DivBoxButtonsMenuSC>
                            <Link href={"/buy_token"}>
                                <ButtonWrapper
                                    width={222}
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
                        </DivBoxButtonsMenuSC>
                    </DivBoxBurgerSC>
                ) : (
                    <DivBoxBurgerSC>
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
                        <DivBoxButtonsMenuSC>
                            <Link href={"/buy_token"}>
                                <ButtonWrapper
                                    width={222}
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
                        </DivBoxButtonsMenuSC>
                    </DivBoxBurgerSC>
                )}

            </div>
        </div>
    );
};

export default Menu;
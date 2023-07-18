"use client"
import React, {useEffect, useState} from 'react';
import {
    DivContainerRowsSC,
    TitleWaysToAchieveSC,
    DivWrapperContentSC,
    Image1SC,
    Image2SC,
    DivBoxRowsTextSC,
    TextBoldSC,
    TextNormalSC,
    DivBoxButtonSC
} from "./styles.ways_to_achieve";
import Img1 from "../../images/img2_section4.svg"
import Img2 from "../../images/img1_section4.svg"
import ButtonWrapper from "../custom_button";
import Link from "next/link";

const WaysToAchieve = () => {
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
        <DivContainerRowsSC>
            <TitleWaysToAchieveSC>Ways to achieve the programmatic goals of the Earthy platform</TitleWaysToAchieveSC>
            {width >= 1000 ? (
                <DivWrapperContentSC $isGap={true}>

                    <Image1SC $path={Img1.src} alt="Img1"/>
                    <DivBoxRowsTextSC>
                        <TextBoldSC>1. Non-profit adaptation of environmental and charitable projects.</TextBoldSC>
                        <TextNormalSC>The process of registering non-profit organizations on the Earthy platform is an
                            important aspect of our ecosystem. Our goal is to make sure that all the organizations
                            listed on
                            the platform are legitimate and have proven experience of making a positive impact on the
                            world.
                            Here's how this process works:</TextNormalSC>
                        <Link href={"/non_profit1"}>
                            <ButtonWrapper directionRadius={"center"} width={201} height={74}
                                           primary={true}><span>Learn more</span></ButtonWrapper></Link>

                    </DivBoxRowsTextSC>
                </DivWrapperContentSC>
            ) : (
                <DivWrapperContentSC $isGap={true}>
                    <DivBoxRowsTextSC>
                        <TextBoldSC>1. Non-profit adaptation of environmental and charitable projects.</TextBoldSC>
                        <TextNormalSC>The process of registering non-profit organizations on the Earthy platform is an
                            important aspect of our ecosystem. Our goal is to make sure that all the organizations
                            listed on
                            the platform are legitimate and have proven experience of making a positive impact on the
                            world.
                            Here's how this process works:</TextNormalSC>
                        <DivBoxButtonSC>
                            <Link href={"/non_profit1"}>
                                <ButtonWrapper directionRadius={"center"} width={201} height={74}
                                               primary={true}><span>Learn more</span></ButtonWrapper></Link></DivBoxButtonSC>
                    </DivBoxRowsTextSC>
                    <Image1SC $path={Img1.src} alt="Img1"/>
                </DivWrapperContentSC>
            )}
            <DivWrapperContentSC $isGap={true}>
                <DivBoxRowsTextSC>
                    <TextBoldSC>2. Tools For Non-Porfits, Charities and People to make a difference.</TextBoldSC>
                    <TextNormalSC>Earthy Tools empowers non-profits, charities, and individuals to impact the world. We
                        ensure transparency in fund utilization, locate talent globally, and offer a crowdfunding system
                        rewarding contributors. Our social media platform connects like-minded individuals, promoting
                        participation in local and global projects. Verified companies can offer tokens and NFTs to
                        volunteers, fostering a community committed to kindness.</TextNormalSC>
                    <DivBoxButtonSC>
                        <Link href={"/non_profit2"}>
                            <ButtonWrapper directionRadius={"center"} width={201} height={74}
                                           primary={true}><span>Learn more</span></ButtonWrapper></Link></DivBoxButtonSC>
                </DivBoxRowsTextSC>
                <Image2SC $path={Img2.src} alt="Img2"/>
            </DivWrapperContentSC>
        </DivContainerRowsSC>
    );
};

export default WaysToAchieve;
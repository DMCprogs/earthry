"use client"
import React, {ChangeEvent, ReactElement, useEffect, useState} from 'react';
import {
    DivBoxProjectSC,
    DivBoxTitleSC,
    DivTitleBoldSC,
    DivBoxIconsSC,
    DivBoxButtonsSC,
    DivTextNormalSC,
    DivAverageBoldTextSC,
    DivBoxRowsItemSC,
    DivBoxColumnsBoldSC,
    DivSmallNormalTextSC,
    DivSmallBoldTextSC,
    DivBoxColumnsItemsSC,
    DivBoxBigElementsSC,
    DivBoxCalcSC,
    DivBoxOptionSC,
    DivBoxConclusionSC,
    DivBoxColumnCalcColcSC,
    DivInputConclusionSC,
    DivBoxBoxOptionSC,
    InputTokensSC,
    DivUltraSmallNormalTextSC,
    DivBoxColumnCalcSC
} from "./styles.project";
import ButtonWrapper from "@/app/components/custom_button";
import Link from "next/link";
import {BsLinkedin, BsTwitter} from "react-icons/bs";
import {GrReddit} from "react-icons/gr";
import {AiFillMessage} from "react-icons/ai";
import {PiTelegramLogoFill} from "react-icons/pi";
import CarouselCustom from "@/app/components/сustom_carousel";
import image from "@/app/images/ItemBlogExample.png";
import CarouselProjects from "./components/CardImgCarousel";
// import SwapBlock from "@/app/components/swapBlock/SwapBlock";
import {DivContainerGif} from "@/app/components/section6/styles.airdrop";
import Image from "next/image";
import coin2 from "@/app/images/coin2.gif";
import RadioButton from "@/app/project/components/custom_radio_button";
import CustomLineChart from "@/app/project/components/LineChart";
import SwapBlock from "@/app/components/swapBlock/SwapBlock";
import {usePathname} from "next/navigation";


interface ArrayInfo {
    titleNum: string;
    textSmallBold?: string;
    textSmallNorm: string;
}

interface ArrayRadio {
    group: string;
    width: string;
    width880: string;
    label: string;
}

interface SocialItem {
    img: ReactElement;
}

const Project: React.FC = () => {
    const [width, setWidth] = useState<number>(0);
    const [isProject, setIsProject] = useState(true)
    const [result, setResult] = useState<number>(0);
    const [countTokens, setCountTokens] = useState<string>("");
    const [countDays, setCountDays] = useState<string>("");
    const [trackData, setTrackData] = useState(14);
    const [data, setDataChart] = useState<
        {
            year: number;
            tokens: number;
        }[]
    >([]);
    const [listInfo, setListInfo] = useState<ArrayInfo[]>([
        {titleNum: "64 332", textSmallBold: "Earthy token", textSmallNorm: "Raised"},
        {titleNum: "49", textSmallNorm: "Investors"},
        {titleNum: "1", textSmallBold: "Earthy token", textSmallNorm: "Min investment"},
        {titleNum: "1,000,000", textSmallBold: "Earthy token", textSmallNorm: "Required quantity"},
    ]);
    const [listRadio, setListRadio] = useState<ArrayRadio[]>([
        {group: "group1", width: "124px", width880: "107px",  label: "10 %"},
        {group: "group1", width: "127px", width880: "108px", label: "25 %"},
        {group: "group1", width: "132px", width880: "115px", label: "50 %"},
        {group: "group1", width: "143px", width880: "122px", label: "100 %"},
    ]);
    const [listRadio2, setListRadio2] = useState<ArrayRadio[]>([
        {group: "group2", width: "120px", width880: "106px", label: "30d"},
        {group: "group2", width: "121px", width880: "109px", label: "90d"},
        {group: "group2", width: "139px", width880: "113px", label: "180d"},
        {group: "group2", width: "143px", width880: "120px", label: "360d"},
    ]);
    const [listItemCar, setListItemCar] = useState([
        {img: image},
        {img: image},
        {img: image},
        {img: image},
        {img: image},
        {img: image},
    ]);

    const [listSocialIco, setListSocialIco] = useState<SocialItem[]>([
        {img: <BsTwitter/>},
        {img: <PiTelegramLogoFill/>},
        {img: <BsLinkedin/>},
        {img: <GrReddit/>},
        {img: <AiFillMessage/>},
    ]);
    const pathname = usePathname()
    useEffect(() => {
        window.onload = handleResize;
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (pathname == "/project") {
            setIsProject(true)
        } else {
            setIsProject(false)
        }
    }, [pathname])

    useEffect(() => {
        let array: {
            year: number;
            tokens: number;
        }[] = [];

        let _dayData = +countTokens
        for (let i = 0; i <= +countDays; i++) {
            array.push({
                year: i,
                tokens: rounded(_dayData),
            });
            const s = (+countTokens * 8 * trackData / 360) / 100
            _dayData += s
        }

        setDataChart(array);
    }, [countDays, countTokens]);

    const rounded = (number: number) => {
        return +number.toFixed(2);
    }

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setCountDays(event.target.value);
    }
    const hanInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newVal = event.target.value;
        setCountTokens(newVal);
        if (!isNaN(Number(newVal))) {
            setResult(Number(newVal) * 0.08);
        } else {
            setResult(0);
        }
    }
    const responsive = {
        desktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 1001},
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            // the naming can be any, depends on you.
            breakpoint: {max: 1410, min: 769},
            items: 3,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: {max: 768, min: 491},

            items: 2,
            slidesToSlide: 1,
        },

        mobileMini: {
            breakpoint: {max: 490, min: 360},

            items: 2,
            slidesToSlide: 1,
        },

    };

    const CarouselItems = () => {
        return (
            listItemCar.map((item, i) => {
                return (
                    <div key={`ssssadasda${i}`} style={{padding: '0 10px'}}>

                        <CarouselProjects
                            img={item.img}
                        />
                    </div>
                );
            })

        )
    };

    return (
        <DivBoxProjectSC>
            <DivBoxTitleSC>
                <DivTitleBoldSC>Project name</DivTitleBoldSC>
                <DivTextNormalSC>Organization name</DivTextNormalSC>
            </DivBoxTitleSC>
            <DivBoxButtonsSC>
                <Link href={"#"}>
                    <ButtonWrapper
                        width={290}
                        height={74}
                        primary={true}
                        directionRadius={"center"}>
                        <span>Go to the website</span>
                    </ButtonWrapper>
                </Link>
                <Link href={"#"}>
                    <ButtonWrapper
                        width={290}
                        height={74}
                        directionRadius={"center"}>
                        <span>Read the document</span>
                    </ButtonWrapper>
                </Link>
            </DivBoxButtonsSC>
            <DivBoxIconsSC>
                {listSocialIco.map((socialItem, i) => (
                    <div key={`dsahjaba${i}`}>
                        {React.cloneElement(socialItem.img, {
                            style: {cursor: "pointer"},
                            size: 37,
                            color: '#195946'
                        })}
                    </div>
                ))}
            </DivBoxIconsSC>
            <CarouselCustom isProject={isProject} responsive={responsive}
                            itemsImg={CarouselItems()}/>
            <DivBoxTitleSC $positionText={width > 768 ? "center" : "start"}>
                <DivAverageBoldTextSC>About</DivAverageBoldTextSC>
                <DivTextNormalSC $positionText={width > 768 ? "center" : "start"}>Regenerate Community is a community-driven initiative
                    dedicated to turning the region
                    into a model for sustainable urban living. Launched in 2023, the project leverages the power of
                    local
                    residents, businesses, and government agencies to create a greener, cleaner, and more equitable
                    city.</DivTextNormalSC>
            </DivBoxTitleSC>
            <DivBoxColumnsItemsSC>
                {listInfo.map((item, i) => {
                    return (
                        <DivBoxRowsItemSC key={`ssssadaghghsda${i}`}>
                            <DivBoxColumnsBoldSC>
                                <DivAverageBoldTextSC>{item.titleNum}</DivAverageBoldTextSC>
                                <DivSmallBoldTextSC>{item.textSmallBold}</DivSmallBoldTextSC>
                            </DivBoxColumnsBoldSC>
                            <DivSmallNormalTextSC>{item.textSmallNorm}</DivSmallNormalTextSC>
                        </DivBoxRowsItemSC>
                    )
                })}
            </DivBoxColumnsItemsSC>
            <DivAverageBoldTextSC $positionText={width > 768 ? "center" : "start"}>Stake token now</DivAverageBoldTextSC>
            <DivSmallNormalTextSC $positionText={width > 768 ? "center" : "start"}>Select the number of tokens for staking to see the
                profitability</DivSmallNormalTextSC>
            <DivBoxBigElementsSC>
                <SwapBlock/>
                <CustomLineChart data={data}/>
                <DivContainerGif $display={"none"}>
                    <Image src={coin2}
                           width={260}
                           height={383}
                           alt="Picture of the author"/>
                </DivContainerGif>
            </DivBoxBigElementsSC>
            <DivBoxColumnCalcSC>
                <DivBoxCalcSC>
                    <DivBoxBoxOptionSC>
                        <DivBoxOptionSC>
                            <InputTokensSC
                                placeholder="0 tokens"
                                type="tel"
                                name="count_tokens"
                                value={countTokens}
                                onChange={hanInputChange}
                            />
                            {listRadio.map((buttRad, i) => {
                                return (
                                    <RadioButton key={`deghghffffhhdefda${i}`} group={buttRad.group}
                                                 width={width > 880 ? buttRad.width : width > 768 ? buttRad.width880 : "200px"} label={buttRad.label}></RadioButton>
                                )
                            })}

                        </DivBoxOptionSC>
                        <DivBoxOptionSC>
                            <InputTokensSC
                                type="text"
                                placeholder={"14 days"}
                                name={"count_days"}
                                value={countDays}
                                onChange={handleInputChange}
                            />
                            {listRadio2.map((buttRad, i) => {
                                return (
                                    <RadioButton key={`deghghffffhhdefda${i}`} group={buttRad.group}
                                                 width={width > 880 ? buttRad.width : width > 768 ? buttRad.width880 : "200px"} label={buttRad.label}></RadioButton>
                                )
                            })}
                        </DivBoxOptionSC>
                    </DivBoxBoxOptionSC>
                    <DivBoxConclusionSC>
                        <DivUltraSmallNormalTextSC>You donate to the project in the project (8%
                            profitability)</DivUltraSmallNormalTextSC>
                        <DivBoxColumnCalcColcSC>
                            <DivInputConclusionSC>{result}</DivInputConclusionSC>
                            <DivSmallBoldTextSC>Earthy tokens</DivSmallBoldTextSC>
                        </DivBoxColumnCalcColcSC>
                    </DivBoxConclusionSC>
                </DivBoxCalcSC>
                <div style={{width: "max-content"}}>
                    <ButtonWrapper
                        width={177}
                        height={74}
                        primary={true}
                        directionRadius={"center"}>
                        <span>Continue</span>
                    </ButtonWrapper>
                </div>
            </DivBoxColumnCalcSC>
        </DivBoxProjectSC>
    );
}

export default Project;
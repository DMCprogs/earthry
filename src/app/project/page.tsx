"use client"
import React, {ChangeEvent, useEffect, useState} from 'react';
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
    DivBoxBoxOptionSC, InputTokensSC
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


interface ArrayInfo {
    titleNum: string;
    textSmallBold?: string;
    textSmallNorm: string;
}

const Project: React.FC = () => {
    const [result, setResult] = useState<number>(0);
    const [countTokens, setCountTokens] = useState<string>("0");
    const [countDays, setCountDays] = useState<string>("14");
    const [graph, setGraph] = useState(Math.trunc((10 * 40 * 775) / 30));
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
    const [listItemCar, setListItemCar] = useState([
        {img: image},
        {img: image},
        {img: image},
        {img: image},
        {img: image},
        {img: image},
    ]);
    useEffect(() => {
        let array: {
            year: number;
            tokens: number;
        }[] = [];

        let _dayData = +countTokens
        for (let i = 0; i <= +countDays; i++) {
            array.push({
                year: i,
                tokens: _dayData,
            });
            const s = (+countTokens * 8 * trackData / 360) / 100
            _dayData += s
            // array.push({
            //     year: i,
            //     tokens: graph * i,
            // });

        }

        setDataChart(array);
    }, [countDays, countTokens]);



    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        // setCountTokens(event.target.value);
        setCountDays(event.target.value);
        // const newVal = event.target.value;
        // setCountTokens(newVal);
        // // Проверка на то что введенное значение является числом
        // if (!isNaN(Number(newVal))) {
        //     setResult(Number(newVal) * 0.08);
        // } else {
        //     setResult(0);
        // }
    }
    const hanInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newVal = event.target.value;
        setCountTokens(newVal);
        // Проверка на то что введенное значение является числом
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
            breakpoint: {max: 1000, min: 769},
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: {max: 768, min: 360},

            items: 1,
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
                <BsTwitter
                    style={{cursor: "pointer"}}
                    size={40}
                    color={'#195946'}/>
                <PiTelegramLogoFill
                    style={{cursor: "pointer"}}
                    size={40}
                    color={'#195946'}/>
                <BsLinkedin
                    style={{cursor: "pointer"}}
                    size={40}
                    color={'#195946'}/>
                <GrReddit
                    style={{cursor: "pointer"}}
                    size={40}
                    color={'#195946'}/>
                <AiFillMessage
                    style={{cursor: "pointer"}}
                    size={40}
                    color={'#195946'}/>
            </DivBoxIconsSC>
            <CarouselCustom responsive={responsive}
                            itemsImg={CarouselItems()}/>
            <DivBoxTitleSC>
                <DivAverageBoldTextSC>About</DivAverageBoldTextSC>
                <DivTextNormalSC>Regenerate Communitiy is a community-driven initiative dedicated to turning the region
                    into a model for sustainable urban living. Launched in 2023, the project leverages the power of local
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
            <DivAverageBoldTextSC $positionText={"center"}>Stake token now</DivAverageBoldTextSC>
            <DivSmallNormalTextSC $positionText={"center"}>Select the number of tokens for staking to see the
                profitability</DivSmallNormalTextSC>
            <DivBoxBigElementsSC>
                {/*<SwapBlock/>*/}
                <SwapBlock/>
                <CustomLineChart data={data} />
                <div style={{width: "500px"}}>
                    <h1>График зависимости</h1>
                <DivContainerGif>
                    <Image src={coin2}
                           width={260}
                           height={383}
                           alt="Picture of the author"/>
                </DivContainerGif>
                </div>
            </DivBoxBigElementsSC>
            <div>
            <DivBoxCalcSC>
                <DivBoxBoxOptionSC>
                <DivBoxOptionSC>
                    <InputTokensSC
                        placeholder="0"
                        type="tel"
                        name="count_tokens"
                        value={countTokens}
                        onChange={hanInputChange}
                    />
                    <RadioButton group="group1" width={"124px"} label={"10 %"}></RadioButton>
                    <RadioButton group="group1" width={"127px"} label={"25 %"}></RadioButton>
                    <RadioButton group="group1"  width={"132px"} label={"50 %"}></RadioButton>
                    <RadioButton group="group1"width={"143px"} label={"100 %"}></RadioButton>

                </DivBoxOptionSC>
                    <DivBoxOptionSC>
                        <InputTokensSC
                            type="text"
                            placeholder={"14"}
                            name={"count_days"}
                            value={countDays}
                            onChange={handleInputChange}
                        />
                        <RadioButton  group="group2" width={"120px"} label={"30d"}></RadioButton>
                        <RadioButton  group="group2" width={"121px"} label={"90d"}></RadioButton>
                        <RadioButton   group="group2" width={"139px"} label={"180d"}></RadioButton>
                        <RadioButton  group="group2" width={"143px"} label={"360d"}></RadioButton>
                    </DivBoxOptionSC>
                </DivBoxBoxOptionSC>
                <DivBoxConclusionSC>
                    <DivSmallNormalTextSC>You donate to the project in the project (8%
                        profitability)</DivSmallNormalTextSC>
                    <DivBoxColumnCalcColcSC>
                        <DivInputConclusionSC>8</DivInputConclusionSC>
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
                </div>
        </DivBoxProjectSC>
    );
}

export default Project;
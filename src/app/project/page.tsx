"use client";
import React, {ChangeEvent, ReactElement, useEffect, useState} from "react";
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
    DivContainerGrafic,
    DivTexStacingSC,
    DivHeightfixSC,
    DivNumberBoxSC,
    DivSliderSC,
    DivMarksSC,
    DivContainerPlantSC,
    DivPlantsImgSC,
    DivContainerGrafic2,
    DivContainerInput,
    InputPercent,
    DivText,
    DivPlus,
    DiMunus,
    DivContainer,
    DivUltraSmallNormalTextSC,
    DivBoxColumnCalcSC,
    BoxPaddingSC, DivBoxCarouseItemSC
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
import Modal from "../components/modal/modal";
import Slider from "rc-slider";
import {BsPercent, BsArrowDownShort, BsArrowUpShort} from "react-icons/bs";
import "rc-slider/assets/index.css";
import plant8 from "../images/plants8.png";
import plant7 from "../images/plants7.jpg";
import plant6 from "../images/plants6.png";
import plant5 from "../images/plants5.png";
import plant4 from "../images/plants4.png";
import plant3 from "../images/plants3.png";
import plant2 from "../images/plants2.png";
import plant1 from "../images/plants1.png";
import {usePathname} from "next/navigation";
import {TbBoxPadding} from "react-icons/tb";

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
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const [width, setWidth] = useState<number>(0);
    const [isProject, setIsProject] = useState(true);
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
    const [trackDatas, setTrackDatas] = useState(1);
    const [amount, setAmount] = useState(1 * 40);
    const pit = (trackDatas: number) => {
        const plantImages = [
            plant1,
            plant2,
            plant3,
            plant4,
            plant5,
            plant6,
            plant7,
            plant8,
        ];
        const plants = [];
        for (let i = 0; i < 8; i++) {
            plants.push(
                <DivPlantsImgSC $images={plantImages[i]} key={i}></DivPlantsImgSC>
            );
        }
        return plants.map((plant, index) => (
            <div style={{opacity: trackDatas === index + 1 ? 1 : 0.6}} key={index}>
                {plant}
            </div>
        ));
    };

    const marks = {
        1: <DivMarksSC>1%</DivMarksSC>,
        8: <DivMarksSC>8%</DivMarksSC>,
    };
    const handleChange = (e: any) => {
        setTrackDatas(e);
        setAmount(e * 40);
    };
    const Percen = (e: any) => {
        const inputValue = parseInt(e.target.value);

        if (isNaN(inputValue)) {
            // Не устанавливайте значение, если введенное значение не является числом
            return;
        }

        if (inputValue < 1) {
            setTrackDatas(1);
        } else if (inputValue > 8) {
            setTrackDatas(8);
        } else {
            setTrackDatas(inputValue);
            setAmount(inputValue * 40);
        }
    };
    const Minus = () => {
        if (trackDatas <= 1) {
            return;
        } else {
            setTrackDatas(trackDatas - 1);
        }
    };
    const Plus = () => {
        if (trackDatas >= 8) {
            return;
        } else {
            setTrackDatas(trackDatas + 1);
        }
    };
    const [listInfo, setListInfo] = useState<ArrayInfo[]>([
        {
            titleNum: "64 332",
            textSmallBold: "Earthy token",
            textSmallNorm: "Raised",
        },
        {titleNum: "49", textSmallNorm: "Investors"},
        {
            titleNum: "1",
            textSmallBold: "Earthy token",
            textSmallNorm: "Min investment",
        },
        {
            titleNum: "1,000,000",
            textSmallBold: "Earthy token",
            textSmallNorm: "Required quantity",
        },
    ]);
    const [listRadio, setListRadio] = useState<ArrayRadio[]>([
        {group: "group1", width: "118px", width880: "107px", label: "10 %"},
        {group: "group1", width: "121px", width880: "108px", label: "25 %"},
        {group: "group1", width: "126px", width880: "115px", label: "50 %"},
        {group: "group1", width: "136px", width880: "122px", label: "100 %"},
    ]);
    const [listRadio2, setListRadio2] = useState<ArrayRadio[]>([
        {group: "group2", width: "114px", width880: "106px", label: "30d"},
        {group: "group2", width: "115px", width880: "109px", label: "90d"},
        {group: "group2", width: "133px", width880: "113px", label: "180d"},
        {group: "group2", width: "136px", width880: "120px", label: "360d"},
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
    const pathname = usePathname();
    useEffect(() => {
        window.onload = handleResize;
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (pathname == "/project") {
            setIsProject(true);
        } else {
            setIsProject(false);
        }
    }, [pathname]);

    useEffect(() => {
        let array: {
            year: number;
            tokens: number;
        }[] = [];

        let _dayData = +countTokens;
        for (let i = 0; i <= +countDays; i++) {
            array.push({
                year: i,
                tokens: rounded(_dayData),
            });
            const s = (+countTokens * 8 * trackData) / 360 / 100;
            _dayData += s;
        }

        setDataChart(array);
    }, [countDays, countTokens]);

    const rounded = (number: number) => {
        return +number.toFixed(2);
    };

    const handleResize = () => {
        setWidth(window.innerWidth);
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setCountDays(event.target.value);
    };
    const hanInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const newVal = event.target.value;
        setCountTokens(newVal);
        if (!isNaN(Number(newVal))) {
            setResult(Number(newVal) * 0.08);
        } else {
            setResult(0);
        }
    };
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
        return listItemCar.map((item, i) => {
            return (
                <DivBoxCarouseItemSC key={`ssssadasda${i}`}>
                    <CarouselProjects img={item.img}/>
                </DivBoxCarouseItemSC>
            );
        });
    };

    return (
        <BoxPaddingSC>
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
                        directionRadius={"center"}
                    >
                        <span>Go to the website</span>
                    </ButtonWrapper>
                </Link>
                <Link href={"#"}>
                    <ButtonWrapper width={290} height={74} directionRadius={"center"}>
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
                            color: "#195946",
                        })}
                    </div>
                ))}
            </DivBoxIconsSC>
            <CarouselCustom
                isProject={isProject}
                responsive={responsive}
                itemsImg={CarouselItems()}
            />
            <DivBoxTitleSC $positionText={width > 768 ? "center" : "start"}>
                <DivAverageBoldTextSC>About</DivAverageBoldTextSC>
                <DivTextNormalSC $positionText={width > 768 ? "center" : "start"}>
                    Regenerate Community is a community-driven initiative dedicated to
                    turning the region into a model for sustainable urban living. Launched
                    in 2023, the project leverages the power of local residents,
                    businesses, and government agencies to create a greener, cleaner, and
                    more equitable city.
                </DivTextNormalSC>
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
                    );
                })}
            </DivBoxColumnsItemsSC>
            <DivAverageBoldTextSC $positionText={width > 768 ? "center" : "start"}>
                Stake token now
            </DivAverageBoldTextSC>
            <DivSmallNormalTextSC $positionText={width > 768 ? "center" : "start"}>
                Select the number of tokens for staking to see the profitability
            </DivSmallNormalTextSC>
            <DivBoxBigElementsSC>
                <SwapBlock/>
                <CustomLineChart data={data}/>
                <DivContainerGif $display={"none"}>
                    <Image
                        src={coin2}
                        width={260}
                        height={383}
                        alt="Picture of the author"
                    />
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
                                    <RadioButton
                                        key={`deghghffffhhdefda${i}`}
                                        group={buttRad.group}
                                        width={
                                            width > 880
                                                ? buttRad.width
                                                : width > 768
                                                    ? buttRad.width880
                                                    : "200px"
                                        }
                                        label={buttRad.label}
                                    ></RadioButton>
                                );
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
                                    <RadioButton
                                        key={`deghghffffhhdefda${i}`}
                                        group={buttRad.group}
                                        width={
                                            width > 880
                                                ? buttRad.width
                                                : width > 768
                                                    ? buttRad.width880
                                                    : "200px"
                                        }
                                        label={buttRad.label}
                                    ></RadioButton>
                                );
                            })}
                        </DivBoxOptionSC>
                    </DivBoxBoxOptionSC>
                    <DivBoxConclusionSC>
                        <DivUltraSmallNormalTextSC>
                            You donate to the project in the project (8% profitability)
                        </DivUltraSmallNormalTextSC>
                        <DivBoxColumnCalcColcSC>
                            <DivInputConclusionSC>{result}</DivInputConclusionSC>
                            <DivSmallBoldTextSC>Earthy tokens</DivSmallBoldTextSC>
                        </DivBoxColumnCalcColcSC>
                    </DivBoxConclusionSC>
                </DivBoxCalcSC>
                <div style={{width: "max-content"}}>
                    <ButtonWrapper
                        onClick={handleOpen}
                        width={177}
                        height={74}
                        primary={true}
                        directionRadius={"center"}
                    >
                        <span>Continue</span>
                    </ButtonWrapper>
                </div>
            </DivBoxColumnCalcSC>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <DivContainerGrafic>
                    <DivTexStacingSC>
                        Select the percentage of APY to maintain the project (min 1%)
                    </DivTexStacingSC>
                    <DivHeightfixSC>
                        <DivNumberBoxSC>{amount}</DivNumberBoxSC>
                        <DivSliderSC>
                            <Slider
                                min={1}
                                max={8}
                                defaultValue={trackDatas}
                                marks={marks}
                                handleStyle={{
                                    borderColor: "grey",
                                    height: 25,
                                    width: 25,
                                    marginLeft: -10,
                                    marginTop: -10,
                                    backgroundColor: "white",
                                }}
                                trackStyle={{
                                    backgroundColor: "#00AF88",
                                    height: 8,
                                    marginTop: -2,
                                }}
                                railStyle={{
                                    backgroundColor: "#04896C",
                                    height: 8,
                                    marginTop: -2,
                                }}
                                onChange={handleChange}
                            />
                        </DivSliderSC>
                    </DivHeightfixSC>
                </DivContainerGrafic>
                <DivContainerGrafic2>
                    <DivContainerInput>
                        <DivTexStacingSC style={{fontSize: "18px"}}>
                            Select the percentage of APY to maintain the project (min 1%)
                        </DivTexStacingSC>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <InputPercent onChange={Percen}>
                                <DivContainer>
                                    {trackDatas}{" "}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "5px",
                                        }}
                                    >
                                        <DivPlus onClick={Plus}>
                                            <BsArrowUpShort size={20}/>
                                        </DivPlus>{" "}
                                        <DiMunus onClick={Minus}>
                                            <BsArrowDownShort size={20}/>
                                        </DiMunus>
                                    </div>
                                </DivContainer>
                            </InputPercent>
                            <BsPercent size={28}/>
                        </div>
                    </DivContainerInput>
                    <DivContainerInput>
                        <DivTexStacingSC style={{fontSize: "18px"}}>
                            You donate to the project in the project
                        </DivTexStacingSC>
                        <div style={{display: "flex"}}>
                            <InputPercent>{amount} </InputPercent>
                            <DivText>Earthy tokens</DivText>
                        </div>
                    </DivContainerInput>
                </DivContainerGrafic2>
                <DivContainerPlantSC>{pit(trackDatas)}</DivContainerPlantSC>
                <ButtonWrapper
                    directionRadius="center"
                    primary={true}
                    height={74}
                    width={190}
                >
                    <span> Stake now </span>
                </ButtonWrapper>
            </Modal>
        </DivBoxProjectSC>
        </BoxPaddingSC>
    );
};

export default Project;

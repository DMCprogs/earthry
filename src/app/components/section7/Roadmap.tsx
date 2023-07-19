"use client"
import React, {useEffect, useState} from "react";
import {
    DivBranchBoxSC,
    DivContainerSec4SC,
    DivRoadMapElSC,
    DivBoxTitleSC,
    DivBoxRoadMapElSC,
    ImageRoadmapSC,
    TitleRoadmapSC
} from "./styles.roadmap";
import {TypeRoadMapItem, roadMapData} from "./data";

const Roadmap = () => {
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
        <div>
            <DivContainerSec4SC>

                <DivBoxTitleSC>
                    <TitleRoadmapSC>
                        Platform creation roadmap</TitleRoadmapSC>
                </DivBoxTitleSC>
                {width >= 1000 ? (
                    <DivBranchBoxSC>
                        {roadMapData.map((item: TypeRoadMapItem, index: number) => {
                            if (index % 2 === 1) {
                                return (
                                    <DivRoadMapElSC
                                        right={true}
                                        back={item.back}
                                        font={item.font}
                                        key={index}
                                    >
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </DivRoadMapElSC>
                                );
                            } else {
                                return (
                                    <DivRoadMapElSC
                                        left={true}
                                        back={item.back}
                                        font={item.font}
                                        key={index}
                                    >
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                        </div>
                                    </DivRoadMapElSC>
                                );
                            }
                        })}
                    </DivBranchBoxSC>
                ) : (
                    <DivBranchBoxSC>
                        {roadMapData.map((item: TypeRoadMapItem, index: number) => {
                            if (index % 2 === 1) {
                                return (
                                    <DivBoxRoadMapElSC key={index}>
                                        <DivRoadMapElSC
                                            right={true}
                                            back={item.back}
                                            font={item.font}

                                        >
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </DivRoadMapElSC>
                                        <ImageRoadmapSC isChangeHeight={item.isChangeHeight} img={item.img}></ImageRoadmapSC>
                                    </DivBoxRoadMapElSC>
                                );
                            } else {
                                return (
                                    <DivBoxRoadMapElSC key={index}>
                                        <DivRoadMapElSC
                                            right={true}
                                            back={item.back}
                                            font={item.font}
                                        >
                                            <div>
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </DivRoadMapElSC>
                                        <ImageRoadmapSC isChangeHeight={item.isChangeHeight} img={item.img}></ImageRoadmapSC>
                                    </DivBoxRoadMapElSC>
                                );
                            }
                        })}
                    </DivBranchBoxSC>
                )}

            </DivContainerSec4SC>
        </div>
    );
};

export default Roadmap;

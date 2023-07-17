"use client";
import React, {useEffect, useState} from "react";
import {DivDefaultContainerSC} from "../styles.page";
import {
    DivRowsWrapSC,
    TitleNonProfitSC,
    DivColumnsContentSC,
    ImageWorldEcologySC,
    DivBoldTextSC,
    DivNormalTextSC,
    ImageEatEcologySC,
    ImageDropEcologySC,
    DivRowsTextSC,
} from "./styles.non_profit2";
import eat_ecology from "../images/eat_ecology.jpg";
import world_ecology from "../images/world_ecology.jpg";
import drop_ecology from "../images/drop_ecology.jpg";

const Non_profit2 = () => {
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
            <DivRowsWrapSC>
                <TitleNonProfitSC>
                    Tools For Non-Porfits, Charities and People to make a difference
                </TitleNonProfitSC>
                {width >= 900 ? (
                    <DivColumnsContentSC>
                        <DivRowsTextSC>
                            <DivBoldTextSC>Global market</DivBoldTextSC>
                            <DivNormalTextSC>
                                By creating a global marketplace, the Earthy platform will
                                enable communities to showcase their unique products, crafts and
                                services to a wider audience. This marketplace will not only
                                support local communities, but will also help build connections
                                and strengthen a sense of unity among communities around the
                                world.
                            </DivNormalTextSC>
                        </DivRowsTextSC>
                        <ImageEatEcologySC path={eat_ecology.src} alt="ecology"/>
                    </DivColumnsContentSC>
                ) : (
                    <DivColumnsContentSC>
                        <ImageEatEcologySC path={eat_ecology.src} alt="ecology"/>
                        <DivRowsTextSC>
                            <DivBoldTextSC>Global market</DivBoldTextSC>
                            <DivNormalTextSC>
                                By creating a global marketplace, the Earthy platform will
                                enable communities to showcase their unique products, crafts and
                                services to a wider audience. This marketplace will not only
                                support local communities, but will also help build connections
                                and strengthen a sense of unity among communities around the
                                world.
                            </DivNormalTextSC>
                        </DivRowsTextSC>
                    </DivColumnsContentSC>
                )}

                <DivRowsTextSC>
                    <DivBoldTextSC>Delivery and logistics</DivBoldTextSC>
                    <DivNormalTextSC>
                        The platform will integrate transport and logistics solutions to
                        facilitate the seamless delivery of goods from one location to
                        another. This integration ensures that products from communities
                        around the world can be easily accessed and delivered to customers,
                        regardless of their geographic location.
                    </DivNormalTextSC>
                </DivRowsTextSC>
                {width >= 900 ? (
                    <DivColumnsContentSC>
                        <DivRowsTextSC>
                            <DivBoldTextSC>Support for creative initiatives</DivBoldTextSC>
                            <DivNormalTextSC>
                                The Earthy platform will serve as a catalyst for innovation,
                                allowing people to express their creativity and develop new
                                products or services that are relevant to their culture. By
                                offering a platform for these creative initiatives, the Earth's
                                ecosystem will help people realize their potential and make
                                meaningful contributions to their communities.
                            </DivNormalTextSC>
                        </DivRowsTextSC>
                        <ImageWorldEcologySC path={world_ecology.src} alt="ecology"/>
                    </DivColumnsContentSC>
                ) : (
                    <DivColumnsContentSC>
                        <ImageWorldEcologySC path={world_ecology.src} alt="ecology"/>
                        <DivRowsTextSC>
                            <DivBoldTextSC>Support for creative initiatives</DivBoldTextSC>
                            <DivNormalTextSC>
                                The Earthy platform will serve as a catalyst for innovation,
                                allowing people to express their creativity and develop new
                                products or services that are relevant to their culture. By
                                offering a platform for these creative initiatives, the Earth's
                                ecosystem will help people realize their potential and make
                                meaningful contributions to their communities.
                            </DivNormalTextSC>
                        </DivRowsTextSC>
                    </DivColumnsContentSC>
                )}
                <DivRowsTextSC>
                    <DivBoldTextSC>Promoting economic growth</DivBoldTextSC>
                    <DivNormalTextSC>
                        The global marketplace created by the Earthy platform will not only
                        empower individuals and charities, but also drive economic growth in
                        various regions. Connecting communities around the world, the
                        platform facilitates the exchange of goods and services, creating
                        new jobs and supporting the local economy.
                    </DivNormalTextSC>
                </DivRowsTextSC>
                {width >= 900 ? (
                    <DivColumnsContentSC>
                        <DivRowsTextSC>
                            <DivBoldTextSC>Community Engagement</DivBoldTextSC>
                            <DivNormalTextSC>
                                The Earthy platform will also encourage community participation
                                by allowing members to view and rate products and services
                                offered by various communities. This feedback system will help
                                maintain quality and build trust in the market, ensuring users
                                have a positive experience with the platform.
                            </DivNormalTextSC>
                        </DivRowsTextSC>
                        <ImageDropEcologySC path={drop_ecology.src} alt="ecology"/>
                    </DivColumnsContentSC>
                ) : (
                    <DivColumnsContentSC>
                        <ImageDropEcologySC path={drop_ecology.src} alt="ecology"/>
                        <DivRowsTextSC>
                            <DivBoldTextSC>Community Engagement</DivBoldTextSC>
                            <DivNormalTextSC>
                                The Earthy platform will also encourage community participation
                                by allowing members to view and rate products and services
                                offered by various communities. This feedback system will help
                                maintain quality and build trust in the market, ensuring users
                                have a positive experience with the platform.
                            </DivNormalTextSC>
                        </DivRowsTextSC>
                    </DivColumnsContentSC>
                )}
            </DivRowsWrapSC>
    );
};

export default Non_profit2;

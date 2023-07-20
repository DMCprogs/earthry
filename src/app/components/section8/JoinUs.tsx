/* eslint-disable react/no-unescaped-entities */
import React, {FC, MutableRefObject, useState, useEffect} from "react";
import {
    DivWrapperGlobalSection3SC,
    DivBoxText1SC,
    H1SC,
    SpanTextSC,
    DivWrapperGallerySC,
} from "./styles.join_us";
import ItemGellary from "./components/itemGellary";
import Image1 from "../../images/img1_section8.svg";
import Image2 from "../../images/img2_section8.svg";
import Image3 from "../../images/img3_section8.svg";
import ButtonWrapper from "@/app/components/custom_button";
import Link from "next/link";

const JoinUs = () => {
    const [direction, setDirection] = useState<boolean>(false);
    useEffect(() => {
        setDirection(window.outerWidth <= 800);
    }, []);

    return (
        <DivWrapperGlobalSection3SC>
            <DivBoxText1SC>
                <H1SC>Join our community</H1SC>
                <SpanTextSC>
                    Forem ipsum dolor sit amet, consectetur adipiscing elit.
                </SpanTextSC>
            </DivBoxText1SC>
            <Link href={"#"}>
            <ButtonWrapper
                primary={true}
                width={326}
                height={84}
                directionRadius={"rtl"}>
                  <span>Join the community</span>
            </ButtonWrapper>
            </Link>
            <DivWrapperGallerySC>
                <ItemGellary
                    image={Image1.src}
                    textTitle={"Unleashing an Impactful Ecosystem: "}
                    direct={"ltr"}
                    text={
                        "Inspiring Participation in Earthy. Discover the transformative power of sustainability and join a community committed to making a difference. Together, we can shape a brighter future for our planet."
                    }
                />
                <ItemGellary
                    image={Image2.src}
                    textTitle={"Revolutionary Architecture: "}
                    direct={"rtl"}
                    text={
                        "Inspiring Participation in Earthy's Vision. Experience the transformative potential of our groundbreaking architectural approach and become part of a community driving innovation and positive change. Together, let's shape a future where sustainability and technology intertwine to create extraordinary possibilities."
                    }
                />
                <ItemGellary
                    image={Image3.src}
                    direct={"ltr"}
                    textTitle={"Shaping the Future: "}
                    text={
                        "Empowering Change through Earthy's Vision. Explore a transformative journey that embraces sustainability, innovation, and collective action. Join us in shaping a future where positive impact knows no bounds, and together, we can make a lasting difference for generations to come."
                    }
                />
            </DivWrapperGallerySC>
            <Link href={"https://discord.gg/C2RmpabE"}>
                <ButtonWrapper
                    primary={true}
                    width={187}
                    height={74}
                    directionRadius={"center"}>
                    <span>Buy token</span>
                </ButtonWrapper>
            </Link>
        </DivWrapperGlobalSection3SC>
    );
};

export default JoinUs;

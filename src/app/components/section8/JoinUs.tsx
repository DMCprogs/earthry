/* eslint-disable react/no-unescaped-entities */
import React, { FC, MutableRefObject, useState, useEffect } from "react";
import {
    DivWrapperGlobalSection3SC,
    DivBoxText1SC,
    H4SC,
    SpanTextSC,
    DivWrapperGallerySC,
} from "./styles.join_us";
import ItemGellary from "./components/itemGellary";
// import Image1 from "../../images/wal.jpeg";
// import Image2 from "../../images/ecolo.png";
// import Image3 from "../../images/wal3.png";

const JoinUs = () => {
    const [direction, setDirection] = useState<boolean>(false);
    useEffect(() => {
        setDirection(window.outerWidth <= 800);
    }, []);

    return (
        <DivWrapperGlobalSection3SC>

                <DivBoxText1SC>
                    <H4SC>A total of 3,000,000 dollars will be issued</H4SC>
                    <SpanTextSC>
                        This money will be used to develop the earthy platform and fund its
                        development, after which the mainnet tokens will be airdropped to
                        the wallet which purchased the dev tokens
                    </SpanTextSC>
                </DivBoxText1SC>
            <DivWrapperGallerySC>
                <ItemGellary
                    // image={Image1.src}
                    textTitle={"Unleashing an Impactful Ecosystem: "}
                    direct={"ltr"}
                    text={
                        "Inspiring Participation in Earthy. Discover the transformative power of sustainability and join a community committed to making a difference. Together, we can shape a brighter future for our planet."
                    }
                />
                <ItemGellary
                    // image={Image2.src}
                    bgSize={"50%"}
                    textTitle={"Revolutionary Architecture: "}
                    direct={"rtl"}
                    text={
                        "Inspiring Participation in Earthy's Vision. Experience the transformative potential of our groundbreaking architectural approach and become part of a community driving innovation and positive change. Together, let's shape a future where sustainability and technology intertwine to create extraordinary possibilities."
                    }
                />
                <ItemGellary
                    // image={Image3.src}
                    direct={"ltr"}
                    textTitle={"Shaping the Future: "}
                    text={
                        "Empowering Change through Earthy's Vision. Explore a transformative journey that embraces sustainability, innovation, and collective action. Join us in shaping a future where positive impact knows no bounds, and together, we can make a lasting difference for generations to come."
                    }
                />
            </DivWrapperGallerySC>
        </DivWrapperGlobalSection3SC>
    );
};

export default JoinUs;

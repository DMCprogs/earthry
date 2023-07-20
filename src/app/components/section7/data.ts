export type TypeRoadMapItem = {
    back: string;
    font: string;
    title: string;
    desc: string;
    $img: string;
    imgBig: string;
    isChangeHeight?: boolean;
    isChangePosition?: boolean;
};

export const roadMapData: TypeRoadMapItem[] = [
    {
        back: "#A5FFE4",
        font: "#323232",
        title: "1. EarthyToken Release",
        desc: `The journey begins with the release of the
         Earthy Token. This initial token allows
          early supporters to contribute
           to the platform's development 
           and gain exclusive access to the
            project's progress and updates.`,
        $img: "/images_roadmap/img1.svg",
        imgBig: "/images_roadmap/imgBig1.svg"
    },
    {
        back: "#A5FFE4",
        font: "#323232",
        title: "2. Phase 1 - Research and Development",
        desc: `In this phase, our dedicated team conducts extensive research and development to lay the foundation for a robust and innovative platform. We explore cutting-edge technologies and refine our vision to ensure a sustainable and impactful ecosystem.`,
        $img: "/images_roadmap/img2.svg",
        imgBig: "/images_roadmap/imgBig2.svg"
    },
    {
        back: "#A5FFE4",
        font: "#323232",
        title: "3. Phase 2 - Platform Development",
        desc: `Building upon the insights gained from the research phase, we embark on developing the Earthy platform. Our talented developers work tirelessly to create a user-friendly, secure, and scalable environment that integrates blockchain technology and environmental consciousness.`,
        $img: "/images_roadmap/img3.svg",
        imgBig: "/images_roadmap/imgBig3.svg"
    },
    {
        back: "#EAEAEA",
        font: "#323232",
        title: "4. Phase 3 - Airdrop Preparation",
        desc: `As we approach the completion of the platform, we prepare for the airdrop event. Wallet addresses that participated in the Earthy Token sale will receive an airdrop of the main platform token, rewarding early supporters and ensuring a wide distribution across the community.`,
        $img: "/images_roadmap/img4.svg",
        imgBig: "/images_roadmap/imgBig4.svg"
    },
    {
        back: "#EAEAEA",
        font: "#323232",
        title: "5. Main Platform Token Release",
        desc: `The culmination of our efforts is the release of the main platform token. This token represents the core utility within the Earthy ecosystem, empowering users to participate, transact, and engage with the platform's environmental and social initiatives. With the main platform token in circulation, we unlock the full potential of our vision and embark on a journey towards a greener, more sustainable future.`,
        $img: "/images_roadmap/img5.svg",
        imgBig: "/images_roadmap/imgBig5.svg",
        isChangeHeight: true,
        isChangePosition: true
    },
];

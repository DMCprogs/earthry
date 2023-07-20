'use client'
import React, {useState} from 'react';
import {
    DivBoxAvatarAndInputSC,
    DivSection1SC, DivWrapperInputsSC,
    DivWrapperPageProfileSC,
    DivWrapperProfileAvatarSC, DivWrapperTwoSectionsSC,
    H4SC, H5SC, InputSC, SpanSC
} from "@/app/profile/styles.profile";
import { DivDefaultContainerSC } from "../styles.page";
import Image from '../images/vedmak.webp'
import ButtonWrapper from "@/app/components/custom_button";
import Section1 from "@/app/profile/companents/section1";
import Section2 from "@/app/profile/companents/section2";
import ProjectsList from "@/app/components/projects_list";
import CarouselProjects from "@/app/components/section3/FundedProjectCard";
import CarouselCustom from "@/app/components/сustom_carousel";
import image from "@/app/images/ItemBlogExample.png";
import image2 from "@/app/images/Greenpeace.png";

const Profile = () => {
    const responsive = {
        desktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1001 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            // the naming can be any, depends on you.
            breakpoint: { max: 1000, min: 769 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 768, min: 360 },

            items: 1,
            slidesToSlide: 1,
        },

    };

    const CarouselItems = () => {

        const [carouselArray, setCarouselArray] = useState([

            {
                title: "Initiative",
                description: "Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.",
                img: image,
                raised: 64332,
                investors: 49,
                min_investment: "1 Earthy token",
                additional_image: image2
            },
            {
                title: "Initiative",
                description: "asaa ipsum dolor sit amet consectetur. Cras eget rhoncus.",
                img: image,
                raised: 64332,
                investors: 49,
                min_investment: "1 Earthy token",
                additional_image: image2
            },
            {
                title: "sdasdsa",
                description: "Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.",
                img: image,
                raised: 64332,
                investors: 49,
                min_investment: "1 Earthy token",
                additional_image: image2
            },
            {
                title: "sdasdsa",
                description: "Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.",
                img: image,
                raised: 64332,
                investors: 49,
                min_investment: "1 Earthy token",
                additional_image: image2
            },
            {
                title: "sdasdsa",
                description: "Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.",
                img: image,
                raised: 64332,
                investors: 49,
                min_investment: "1 Earthy token",
                additional_image: image2
            },
        ]);
        return (

            carouselArray.map((item, i) => {
                return (
                    <div key={`asdfasdf${i}`} style={{padding: '0 10px'}}>

                        <CarouselProjects key={`ssssadasda${i}`}

                              title={item.title}
                              description={item.description}
                              img={item.img}
                              raised={item.raised}
                              investors={item.investors}
                              min_investment={item.min_investment}
                              additional_image={item.additional_image}
                        />
                    </div>
                );
            })

        );

    };


    return (
        <DivDefaultContainerSC style={{ marginTop: "140px" }}>
            <DivWrapperPageProfileSC>
                <DivSection1SC>
                    <H4SC>Your profile</H4SC>
                    <Section1/>

                </DivSection1SC>
                <Section2/>

                <DivSection1SC>
                    <ProjectsList/>

                </DivSection1SC>
                <DivSection1SC>
                    <H5SC>Funded projects in which you can take part</H5SC>
                    <CarouselCustom responsive={responsive}
                                    items={CarouselItems()} />
                </DivSection1SC>
            </DivWrapperPageProfileSC>
        </DivDefaultContainerSC>

    );
};

export default Profile;
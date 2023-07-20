"use client";
import { FC, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";

import ButtonWrapper from "../custom_button/index";
import { DivH1SC } from "@/app/about/styles.about";
import {
  DivBlogContainerSC,
  DivContentSC,

} from "@/app/blog/styles.blog";
import CarouselProjects from "./FundedProjectCard";
import image from "../../images/ItemBlogExample.png";
import image2 from "../../images/Greenpeace.png";
import {
  DivCustomArrowLeft,
  DivCustomArrowRight,
  DivCustomArrowsSC,
  DivSection3SC
} from "./styles.CarouselProjects";
import CarouselCustom from "./Carousel";
type BlogCardProps = {
  onClick: void;
  title: string;
  description: string;

}
const section3: FC<BlogCardProps> = ({ onClick }) => {
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

          <CarouselProjects key={`ssssadasda${i}`}

            title={item.title}
            description={item.description}
            img={item.img}
            raised={item.raised}
            investors={item.investors}
            min_investment={item.min_investment}
            additional_image={item.additional_image}
          />
        );
      })

    );

  };
  return (
    <DivSection3SC>
      <DivH1SC style={{}}>Funded projects that are already in partnership with us</DivH1SC>

      <CarouselCustom responsive={responsive} 
      items={CarouselItems()} />
    </DivSection3SC>
  );
};

export default section3;
"use client";
import { FC } from "react";
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
import { DivCustomArrowLeft, DivCustomArrowRight, DivExSC } from "./styles.CarouselProjects";
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

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return <DivCustomArrowRight onClick={() => onClick()} />;
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return <DivCustomArrowLeft onClick={() => onClick()} />;
  };
  return (
    <DivBlogContainerSC>
      <DivH1SC style={{}}>Funded projects that are already in partnership with us</DivH1SC>
      <Carousel
        containerClass="carousel-containerProjects"
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        itemClass="carousel-itemProjects"
        sliderClass="carousel-sliderProjects"
      >


        <CarouselProjects
          title={"Initiative"}
          description={"Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus."}
          img={image}
          raised={64332}
          investors={49}
          min_investment={"1 Earthy token"}
          additional_image={image2}
        />
        <CarouselProjects
          title={"Initiative"}
          description={"Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus."}
          img={image}
          raised={64332}
          investors={49}
          min_investment={"1 Earthy token"}
          additional_image={image2}
        />
        <CarouselProjects
          title={"Initiative"}
          description={"Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus."}
          img={image}
          raised={64332}
          investors={49}
          min_investment={"1 Earthy token"}
          additional_image={image2}
        />
        <CarouselProjects
          title={"Initiative"}
          description={"Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus."}
          img={image}
          raised={64332}
          investors={49}
          min_investment={"1 Earthy token"}
          additional_image={image2}
        />
        <CarouselProjects
          title={"Initiative"}
          description={"Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus."}
          img={image}
          raised={64332}
          investors={49}
          min_investment={"1 Earthy token"}
          additional_image={image2}
        />
        <CarouselProjects
          title={"Initiative"}
          description={"Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus."}
          img={image}
          raised={64332}
          investors={49}
          min_investment={"1 Earthy token"}
          additional_image={image2}
        />
      </Carousel>
    </DivBlogContainerSC>
  );
};

export default section3;

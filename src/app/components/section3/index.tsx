"use client";
import { FC, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";

import ButtonWrapper from "../custom_button/index";
import { DivH1SC } from "@/app/about/styles.about";
import { DivBlogContainerSC, DivContentSC } from "@/app/blog/styles.blog";
import CarouselProjects from "./FundedProjectCard";
import image from "../../images/ItemBlogExample.png";
import { motion } from "framer-motion";
import image2 from "../../images/Greenpeace.png";
import {
  DivCustomArrowLeft,
  DivCustomArrowRight,
  DivCustomArrowsSC,
  DivSection3SC,
} from "./styles.CarouselProjects";
import CarouselCustom from "../сustom_carousel";

const section3: FC = () => {
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
        description:
          "Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.",
        img: image,
        raised: 64332,
        investors: 49,
        min_investment: "1 Earthy token",
        additional_image: image2,
      },
      {
        title: "Initiative",
        description:
          "asaa ipsum dolor sit amet consectetur. Cras eget rhoncus.",
        img: image,
        raised: 64332,
        investors: 49,
        min_investment: "1 Earthy token",
        additional_image: image2,
      },
      {
        title: "sdasdsa",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.",
        img: image,
        raised: 64332,
        investors: 49,
        min_investment: "1 Earthy token",
        additional_image: image2,
      },
      {
        title: "sdasdsa",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.",
        img: image,
        raised: 64332,
        investors: 49,
        min_investment: "1 Earthy token",
        additional_image: image2,
      },
      {
        title: "sdasdsa",
        description:
          "Lorem ipsum dolor sit amet consectetur. Cras eget rhoncus.",
        img: image,
        raised: 64332,
        investors: 49,
        min_investment: "1 Earthy token",
        additional_image: image2,
      },
    ]);
    return carouselArray.map((item, i) => {
      return (
        <div key={`ssssadasda${i}`} style={{ padding: "0 10px" }}>
          <CarouselProjects
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
    });
  };
  return (
    <DivSection3SC>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            y: -100,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          },
        }}
      >
        <DivH1SC style={{ marginTop: "0px" }}>
          Funded projects that are already in partnership with us
        </DivH1SC>
      </motion.div>
      <CarouselCustom responsive={responsive} items={CarouselItems()} />
    </DivSection3SC>
  );
};

export default section3;

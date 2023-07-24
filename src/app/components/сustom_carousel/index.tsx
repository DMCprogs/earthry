"use client";
import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  DivCustomArrowLeft,
  DivCustomArrowRight,
  DivCustomArrowsSC,
  DivSection3SC,
} from "../section3/styles.CarouselProjects";
import image from "../../images/ItemBlogExample.png";
import image2 from "../../images/Greenpeace.png";
import CarouselProjects from "../section3/FundedProjectCard";
import { motion } from "framer-motion";
type CarouselProps = {
  items?: any;
  itemsImg?: any;
  responsive?: any;
  carouselState?: any;
  isProject?: any;
};

type ButtonGroupProps = {
  next?: any;
  previous?: any;
  goToSlide?: any;
  carouselState?: any;
  isProject?: any;
};

const ButtonGroup: FC<ButtonGroupProps> = ({
  carouselState,
  next,
  previous,
  goToSlide,
  isProject,
  ...rest
}) => {
  const { currentSlide } = carouselState;
  return (
    <DivCustomArrowsSC isProject={isProject}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            x: -100,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          },
        }}
      >
        <DivCustomArrowLeft
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            x: 100,
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: 0.3 },
          },
        }}
      >
        <DivCustomArrowRight className="disable" onClick={() => next()} />
      </motion.div>
    </DivCustomArrowsSC>
  );
};

const CarouselCustom: FC<CarouselProps> = ({
  carouselState,
  items,
  responsive,
  // itemsImg,
  isProject,
}) => {
  return (
    <Carousel
      customButtonGroup={
        <ButtonGroup carouselState={carouselState} isProject={isProject} />
      }
      renderButtonGroupOutside
      containerClass="carousel-containerProjects"
      responsive={responsive}
      arrows={false}
      itemClass="carousel-itemProjects"
      sliderClass="carousel-sliderProjects"
    >
      {items}
      {/* {itemsImg} */}
    </Carousel>
  );
};

export default CarouselCustom;

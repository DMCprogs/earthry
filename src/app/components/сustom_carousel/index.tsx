"use client";
import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  DivCustomArrowLeft,
  DivCustomArrowRight,
  DivCustomArrowsSC,
  DivSection3SC
} from "../section3/styles.CarouselProjects";
import image from "../../images/ItemBlogExample.png";
import image2 from "../../images/Greenpeace.png";
import CarouselProjects from "../section3/FundedProjectCard";

type CarouselProps = {
  items?: any;
  itemsImg?: any;
  responsive?: any;
  carouselState?: any;
}

type ButtonGroupProps = {
  next?: any;
  previous?: any;
  goToSlide?: any;
  carouselState?: any;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ carouselState, next, previous, goToSlide, ...rest }) => {
  const { currentSlide } = carouselState;
  return (
    <DivCustomArrowsSC>
      <DivCustomArrowLeft className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
      <DivCustomArrowRight className="disable" onClick={() => next()} />
    </DivCustomArrowsSC>
  );
};

const CarouselCustom: FC<CarouselProps> = ({ carouselState, items, responsive, itemsImg }) => {
  return (
    <Carousel
      customButtonGroup={<ButtonGroup carouselState={carouselState} />}
      renderButtonGroupOutside
      containerClass="carousel-containerProjects"
      responsive={responsive}
      arrows={false}
      itemClass="carousel-itemProjects"
      sliderClass="carousel-sliderProjects"
    >
      {items}
      {itemsImg}
    </Carousel>
  );
};

export default CarouselCustom;
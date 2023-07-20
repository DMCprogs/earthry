"use client";
import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  DivCustomArrowLeft,
  DivCustomArrowRight,
  DivCustomArrowsSC,
  DivSection3SC
} from "./styles.CarouselProjects";
import image from "../../images/ItemBlogExample.png";
import image2 from "../../images/Greenpeace.png";
import CarouselProjects from "./FundedProjectCard";
type CarouselProps = {
  items: any;
  responsive: any;
}
const CarouselCustom: FC<CarouselProps> = ({ items, responsive }) => {


  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <DivCustomArrowsSC>
        <DivCustomArrowLeft className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
        <DivCustomArrowRight className="disable" onClick={() => next()} />
      </DivCustomArrowsSC>
    );
  };
  console.log(items);

  return (


    <Carousel
      customButtonGroup={<ButtonGroup />}
      renderButtonGroupOutside={true}
      containerClass="carousel-containerProjects"
      responsive={responsive}
      arrows={false}
      itemClass="carousel-itemProjects"
      sliderClass="carousel-sliderProjects"
    >
      {items}
    </Carousel>
  );


};

export default CarouselCustom;

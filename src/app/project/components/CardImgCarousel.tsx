"use client";
import { FC } from "react";
import {CarouselImageSC, CarouselItemContainerSC} from "@/app/project/styles.project";

type BlogCardProps = {
  img: any;
}
const CardImgCarousel: FC<BlogCardProps> = ({ img }) => {
  return (
    <CarouselItemContainerSC>
      <CarouselImageSC img={img} />
    </CarouselItemContainerSC>
  );
};

export default CardImgCarousel;

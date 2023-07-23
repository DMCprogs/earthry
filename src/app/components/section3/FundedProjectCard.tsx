"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";

import {
  CarouselItemContainerSC,
  CarouselItemImageSC,
  CarouselItemTitleSC,
  CarouselItemContentSC,
  CarouselItemDescriptionSC,
  CarouselItemGridContainerSC,
  CarouselItemGridTitleSC,
  CarouselItemGridTextSC,
  CarouselItemAdditionalImageSC,
} from "./styles.CarouselProjects";
import Link from "next/link";
import { motion } from "framer-motion";
type BlogCardProps = {
  img: any;
  title: string;
  description: string;
  raised: any;
  investors: any;
  min_investment: any;
  additional_image: any;
};
const FundedProjectCard: FC<BlogCardProps> = ({
  img,
  title,
  description,
  raised,
  investors,
  min_investment,
  additional_image,
}) => {
  const router = useRouter();

  const styles = {
    justifySelf: "end",
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {
          y: 100,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, delay: 0.3 },
        },
      }}
    >
      <CarouselItemContainerSC>
        <CarouselItemImageSC img={img} />
        <CarouselItemContentSC>
          <CarouselItemTitleSC>{title}</CarouselItemTitleSC>
          <CarouselItemDescriptionSC>{description}</CarouselItemDescriptionSC>
          <CarouselItemGridContainerSC>
            <div>
              <CarouselItemGridTextSC>${raised}</CarouselItemGridTextSC>
              <CarouselItemGridTitleSC>Raised</CarouselItemGridTitleSC>
            </div>
            <div>
              <CarouselItemGridTextSC>{investors}</CarouselItemGridTextSC>
              <CarouselItemGridTitleSC>Investors</CarouselItemGridTitleSC>
            </div>
            <div>
              <CarouselItemGridTextSC>{min_investment}</CarouselItemGridTextSC>
              <CarouselItemGridTitleSC>Min investment</CarouselItemGridTitleSC>
            </div>
          </CarouselItemGridContainerSC>

          <CarouselItemAdditionalImageSC additional_image={additional_image} />
        </CarouselItemContentSC>
      </CarouselItemContainerSC>
    </motion.div>
  );
};

export default FundedProjectCard;

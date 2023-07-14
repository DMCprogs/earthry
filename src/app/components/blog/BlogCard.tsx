"use client";
import { FC } from "react";
import { useRouter } from 'next/navigation';

import {
  BlogCardContainerSC,
  BlogCardImageSC,
  BlogCardTitleSC,
  DivProductContentSC,
  BlogCardDescriptionSC
} from "./styles.BlogCard";
import ButtonWrapper from "../custom_button";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

type BlogCardProps = {
  img: any;
}
const BlogCard: FC<BlogCardProps> = ({ img }) => {
  const router = useRouter();

  const styles = {
    justifySelf: 'end',
  }
  return (


    <BlogCardContainerSC>
      <BlogCardImageSC img={img} />
      <DivProductContentSC>
        <BlogCardTitleSC>Lorem ipsum dolor sit amet, consectetur adipiscing elit</BlogCardTitleSC>
        <BlogCardDescriptionSC>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</BlogCardDescriptionSC>
        <ButtonWrapper
          styles={styles}
          directionRadius="center"
          primary={true}
          height={50}
          width={50}
          onClick={() => router.push('/')}
        >
          <HiOutlineArrowNarrowRight size={"1.3rem"} />
        </ButtonWrapper>
      </DivProductContentSC>

    </BlogCardContainerSC>
  );


};

export default BlogCard;

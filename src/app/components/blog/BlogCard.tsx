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
  title: string;
  description: string;

}
const BlogCard: FC<BlogCardProps> = ({ img, title, description }) => {
  const router = useRouter();

  const styles = {
    justifySelf: 'end',
  }
  return (


    <BlogCardContainerSC>
      <BlogCardImageSC img={img} />
      <DivProductContentSC>
        <BlogCardTitleSC>{title}</BlogCardTitleSC>
        <BlogCardDescriptionSC>{description}</BlogCardDescriptionSC>
        <ButtonWrapper
          styles={styles}
          directionRadius="center"
          primary={true}
          height={50}
          width={50}
          onClick={() => router.push('/blog_detail')}
        >
          <HiOutlineArrowNarrowRight size={"1.3rem"} />
        </ButtonWrapper>
      </DivProductContentSC>

    </BlogCardContainerSC>
  );


};

export default BlogCard;

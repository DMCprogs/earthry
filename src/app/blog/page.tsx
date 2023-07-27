"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";
import image from "../images/ItemBlogExample.png";
import { useRouter } from 'next/navigation';

import {
  DivContentSC,
  DivBlogContainerSC,
  DivH1SC
} from "./styles.blog";
import teamLogo from "../images/Team.jpg";
import BlogCard from "../components/blog/BlogCard";
import ButtonWrapper from "../components/custom_button";

const Blog: FC = () => {
  const router = useRouter();
  const styles = {
    justifySelf: 'center',
    borderRadius: '35px 0px',
    marginTop: '-20px',
    justifyContent: 'end'
  }


  return (
    <DivDefaultContainerSC style={{ alignSelf: "start" }}>
      <DivBlogContainerSC>

        <DivH1SC
          $media1={"50px 0 10px 0"}
          $media2={"100px 0 6px 0"}
          $media3={"100px 0 4px 0"}
          $media4={"70px 0 0 0"}
          $media5={"50px 0 0 0"}

        >Blog
        </DivH1SC>
        <DivContentSC>
          <BlogCard
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}
            img={image}
          />
          <BlogCard
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}
            img={image}
          />
          <BlogCard
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}
            img={image}
          />

        </DivContentSC>
        <DivH1SC
          $media1={"36px 0 0 0"}
          $media2="30px 0 0 0"
          $media4="60px 0 0 0"
          $media5="10px 0 0 0"

        >Subscribe for updates
        </DivH1SC>
        {/* <Link style={styles} href={'/'}> */}
        <ButtonWrapper

          directionRadius="ltr"
          primary={true}
          height={84}
          width={260}
        >
          <span> Subscribe </span>
        </ButtonWrapper>
        {/* </Link> */}
      </DivBlogContainerSC>

    </DivDefaultContainerSC >
  );
};

export default Blog;

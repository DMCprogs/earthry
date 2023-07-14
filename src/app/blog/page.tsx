"use client";

import { FC } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";
import image from "../images/ItemBlogExample.png";
import { useRouter } from 'next/navigation';

import {
  DivContentSC,
  DivBlogContainerSC,
} from "./styles.blog";
import teamLogo from "../images/Team.jpg";
import BlogCard from "../components/blog/BlogCard";
import { DivH1SC } from "../about/styles.about";
import ButtonWrapper from "../components/custom_button";
const Blog: FC = () => {
  const router = useRouter();
  const styles = {
    justifySelf: 'center',
    borderRadius: '35px 0px',
    marginTop: '-20px',

  }
  return (
    <DivDefaultContainerSC style={{ marginTop: "140px" }}>
      <DivBlogContainerSC>

        <DivH1SC>Blog</DivH1SC>
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
        <DivH1SC>Subscribe for updates</DivH1SC>
        <ButtonWrapper
          styles={styles}
          primary={true}
          height={84}
          width={260}
          onClick={() => router.push('/')}
        >Subscribe
        </ButtonWrapper>
      </DivBlogContainerSC>

    </DivDefaultContainerSC>
  );
};

export default Blog;

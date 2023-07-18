"use client";
import React, { useState } from "react";
import BlogCard from "../blog/BlogCard";
import {
    DivContainerBlogSC,
    DivContainerSectionSC,
    DivGridSC,
    DivTexLatestSC,
    ButtonReadMoreSC,
} from "./styles.LatestNews";
import image from "../../images/ItemBlogExample.png";
import Link from "next/link";
const LatestNews = () => {

   
    return (
     <DivContainerSectionSC>
         <DivContainerBlogSC>
        <DivTexLatestSC>Latest Posts and News</DivTexLatestSC>
        <DivGridSC>
          <BlogCard
            img={image}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} />
          <BlogCard
            img={image}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} />
          <BlogCard
            img={image}
            title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."} />
        </DivGridSC>
        <Link href={"/blog"}>
          <ButtonReadMoreSC>Read more</ButtonReadMoreSC>
        </Link>
      </DivContainerBlogSC>
     </DivContainerSectionSC>
    );
};

export default LatestNews;

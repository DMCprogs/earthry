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
import ButtonWrapper from "../custom_button";
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
                <ButtonWrapper
                    primary={true}
                    width={187}
                    height={74}
                    directionRadius={"center"}>
                    <span>Read more</span>
                </ButtonWrapper>
            </Link>
      </DivContainerBlogSC>
     </DivContainerSectionSC>
    );
};

export default LatestNews;

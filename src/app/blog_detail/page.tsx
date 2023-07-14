"use client";
import { FC } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";
import YouTube, { YouTubeProps } from "react-youtube";
import BlogCard from "../components/blog/BlogCard";
import image from "../images/ItemBlogExample.png";
import ImgBlog from "../images/BlogDetail.jpg";

import { 
    DivBackgroundImgSC,
    DivDetailContentSC,
    DivBlogInfoSC,
    DivCaptionConteinerSC,
    DivTitleSC,
    DivDateSC,
    DivTextSC,
    DivContainerVideoSC,
    ContainerSC,
    DivBlogContent,
    DivContainerBlogSC,
    DivTexLatestSC,
    ButtonJoinSC,
    DivContainerAllBlogSC,
    ButtonJoin,
    DivTexLatest,
    DivGridSC,
 } from "./styles.blogDetail";
 import { BsArrowRight } from "react-icons/bs";
import ButtonWrapper from "../components/custom_button";
import { DivH1SC } from "../about/styles.about";
 const options = {
  height: "100%",
  width: "100%",
  playerVars: {
      showinfo: 0,
      // controls: 0,
      rel: 0,
  },
};

const BlogDetail: FC = () => (
    
   
  <DivDefaultContainerSC style={{marginTop:'83px',maxWidth:'none',width:'100%',}}>
  <DivBackgroundImgSC  images={ImgBlog} />
  <DivDetailContentSC>
  <ContainerSC>
    <DivBlogInfoSC>
<DivCaptionConteinerSC>
  <DivTitleSC>Lorem ipsum dolor sit amet, consectetur adipiscing elit</DivTitleSC>
  <DivDateSC>June 12, 2023</DivDateSC>
</DivCaptionConteinerSC>
<DivTextSC>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</DivTextSC>
<DivContainerVideoSC>
  <YouTube
         style={{position:'absolute',
         top:'0',
         left:'0',
         right:'0',
         bottom:'0',
         }} 
        videoId="RzVvThhjAKw" // defaults -> ''
        id="RzVvThhjAKw" // defaults -> ''
        onPlay={() => {
          console.log("test");
          // setMute(0);
        }}
         opts={options}
      
      /> </DivContainerVideoSC>
<DivTextSC>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </DivTextSC>

    </DivBlogInfoSC>
    </ContainerSC>
  </DivDetailContentSC>
  <DivBlogContent>
<DivContainerAllBlogSC>
  <DivTexLatest>Latest posts</DivTexLatest>
  <Link href={"/blog"}>
   <ButtonJoin>
    ALL POSTS<BsArrowRight color={"white"} size={24} />{" "}
    </ButtonJoin>
    </Link>
    </DivContainerAllBlogSC>
<DivContainerBlogSC>
  <DivTexLatestSC>Latest posts</DivTexLatestSC>
  <DivGridSC>
  <BlogCard 
  img={image}  
  title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}/>
   <BlogCard 
  img={image}  
  title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}/>
   <BlogCard 
  img={image}  
  title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
  description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}/>
  </DivGridSC>
    <Link href={"/blog"}>
            <ButtonJoinSC>
            ALL POSTS<BsArrowRight color={"white"} size={24} />{" "}
            </ButtonJoinSC>
          </Link>
</DivContainerBlogSC>
  </DivBlogContent>
  <div style={{display:'grid',justifyItems:'center'}}>
  <DivH1SC>Subscribe for updates</DivH1SC>
  <Link href={"/"}>
        <ButtonWrapper
         directionRadius={"ltr"}
          primary={true}
          height={84}
          width={260}
        >
         <span> Subscribe </span>
        </ButtonWrapper>
        </Link>
        </div>
  </DivDefaultContainerSC>
  
);

export default BlogDetail;

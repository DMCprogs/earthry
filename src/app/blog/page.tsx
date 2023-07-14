import { FC } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";
import image from "../images/ItemBlogExample.png";

import { 
  DivContentSC,
  DivBlogContainerSC,
 } from "./styles.blog";
import teamLogo from "../images/Team.jpg";
import BlogCard from "../components/blog/BlogCard";
import { DivH1SC } from "../about/styles.about";
const Blog: FC = () => (
  <DivDefaultContainerSC style={{ marginTop: '140px' }}>
    <DivBlogContainerSC>

     <DivH1SC>Blog</DivH1SC>
    <DivContentSC>
      <BlogCard img={image}/>
      <BlogCard img={image}/>
      <BlogCard img={image}/>
  
    </DivContentSC>
    </DivBlogContainerSC>

  </DivDefaultContainerSC>
);

export default Blog;

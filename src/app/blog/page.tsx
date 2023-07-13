
import { FC } from "react";
import Link from "next/link";
import {DivDefaultContainerSC } from "../styles.page";
import { 
  DivBlogContainerSC,
  DivContentSC,
 } from "./styles.blog";
import BlogCard from "../components/blog/BlogCard";

const Blog: FC = () => (
  <DivDefaultContainerSC>
    <DivBlogContainerSC>
    <h1>Blog</h1>
    <DivContentSC>
      <BlogCard/>      
    <Link href="/">Landing</Link>
    </DivContentSC>


    </DivBlogContainerSC>
  </DivDefaultContainerSC>
);

export default Blog;

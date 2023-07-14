import { FC } from "react";
import { 
  BlogCardContainerSC,
  BlogCardImageSC,
  BlogCardTitleSC,
  DivProductContentSC,
  BlogCardDescriptionSC
 } from "./styles.BlogCard";

 type BlogCardProps = {
  img:any;
}
const BlogCard: FC<BlogCardProps> = ({img}) => {
  return (


    <BlogCardContainerSC>
      <BlogCardImageSC img={img}/>
      <DivProductContentSC>
      <BlogCardTitleSC>Lorem ipsum dolor sit amet, consectetur adipiscing elit</BlogCardTitleSC>
      <BlogCardDescriptionSC>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</BlogCardDescriptionSC>

      </DivProductContentSC>

      </BlogCardContainerSC>
    );

    
};

export default BlogCard;

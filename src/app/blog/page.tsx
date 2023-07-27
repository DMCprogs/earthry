"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { DivDefaultContainerSC } from "../styles.page";
import image from "../images/ItemBlogExample.png";
import { useRouter } from 'next/navigation';

import {
  DivContentSC,
  DivBlogContainerSC,
  DivH1SC,
  DivGroupSC,
  DivModalTextSC,
  DivModalContainerSC
} from "./styles.blog";
import teamLogo from "../images/Team.jpg";
import BlogCard from "../components/blog/BlogCard";
import ButtonWrapper from "../components/custom_button";
import { InputFormSC } from "../components/section10/styles.form";
import Modal from "../components/modal/modal";

const Blog: FC = () => {
  const router = useRouter();
  const styles = {
    justifySelf: 'center',
    borderRadius: '35px 0px',
    marginTop: '-20px',
    justifyContent: 'end'
  }
  const [email, setEmail] = useState();

  //modal state
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const Subcribe = () => {
    console.log(email);
    handleOpen();
  };
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
          $font4="26px"
          $media1={"36px 0 0 0"}
          $media2="30px 0 0 0"
          $media4="60px 0 0 0"
          $media5="10px 0 0 0"

        >Subscribe for updates
        </DivH1SC>

        <DivGroupSC>

          <InputFormSC
            style={{ width: '250px' }}
            placeholder={'E-mail'}
            name={'email'}
            type="email"
            onChange={onChangeEmail}
          />

          <ButtonWrapper
            onClick={Subcribe}
            directionRadius="center"
            primary={true}
            height={64}
            width={160}
          >
            <span> Subscribe </span>
          </ButtonWrapper>
        </DivGroupSC>
      </DivBlogContainerSC>
      <Modal $minHeight={'100%'} $Height={'300px'} isOpen={isOpen} onClose={handleClose}>
        <DivModalContainerSC>
          <DivModalTextSC>You have successfully subscribed.</DivModalTextSC>
          <DivModalTextSC style={{fontWeight: 'bold'}}>Thanks!</DivModalTextSC>
        </DivModalContainerSC>
      </Modal>
    </DivDefaultContainerSC >
  );
};

export default Blog;

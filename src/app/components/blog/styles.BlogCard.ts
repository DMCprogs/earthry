"use client";
import image from "../../images/ItemBlogExample.png";
import styled from "styled-components";

export const BlogCardContainerSC = styled.div`
  display: grid;
  border-radius: 30px;
  border: 1px solid var(--color-green);
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.25);
  /* max-width: 397px !important; */
  /* max-height: 573px; */
  transition: 0.1s;
  width: 100%;
  height: 100%;

  grid-template-rows: max-content max-content;
`;

type Props = {
  img: any;
};
export const BlogCardImageSC = styled.div<Props>`
  background: url(${(props) => props.img.src});
  border-radius: 30px 30px 0px 0px;

  display: grid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 229px;
`;

export const DivProductContentSC = styled.div`
  display: grid;
  grid-row-gap: 20px;
  padding: 15px;
`;

export const BlogCardTitleSC = styled.span`
  color: #201e1c;
  font-family: Montserrat;
  font-size: clamp(20px, 2.5vw, 30px); 
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const BlogCardDescriptionSC = styled.span`
  color: #201e1c;
  font-family: Montserrat;
  font-size: clamp(16px, 2.5vw, 20px); 
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

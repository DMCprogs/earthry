"use client";
import { StaticImageData } from "next/image";
import { styled } from "styled-components";
type Props = {
  $images: StaticImageData;
}
export const DivBlogContainerSC = styled.div`
  display: grid;
  justify-content: center;
  justify-self:center;
  grid-row-gap: 60px;
  justify-items: center;
`;

export const DivContentSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 24px;
  width: 100%;
  height: 100%;
  position: relative;
  width: 90vw;
  max-width: 1280px;
  grid-row-gap: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;



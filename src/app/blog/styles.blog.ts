"use client";
import { StaticImageData } from "next/image";
import { styled } from "styled-components";

export const DivBlogContainerSC = styled.div`
  display: grid;
  justify-content: center;
  justify-self: center;
  grid-row-gap: 50px;
  justify-items: center;

  @media (max-width: 768px) {
    grid-row-gap: 40px;
  }
  @media (max-width: 480px) {
    grid-row-gap: 30px;
  }
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
    grid-gap: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
  }
`;

type Props = {
  $media1?: any;
  $media2?: any;
  $media3?: any;
  $media4?: any;
  $media5?: any;
};
export const DivH1SC = styled.div<Props>`
  width: 100%;
  display: grid;
  height: max-content;
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: clamp(38px, 2.5vw, 48px);
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: 0.3s;
  margin: ${({ $media1 }) => ($media1 ? $media1 : null)};

  @media (max-width: 1000px) {
    margin: ${({ $media2 }) => ($media2 ? $media2 : null)};
  }
  @media (max-width: 768px) {
    margin: ${({ $media3 }) => ($media3 ? $media3 : null)};
  }
  @media (max-width: 480px) {
    margin: ${({ $media4 }) => ($media4 ? $media4 : null)};
  }
  @media (max-width: 360px) {
    margin: ${({ $media5 }) => ($media5 ? $media5 : null)};
  }
`;

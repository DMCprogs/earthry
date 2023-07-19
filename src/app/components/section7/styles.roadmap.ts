"use client";

import styled, { css } from "styled-components";

export const DivContainerSec4SC = styled.div`
  width: 100%;
  padding: 0px 50px;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 90px;
  justify-items: center;
  //border: 1px solid red;
  @media (max-width: 768px) {
    padding: 0px 0px;
  }
`;

export const DivBranchBoxSC = styled.div`
  width: 100%;
  max-width: 1240px;
  height: max-content;
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 10px;

  @media (min-width: 1000px) {
    display: grid;
    justify-items: center;
    background-image: url('/images_roadmap/branch.svg');
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    row-gap: 60px;
  }
  @media (max-width: 1350px) {
    background-size: 56%;
  }
  @media (max-width: 1210px) {
    background-size: 62%;
  }
  @media (max-width: 1100px) {
    background-size: 70%;
  }
  @media (max-width: 1000px) {
    max-width: 572px;
    row-gap: 0px;
  }
  @media (max-width: 550px) {
    justify-items: center;
  }
`;

export const DivRoadMapElSC = styled.div<{
    back: string;
    font: string;
    left?: boolean;
    right?: boolean;
}>`
  max-width: 713px;
  width: 100%;
  min-height: 285px;
  height: 100%;
  padding: 40px 81px;
  display: grid;
  align-items: center;
  /* grid-auto-rows: max-content;
    row-gap: 15px; */
@media(max-width: 1350px) {
  max-width: 574px;
  padding: 36px 31px;
}
  @media(max-width: 480px) {
    min-height: 383px;
  }
  ${({ back }) =>
    back &&
    css`
      background-color: ${back};
    `}
  ${({ font }) =>
    font &&
    css`
      color: ${font};
    `}
        
    ${({ left }) =>
    left &&
    css`
      justify-self: left;
      border-radius: 60px 0px;
    `}
    ${({ right }) =>
    right &&
    css`
      justify-self: right;
      border-radius: 0px 60px;
    `};

    @media(min-width: 480px) {
    ${({ left }) =>
    left &&
    css`
        justify-self: left;
      `}
    ${({ right }) =>
    right &&
    css`
        justify-self: right;
      `}
  }

  @media (max-width: 400px) {
    /* width: 320px; */
    padding: 20px 20px;
  }

  h3 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    @media (max-width: 400px) {
      font-size: 24px;
    }
  }

  p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }

  div {
    width: 100%;
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
    row-gap: 15px;
  }
`;
export const ImageRoadmapSC = styled.div<{
    img: string;
    isChangeHeight?: boolean;
}>`
  display: grid;
  justify-self: center;
  align-self: start;
  align-items: start;
  align-content: start;
  width: 100px;
  height: ${({isChangeHeight}) => isChangeHeight ? "150px" : "195px"};
  background-image: url(${({ img }) => img});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const DivBoxTitleSC = styled.div`
  display: grid;
  justify-content: center;
  justify-self: center;
  color: #201e1c;
  text-align: center;
  font-size: 40px;
  font-family: Montserrat;
  font-weight: 600;
`;

export const DivBoxRoadMapElSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto auto; 
`;
export const TitleRoadmapSC = styled.div`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media(max-width: 480px) {
    font-size: 40px;
  }
`;

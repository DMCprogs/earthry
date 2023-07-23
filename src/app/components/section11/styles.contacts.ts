"use client";
import { styled } from "styled-components";

export const DivWrapperContactsImageSC = styled.div<{
  $path: string;
}>`
  display: grid;
  width: 35px;
  height: 35px;
  background-image: url(${({ $path }) => $path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  @media (max-width: 480px) {
    height: 30px;
    width: 30px;
  }
`;

export const TitleContactsSC = styled.div`
  color: #201e1c;
  text-align: center;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.44px;
  @media (max-width: 480px) {
    font-size: 40px;
    letter-spacing: 1.2px;
  }
`;
export const DivBoxImagesSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-self: center;
  gap: 65px;
  @media (max-width: 480px) {
    gap: 40px;
  }
`;

export const DivBoxItemTitles = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 6px;
  @media (max-width: 480px) {
    justify-items: center;
    gap: 0;
  }
`;
export const TitleSC = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: #201e1c;
  width: max-content;
  @media (max-width: 480px) {
    font-size: 28px;
  }
  @media (max-width: 430px) {
    font-size: 24px;
  }
`;

export const TitleBoldSC = styled.div`
  color: #201e1c;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 480px) {
    text-align: center;
    font-size: 28px;
    font-weight: 400;
  }
  @media (max-width: 430px) {
    font-size: 24px;
  }
`;

export const DivBoxTitlesSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 20px;
  @media (max-width: 480px) {
    justify-items: center;
  }
`;

export const DivContainerContactsSC = styled.div`
  display: grid;
  width: 100%;
  max-width: 427px;
  justify-self: center;
  grid-template-rows: repeat(3, max-content);
  gap: 50px;
 // border: 1px solid red;
  @media (max-width: 480px) {
    gap: 40px;
  }
`;
export const DivWrapPageSC = styled.div`
  display: grid;
  width: 100%;
 // border: 1px solid red;
  justify-content: center;
`;


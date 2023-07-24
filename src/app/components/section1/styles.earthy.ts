"use client";
import Image from "next/image";
import { styled } from "styled-components";
export const DivSectionSC = styled.div`
  display: grid;
  height: 105vh;
  width: 100vw;
  justify-content: center;
  align-content: center;
  background-color: #4affc9;
  @media(max-height: 900px) {
    padding-top: 100px;
  }
  @media(max-height: 800px) {
    padding-bottom: 82px;
    height: max-content;
  }
`;
export const DivContentSectionSC = styled.div`
  display: grid;
  height: 105vh;
  width: 100vw;
  justify-content: center;
  align-content: center;
 grid-template-rows: max-content max-content;
  @media(max-height: 800px) {
    height: max-content;
  }
`;
export const DivContentWrapSC = styled.div`
  display: grid;
  grid-template-areas: "A B";
  max-width: 1940px;
  width: 90vw;
  height: max-content;
  grid-template-columns: repeat(2, max-content);
  // border: 1px solid red;
  align-content: center;
  justify-items: center;
  justify-content: center;
  @media (max-width: 1250px) {
    grid-template-areas:
      "B"
      "A";
    grid-template-columns: repeat(1, max-content);
    grid-template-rows: repeat(2, max-content);
  }
`;
export const DivPhotoSC = styled(Image)`
  display: grid;
  width: 90vw;
  max-height: 268px;
  height: max-content;
  max-width: 681px;
  //  border: 1px solid red;
`;
export const DivTextSC = styled.div`
  font-family: Montserrat;
  font-size: 30px;
  //border: 1px solid red;
  font-weight: 400;
  line-height: 29px;
  width: 100%;
  margin-left: 15px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: #323232;
  @media (max-width: 1250px) {
    text-align: center;
    margin-left: 10px;
  }
  @media (max-width: 480px) {
    font-size: 25px;
  }
`;
export const DivLeftBlockSC = styled.div`
  display: grid;
  grid-area: A;
  grid-template-rows: repeat(3, max-content);
  // border: 1px solid red;
  align-content: center;
  justify-content: center;
  justify-items: center;
  @media (max-width: 1250px) {
    gap: 20px;
  }
`;
export const DivGifSC = styled(Image)`
  grid-area: B;
  display: grid;
  // border: 1px solid red;
  width: 385px;
  height: 470px;
  @media (max-width: 1250px) {
    width: 275px;
    height: 320px;
  }
`;
export const DivButtonsBlockSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  //  border: 1px solid red;
  gap: 15px;
  width: 100%;
  margin-top: 40px;
  margin-left: 4px;

  justify-content: center;
  @media (max-width: 1250px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: max-content;
    grid-template-rows: repeat(2, max-content);
  }
`;

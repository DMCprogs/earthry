"use client";
import { styled } from "styled-components";

export const DivWrapperGlobalSection3SC = styled.div`
  display: grid;
  width: 100%;
  height: max-content;
  grid-template-columns: 100%;
  grid-template-rows: 100px auto;
  gap: 80px;
  box-sizing: border-box;
  //padding-top: 82px;
  justify-items: center;
  //border: 1px solid red;
  @media (max-width: 850px) {
    gap: 40px;
  }
`;

export const H4SC = styled.h4`
  display: grid;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  align-items: center;
  letter-spacing: 0.2px;
  text-align: center;
  @media (max-width: 850px) {
    width: 100%;
    font-size: 26px;
  }
  color: #323232;
  //margin-bottom: 16px;
`;

export const SpanH4SC = styled.span`
  //display: grid;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  align-items: center;
  letter-spacing: 0.2px;
  @media (max-width: 1300px) {
    font-size: 24px;
  }
  @media (max-width: 420px) {
    font-size: 22px;

    line-height: 135%;
  }
  color: #323232;
  //margin-bottom: 16px;
`;

export const SpanSC = styled.span`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  display: inline-block;
  width: 100%;
  text-align: left;
  max-width: 617px;
  align-items: center;
  letter-spacing: 0.2px;
  color: #323232;
  @media (max-width: 1300px) {
    max-width: 486px;
    font-size: 18px;
  }
  @media (max-width: 1050px) {
    max-width: 364px;
    line-height: 135%;
  }

  @media (max-width: 1000px) {
    line-height: 115%;
  }

  @media (max-width: 850px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    width: 252px;
    flex-shrink: 0;
    color: #201e1c;
    font-size: 20px;
  }
`;

export const DivBoxText1SC = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50px max-content;
  justify-items: center;
  gap: 35px;
`;

export const SpanTextSC = styled.span`
  display: grid;
  width: 100%;
  max-width: 939px;
  color: #201e1c;
  text-align: center;
  font-size: 28px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
`;

export const DivWrapperGallerySC = styled.div`
  display: grid;
  width: 100%;
  height: max-content;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 48px;
  @media (max-width: 850px) {
    gap: 20px;
  }
`;

export const DivItemGellarySC = styled.div<{
    direct: string;
}>`
  display: grid;
  width: 100%;
  height: 345px;
  grid-template-rows: 100%;
  grid-template-columns: 1.5fr 1fr;
  gap: 24px;
  direction: ${({ direct }) => direct};
  @media (max-width: 1000px) {
    height: 290px;
  }
  @media (max-width: 850px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
    gap: 20px;
    height: 655px;
  }
  @media (max-width: 480px) {
    height: 780px;
    grid-template-rows: 2fr 1fr;
  }
`;
export const DivWrapperTextParentSC = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  position: relative;
  justify-items: center;
  align-items: center;
`;

export const DivWrapper1SC = styled.div`
  position: absolute;
  display: grid;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 60px 0px 50px 0px;
  border: 4px solid #5f9f8c;
  top: 0;
  left: 0;
`;
export const DivWrapper2SC = styled.div`
  position: absolute;
  display: grid;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 50px 0px 60px 0px;
  border: 4px solid #5f9f8c;
  bottom: 0;
  right: 0;
`;
export const DivWrapperImageSC = styled.div<{
    // src: string;
    direct: string;
    bgSize: string;
}>`
  display: grid;
  width: 100%;
  height: 100%;
  /* background-image: url(//({ src }) => src}) no-repeat;/*
  background-color: #4affc9;
  background-position: center;
  background-size: ${({ bgSize }) => bgSize};
  border-radius: ${({ direct }) =>
    direct === "ltr" ? "0px 40px 40px 40px" : "40px 40px 0px 40px"};
`;

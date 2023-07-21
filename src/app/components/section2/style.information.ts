"use client";
import { styled } from "styled-components";
export const DivContainerSectionSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content max-content;
  // border: 1px solid red;
  margin-top: 120px;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
export const DivTextSC = styled.div`
  margin-top: 70px;
  color: #201e1c;
  font-size: clamp(20px, 2.5vw, 30px);
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 45px */
  letter-spacing: 0.06px;
`;
export const DivContainerVideoSC = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
`;
export const DivTitleSC = styled.div`
  color: #323232;
  text-align: center;
  font-family: Montserrat;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  margin-bottom: 40px;
`;
export const ContainerSC = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 100%;
  justify-items: center;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 80%;
    border-radius: 1445.095px;
    background: #a5ffe4;
    filter: blur(225px);
    transform: rotate(-0.041deg);
    z-index: -1;
  }
`;

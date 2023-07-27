"use client";
import { styled } from "styled-components";
export const DivContainerTokenomic = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content max-content max-content;
  gap: 50px;
box-sizing: border-box;
  justify-items: center;
`;
export const DivTitleTokenomic = styled.div`
  width: 100%;
  height: 100%;
  color: #201e1c;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  display: grid;
  justify-items: center;
`;
export const DivInfoTocenomic = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: max-content max-content;
  }
`;
export const DivWrapperCellImageSC = styled.div<{
  path: string;
}>`
  display: grid;
  width: 50vw;
  max-width: 672px;
  height: 424px;
  background: url(${({ path }) => path});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
 // border: 1px solid red;
  @media (max-width: 850px) {
    height: 419px;
  }
  @media (max-width: 768px) {
    width: 80vw;
    height: 359px;
  }
  @media (max-width: 480px) {
    height: 290px;
  }
  @media (max-width: 360px) {
    height: 219px;
  }
`;
export const DivTextTokenomics = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: clamp(20px, 2.5vw, 28px);
  font-style: normal;
  font-weight: 500;
  line-height: 135%; /* 37.8px */
  letter-spacing: 0.056px;
`;
export const DivButtons = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 20px;
  justify-items: center;
  justify-content: center;
  @media (max-width: 530px) {
    grid-template-columns: none;
    grid-template-rows: max-content max-content;
  }
`;

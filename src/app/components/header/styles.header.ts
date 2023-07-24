"use client";
import Image from "next/image";
import Link from "next/link";
import styled, {keyframes} from "styled-components";

export const DivBoxHeaderSC = styled.div<{
    $isLanding: boolean;
}>`
  width: 100%;
  display: ${({$isLanding}) => $isLanding ? "grid" : "none"};
  height: 82px;
  background-color: #4affc9;
  padding: 0 20px 0 20px;
  position: fixed;
  z-index: 90;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.6);
  @media(max-height: 1420px) {
    padding: 0 0 0 20px;
  }
`;

export const DivBoxHeaderForPageSC = styled.div<{
    $isPages: boolean
}>`
  width: 100%;
  display: ${({$isPages}) => $isPages ? "grid" : "none"};
  height: 82px;
  background-color: rgba(255, 255, 255, 0.70);
  padding: 0 20px 0 20px;
  z-index: 90;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.6);
  @media(max-height: 1420px) {
    padding: 0 0 0 20px;
  }
`;


export const DivBoxColumnsSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.7fr;
  align-items: center;
  @media (max-width: 1400px) {
    margin-right: 20px;
  }
`;

export const IconLogoSC = styled(Image)`
  width: 140px;
  height: 52px;
  z-index: 9999999999;
  position: relative;
`;

export const DivBoxTabsButtonsSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content max-content;
  justify-content: space-between;
  height: max-content;
  padding-right: 20px;
  column-gap: 67px;
  align-items: center;
  align-self: center;
  @media (max-width: 1550px) {
    column-gap: 30px;
  }
  @media (max-width: 1420px) {
    justify-content: end;
    padding-right: 0px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    gap: 0px;
    width: max-content;
    justify-self: end;
  }
`;

export const DivBoxTabsSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 20px;
  height: max-content;
  width: max-content;
  @media (max-width: 1420px) {
    gap: 10px;
    display: none;
  }
`;

export const DivBoxTabSC = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #201e1c;
  cursor: pointer;
  width: max-content;
`;

export const DivBoxLinkSC = styled(Link)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #201e1c;
  cursor: pointer;
  width: max-content;
`;

export const DivBoxButtonsSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 18px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivBoxBurgerSC = styled.div`
  display: grid;
  align-items: start;
  grid-template-rows: repeat(8, max-content);
  gap: 20px;
  padding: 100px 20px 50px 20px;
  justify-items: center;
  width: max-content;
  @media (max-width: 768px) {
    grid-template-rows: repeat(9, max-content);
  }
`;

export const DivBoxButtonsMenuSC = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
  }
  @media (max-width: 500px) {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto);
    gap: 20px;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }  
`;

// Примените анимацию в вашем Styled Component
export const AnimatedComponent = styled.div`
  animation: 0.7s ${fadeIn} ;
`;

export const DivButtonCloseSC = styled.div<{
    $path: string;
}>`
  position: absolute;
  background-image: url(${({$path}) => $path});
  top: 30px;
  right: 20px;
  color: #201E1C;
  width: 27px;
  height: 27px;
`;
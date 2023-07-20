"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const DivBoxHeaderSC = styled.div<{
  $isBgColor: boolean;
}>`
  width: 100%;
  display: grid;
  height: 82px;
  background-color: ${({ $isBgColor }) =>
    $isBgColor ? " #4affc9" : "rgba(255, 255, 255, 0.70)"};
  padding: 0px 25px 0px 25px;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.6);
`;

export const DivBoxColumnsSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4.3fr 7fr;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1400px) {
    margin-right: 20px;
  }
`;

export const IconLogoSC = styled(Image)`
  width: 140px;
  height: 52px;
`;

export const DivBoxTabsButtonsSC = styled.div`
  width: max-content;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 140px;
  height: max-content;
  align-items: center;
  align-self: center;
  @media (max-width: 1550px) {
    gap: 30px;
  }
  @media (max-width: 1420px) {
    display: block;
  }
  @media (max-width: 900px) {
    grid-template-columns: 100%;
  }
`;

export const DivBoxTabsSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 20px;
  height: max-content;
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
`;

export const DivBoxLinkSC = styled(Link)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #201e1c;
  cursor: pointer;
`;

export const DivBoxButtonsSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 18px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const DivBoxBurgerSC = styled.div`
  display: grid;
  align-items: start;
  grid-template-rows: repeat(8, max-content);
  gap: 20px;
  padding: 50px 20px;
  @media (max-width: 900px) {
    grid-template-rows: repeat(9, max-content);
  }
`;

export const DivBoxButtonsMenuSC = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-rows: repeat(2, auto);
    gap: 20px;
  }
`;

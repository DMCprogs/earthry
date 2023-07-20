"use client";
import { StaticImageData } from "next/image";
import styled from "styled-components";
type Props = {
  logo: StaticImageData;
}
export const DivTitleSC = styled.div`
  color: #201E1C;
font-family: Montserrat;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.2px;
  display: grid;
  justify-content: center;
`;
export const DivContainerTagsTabSC = styled.div`
gap: 200px;
width: 100%;
height: fit-content;
max-width: 1030px;
min-width: 940px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  border-radius: 16px;
  background: #F8F8F8;
padding: 20px 15px;

`;
export const DivTitleTables = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;
export const DivTextTabsSC = styled.div`
color: #201E1C;
font-family: Montserrat;
font-size: 19px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const DivTitleTablesSC = styled.div`
display: flex;
flex-direction: row;
align-items: center;


`;
export const DivLogoSC = styled.div<Props>`
width: 60px;
height: 60px;
background: url(${props => props.logo.src}), lightgray 50% / cover no-repeat;
background-size: cover;
border-radius: 60px;
`;
export const DivUserInfo = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;


`;
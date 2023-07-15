"use client";
import styled from "styled-components";
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
  width: 100%;
  @media(max-width: 480px){ justify-content: left;}
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
background: #C8FFEF;
padding: 20px 15px;

`;
export const DivTitleTables = styled.div`
display: flex;
flex-direction: row;


`;
export const DivTextTabsSC = styled.div`
color: #201E1C;
font-family: Montserrat;
font-size: 19px;
font-style: normal;
font-weight: 600;
line-height: normal;

`;
export const DivTitleTablesSC = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`;
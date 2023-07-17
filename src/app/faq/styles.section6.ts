"use client";
import styled from "styled-components";

export const DivWrapSec6SC = styled.div`
  display: grid;
  justify-content: center;
  justify-self: center;
  min-height: 100vh;
  height: max-content;
  width: 97%;
  //border: 1px solid red;
  margin-top: clamp(140px, 20vw, 170px);
`;
export const DivContentSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 30px;
  justify-content: center;
  max-width: 1030px;
  height: max-content;
  //border: 1px solid green;
`;

export const DivContainerSec6SC = styled.div`
  width: 100%;
  max-width: 946px;
  display: grid;
  grid-auto-rows: max-content;
`;
export const DivTitleSC = styled.div`
  color: #201e1c;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-self: center;
  // border: 1px solid green;
`;

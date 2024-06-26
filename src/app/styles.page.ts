"use client";
import { styled } from "styled-components";

export const DivWrapperSC = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  overflow: auto;
 // height: 100vh;
`;
export const DivContentSC = styled.div`
  display: grid;
  margin-top: 0px;
  @media(max-width:765px){
    margin-top: 40px;
  }
`;

export const DivSectionsContainerSC = styled.div`
  display: grid;
  justify-self: center;
  grid-auto-rows: repeat(7, max-content);
  gap: 120px;
  max-width: 1400px;
  width: 90vw;
  // border: 1px solid red;
  @media (max-width: 768px) {
    gap: 110px;
  }
  @media (max-width: 480px) {
    gap: 100px;
  }
  @media (max-width: 360px) {
    gap: 70px;
  }
`;

export const DivDefaultContainerSC = styled.div`
  display: grid;
  justify-self: center;
  max-width: 1400px;
  width: 90vw;
  height: fit-content;
  gap: 24px;
  //border: 1px solid red;
`;

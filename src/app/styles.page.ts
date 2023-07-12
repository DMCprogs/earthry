"use client";
import { styled } from "styled-components";

export const DivWrapperSC = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  grid-auto-rows: repeat(3, max-content);
  gap: 120px;
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
export const DivContentSC = styled.div`
  display: grid;
`;

export const DivSectionsContainerSC = styled.div`
  display: grid;
  justify-self: center;
  grid-auto-rows: repeat(9, max-content);
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
`;

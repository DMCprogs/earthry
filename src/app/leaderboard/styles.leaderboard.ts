"use client";
import styled from "styled-components";
export const DivTitleSC = styled.div`
  color: #201e1c;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  display: grid;
  justify-content: center;
  width: 100%;
`;
export const DivContainerTagsTabSC = styled.div`
  gap: 185px;
  width: 100%;
  height: fit-content;
  max-width: 1030px;
  min-width: 940px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  border-radius: 16px;
  background: #c8ffef;
  padding: 20px 15px;
`;
export const DivTitleTables = styled.div`
  display: flex;
  flex-direction: row;
`;
export const DivMarginTopSC = styled.div`
  display: grid;
  margin-top: clamp(50px, 8vw, 70px);
//  border: 1px solid red;
`;
export const DivTextTabsSC = styled.div`
  color: #201e1c;
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
export const DivHideX = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  justify-content: center;
  gap: 30px;
  @media (max-width: 988px) {
    overflow-x: auto;
    justify-content: left;
  }
`;

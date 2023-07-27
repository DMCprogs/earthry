"use client";
import styled from "styled-components";

export const DivWrapSC = styled.div`
  color: #201e1c;
  display: grid;
  justify-content: center;
  justify-self: center;
  min-height: 100vh;
  height: max-content;
  width: 100%;
 // border: 1px solid red;
  margin-top: clamp(60px, 8vw, 120px);
`;
export const DivWrapSucсessSC = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
  justify-self: center;
  min-height: 100vh;
  height: max-content;
  width: 100%;
  // border: 1px solid red;
  align-content: center;
`;
export const DivTextSC = styled.p`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.20000000298023224px;
`;
export const DivFormWrapSC = styled.div`
  width: 100%;
  // border: 1px solid yellow;
`;

export const DivContentSC = styled.div`
  display: grid;
  grid-template-rows: max-content;
  gap: 30px;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  width: 90vw;
  height: max-content;
  // border: 1px solid green;
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
export const DivOneRowSC = styled.div`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(2, max-content);
  gap: 10px;
  align-items: center;
`;
export const DivBoxFormSC = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: max-content;
  gap: 24px;
  // border: 1px solid red;
`;
export const DivRowBoxInputTitleSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 8px;
`;
export const DivTitleInputSC = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 145.02%;
  /* identical to box height, or 35px */

  color: #111111;
  display: grid;
  grid-template-columns: repeat(2, max-content);
`;
export const InputFormSC = styled.input`
  box-sizing: border-box;
  padding: 20px;
  gap: 10px;
  background: #ffffff;
  border: 2px solid #a6a6a6;
  border-radius: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #969696;
`;

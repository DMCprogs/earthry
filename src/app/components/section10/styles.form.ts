"use client";
import { styled } from "styled-components";

export const DivBoxFormSC = styled.div`
  height: 100%;
  display: grid;

  grid-template-rows: repeat(5, auto);
  gap: 24px;
`;
export const DivContainerFormSC = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  max-width: 608px;
  justify-self: center;
  align-items: center;
  grid-template-rows: repeat(2, max-content);
  gap: 36px;
`;
export const InputFormSC = styled.input`
  box-sizing: border-box;
  padding: 20px;
  gap: 10px;
  background: #ffffff;
  border: 2px solid #a6a6a6;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #969696;
  @media (max-width: 390px) {
    padding: 15px;
    font-size: 18px;
  }
`;
export const TextAreaFormSC = styled.textarea`
  box-sizing: border-box;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  width: 100%;
  max-height: 192px;
  background: #ffffff;
  border: 2px solid #a6a6a6;
  border-radius: 8px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  resize: none;
  color: #969696;
`;
export const DivTitleInputSC = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 145.02%;
  /* identical to box height, or 35px */

  color: #111111;
`;
export const DivRowBoxInputTitleSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 8px;
`;
export const TitleFormSC = styled.div`
  color: #201E1C;
  text-align: center;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 1.44px;
  @media(max-width: 480px) {
    font-size: 40px;
    letter-spacing: 1.2px;
  }
`;

export const BoxContentSC = styled.div`
  width: 100%;
  display: grid;
  position: relative;
  grid-template-rows: auto;
  gap: 120px;
  // border: 1px solid red;
`;

export const ShadowSC = styled.div`
  display: grid;
  left: 250px;
  top: 100px;
  z-index: -1;
  background: #4affc9;
  filter: blur(1625px);
  transform: rotate(-32.49deg);
  position: absolute;
  width: 715px;
  height: 827px;
  @media (max-width: 1190px) {
    width: 515px;
    height: 90vh;
  }
  @media (max-width: 1000px) {
    height: 80vh;
    left: 50px;
    top: 300px;
  }
  @media (max-width: 740px) {
    width: 0px;
    height: 0px;
  }
`;
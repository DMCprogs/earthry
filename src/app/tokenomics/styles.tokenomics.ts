"use client";
import { styled } from "styled-components";


export const H4SC = styled.h4<{
  positionText?: string;
}>`
  display: grid;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  align-items: center;
  letter-spacing: 0.2px;
  color: #323232;
  height: fit-content;
  text-align: ${({ positionText }) => positionText};
  @media (max-width: 480px) {
    font-size: 24px;
  }
  @media (max-width: 360px) {
    font-size: 20px;
  }

`;

export const DivWrapperCellImageSC = styled.div<{
  path: string;
}>`
  display: grid;
  width: 100%;
  max-width: 672px;
  height: 524px;
  background: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 850px) {
    height: 419px;
  }
  @media (max-width: 480px) {
    height: 343px;
  }
  @media (max-width: 360px) {
    height: 249px;
  }
`;


export const ImagePlanetTokenSC = styled.div<{
    path: string;
  }>`
    display: grid;
    width: 100%;
    max-width: 681px;
    height: 600px;
    background: url(${({ path }) => path});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @media (max-width: 1000px) {
    height: 700px;
  }
  @media (max-width: 768px) {
    height: 400px;
  }
  @media (max-width: 480px) {
    height: 300px;
  }
  @media (max-width: 360px) {
    height: 320px;
  }
  `;

export const DivWrapperContentSC = styled.div`
  display: grid;
  justify-content: center;
  justify-self: center;
  justify-items: center;
  min-height: 100vh;
  height: max-content;
  width: 97%;
  border: 1px solid red;
  margin-top: clamp(160px,20vw, 170px);

  grid-template-rows: repeat(8, max-content);
  gap: 44px;
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

export const TitleTokenomicsSC = styled.div`
    color: #201E1C;
font-family: Montserrat;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.2px;

@media (max-width: 480px) {
    font-size: 38px;
  }
`;

export const DivBoxText1SC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  justify-items: center;
  gap: 35px;
`;

export const SpanTextSC = styled.span`
color: #000;
text-align: center;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 130%;
max-width: 1030px;
@media (max-width: 480px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;


export const DivBoxOptionsTokensSC = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  padding: 15px;
  gap: 15px;
  width: 100%;
  max-width: 608px;
  height: max-content;
  background: #fff;
  border-radius: 20px;
  @media (max-width: 480px) {
    height: 378px;
  }
`;

export const DivBoxInputTokenSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  gap: 10px;
  width: 100%;
  max-width: 578px;
  height: max-content;
  background: #ddfff5;
  border-radius: 16px;
  @media (max-width: 480px) {
    grid-template-columns: 100%;
    justify-content: start;
    gap: 5px;
    height: 106px;
  }
`;

export const DivTitleTokenSC = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: clamp(18px, 4vw, 24px);
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const DivCountTokenSC = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: clamp(26px, 6vw, 28px);
  line-height: 34px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const DivBoxShadowSC = styled.div`
  position: absolute;
  width: 190px;
  height: 1000px;
  left: 450px;
  top: -400px;
  background: #4affc9;
  filter: blur(225px);
  transform: rotate(-90deg);
  z-index: -1;
  @media (max-width: 1110px) {
    height: 60vh;
    left: 40%;
    top: 0px;
    width: 161px;
  }
  @media (max-width: 690px) {
    left: 200px;
    width: 161px;
  }
  @media (max-width: 580px) {
    height: 40vh;
    left: 60px;
    width: 161px;
  }
`;

export const DivBoxCounterSC = styled.div`
  display: grid;
  width: 100%;
  position: relative;
  justify-content: center;
`;

export const DivWrapImgTitleSC = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
    max-width: 1287px;
    @media (max-width: 1000px) {
        grid-template-columns: 100%;
    }
`;

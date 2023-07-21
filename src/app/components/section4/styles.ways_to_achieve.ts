"use client"
import {styled} from "styled-components";

export const DivContainerRowsSC = styled.div`
  width: 100%;
  max-width: 1240px;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 72px;
  justify-self: center;
  @media(max-width: 768px) {
    gap: 20px;
  }
`;

export const TitleWaysToAchieveSC = styled.div`
  color: #201E1C;
  text-align: center;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  @media(max-width: 768px) {
    margin-bottom: 22px;
  }
  @media(max-width: 480px) {
    font-size: 38px;
  }
  @media(max-width: 360px) {
    font-size: 32px;
  }
`;

export const DivWrapperContentSC = styled.div<{
    $isGap?: boolean;
}>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({$isGap}) => $isGap ? "50px" : "0px"};
  justify-items: normal;
  @media(max-width: 1000px) {
    gap: ${({$isGap}) => $isGap ? "30px" : "0px"};
    grid-template-columns: 100%;
    justify-items: center;
  }
`;
export const Image1SC = styled.div<{
    $path: string;
    alt: string;
}>`
  display: grid;
  width: 100%;
  max-width: 652px;
  height: 517px;
  background-image: url(${({ $path }) => $path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 1000px) {
     width: 60vw;
    height: 373px;
    justify-self: center;
  }
  @media (max-width: 768px) {
    height: 456px;
  }
  @media (max-width: 480px) {
    height: 349px;
  }
  @media (max-width: 360px) {
    height: 255px;
  }
`;
export const Image2SC = styled.div<{
    $path: string;
    alt: string;
}>`
  //border: 1px solid red;
  display: grid;
  width: 100%;
  max-width: 723px;
  height: 483px;
  background-image: url(${({$path}) => $path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 48px;
  @media (max-width: 1000px) {
    width: 60vw;
    height: 413px;
    justify-self: center;
  }
  @media (max-width: 900px) {
    padding-top: 0;
  }
  @media (max-width: 768px) {
    height: 367px;
  }
  @media (max-width: 480px) {
    height: 294px;
  }
  @media (max-width: 360px) {
    height: 214px;
  }
`;
export const DivBoxRowsTextSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, max-content);
  gap: 32px;
  @media (max-width: 1000px) {
    gap: 35px;
  }
  position: relative;
  // border: 1px solid red;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 80%;
    border-radius: 655px;
    background: #DDFFF5;
    filter: blur(225px);
    transform: rotate(0.177deg);
    z-index: -1;

  }
  @media(max-width: 1000px) {
    &::before {
      display: none;
    }
  }
`;
export const TextBoldSC = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.068px;
  @media(max-width: 1150px) {
    font-size: 30px;
  }
  @media(max-width: 360px) {
    font-size: 24px;
    letter-spacing: 0.048px;
  }

`;

export const TextNormalSC = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.056px;
  @media(max-width: 1150px) {
    font-size: 24px;
    letter-spacing: 0.048px;
  }
  @media(max-width: 360px) {
    font-size: 20px;
    letter-spacing: 0.04px;
  }
`;
export const DivBoxButtonSC = styled.div`
  display: grid;
  width: 100%;
  @media(max-width: 1000px){
    justify-content: center;
  }

`;

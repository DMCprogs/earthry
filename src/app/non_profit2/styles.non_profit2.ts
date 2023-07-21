"use client";
import styled from "styled-components";
import Image from "next/image";

export const DivRowsWrapSC = styled.div`
  width: 100%;
  max-width: 1235px;
  display: grid;
  grid-template-rows: repeat(6, max-content);
  gap: 96px;
  justify-self: center;
  margin-top: clamp(140px,20vw, 170px);
  @media (max-width: 1000px) {
    gap: 72px;
  }
  @media (max-width: 900px) {
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

export const TitleNonProfitSC = styled.div`
  width: 100%;
  max-width: 1030px;
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 63px */
  letter-spacing: 0.084px;
  display: grid;
  justify-self: center;
  @media (max-width: 480px) {
    font-size: 36px;
    letter-spacing: 0.072px;
  }
  @media (max-width: 360px) {
    font-size: 28px;
    letter-spacing: 0.056px;
  }
`;

export const DivColumnsContentSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 81px;
  @media (max-width: 1000px) {
    gap: 44px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 100%;
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

export const ImageEatEcologySC = styled.div<{
  $path: string;
  alt: string;
}>`
  display: grid;
  width: 100%;
  max-width: 527px;
  height: 527px;
  background-image: url(${({ $path }) => $path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  align-self: center;
  border-radius: 30px;
  @media (max-width: 1000px) {
    height: 393px;
  }
  @media (max-width: 900px) {
    justify-self: center;
  }
  @media (max-width: 768px) {
    height: 413px;
  }
  @media (max-width: 480px) {
    height: 440px;
  }
  @media (max-width: 360px) {
    height: 320px;
  }
`;

export const ImageWorldEcologySC = styled.div<{
  $path: string;
  alt: string;
}>`
  display: grid;
  justify-self: center;
  width: 100%;
  max-width: 527px;
  height: 518px;
  background-image: url(${({ $path }) => $path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 30px;
  align-self: center;
  @media (max-width: 1000px) {
    height: 386px;
  }
  @media (max-width: 768px) {
    height: 406px;
  }
  @media (max-width: 480px) {
    height: 433px;
  }
  @media (max-width: 360px) {
    height: 315px;
  }
`;

export const ImageDropEcologySC = styled.div<{
  $path: string;
  alt: string;
}>`
  display: grid;
  width: 100%;
  max-width: 545px;
  height: 734px;
  background-image: url(${({ $path }) => $path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: center;
  @media (max-width: 1000px) {
    height: 589px;
  }
  @media (max-width: 768px) {
    height: 476px;
  }
  @media (max-width: 480px) {
    height: 406px;
  }
  @media (max-width: 360px) {
    height: 294px;
  }
`;

export const DivBoldTextSC = styled.div<{
  positionText?: string;
}>`
  color: #000;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.2px;
  width: 100%;
  text-align: ${({ positionText }) => positionText};

  @media (max-width: 360px) {
    font-size: 28px;
  }
`;

export const DivNormalTextSC = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.2px;
  @media (max-width: 1000px) {
    font-size: 30px;
    letter-spacing: 0.06px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    letter-spacing: 0.048px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    letter-spacing: 0.04px;
  }
`;
export const DivRowsTextSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 25px;
  @media (max-width: 1000px) {
    gap: 20px;
  }
`;

"use client";
import styled from "styled-components";
import Image from "next/image";

export const DivRowsWrapSC = styled.div`
  width: 100%;
  max-width: 1240px;
  display: grid;
  grid-template-rows: repeat(10, max-content);
  gap: 96px;
  margin-top: clamp(77px,12vw, 120px);
  justify-self: center;
  //border:1px solid red;
  @media (max-width: 1000px) {
    gap: 72px;
  }
  @media (max-width: 900px) {
    gap: 40px;
  }
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const TitleNonProfitSC = styled.div`
  width: 100%;
  max-width: 1180px;
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
    font-size: 30px;
    letter-spacing: 0.06px;
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

export const ImageDocEcologySC = styled.div<{
  path: string;
  alt: string;
}>`
  display: grid;
  justify-self: center;
  width: 100%;
  max-width: 1078px;
  height: 611px;
  background-image: url(${({ path }) => path});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 30px;
  //border:1px solid red;
  @media (max-width: 1000px) {
    height: 544px;
  }
  @media (max-width: 768px) {
    height: 342px;
  }
  @media (max-width: 480px) {
    height: 249px;
  }
  @media (max-width: 360px) {
    height: 181px;
  }
`;

export const ImageEcologySC = styled.div<{
  path: string;
  alt: string;
}>`
  display: grid;
  width: 100%;
  max-width: 527px;
  height: 340px;
  background-image: url(${({ path }) => path});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
//  border:1px solid red;
  @media (max-width: 1000px) {
    height: 304px;
  }
  @media (max-width: 900px) {
    justify-self: center;
  }
  @media (max-width: 768px) {
    height: 338px;
  }
  @media (max-width: 480px) {
    height: 284px;
  }
  @media (max-width: 360px) {
    height: 207px;
  }
`;

export const ImagePeopleEcologySC = styled.div<{
  path: string;
  alt: string;
}>`
  display: grid;
  width: 100%;
  max-width: 900px;
  height: 812px;
  background-image: url(${({ path }) => path});
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: center;
 // border:1px solid red;
  @media (max-width: 1000px) {
    height: 453px;
  }
  @media (max-width: 480px) {
    height: 337px;
  }
  @media (max-width: 360px) {
    height: 259px;
  }
`;

export const DivBoldTextSC = styled.div<{
  $positionText?: string;
}>`
  color: #000;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 55px; /* 152.778% */
  letter-spacing: 0.2px;
  width: 100%;
  text-align: ${({ $positionText }) => $positionText};
  @media (max-width: 1000px) {
    font-size: 30px;
    line-height: 47px; /* 156.667% */
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 45px; /* 187.5% */
  }
  @media (max-width: 360px) {
    font-size: 20px;
    line-height: 37px; /* 187.5% */
  }
`;

export const DivNormalTextSC = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px;
  letter-spacing: 0.2px;
  @media (max-width: 1000px) {
    font-size: 30px;
    line-height: 47px;
    letter-spacing: 0.06px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 45px;
    letter-spacing: 0.048px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 37px;
  }
`;

export const DivBoxButtonNPSC = styled.div`
  display: grid;
  justify-content: center;
`;
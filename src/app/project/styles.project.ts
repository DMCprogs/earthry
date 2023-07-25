"use client"
import {styled} from "styled-components";
import { StaticImageData } from "next/image";
type Propsi = {
  $images: StaticImageData;
}

export const DivContainerBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;
export const BoxPaddingSC = styled.div`
  padding: 120px 20px 0 20px;
  max-width: 1280px;
  display: grid;
  justify-self: center;
  @media(max-width: 1000px) {
    padding: 100px 20px 0 20px;
  }
  @media(max-width: 480px) {
    padding: 70px 20px 0 20px;
  }
  @media(max-width: 360px) {
    padding: 81px 20px 0 20px;
  }
`;
export const DivBoxProjectSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(11, max-content);
  gap: 40px;
  @media(max-width: 768px) {
    gap: 20px;
  }
`;
export const DivBoxTitleSC = styled.div<{
    $positionText?: string;
}>`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 10px;
  @media(max-width: 1180px) {
  justify-items: ${({ $positionText }) => $positionText};
}
  
  @media(max-width: 768px) {
    gap: 20px;
  }

`;
export const DivTitleBoldSC = styled.div`
  color: #201E1C;
  font-family: Montserrat,serif;
  font-size: 55px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media(max-width: 480px) {
    font-size: 36px;
  }
`;

export const DivTextNormalSC = styled.div<{
    $positionText?: string;
}>`
  color: #5C5A58;
  font-family: Montserrat,serif;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 1029px;
  @media(max-width: 1180px) {
   text-align:  ${({ $positionText }) => $positionText};
  }
  @media(max-width: 360px) {
    font-size: 24px;
  }
`;
export const DivBoxButtonsSC = styled.div`
display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: 100%;
  gap: 20px;
  @media(max-width: 620px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, max-content);
  }
`;

export const DivBoxIconsSC = styled.div`
display: grid;
  grid-template-columns: repeat(5, max-content);
  gap: 40px;
  @media(max-width: 400px) {
    gap: 32px;
  }
`;


type Props = {
    img?: any;
};
export const CarouselImageSC = styled.div<Props>`
  background-image: url(${(props) => props.img.src});
  border-radius: 30px;
  display: grid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  justify-self: center;
`;

export const CarouselItemContainerSC = styled.div`
  display: grid;
  border-radius: 18px;
  transition: 0.1s;
  max-width: 397px;
  max-height: 397px;
`;

export const DivAverageBoldTextSC = styled.div<{
    $positionText?: string;
}>`
  color: #201E1C;
  text-align: ${({ $positionText }) => $positionText};
  font-family: Montserrat,serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media(max-width: 440px) {
    font-size: 32px;
  }
`;
export const DivBoxRowsItemSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
`;
export const DivBoxColumnsBoldSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 16px;
  align-items: end;
`;
export const DivSmallNormalTextSC = styled.div<{
    $positionText?: string;
}>`
  color: #646464;
  text-align: ${({ $positionText }) => $positionText};
  font-family: Montserrat,serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  max-width: 608px;
  display: grid;
  justify-self: ${({ $positionText }) => $positionText};
  @media(max-width: 440px) {
    font-size: 22px;
  }
`;
export const DivUltraSmallNormalTextSC = styled.div<{
    $positionText?: string;
}>`
  color: #646464;
  text-align: ${({ $positionText }) => $positionText};
  font-family: Montserrat,serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  max-width: 608px;
  display: grid;
  justify-self: ${({ $positionText }) => $positionText};
`;

export const DivSmallBoldTextSC = styled.div`
  color: #201E1C;
  font-family: Montserrat,serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
  @media(max-width: 440px) {
    font-size: 20px;
  }
`;
export const DivBoxColumnsItemsSC = styled.div`
display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: 100%;
  gap: 50px;
  margin: 20px 0;
  @media(max-width: 1180px) {
    grid-template-columns: repeat(2, max-content);
    grid-template-rows:  repeat(2, max-content);
    row-gap: 25px;
    column-gap: 80px;
    justify-self: center;
  }
  @media(max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows:  repeat(4, max-content);
    row-gap: 15px;
    column-gap: 0;
    justify-self: start;
    margin: 0 0;
  }
`;

export const DivBoxBigElementsSC = styled.div`
display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 115px;
  @media(max-width: 1330px) {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    gap: 0;
  }
  @media(max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, max-content);
  justify-items: center;
    gap: 40px;
  }
  @media(max-width: 480px) {
    gap: 20px;
  }
`;

export const DivBoxCalcSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 110px;
  @media(max-width: 1330px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, max-content);
    gap: 40px;
  }
  @media(max-width: 768px) {
    justify-items: center;
  }
`;
export const DivBoxOptionSC = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  gap: 19px;
  @media(max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(5, max-content);
    justify-items: center;
  }
`;
export const DivBoxConclusionSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 20px;
  max-width: 318px;
`;
export const DivBoxColumnCalcColcSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 12px;
  align-items: center;
`;

export const DivInputConclusionSC = styled.div`
  display: grid;
  color: #000;
  font-family: Montserrat,serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 12px;
  border: 2px solid #A6A6A6;
  background: #FFF;
  width: 105px;
  height: 74px;
  padding: 23px 80% 23px 20%;
`;

export const InputTokensSC = styled.input<{ error?: boolean }>`
  border-radius: 20px;
  width: 235px;
  height: 74px;
  padding: 25px;
  border: ${props => (props.error ? '3px solid red' : '3px solid #195946')};
  background: #FFF;
  outline: none;
    color: #201E1C;
    font-family: Montserrat,serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 120% */
    letter-spacing: 0.2px;
  @media(max-width: 880px) {
    height: 62px;
    width: 200px;
  }
`;
export const DivBoxBoxOptionSC = styled.div`
  display: grid;
grid-template-rows: repeat(2,max-content);
  row-gap: 30px;
  @media(max-width: 768px) {
    row-gap: 66px;
  }

`;

export const DivContainerGrafic = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 20px;
  justify-items: center;
`;
export const DivTexStacingSC = styled.div`
 color: #1A1A1B;
font-family: Montserrat;
font-size: clamp(20px, 2.5vw, 24px);
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: center;
`;

export const DivHeightfixSC = styled.div`
  display: grid;
  height: fit-content;
  // border: 1px solid blue;
  width: 90%;
  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    width: 85%;
  }
`;
export const DivNumberBoxSC = styled.div`
  display: grid;
  font-weight: 600;
  height: 50px;
  width: 90px;
  border-radius: 10px;
  justify-self: center;
  justify-content: center;
  align-content: center;
  background:  #04896C;
 grid-template-columns: max-content max-content;
 gap: 5px;
  color: white;
  justify-items: center;
  align-items: center;
`;
export const DivSliderSC = styled.div`
  display: grid;
  height: fit-content;
  margin-top: 20px;
  // border: 1px solid blue;
`;
export const DivMarksSC = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: clamp(15px, 2vw, 24px);
  line-height: 29px;

  color: #000000;
`;
export const DivContainerPlantSC = styled.div`
display: grid;
justify-content: center;
  width: 100%;
  height: 100%;
  grid-template-columns: max-content max-content max-content max-content;
  gap: 20px;
`;
export const DivPlantsImgSC = styled.div<Propsi>`
background-image: url(${props => props.$images.src});
background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  min-width: 100px;
  min-height: 100px;
  background-position: bottom;
  @media (max-width: 520px) {
    min-width: 80px;
  min-height: 80px;
  }

`;
export const DivContainerGrafic2 = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
 
  justify-items: center;
  justify-content: space-between;
  @media(max-width:650px){
    grid-template-columns: max-content ;
    gap: 30px;
  }
`;
export const DivContainerInput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
flex-direction: column;
  gap: 20px;
  justify-items: center;
  max-width: 288px;
  max-height: 133px;
  justify-content: space-between;
  @media (max-width: 400px) {
    margin-left: 15px;
  }
`;
export const InputPercent = styled.div`
display: grid;
justify-content: center;
align-items: center;
  border-radius: 8px;
border: 2px solid #A6A6A6;
background: #FFF;
width: 90px;
height: 74px;
flex-shrink: 0;
color: #000;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;
export const DivText = styled.div`
 color: #000;
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
max-width: 40px;
margin-top: 10px;

`;
export const DivPlus = styled.div`
 border-radius: 8px;
border: 1.5px solid #A6A6A6;
background: #FFF;
width: 30px;
height: 30px;
flex-shrink: 0;
cursor: pointer;
display: grid;
    justify-items: center;
    align-items: center;

`;
export const DiMunus = styled.div`
 border-radius: 8px;
border: 1.5px solid #A6A6A6;
background: #FFF;
width: 30px;
height: 30px;
flex-shrink: 0;
cursor: pointer;
display: grid;
    justify-items: center;
    align-items: center;
`;
export const DivContainer = styled.div`
display: grid;
grid-template-columns: max-content max-content;
gap: 12px;
align-items: center;

`;

export const DivNumbers = styled.div`
display: grid;
width: 40px;
justify-content: right;


`;


export const DivBoxColumnCalcSC = styled.div`
  display: grid;
grid-template-columns: repeat(2,max-content);
  gap: 110px;
  @media(max-width: 1420px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, max-content);
    gap: 0px;
  }
`;

export const DivBoxCarouseItemSC = styled.div`
padding: 0 2px;
  @media(max-width: 1248px) {
    padding: 0 12.5px;
  }

`;

export const DivBoxLeftSc = styled.div`
display: grid;
  grid-template-rows: repeat(4, max-content);
  gap: 50px

`;
export const DivBoxRightSC = styled.div`
display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 26px

`;
export const DivBoxDisplayNSC = styled.div`
display: grid;
@media(max-width: 1430px) {
  display: none;
}

`;
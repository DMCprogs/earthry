"use client"
import {styled} from "styled-components";
import { StaticImageData } from "next/image";
type Propsi = {
  $images: StaticImageData;
}
export const DivBoxProjectSC = styled.div`
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-rows: repeat(11, max-content);
  gap: 40px;
  justify-self: center;
  margin-top: 140px;
  @media(max-width: 768px) {
    gap: 20px;
  }
`;
export const DivBoxTitleSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  gap: 10px;
`;
export const DivTitleBoldSC = styled.div`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 55px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DivTextNormalSC = styled.div`
  color: #5C5A58;
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 1029px;
`;
export const DivBoxButtonsSC = styled.div`
display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 20px;
`;

export const DivBoxIconsSC = styled.div`
display: grid;
  grid-template-columns: repeat(5, max-content);
  gap: 40px;
`;
type Props = {
    img?: any;
};
export const CarouselImageSC = styled.div<Props>`
  background-image: url(${(props) => props.img.src});
  border-radius: 18px;
  display: grid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 397px;
`;

export const CarouselItemContainerSC = styled.div`
  display: grid;
  border-radius: 18px;
  transition: 0.1s;
  width: 100%;
  height: 100%;
`;

export const DivAverageBoldTextSC = styled.div<{
    $positionText?: string;
}>`
  color: #201E1C;
  text-align: ${({ $positionText }) => $positionText};
  font-family: Montserrat;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  max-width: 608px;
  display: grid;
  justify-self: ${({ $positionText }) => $positionText};
`;

export const DivSmallBoldTextSC = styled.div`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
`;
export const DivBoxColumnsItemsSC = styled.div`
display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 50px;
`;

export const DivBoxBigElementsSC = styled.div`
display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 115px;
`;

export const DivBoxCalcSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 118px;
`;
export const DivBoxOptionSC = styled.div`
  display: grid;
  grid-template-columns: repeat(5, max-content);
  gap: 19px;
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
  font-family: Montserrat;
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

export const InputTokensSC = styled.input`
  border-radius: 20px;
  width: 235px;
  height: 74px;
  padding: 25px;
  border: 3px solid #195946;
  background: #FFF;
  outline: none;
    color: #201E1C;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 120% */
    letter-spacing: 0.2px;
`;

export const DivGraphSC = styled.div`
  display: grid;
  justify-self: right;
  align-self: center;
  width: 500px;
  height: 300px;
  // border: 1px solid red;
  @media (max-width: 1100px) {
    justify-self: center;
    grid-row: 1;
  }
  @media (max-width: 700px) {
    width: 70vw;
    height: 50vw;
  }
  //border: 1px solid blue;
`;
export const DivBoxBoxOptionSC = styled.div`
  display: grid;
grid-template-rows: repeat(2,max-content);
  row-gap: 30px;
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
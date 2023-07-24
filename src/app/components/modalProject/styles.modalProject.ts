"use client"
import { StaticImageData } from "next/image";
import {styled} from "styled-components";
type Props = {
    $images: StaticImageData;
  }
  export const DivModalContainerSC = styled.div`
padding: 50px 0;
  display: grid;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-content: center;
  max-width: 966px;
 min-height: 1054px;
 border-radius: 30px;
background: #FFF;
z-index: 99999;
grid-auto-rows: max-content;
justify-items: center;
gap: 80px;
@media(max-width: 630px){
  padding: 50px 20px;
}
`;
export const DivNumbers = styled.div`
display: grid;
width: 40px;
justify-content: right;


`;
export const Body = styled.body`
  background: none;
backdrop-filter: blur(26px);

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
font-size: clamp(10px, 2.5vw, 24px);
font-style: normal;
font-weight: 400;
line-height: normal;
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
export const DivPlantsImgSC = styled.div<Props>`
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
gap: 8px;
align-items: center;

`;
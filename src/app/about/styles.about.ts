"use client";
import Image from "next/image";
import styled from "styled-components";
import { StaticImageData } from 'next/image';

type Props = {
  img: StaticImageData;
}

export const DivH1SC = styled.div`
margin-top: 100px;
margin-bottom: 50px;
  width: 100%;
  display: grid;
  height: 100%;
  color: #000;
text-align: center;
font-family: Montserrat;
font-size: clamp(38px, 2.5vw, 48px); 
font-style: normal;
font-weight: 600;
line-height: normal;
`;
export const ContainerSC = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1538.931px;
    background: #A5FFE4;
    filter: blur(225px);
    z-index: -1;
    
  }
`;

export const DivDetailTextSC = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  font-size: clamp(20px, 2.5vw, 40px); 
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const DivContainerTeamSC = styled.div`
 display: grid;
 width: 100%;
 height: 100%;
 grid-template-rows: max-content max-content;

`;
export const DivTeamSC = styled.div`
 display: grid;
 width: 100%;
 height: 100%;
 grid-template-columns: max-content max-content;
 justify-content: center;
 gap: 20px;
 @media (min-width: 720px){  grid-template-columns: max-content max-content max-content;}
`;
export const DivContainerCardSC = styled.div`
 display: grid;
 width: 100%;
 height: 100%;
 grid-template-rows:max-content max-content max-content;
 min-height: 252px;
 min-width: 150px;
 justify-content: center;
 justify-items: center;
 @media (min-width: 720px){  min-width: 229px;
min-height: 384px;
}
@media (min-width: 1280px){  min-width: 308px;
min-height: 505px;

}
@media (min-width: 1920px){  min-width: 398px;
min-height: 652px;

}
`;
export const DivDescriptionCadSC = styled.div`
 display: grid;
 width: 100%;
 height: 100%;
 grid-template-rows: max-content max-content;
 
`;
export const DivNameSC = styled.div`
 
 width: 100%;
 height: 100%;
 color: #201E1C;
text-align: center;
font-family: Montserrat;
font-size: clamp(18px, 2.5vw, 28px); 
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.2px;
`;
export const DivPostSC = styled.div`
 width: 100%;
 height: 100%;
 color: #201E1C;
text-align: center;
font-family: Montserrat;
font-size: clamp(18px, 2.5vw, 26px);
font-style: normal;
font-weight: 300;
line-height: normal;
letter-spacing: 0.2px;
 
`;
export const DivLinkidSC  = styled.div`
display: grid;
 width: 100%;
 height: 100%;
 justify-items: center;
 margin: 10px 0;
 
`;
export const DivJoinSC  = styled.div`
display: grid;
 width: 100%;
 height: 100%;
 justify-items: center;
 margin: 10px 0;
 grid-template-rows: max-content max-content max-content;
 
 
`;
export const ButtonLinkenInSC  = styled.button`
display: inline-flex;
padding: 30px 50px;
align-items: center;
gap: 10px;
background-color: white;
cursor: pointer;
display: grid;
 width: 100%;
 height: 100%;
 justify-items: center;
 margin: 10px 0;
 border-radius: 35px 0px;
border: 2px solid #000;

max-height: 80px;

color: #201E1C;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 120% */
letter-spacing: 0.2px;
`;
export const ButtonJoinSC  = styled.button`
cursor: pointer;
display: grid;
 width: 100%;
 height: 100%;
 justify-items: center;
 margin: 10px 0;
border: 2px solid #195946;

max-height: 84px;
 display: inline-flex;
padding: 30px 50px;
align-items: center;
gap: 10px;
border-radius: 35px 0px;
background: #195946;
color: white;
grid-template-columns: max-content max-content;
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 120% */
letter-spacing: 0.2px;
`;


export const DivImageSC = styled.div<Props>`
  display: grid;
  width: 100%;
  height: 100%;
  justify-items: center;
  border-radius: 40px 0px;
  background: url(${props => props.img.src}), lightgray -72.713px 0px / 176.592% 103.067% no-repeat;
  min-width: 150px;
  min-height: 175.925px;
  background-size:cover;
  @media (min-width: 720px){ 
    min-width: 229px;
min-height: 268.075px;

}
@media (min-width: 1280px){  min-width: 308px;
min-height: 351.151px;

}
@media (min-width: 1920px){  min-width: 398px;
min-height: 455.17px;

}

`;



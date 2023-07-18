"use client"
import {styled} from "styled-components";
export const DivContainerSectionSC = styled.div`
  display: grid;
  grid-template-rows:  max-content max-content max-content;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
export const DivContainerBlogSC = styled.div`
  display: grid;
    justify-self: center;
    max-width: 1400px;
    width: 90vw;
    justify-items: center;
    gap: 20px;
    margin-top: 100px;
  gap: 50px;
 
`;
export const DivTexLatestSC = styled.div`
  color: #000;
text-align: center;
font-family: Montserrat;
font-size: 42px;
font-style: normal;
font-weight: 600;
line-height: normal;

 
`;
export const DivGridSC = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
gap: 20px;
  
@media(min-width: 600px){
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
@media(min-width: 1000px){
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
}
 
`;
export const ButtonReadMoreSC = styled.button`
 display: inline-flex;
padding: 25px 40px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 30px;
background: #195946;
color: var(--white, #FFF);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 24px; /* 120% */
letter-spacing: 0.2px;
 
`;
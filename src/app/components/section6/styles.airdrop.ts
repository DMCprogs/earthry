"use client"
import {styled} from "styled-components";
export const DivContainerAirdrop = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  max-width: 1400px;
  padding: 0 50px;
  grid-template-rows: max-content max-content max-content;
  gap: 50px;

  @media(max-width:780px){
    justify-items: center;
}
@media(max-width:768px){
  padding: 0;
}
`;
export const DivTitleAirdrop = styled.div`
  width: 100%;
  height: 100%;
  color: #201E1C;
font-family: Montserrat;
font-size: 48px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.2px;
display: grid;
justify-items: center;
`;
export const DivInfoAirdrop = styled.div`
  width: 100%;
  height: 100%;
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-items: center;
gap: 150px;
padding: 0 50px;
@media(max-width:960px){
    grid-template-columns: 1fr ;
    text-align: center;
}
`;
export const DivTextAirdrop = styled.div`
 color: #000;
font-family: Montserrat;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: 135%; /* 37.8px */
letter-spacing: 0.056px;
width: 100%;
height: 100%;
display: grid;
align-items: center;
justify-items: center;
display: grid;
grid-template-rows: max-content max-content;
justify-items: left;
gap: 50px;
@media(max-width:960px){
  justify-items: center;
}
`;
export const DivContainerGif = styled.div<{
    $display?: string;
}>`
  width: 100%;
  height: 100%;
  @media(max-width: 1330px){
    display: ${({$display}) => $display};
  }
@media(max-width:960px){
    display: none;
}
`;
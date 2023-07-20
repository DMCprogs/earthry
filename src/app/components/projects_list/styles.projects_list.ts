import {styled} from "styled-components";

export const DivWrapperListProjectsSC = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: max-content;
  gap: 71px;
`

export const DivWrapperItemProjectsSC = styled.div`
  height: 539px;
  width: 100%;
  display: grid;
  @media (max-width: 479px) {
    gap: 20px;
    grid-template-rows: max-content 63px;
    grid-template-columns: 100%;
  }
  @media (min-width: 480px) and  (max-width: 999px) {
    gap: 20px;
    grid-template-rows: 210px 63px;
    grid-template-columns: 100%;
    height: 309px;
  }
  @media (min-width: 1000px) {
    gap: 20px;
    grid-template-rows: 100%;
    grid-template-columns:2.5fr 1fr;
   
    justify-content: center;
    align-items: center;
    height: 245px;
  }
`;

export const DivWrapperImageSC = styled.div<{
    $img:string
}>`
  border-radius: 18px;
  background: url(${({$img}) => ($img)}) no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  
`

export const DivWrapperTextSC = styled.div`
  display: grid;
  @media (max-width: 999px) {
    gap: 20px;
    grid-template-rows: 100%;
    grid-template-columns: max-content auto;
  }
  @media (min-width: 1000px) and (max-width: 1900px){
    gap: 20px;
    grid-template-rows: max-content max-content;
    grid-template-columns: 100%;
  }
  @media (min-width: 1900px){
    gap: 20px;
    grid-template-rows: 100%;
    grid-template-columns: max-content max-content;
  }
`

export const SpanDefaultTextSC = styled.span`
  color: #464646;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 1900px) {
    gap: 20px;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
    height: max-content;
  }
`

export const SpanBolderTextSC = styled.span<{
    $fSize: number
}>`
  color: #201E1C;
  font-family: Montserrat;
  font-size: ${({$fSize}) => ($fSize)}px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  height: max-content;
  @media (min-width: 1000px) {
    color: #201E1C;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    height: max-content;
  }
  
`

export const DivItemTextSC = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  @media (max-width: 479px) {
    //gap: 12px;
    grid-template-rows: 1fr 2fr;
    grid-template-columns: 100%;
  }
  @media (min-width: 479px) and (max-width: 999px) {
    grid-template-rows: max-content max-content;
    grid-template-columns: 100%;
    height: min-content;
    gap: 12px;
  }
  @media (min-width: 1000px) and (max-width: 1900px) {
    align-items: center;
    gap: 12px;
  }
  @media (min-width: 1900px) {
    height: min-content;
    width: 100%;
    grid-template-rows: min-content min-content;
    grid-template-columns: 100%;
    gap: 10px;
  }
`

export const SpanTextButtonSC = styled.span`
  color: var(--white, #FFF);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 0.2px;
  @media (max-width: 999px) {
    color: var(--white, #FFF);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 120% */
    letter-spacing: 0.2px;
  }
  @media (min-width: 1000px) {
    color: var(--white, #FFF);
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 120% */
    letter-spacing: 0.2px;
  }
`

export const DivWrapperTextAndImageSC = styled.div`
  display: grid;
  @media (max-width: 479px) {
    gap: 20px;
    grid-template-rows: 320px 116px;
    grid-template-columns: 100%;
  }
  @media (min-width: 480px) and (max-width: 999px) {
    gap: 20px;
    grid-template-rows: 100%;
    grid-template-columns: 245px auto;
    height: 100%;
  }
  @media (min-width: 1000px) {
    gap: 85px;
    grid-template-rows: 100%;
    grid-template-columns: 245px auto;
    height: 100%;
  }
`

export const DivWrapperText2SC = styled.div`
  display: grid;
  @media (max-width: 479px) {
    gap: 20px;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
  }
  @media (min-width: 480px) and  (max-width: 999px) {
    grid-template-rows: max-content max-content;
    grid-template-columns: 100%;
    gap: 20px;
  
  }
  @media (min-width: 1000px) and (max-width: 1900px) {
    align-content: center;
    gap: 23px;
  }
  @media (min-width: 1900px) {
    gap: 20px;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
  }
`
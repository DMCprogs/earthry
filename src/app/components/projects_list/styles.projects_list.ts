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
    grid-template-rows: 320px 116px 63px;
    grid-template-columns: 100%;
  }
`;

export const DivWrapperImageSC = styled.div<{
    $img:string
}>`
  border-radius: 18px;
  background: url(${({$img}) => ($img)}) no-repeat;
  background-position: center;
  background-size: cover;
`

export const DivWrapperTextSC = styled.div`
  display: grid;
  @media (max-width: 479px) {
    gap: 20px;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
  }
`

export const SpanDefaultTextSC = styled.span`
  color: #464646;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
`

export const SpanTextButtonSC = styled.span`
  color: var(--white, #FFF);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: 0.2px;
`
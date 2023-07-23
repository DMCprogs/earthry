"use client"
import {styled} from "styled-components";

export const DivBoxProjectSC = styled.div`
  width: 100%;
  padding: 20px;
  max-width: max-content;
  display: grid;
  grid-template-rows: repeat(11, max-content);
  gap: 40px;
  justify-self: center;
  margin-top: 140px;
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
  width: 397px;
  height: 397px;
  @media(max-width: 1430px) {
    width: 307px;
    height: 307px;
    justify-self: center;
  }
  @media(max-width: 1000px) {
    width: 229px;
    height: 229px;
  }
  @media(max-width: 480px) {
    width: 150px;
    height: 150px;
  }
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
  font-family: Montserrat,serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media(max-width: 420px) {
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
  @media(max-width: 420px) {
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
  @media(max-width: 420px) {
    font-size: 20px;
  }
`;
export const DivBoxColumnsItemsSC = styled.div`
display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: 100%;
  gap: 50px;
  @media(max-width: 1180px) {
    grid-template-columns: repeat(2, max-content);
    grid-template-rows:  repeat(2, max-content);
    row-gap: 25px;
    column-gap: 80px;
    justify-self: center;
  }
  @media(max-width: 1180px) {
    grid-template-columns: 100%;
    grid-template-rows:  repeat(4, max-content);
    row-gap: 15px;
    column-gap: 0;
    justify-self: start;
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
  gap: 118px;
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

export const InputTokensSC = styled.input`
  border-radius: 20px;
  width: 235px;
  height: 74px;
  padding: 25px;
  border: 3px solid #195946;
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

export const DivBoxColumnCalcSC = styled.div`
  display: grid;
grid-template-rows: repeat(2,max-content);
  row-gap: 50px;
  @media(max-width: 768px) {
justify-items: center;
    row-gap: 39px;
  }
`;

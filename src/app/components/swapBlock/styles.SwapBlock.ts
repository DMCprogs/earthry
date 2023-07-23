import { styled } from "styled-components";

export const DivSwapBlockSC = styled.div`
  /* grid-area: a; */
  position: relative;
  height: 422px;
  max-width: 320px;
  padding: 40px 14px;
  border-radius: 20px;
  background-color: #fff;
  margin: 0 auto;
  border: 2px solid #a6a6a6;
`;

export const H3SwapBlockHeaderSC = styled.h3`
  font-family: "Montserrat";
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #000;
`;

export const DivSwapWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 24px 0;
  position: relative;
`;

export const DivSwapPaySC = styled.div`
  border: 2px solid #a6a6a6;
  height: 97px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: 197px 93px;
  align-items: center;
`;

export const DivSwapTextWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-right: 2px solid #a6a6a6;
  padding: 20px 0 20px 20px;
  height: 100%;
`;

export const PSwapBlockTextSC = styled.p`
  color: #111;
  font-family: "Montserrat";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 145.02%;
`;

export const PSwapBlockSumSC = styled.p`
  color: #969696;
  font-family: "Montserrat";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const DivSwapImgWrapperSC = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 24px 19px 22px;
`;

export const DivForImgSC = styled.div<{
    path: string;
  }>`
    width: 26px;
    height: 38px;
    background: url(${({ path }) => path});
    background-color: initial;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
  `;

export const PCaptionForImgSC = styled.p`
color: #111;
font-family: "Montserrat";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 145.02%;
text-align: center;
`;

export const ButtonExchangeSC = styled.button<{
    path: string;
  }>`
    width: 40px;
    height: 40px;
    position: absolute;
    left: calc(50% - 20px);
    top: calc(50% - 20px);
    outline: 2px solid #fff;
    border: 2px solid #A6A6A6;
    border-radius: 8px;
    cursor: pointer;
    background: url(${({ path }) => path});
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
`;
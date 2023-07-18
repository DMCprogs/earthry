import styled from "styled-components";

export const DivConvertDiagramWrapperSC = styled.div`
    display: grid;
    max-width: 320px;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const DivConvertDiagramTokensSC = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const DivRoundConvertDiagramBigSC = styled.div`
    width: 158px;
    height: 158px;
    border-radius: 50%;
    background-color: #195946;;
`;

export const DivRoundConvertDiagramSmallSC = styled.div`
    width: 74px;
    height: 74px;
    border-radius: 50%;
    background-color: #195946;
    align-self: center;
    margin-left: 40px;
    margin-top: 45px;
`;

export const DivConvertDiagramLeftTextContainerSC = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 65px;
`;

export const PConvertDiagramTextSC = styled.p`
    color: #000;
    font-family: "Montserrat";
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 135%;
    letter-spacing: 0.056px;
`;

export const PConvertDiagramCaptionSC = styled.p`
display: block;
margin-top: -5px;
color: #000;
font-family: "Montserrat";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 135%;
letter-spacing: 0.03px;
`;

export const DivConvertDiagramLeftLogoSC = styled.div<{
    path: string;
  }>`
      width: 33px;
  height: 50px;
  background-image: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 165px;
  left: 22px;
`;

export const DivConvertDiagramRightLogoSC = styled.div<{
    path: string;
  }>`
      width: 33px;
  height: 50px;
  background-image: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 123px;
  left: 40px;
`;

export const DivConvertDiagramChainsSC = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const DivConvertDiagramRightTextContainerSC = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    margin-top: 60px;
`;

export const DivConvertDiagramArrowSC = styled.div<{
    path: string;
  }>`
    width: 22px;
  height: 23px;
  background-image: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 72px;
  left: 182px;
`;
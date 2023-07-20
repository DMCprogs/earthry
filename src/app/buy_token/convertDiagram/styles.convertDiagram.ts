import styled from "styled-components";

export const DivConvertDiagramWrapperSC = styled.div`
    display: grid;
    max-width: 320px;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;

    @media(min-width: 480px){
    max-width: 434px;
}
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
    background-color: #195946;

    @media(min-width: 480px){
    width: 217px;
    height: 217px;
}
`;

export const DivRoundConvertDiagramSmallSC = styled.div`
    width: 74px;
    height: 74px;
    border-radius: 50%;
    background-color: #195946;
    align-self: center;
    margin-left: 40px;
    margin-top: 45px;

    @media(min-width: 480px){
    width: 101px;
    height: 101px;
    margin-left: 55px;
    margin-top: 65px;
}
`;

export const DivConvertDiagramLeftTextContainerSC = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 65px;

    @media(min-width: 480px){
    margin-left: 85px;
    margin-top: 18px;
}
`;

export const PConvertDiagramTextSC = styled.p`
    color: #000;
    font-family: "Montserrat";
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 135%;
    letter-spacing: 0.056px;

    @media(min-width: 480px){
    font-size: 34px;
    letter-spacing: 0.068px;
    }
`;

export const PConvertDiagramCaptionSC = styled.span`
display: block;
margin-top: -5px;
color: #000;
font-family: "Montserrat";
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 135%;
letter-spacing: 0.03px;

@media(min-width: 480px){
    font-size: 18px;
    letter-spacing: 0.036px;
}
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

  @media(min-width: 480px){
    width: 45px;
    height: 68px;
    top: 232px;
  left: 30px;
}
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

  @media(min-width: 480px){
    width: 45px;
    height: 68px;
    top: 176px;
  left: 55px;
}
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

    @media(min-width: 480px){
    margin-left: 110px;
    margin-top: 25px;
}
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

  @media(min-width: 480px){
    width: 35px;
    height: 33px ;
    top: 103px;
  left: 245px;
}
`;
import styled from "styled-components";

export const DivEstimatedPriceWrapperSC = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: 144px;
  align-items: center;
  column-gap: 65px;
  
  @media(max-width: 765px){
    grid-template-columns: max-content;
    grid-template-rows: max-content max-content;
    grid-template-rows: 144px;
    margin-top: 30px;
  }
`;

export const H2EstimatedPriceTitileSC = styled.h2`
  color: #000;
  font-family: "Montserrat";
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const DivEstimatedPriceContainerSC = styled.div`
  width: 544px;
  height: 206px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  padding: 22px;
  background-color: #fff;
  border-radius: 20px;

  @media(max-width: 1000px){
      width: 560px;
    }

  @media(max-width: 768px){
        width: 553px;
    }

  @media(max-width: 765px){
    width: 430px;
    }

  @media(max-width: 479px){
    width: 324px;
    }
`;

export const DivEstimatedPriceTitleContainerSC = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 7px;
`;

export const PEstimatedPriceContainerTitleSC = styled.p`
  color: #6E6E6E;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.2px;
`;

export const DivEstimatedPriceLogoSC = styled.div<{
    path: string;
  }>`
  width: 24px;
  height: 36px;
  background-image: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SpanEstimatedPriceContainerTitleBoldSC = styled.span`
  color: #3C3C3C;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0.2px;
`;


export const PEthValueSC = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0.2px;
`;

export const PDollarValueSC = styled.p`
  color: #6E6E6E;
  font-family: Montserrat;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.2px;
`;
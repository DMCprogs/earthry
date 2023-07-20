import styled from "styled-components";

export const DivEstimatedPriceWrapperSC = styled.div`
margin: 70px auto 0;
    display: flex;
    flex-direction: column;

    @media(min-width: 480px){
  margin-top: 96px;
}
`;

export const H2EstimatedPriceTitileSC = styled.h2`
    color: #000;
font-family: "Montserrat";
font-size: 42px;
font-style: normal;
font-weight: 600;
line-height: 50px; /* 119.048% */
letter-spacing: 0.2px;
text-align: center;
`;

export const DivEstimatedPriceContainerSC = styled.div`
margin: 40px auto 70px;
    width: 320px;
    height: 206px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    padding: 22px;
    background-color: #fff;
    border-radius: 20px;

    @media(min-width: 480px){
        width: 440px;
        padding-top: 19px;
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
margin-top: 8px;
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
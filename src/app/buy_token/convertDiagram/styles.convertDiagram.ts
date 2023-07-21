import styled from "styled-components";

export const DivConvertDiagramWrapperSC = styled.div`
    display: grid;
    max-width: 564px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content 1fr;
    position: relative;
    justify-self: center;
    column-gap: 30px;
    /* margin-top: 30px; */
    /* margin-bottom: 30px; */

    /* @media(min-width: 480px){
    max-width: 434px;
    margin-bottom: 60px;
} */

@media(max-width: 1050px){
      width: 525px;
      /* width: 100%; */
  }

  @media(max-width: 580px){
      max-width: 408px;
      /* width: 100%; */
  }

  @media(max-width: 479px){
      max-width: 300px;
      /* width: 100%; */
  }

`;

export const DivConvertDiagramTokensSC = styled.div`
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: 300px max-content;

    /* flex-direction: column; */
    position: relative;

    @media(max-width: 580px){
      grid-template-rows: 217px max-content;
}

@media(max-width: 479px){
      grid-template-rows: 157px max-content;
}
`;

export const DivRoundConvertDiagramBigSC = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #195946;

    @media(max-width: 1050px){
      width: 279px;
    height: 279px;
  }

  @media(max-width: 580px){
      width: 217px;
    height: 217px;
  }

  @media(max-width: 479px){
      width: 157px;
    height: 157px;
  }

`;

export const DivRoundConvertDiagramSmallSC = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background-color: #195946;
    /* align-self: center; */
    /* margin-left: 40px; */
    margin: 0 auto;
    margin-top: 75px;

    @media(max-width: 1050px){
      width: 130px;
    height: 130px;
  }

  @media(max-width: 580px){
      width: 101px;
    height: 101px;
  }

  @media(max-width: 479px){
      width: 73px;
    height: 73px;
    margin-top: 50px;
  }
`;

export const DivConvertDiagramLeftTextContainerSC = styled.div`
    display: grid;
    grid-template-columns: max-content auto;
    column-gap: 16px;
    justify-content: center;
    /* flex-direction: column; */
    /* margin-left: 65px; */

    /* @media(min-width: 480px){
    margin-left: 85px;
    margin-top: 18px;
} */
`;

export const PConvertDiagramTextSC = styled.p`
    color: #000;
    font-family: "Montserrat";
    font-size: 42px;
    font-style: normal;
    font-weight: 600;
    line-height: 135%;
    letter-spacing: 0.056px;

    @media(max-width: 580px){
    font-size: 34px;
    letter-spacing: 0.068px;
    }

    @media(max-width: 479px){
    font-size: 28px;
    }
`;

export const PConvertDiagramCaptionSC = styled.span`
display: block;
/* margin-top: -5px; */
color: #000;
font-family: "Montserrat";
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 135%;
letter-spacing: 0.03px;

@media(max-width: 580px){
    font-size: 18px;
    letter-spacing: 0.036px;
}

@media(max-width: 479px){
    font-size: 15px;
    }
`;

export const DivConvertDiagramLeftLogoSC = styled.div<{
    path: string;
  }>`
      width: 62px;
  height: 94px;
  background-image: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* position: absolute; */
  /* top: 165px; */
  /* left: 22px; */

  /* @media(min-width: 480px){
    width: 45px;
    height: 68px;
    top: 232px;
  left: 30px;
} */
@media(max-width: 1050px){
  width: 57px;
  height: 87px;
  }

  @media(max-width: 580px){
  width: 44px;
  height: 68px;
  }

  @media(max-width: 479px){
  width: 32px;
  height: 49px;
  }
`;

export const DivConvertDiagramRightLogoSC = styled.div<{
    path: string;
  }>`
      width: 62px;
  height: 94px;
  background-image: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  /* position: absolute; */
  /* top: 123px; */
  /* left: 40px; */

  /* @media(min-width: 480px){
    width: 45px;
    height: 68px;
    top: 176px;
  left: 55px;
} */

@media(max-width: 1050px){
  width: 57px;
  height: 87px;
  }

  @media(max-width: 580px){
  width: 44px;
  height: 68px;
  }

  @media(max-width: 479px){
  width: 32px;
  height: 49px;
  }
`;

export const DivConvertDiagramChainsSC = styled.div`
    display: grid;
    /* width: 300px; */
    grid-template-columns: min-content;
    grid-template-rows: max-content max-content;
    /* flex-direction: column; */
    position: relative;

    @media(max-width: 1050px){
      grid-template-columns: auto;
  }
`;

export const DivConvertDiagramRightTextContainerSC = styled.div`
   display: grid;
    grid-template-columns: auto max-content;
    column-gap: 16px;
    justify-content: center;
    align-items: center;
    
    /* flex-direction: column; */
    /* margin-left: 80px; */
    /* margin-top: 60px; */

    @media(max-width: 1050px){
      grid-template-columns: auto auto;
}
`;

export const DivConvertDiagramArrowSC = styled.div<{
    path: string;
  }>`
    width: 40px;
  height: 30px;
  background-image: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  /* margin-top: 135px; */
  position: absolute;
  top: 130px;
  left: 320px;

  @media(max-width: 1050px){
    top: 130px;
  left: 300px;
}

@media(max-width: 580px){
    top: 110px;
  left: 230px;
}

@media(max-width: 479px){
  top: 70px;
  left: 165px;
  }
`;
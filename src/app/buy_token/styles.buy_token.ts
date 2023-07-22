import { styled } from "styled-components";

export const DivWrapperContentSC = styled.div`
    display: grid;
    justify-content: center;
    justify-self: center;
    justify-items: center;
    margin-top: clamp(138px,20vw, 200px);
    position: relative;
    width: 100%;


   &::after {
        content: "";
        position: absolute;
        display: grid;
        width: 386.434px;
        height: 578.948px;
        transform: rotate(-55.885deg);
        flex-shrink: 0;
        border-radius: 578.948px;
        background: #4AFFC9;
        filter: blur(270px);
        z-index: -1;
        top: 100px;
        left: 0;        
      }

    &::before {
        content: "";
        position: absolute;
        display: grid;
        justify-self: center;
        width: 163px;
        height: 779px;
        transform: rotate(-90deg);
        flex-shrink: 0;
        border-radius: 779px;
        background: #4AFFC9;
        filter: blur(225px);
        z-index: -1;
        top: 1100px;
      }

      @media(max-width: 1000px){
        &::after {
        content: "";
        position: absolute;
        display: grid;
        width: 470.251px;
        height: 534.922px;
        transform: rotate(-55.885deg);
        flex-shrink: 0;
        border-radius: 578.948px;
        background: #4AFFC9;
        transform: rotate(-32.495deg);
        filter: blur(225px);
        z-index: -1;
        top: 0;
        left: 0;          
        }

        &::before {
        content: "";
        position: absolute;
        display: grid;
        justify-self: center;
        width: 150px;
        height: 780px;
        transform: rotate(-90deg);
        flex-shrink: 0;
        border-radius: 780px;
        background: #4AFFC9;
        filter: blur(225px);
        z-index: -1;
        top: 1000px;
      }
      }


      @media(max-width: 999px){
        &::after {
        content: "";
        position: absolute;
        display: grid;
        width: 470.251px;
        height: 534.922px;
        transform: rotate(-32.885deg);
        flex-shrink: 0;
        border-radius: 578.948px;
        background: #4AFFC9;
        transform: rotate(-32.495deg);
        filter: blur(225px);
        z-index: -1;
        top: 0;
        left: 0;          
        }

        &::before {
        content: "";
        position: absolute;
        display: grid;
        justify-self: center;
        width: 150px;
        height: 780px;
        transform: rotate(-90deg);
        flex-shrink: 0;
        border-radius: 780px;
        background: #4AFFC9;
        filter: blur(225px);
        z-index: -1;
        top: 1500px;
      }
      }
      
      @media(max-width: 765px){
        &::after {
        content: "";
        position: absolute;
        display: grid;
        width: 470.251px;
        height: 534.922px;
        transform: rotate(-32.885deg);
        flex-shrink: 0;
        border-radius: 578.948px;
        background: #4AFFC9;
        transform: rotate(-32.495deg);
        filter: blur(225px);
        z-index: -1;
        top: 0;
        left: 0;          
        }

        &::before {
        content: "";
        position: absolute;
        display: grid;
        justify-self: center;
        width: 150px;
        height: 780px;
        transform: rotate(-90deg);
        flex-shrink: 0;
        border-radius: 780px;
        background: #4AFFC9;
        filter: blur(225px);
        z-index: -1;
        top: 1700px;
      }
      }

      @media(max-width: 750px){
        &::after {
        content: "";
        position: absolute;
        display: grid;
        width: 410.251px;
        height: 624.922px;
        flex-shrink: 0;
        border-radius: 578.948px;
        background: #4AFFC9;
        filter: blur(225px);
        z-index: -1;
        top: 200px;
        left: 25%;          
        }

        &::before {
        content: "";
        position: absolute;
        display: grid;
        justify-self: center;
        width: 163px;
        height: 779px;
        flex-shrink: 0;
        border-radius: 780px;
        background: #4AFFC9;
        filter: blur(225px);
        z-index: -1;
        top: 2500px;
      }
      }
`;

export const H2SC = styled.h2`
    margin: 0;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 45px;
    align-items: center;
    letter-spacing: 0.2px;
    color: #000;
    text-align: center;
    margin-bottom: 60px;
    max-width: 816px;
`;

export const DivUpperGridblockSC = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: max-content minmax(auto, 628px) max-content;
    grid-template-rows: max-content;
    column-gap: 0vw;

  @media(max-width: 999px){
      grid-template-columns: 1fr 1fr;
      grid-template-rows: max-content max-content;
      row-gap: 59px;
    } 

  @media(max-width: 750px){
      grid-template-columns: 1fr;
    }  
`;

export const DivUpperBlockInnerWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content;
    grid-template-rows: auto auto;
    align-items: center;

    @media(max-width: 999px){
        grid-column: 1 / span 2;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: max-content;
      } 

    @media(max-width: 750px){
        grid-template-columns: 1fr;
        grid-template-rows: max-content;
      }
`;

export const DivEarthyBigImgSC = styled.div<{
    path: string;
}>`
    width: 286px;
    height: 422px;
    background: url(${({ path }) => path});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
    align-self: center;
    
    @media(max-width: 1040px){
        width: 220px;
        height: 324px;
      }

    @media(max-width: 999px){
        width: 252px;
        height: 372px;
      }

    @media(max-width: 750px){
        margin-top: 75px;
      }
`;

export const PTextRewardSC = styled.p`
    color: #000;
    font-family: Montserrat;
    font-size: 27px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
    letter-spacing: 0.054px;
    max-width: 1029px;
    margin-top: 123px;

    @media(max-width: 1060px){
        margin-top: 76px;
      }

    @media(max-width: 768px){
        margin-top: 60px;
      }

    @media(max-width: 480px){
        margin-top: 70px;
      }

    @media(max-width: 479px){
        margin-top: 70px;
        font-size: 24px;
        max-width: 440px;
      }

`;

export const DivDiagramWrapperBlock = styled.div`
    display: grid;
    max-width: 1030px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
    align-items: center;
    column-gap: 22px;
    margin-top: 40px;

    @media(max-width: 999px){
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content;
      row-gap: 56px;
    }

    @media(max-width: 479px){
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      row-gap: 56px;
    }
`;

export const PTextDestinationSC = styled.p`
    color: #000;
    font-family: "Montserrat";
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 135%;
    letter-spacing: 0.044px;
    width: 100%;
    margin-bottom: 20px;

    @media(max-width: 480px){
      font-size: 22px;
    }
`;

export const H2LeaderboardTitleSC = styled.h2`
    color: #201E1C;
    font-family: Montserrat;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.2px;
    margin-top: 71px;
    text-align: center;
`;

export const DivForButtonContain = styled.div`
    display: grid;
    justify-items: center;
    margin-top: 40px;

    @media(max-width: 1000px){
        margin-top: 35px;
      }
`;

export const DivForStepsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 62px;

    @media(max-width: 1039px){
        grid-template-columns: auto;
      }
`;

export const H2StepsTitleSC = styled.h2`
    color: #201E1C;
    text-align: center;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 120px;

    @media(max-width: 1000px){
        margin-top: 100px;
    }

    @media(max-width: 768px){
        margin-top: 70px;
      }
`;

export const DivForThirdGradientSC = styled.div`
  position: relative;

  @media(max-width: 1000px){
    &::after {
        content: "";
        position: absolute;
        display: grid;
        width: 406.434px;
        height: 523.069px;
        transform: rotate(-55.885deg);
        flex-shrink: 0;
        border-radius: 523.948px;
        background: #4AFFC9;
        filter: blur(225px);
        z-index: -1;
        top: 0;
        right: 0;        
      }
    }

    @media(max-width: 666px){
    &::after {
        content: "";
        position: absolute;
        display: grid;
        width: 0;
        height: 0;
        transform: rotate(-55.885deg);
        flex-shrink: 0;
        border-radius: 523.948px;
        background: #4AFFC9;
        filter: blur(225px);
        z-index: -1;
        top: 0;
        right: 0;        
      }
    }
`;
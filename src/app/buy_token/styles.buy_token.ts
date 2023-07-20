import { styled } from "styled-components";

export const DivWrapperContentSC = styled.div`
  display: grid;
  // justify-content: center;
  // justify-self: center;
  // justify-items: center;
  // min-height: 100vh;
  // height: max-content;
  margin-top: clamp(138px,20vw, 200px);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: grid;
    justify-self: center;
    width: 410px;
    height: 624px;
    flex-shrink: 0;
    background-color: #4AFFC9;
    filter: blur(225px);
    z-index: -1;
    top: 200px;
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
    top: 2700px;
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
  /* height: fit-content; */
  text-align: center;
  margin-bottom: 60px;

  @media(min-width: 480px){
  text-align: center;
  font-size: 36px;
  line-height: 50px;
  margin-top: 10px;
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
    margin: 55px auto 70px;

    @media(min-width: 480px){
    margin-top: 80px;
}
`;

export const PTextRewardSC = styled.p`
  color: #000;
  font-family: "Montserrat";
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  letter-spacing: 0.048px;
  width: 100%;
  // padding: 0 23px 0 17px;

  @media(min-width: 480px){
  font-size: 27px;
  letter-spacing: 0.054px;
}
`;

export const PTextDestinationSC = styled.p`
  color: #000;
  font-family: "Montserrat";
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  letter-spacing: 0.044px;
  width: 100%;
  // padding: 0 23px 0 17px;
  margin-bottom: 20px;

  @media(min-width: 480px){
  font-size: 24px;
  letter-spacing: 0.048px;
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
//margin-left: 20px;
//margin-bottom: 35px;
text-align: center;
`;

export const DivForButtonContain = styled.div`
  display: grid;
  justify-items: center;
`;

import styled from "styled-components";
import ImgBlog from "../images/BlogDetail.jpg";
export const DivBackgroundImgSC = styled.div`
  width: 100%;
  display: grid;
  height: 100%;
  min-height: 75px;
  background-image: url(${ImgBlog.src});
  background-size: cover;
  @media(min-width: 720px){
    min-height: 200px;
  }
  @media(min-width: 720px){
    min-height: 262px;
  }
  @media(min-width: 1400px){
    min-height: 495px;
  }
`;
export const DivDetailContentSC = styled.div`
  display: grid;
  justify-self: center;
  max-width: 1400px;
  width: 90vw;
  justify-items: center;
`;
export const DivBlogInfoSC = styled.div`
padding: 40px 30px;
position: relative;
z-index: 99;
margin-top: -40px;
  display: grid;
 grid-template-rows: max-content max-content max-content max-content;
 gap: 30px;
 border-radius: 30px;
background: #FFF;
box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.25);
justify-items: center;
max-width: 1030px;
@media(min-width: 720px){
  margin-top: -90px;
  }
  @media(min-width: 1400px){
  margin-top: -120px;
  }
`;
export const DivCaptionConteinerSC = styled.div`
  display: grid;
  justify-self: center;
 width: 100%;
  gap: 10px;
`;
export const DivTitleSC = styled.div`
  color: #201E1C;
font-family: Montserrat;
font-size: clamp(24px, 2.5vw, 42px); 
font-style: normal;
font-weight: 600;
line-height: normal;
`;
export const DivDateSC = styled.div`
  color: #000;
font-family: Montserrat;
font-size: clamp(20px, 2.5vw, 32px); 
font-style: normal;
font-weight: 400;
line-height: normal;
`;
export const DivTextSC = styled.div`
  color: #201E1C;
font-family: Montserrat;
font-size: clamp(18px, 2.5vw, 32px);
font-style: normal;
font-weight: 400;
line-height: normal; /* 138.889% */
`;
export const DivContainerVideoSC = styled.div`
  width: 100%;
  padding-top: 56.25%;
  position: relative;
`;
export const ContainerSC = styled.div`
  display: grid;
    position: relative;
    width: 100%;
    height: 100%;
    justify-items: center;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1445.095px;
background: #A5FFE4;
filter: blur(225px);
transform: rotate(-0.041deg);
    z-index: -1;
    
  }
`;
export const DivBlogContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  @media(min-width: 600px){
  gap: 50px;
  justify-items: center;
}
 
`;
export const DivContainerBlogSC = styled.div`
  display: grid;
    justify-self: center;
    max-width: 1400px;
    width: 90vw;
    justify-items: center;
    gap: 20px;
    margin-top: 100px;
    @media(min-width: 600px){
      margin-top: 0px;
}
 
`;
export const DivTexLatestSC = styled.div`
  color: #000;
text-align: center;
font-family: Montserrat;
font-size: 42px;
font-style: normal;
font-weight: 600;
line-height: normal;
@media(min-width: 600px){
  display: none;
}
 
`;
export const ButtonJoinSC  = styled.button`
cursor: pointer;
display: grid;
grid-template-rows: 1fr 1fr;
 width: 100%;
 height: 100%;
 justify-items: center;
 margin: 10px 0;
border: 2px solid #195946;
max-width: 182px;
max-height: 72px;
padding: 30px 50px;
align-items: center;
align-content:center ;
border-radius: 35px 0px;
background: #195946;
color: white;
font-size: 16px;
@media(min-width: 600px){
  display: none;
}
`;
export const DivContainerAllBlogSC = styled.div`
  display: none;
  width: 100%;
  height: 100%;

  flex-direction: row;
@media(min-width: 600px){
  display: flex;
  max-width: 1440px;
  width: 90vw;
  justify-content: space-between;
    margin-top: 100px;
    height: max-content;
}
 
`;
export const ButtonJoin  = styled.button`
cursor: pointer;
display: none;
grid-template-rows: 1fr 1fr;
 width: 100%;
 height: 100%;
 justify-items: center;
 margin: 10px 0;
border: 2px solid #195946;
max-width: 182px;
max-height: 72px;
padding: 30px 50px;
align-items: center;
align-content:center ;
border-radius: 35px 0px;
background: #195946;
color: white;
font-size: 16px;
@media(min-width: 600px){
  display: grid;
}
`;
export const DivTexLatest = styled.div`
  color: #000;
text-align: center;
font-family: Montserrat;
font-size: 42px;
font-style: normal;
font-weight: 600;
line-height: normal;
display: none;
@media(min-width: 600px){
  display: block;
}
 
`;
export const DivGridSC = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
gap: 20px;
  
@media(min-width: 600px){
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
@media(min-width: 1000px){
  gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
}
 
`;


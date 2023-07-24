"use client";
import image from "../../images/ItemBlogExample.png";
import styled from "styled-components";
import { TbChevronRight, TbChevronLeft } from "react-icons/tb";

export const CarouselItemContainerSC = styled.div`
  display: grid;
  border-radius: 18px;
  background: #e7fff8;
  /* max-width: 397px; */
  /* max-height: 573px; */
  transition: 0.1s;
  width: 100%;
  height: 100%;
  grid-template-rows: max-content max-content;
`;

type Props = {
  img?: any;
  additional_image?: any;
  images?: any;
};
export const CarouselItemImageSC = styled.div<Props>`
  background: url(${(props) => props.img.src});
  border-radius: 18px;

  display: grid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 180px;
`;

export const CarouselItemContentSC = styled.div`
  display: grid;
  grid-row-gap: 20px;
  padding: 15px;
`;

export const CarouselItemTitleSC = styled.span`
  color: #201e1c;
  font-family: Montserrat;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CarouselItemDescriptionSC = styled.span`
  color: #464646;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const CarouselItemGridContainerSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-between;
  @media (max-width: 1000px) {
    grid-row-gap: 10px;
    grid-template-columns: max-content;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, max-content);
  }
`;
export const CarouselItemGridTitleSC = styled.div`
  color: #646464;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;
export const CarouselItemGridTextSC = styled.div`
  color: #201e1c;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
`;
export const CarouselItemAdditionalImageSC = styled.div<Props>`
  background: url(${(props) => props.additional_image.src});

  display: grid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 243px;
  height: 47px;
`;
export const ExampleImageSC = styled.div<Props>`
  background: url(${(props) => props.images.src});

  display: grid;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 243px;
  height: 47px;
`;
export const DivCustomArrowRight = styled(TbChevronRight)`
  width: 80px;
  height: 80px;
  background-color: #195946;
  border-radius: 40px;
  color: #fff;
  /* padding-left: 10px; */
  /* position: absolute; */
  /* right: calc(50vw - 800px); */
  /* right: 0; */
  z-index: 1;
  cursor: pointer;
  /* @media (max-width: 1000px) {
    margin-top: 60%;
    right: 40%;
  } */
`;

export const DivCustomArrowLeft = styled(TbChevronLeft)`
  display: grid;
  justify-items: center;
  align-content: center;
  width: 80px;
  height: 80px;
  background-color: #195946;
  border-radius: 40px;
  /* left: calc(50vw - 800px); */
  color: #fff;
  /* position: relative; */
  z-index: 1;
  justify-self: left;
  cursor: pointer;
  /* @media (max-width: 1000px) {
    margin-top: 60%;
    left: 40%;
  } */
`;

export const DivCustomArrowsSC = styled.div<{
  isProject?: boolean
}>`
  align-self: start;
  display: flex;
  z-index: 1;
  grid-template-columns: repeat(2, 1fr);
  width: ${({isProject}) => isProject ? "120%" : "110%"};
  margin-right: ${({isProject}) => isProject ? "11px" : "0"};
  justify-content: space-between;
  align-content: center;
  margin-top: -250px;
  justify-self: center;
  @media (max-width: 1520px) {
    margin-top: ${({isProject}) => isProject ? "10px" : "-250px"} ;
    width: ${({isProject}) => isProject ? "192px" : "110%"};
    margin-right: 0;
  }
  @media (max-width: 1000px) {
    margin-top: ${({isProject}) => isProject ? "10px" : "50px"} ;
    width: ${({isProject}) => isProject ? "192px" : "200px"};
  }
`;

export const DivSection3SC = styled.div`
  display: grid;
  justify-content: center;
  justify-self:center;
  justify-items: center;
  width: 100%;
  max-width: 1660px;
`;

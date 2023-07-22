import { styled } from "styled-components";

export const DivCourseEthSC = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3, 1fr);
  max-width: 292px;
  width: 100%;
  margin: 0 auto;
`;

export const DivCourceTitleWrapperSC = styled.div`
  display: flex;
  margin-bottom: 4px;
  align-items: center;
  column-gap: 7px;
`;

export const DivCourceTitleImgSC = styled.div<{
  path: string;
}>`
  width: 24px;
  height: 36px;
  background-image: url(${({ path }) => path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const PCourceTitileSC = styled.p`
  color: #6e6e6e;
  font-family: "Montserrat";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 50px;
  letter-spacing: 0cap.2px;
`;

export const SpanCourseTitleSC = styled.span`
  color: #3c3c3c;
  font-weight: bold;
`;

export const CourseEthTextSC = styled.p`
  color: #000;
  font-family: "Montserrat";
  font-size: 42px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0.2px;
  margin: 0;
`;

export const CourseDollarTextSC = styled.p`
  color: #6e6e6e;
  font-family: "Montserrat";
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  letter-spacing: 0.2px;
  margin: 0;
`;
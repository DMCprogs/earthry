import courceImg from '../../images/eth_logo.svg';

import {
    DivCourseEthSC,
    DivCourceTitleWrapperSC,
    DivCourceTitleImgSC,
    PCourceTitileSC,
    SpanCourseTitleSC,
    CourseEthTextSC,
    CourseDollarTextSC
} from './styles.EarthyCourse'

const EarthyCourse = () => {
  return (
    <DivCourseEthSC>
          <DivCourceTitleWrapperSC>
            <DivCourceTitleImgSC path={courceImg.src}></DivCourceTitleImgSC>
            <PCourceTitileSC><SpanCourseTitleSC>Earthy </SpanCourseTitleSC>token price:</PCourceTitileSC>
          </DivCourceTitleWrapperSC>
          <CourseEthTextSC>0.32 ETH</CourseEthTextSC>
          <CourseDollarTextSC>$595.18</CourseDollarTextSC>
    </DivCourseEthSC>
  )
}

export default EarthyCourse
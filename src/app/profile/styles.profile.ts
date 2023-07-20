import {styled} from "styled-components";

export const DivWrapperPageProfileSC = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  grid-auto-rows: max-content;
  gap: 70px;
`

export const DivSection1SC = styled.div`
    display: grid;
  grid-template-columns: 100%;
  //grid-template-rows: repeat(4, max-content);
  grid-auto-rows: max-content;
  width: 100%;
  height: max-content;
  gap: 70px;
`

export const H4SC = styled.h4`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.2px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`

export const DivBoxAvatarAndInputSC = styled.div`
  display: grid;
  width: 100%;
  height: max-content;
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: 100%;
    justify-items: center;
    align-items: center;
    gap: 25px;
  }
`

export const DivWrapperProfileAvatarSC = styled.div<{
    $img: string
}>`
  width: 187px;
  height: 187px;
  border-radius: 187px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${({$img}) => ($img)}), lightgray 50% / cover no-repeat;
  background-size: cover;
  background-position: center;

`

export const DivWrapperInputsSC = styled.div`
  display: grid;
  width: 100%;
  height: max-content;
  grid-template-columns: 100%;
  grid-template-rows: 43px 64px;
  @media (max-width: 768px) {
    width: 250px;
  }
`

export const SpanSC = styled.span`
  color: #111;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 145.02%;
`
export const InputSC = styled.input`
  border-radius: 16px;
  border: 2px solid #A6A6A6;
  background: #FFF;
  padding: 20px;
  color: black;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &::placeholder {
    color: #969696;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const H5SC = styled.h5`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.2px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`

export const DivWrapperTwoSectionsSC = styled.div`
  display: grid;
  width: 100%;
  height: max-content;
  @media (max-width: 768px) {
    gap: 75px;
    grid-template-rows: max-content max-content;
    grid-template-columns: 100%;
  }
`

export const DivWrapperHarvestSC = styled.div`
  display: grid;
  width: 100%;
  height: max-content;
  grid-template-columns: 100%;
  grid-template-rows: 139px 19px 139px;
  justify-items: center;
  align-items: center;
  gap: 27px;
`

export const DivDashSC = styled.div`
  display: grid;
  width: 320px;
  height: 139px;
  border-radius: 20px;
  background: #DBFFF4;
  grid-template-rows: 100%;
  grid-template-columns: 26px auto;
`

export const DivDash2SC = styled.div`
  display: grid;
  width: 320px;
  height: 139px;
  border-radius: 20px;
  background: #DBFFF4;
`
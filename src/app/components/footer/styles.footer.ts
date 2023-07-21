import styled from "styled-components";

export const Button = styled.div`
  display: grid;
  position: fixed;
  width: 80px;
  height: 80px;
  right: 45px;
  bottom: 45px;
  z-index: 1;
  cursor: pointer;
  background: #4affc9;
  border-radius: 100%;
  -webkit-box-shadow: 0px 0px 9px 6px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 9px 6px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 9px 6px rgba(34, 60, 80, 0.2);
  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    right: 25px;
    bottom: 25px;
  }
`;

export const BoxArrowSC = styled.div`
  padding: 24px;
  font-size: 2rem;
  color: #464646;
  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 14px;
  }
`;

export const DovBoxFooterSC = styled.div`
  width: 100%;
  height: 69px;
  background: #201e1c;
  display: grid;
  justify-content: center;
  align-items: center;
`;
export const TitleFooterSC = styled.div`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 145.02%;
  text-align: center;
  color: #ffffff;
`;
export const DivWrapperFooterSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(2, max-content);
  margin-top: 120px;
`;

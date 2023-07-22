import styled from "styled-components";

export const DivWrapperPageSC = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-rows: 100%;
  grid-template-columns: 100%;
  justify-items: center;
  align-items: center;
`

export const DivWrapperFormSC = styled.div`
align-self:center;
justify-self:center;
  display: grid;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #144272;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 100%;
`

export const ButtonCustomSC = styled.div`
  border: 1px solid #144272;
  display: grid;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  color: #2C74B3;
`
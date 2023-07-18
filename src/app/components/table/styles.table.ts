import {styled} from "styled-components";

export const DivTableWrapperSC = styled.div`
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: 100%;
  width: 100%;
  height: max-content;
  //max-height: 200px;
  overflow: auto;
`

export const DivTableBoxSC = styled.div`
  display: grid;
  width: max-content;
  height: max-content;
  grid-auto-rows: 63px;
  grid-template-columns: minmax(100%, max-content);
  
  min-width: 100%;
  gap: 23px;
`

export const DivHeaderTableSC = styled.div<{
    listColumn:string[]
}>`
  display: grid;
  grid-template-columns: repeat(${({listColumn}) => (listColumn.length)}, 1fr);
  grid-template-rows: 100%;
  width: min-content;
  height: 100%;
  border-radius: 16px;
  background: #C8FFEF;
  gap: 63px;
  min-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`

export const DivCellSC = styled.div`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: grid;
  justify-items: center;
  align-items: center;
  width: max-content;
`

export const DivRowTableSC = styled.div<{
    listColumn:string[]
}>`
  display: grid;
  grid-template-columns: repeat(${({listColumn}) => (listColumn.length)}, 1fr);
  grid-template-rows: 100%;
  width: min-content;
  height: 100%;
  border-radius: 16px;
  background: #F8F8F8;
  gap: 63px;
  min-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`

export const DivCell2SC = styled.div`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: grid;
  justify-items: center;
  align-items: center;
  width: max-content;
`
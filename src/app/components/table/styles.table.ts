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

export const DivHeaderTableSC = styled.thead`
 
  //width: min-content;
  
  border-radius: 16px;
  background: #C8FFEF;
  gap: 63px;
  min-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  height: 63px;
`

export const DivCellSC = styled.th`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  //justify-items: center;
  //align-items: center;
  width: max-content;
  border: none;
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
  min-width: max-content;
  white-space: nowrap;
`

export const DivRowTableSC = styled.tr`
  
  //width: min-content;
  //height: 100%;
  border-radius: 16px;
  background: #F8F8F8;
  height: 90px;
  min-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
`

export const DivCell2SC = styled.td`
  color: #201E1C;
  font-family: Montserrat;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  //display: grid;
  //justify-items: center;
  //align-items: center;
  width: max-content;
  border: none;
  padding-left: 15px;
  min-width: max-content;
  white-space: nowrap;
`

export const TableSC = styled.table`
  border-spacing: 0px 24px;
  & thead tr th:first-child{
    border-radius:10px 0 0 10px;
  }

  & thead tr th:last-child{
    border-radius:0 10px 10px 0;
  }

  & tbody tr td:first-child{
    border-radius:10px 0 0 10px;
  }

  & tbody tr td:last-child{
    border-radius:0 10px 10px 0;
  }

  & tbody tr td:not(:first-child, :last-child){
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const DivImageAvatarSC = styled.div<{
    $img: string
}>`
  display: grid;
  background: url(${({$img}) => ($img)});
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: 100%;
  background-position: center;
`

export const DivWrapperCellFirstSC = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
  gap: 12px;
`
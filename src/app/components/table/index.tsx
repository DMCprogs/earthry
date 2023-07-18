import React, {useEffect, useState} from 'react';
import {
    DivCell2SC,
    DivCellSC,
    DivHeaderTableSC,
    DivRowTableSC,
    DivTableBoxSC,
    DivTableWrapperSC
} from "@/app/components/table/styles.table";


interface IProps {
    columns: string[],
    data: any[]
}
const Table = (props:IProps) => {
    const {
        columns,
        data
    } = props

    const [
        listColumn,
        setListColumn
    ] = useState<string[]>([])



    useEffect(() => {
        setListColumn(columns)
    }, [columns])



    const nodeColumns = listColumn.map((item, i) => {

        return(
            <DivCellSC
            key={`fsfgaf${i}`}
            >
                {item}
            </DivCellSC>
        )
    })

    const nodeRows = data.map((item, i) => {

        const nodeCell = listColumn.map((item2, i2) => {
            return(
                <DivCell2SC
                    key={`fsfgddwwsdaf${i2}`}
                >
                    {item[item2]}
                </DivCell2SC>
            )
        })


        return (
            <DivRowTableSC
                key={`fsfgdsdaf${i}`}
                listColumn={listColumn}
            >
                {nodeCell}
            </DivRowTableSC>
        )
    })

    return (
        <DivTableWrapperSC>
            <DivTableBoxSC>
                <DivHeaderTableSC
                    listColumn={listColumn}
                >
                    {nodeColumns}
                </DivHeaderTableSC>
                {nodeRows}
            </DivTableBoxSC>
        </DivTableWrapperSC>
    );
};

export default Table;
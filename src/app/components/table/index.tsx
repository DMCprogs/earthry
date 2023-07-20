import React, { useEffect, useState } from 'react';
import {
    DivCell2SC,
    DivCellSC,
    DivHeaderTableSC, DivImageAvatarSC,
    DivRowTableSC,
    DivTableBoxSC,
    DivTableWrapperSC, DivWrapperCellFirstSC, TableSC
} from "@/app/components/table/styles.table";


interface IProps {
    columns: string[],
    data: any[]
}
const Table = (props: IProps) => {
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

        return (
            <DivCellSC
                key={`fsfgaf${i}`}
            >
                {item}
            </DivCellSC>
        )
    })

    const nodeRows = data.map((item, i) => {

        const nodeCell = listColumn.map((item2, i2) => {
            return (
                <DivCell2SC
                    key={`fsfgddwwsdaf${i2}`}
                >
                    { item[item2].img ?
                        <DivWrapperCellFirstSC>
                            <DivImageAvatarSC
                                $img={item[item2].img}
                            >

                            </DivImageAvatarSC>
                            <span>{item[item2].text}</span>
                        </DivWrapperCellFirstSC> :
                        item[item2].text
                    }
                </DivCell2SC>
            )
        })


        return (
            <DivRowTableSC
                key={`fsfgdsdaf${i}`}
            >
                {nodeCell}
            </DivRowTableSC>
        )
    })

    return (
        <DivTableWrapperSC>
            <TableSC style={{ width: '100%' }}>
                <DivHeaderTableSC>
                    <tr>
                        {nodeColumns}
                    </tr>
                </DivHeaderTableSC>
                <tbody>
                    {nodeRows}
                </tbody>


            </TableSC>
            {/*<DivTableBoxSC>*/}
            {/*    <DivHeaderTableSC*/}
            {/*        listColumn={listColumn}*/}
            {/*    >*/}
            {/*        {nodeColumns}*/}
            {/*    </DivHeaderTableSC>*/}
            {/*    {nodeRows}*/}
            {/*</DivTableBoxSC>*/}
        </DivTableWrapperSC>
    );
};

export default Table;
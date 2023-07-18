'use client'
import React from 'react';
import Table from "@/app/components/table";

const listData = [
    {
        'Nickname': 'Vasya007',
        'Address': 'd90a...94f1',
        'Tokens now': '11,000,000',
        'Tokens after launch': '33,000,000'
    },
    {
        'Nickname': 'Vasya007',
        'Address': 'd90a...94f1',
        'Tokens now': '11,000,000',
        'Tokens after launch': '33,000,000'
    },
    {
        'Nickname': 'Vasya007',
        'Address': 'd90a...94f1',
        'Tokens now': '11,000,000',
        'Tokens after launch': '33,000,000'
    },
    {
        'Nickname': 'Vasya007',
        'Address': 'd90a...94f1',
        'Tokens now': '11,000,000',
        'Tokens after launch': '33,000,000'
    },
]

const listColumn:string[] = [
    'Nickname',
    'Address',
    'Tokens now',
    'Tokens after launch'
]

const CustomTablePage = () => {
    return (
        <div
            style={{
                padding: '100px',
                display: 'grid',
                maxWidth: '1030px'
            }}
        >
            <Table
                columns={listColumn}
                data={listData}
            />
        </div>
    );
};

export default CustomTablePage;
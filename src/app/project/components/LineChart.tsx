import React, {useEffect, useState} from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

interface DataPoint {
    year: number;
    tokens: number;
}

interface LineChartProps {
    data: DataPoint[];
}

const CustomLineChart: React.FC<LineChartProps> = ({data}) => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        window.onload = handleResize;
        setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleResize = () => {
        setWidth(window.innerWidth);
    };


    return (
        <ResponsiveContainer width={width > 880 ? 425 : width > 768 ? 390 : width > 440 ? 400 : 320}
                             height={width > 880 ? 400 : width > 768 ? 350 : width > 440 ? 370 : 300}>
            <LineChart
                data={data}
                margin={{top: 20, right: 30, left: 20, bottom: 10}}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis
                    dataKey="year"
                    // padding={{ left: 30, right: 30 }}
                    type="number"
                    // domain={[0, 24]}
                />
                <YAxis
                    type="number"
                    domain={[data[0]?.tokens, Math.ceil(data[data.length - 1]?.tokens)]}
                />
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="tokens" stroke="#8884d8"/>
            </LineChart>
        </ResponsiveContainer>
    );
}

export default CustomLineChart;

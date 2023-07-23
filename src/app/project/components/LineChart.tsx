import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface DataPoint {
    year: number;
    tokens: number;
}

interface LineChartProps {
    data: DataPoint[];
}

const CustomLineChart: React.FC<LineChartProps> = ({ data }) => {



    return (
        <ResponsiveContainer width={400} height={319}>
            <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
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
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="tokens" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default CustomLineChart;

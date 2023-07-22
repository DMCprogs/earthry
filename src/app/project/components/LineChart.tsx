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
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="tokens" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default CustomLineChart;

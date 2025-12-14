import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Payments', value: 45000, color: '#7c2bee' }, // Primary
    { name: 'Banking', value: 25000, color: '#a855f7' },  // Purple-500
    { name: 'Issuing', value: 15000, color: '#3b82f6' },  // Blue-500
    { name: 'Fraud', value: 10000, color: '#f59e0b' },    // Amber-500 (Warning)
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#1a1620] border border-[#2f2839] p-2 rounded shadow-xl">
                <p className="text-white text-xs font-bold mb-1">{payload[0].name}</p>
                <p className="text-gray-300 text-xs">
                    ${payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

const RevenuePieChart = () => {
    return (
        <div className="h-full w-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ fontSize: '12px', color: '#a89db9' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenuePieChart;

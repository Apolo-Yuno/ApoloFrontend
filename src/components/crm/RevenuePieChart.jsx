import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Payments', value: 45000, color: '#2563eb' }, // Primary
    { name: 'Banking', value: 25000, color: '#60a5fa' },  // Purple-500
    { name: 'Issuing', value: 15000, color: '#0ea5e9' },  // Blue-500
    { name: 'Fraud', value: 10000, color: '#f59e0b' },    // Amber-500 
];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-border-dark p-2 rounded shadow-xl">
                <p className="text-text-primary text-xs font-bold mb-1">{payload[0].name}</p>
                <p className="text-text-secondary text-xs">
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
                        wrapperStyle={{ fontSize: '12px', color: '#64748b' }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenuePieChart;

import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

const data = [
    { name: 'W1', api: 2400, sessions: 1200, errors: 40 },
    { name: 'W2', api: 1398, sessions: 2000, errors: 50 },
    { name: 'W3', api: 8000, sessions: 3500, errors: 120 },
    { name: 'W4', api: 3908, sessions: 2800, errors: 60 },
    { name: 'W5', api: 4800, sessions: 1890, errors: 45 },
    { name: 'W6', api: 3800, sessions: 2390, errors: 55 },
    { name: 'W7', api: 4300, sessions: 3490, errors: 80 },
    { name: 'W8', api: 6500, sessions: 4000, errors: 90 },
    { name: 'W9', api: 5800, sessions: 3800, errors: 75 },
    { name: 'W10', api: 7200, sessions: 4300, errors: 85 },
    { name: 'W11', api: 8100, sessions: 5100, errors: 110 },
    { name: 'W12', api: 9500, sessions: 6000, errors: 130 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-[#1a1620] border border-[#2f2839] p-2 rounded shadow-xl">
                <p className="text-white text-xs font-bold mb-1">{`Semana: ${label}`}</p>
                <p className="text-[#7c2bee] text-xs">{`API: ${payload[0].value.toLocaleString()}`}</p>
                <p className="text-[#453b54] text-xs">{`Sesiones: ${payload[1].value.toLocaleString()}`}</p>
                <p className="text-red-400 text-xs">{`Errores: ${payload[2].value}`}</p>
            </div>
        );
    }
    return null;
};

const UsageTrendsChart = () => {
    return (
        <div className="h-full w-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} barGap={0}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2f2839" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#a89db9', fontSize: 10 }}
                        interval={1}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff1a' }} />
                    <Legend
                        wrapperStyle={{ fontSize: '10px' }}
                        iconSize={8}
                    />

                    {/* API Volume */}
                    <Bar
                        dataKey="api"
                        name="Vol. API"
                        fill="#7c2bee"
                        radius={[2, 2, 0, 0]}
                        animationDuration={1500}
                        animationEasing="ease-out"
                        stackId="a"
                    />

                    {/* Sessions */}
                    <Bar
                        dataKey="sessions"
                        name="Sesiones"
                        fill="#453b54"
                        radius={[2, 2, 0, 0]}
                        animationDuration={1500}
                        animationBegin={200}
                        animationEasing="ease-out"
                        stackId="b"
                    />

                    {/* Errors (New Metric) */}
                    <Bar
                        dataKey="errors"
                        name="Errores"
                        fill="#ef4444"
                        radius={[2, 2, 0, 0]}
                        animationDuration={1500}
                        animationBegin={400}
                        animationEasing="ease-out"
                        stackId="c"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UsageTrendsChart;
import React from 'react';
import UsageTrendsChart from './UsageTrendsChart'; // Importamos la gráfica
import AnimatedNumber from './AnimatedNumber';     // Importamos los números

// ... (Tus otros componentes como SegmentationCard, StakeholdersCard se quedan igual) ...

// --- COLUMNA 1: DETALLES ---
export const SegmentationCard = () => (
    <div className="bg-surface-dark border border-border-dark">
        <div className="bg-surface-light px-4 py-2 border-b border-border-dark"><h3 className="text-primary text-xs font-bold uppercase">Account Segmentation</h3></div>
        <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono uppercase">VIP Customer</span>
                <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-mono uppercase">SaaS Sector</span>
                <span className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-300 text-[10px] font-mono uppercase">High Risk</span>
            </div>
            <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-primary">Cloud Provider</span><span className="text-text-secondary font-mono">AWS</span></div>
                <div className="flex justify-between"><span className="text-primary">SSO Enabled</span><span className="text-green-400 font-mono">TRUE</span></div>
                <div className="flex justify-between"><span className="text-primary">MFA Active</span><span className="text-green-400 font-mono">TRUE</span></div>
            </div>
        </div>
    </div>
);

export const StakeholdersCard = () => (
    <div className="bg-surface-dark border border-border-dark">
        <div className="bg-surface-light px-4 py-2 border-b border-border-dark flex justify-between"><h3 className="text-primary text-xs font-bold uppercase">Stakeholders</h3><button className="text-primary">+</button></div>
        <div className="divide-y divide-border-dark">
            <div className="p-3 hover:bg-surface-dark/60 transition-colors">
                <div className="flex justify-between mb-1"><p className="text-primary text-sm font-medium">Sofia Rodriguez</p><span className="text-[10px] bg-primary/20 text-primary px-1 rounded">DECISION MAKER</span></div>
                <p className="text-text-secondary text-xs">CTO</p>
            </div>
            <div className="p-3 hover:bg-surface-dark/60 transition-colors">
                <div className="flex justify-between mb-1"><p className="text-primary text-sm font-medium">Carlos Mendez</p><span className="text-[10px] bg-blue-500/20 text-blue-300 px-1 rounded">BILLING</span></div>
                <p className="text-text-secondary text-xs">Finance Lead</p>
            </div>
            <div className="p-3 hover:bg-surface-dark/60 transition-colors">
                <div className="flex justify-between mb-1"><p className="text-primary text-sm font-medium">Ana Chang</p><span className="text-[10px] bg-orange-500/20 text-orange-300 px-1 rounded">INFLUENCER</span></div>
                <p className="text-text-secondary text-xs">Head of Product</p>
            </div>
        </div>
    </div>
);

// --- COLUMNA 2: METRICAS ---

// Import Revenue Pie Chart
import RevenuePieChart from './RevenuePieChart';

export const RevenuePieCard = () => (
    <div className="bg-surface-dark border border-border-dark p-5 h-[300px] flex flex-col">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-primary text-sm font-bold uppercase tracking-wide">Revenue Distribution</h3>
        </div>
        <div className="flex-1 w-full">
            <RevenuePieChart />
        </div>
    </div>
);

// --- WIDGET ACTUALIZADO CON GRÁFICA REAL ---
export const TrendsCard = () => (
    <div className="bg-surface-dark border border-border-dark p-5 h-[350px] flex flex-col">
        <div className="flex justify-between items-center mb-4">
            <div>
                <h3 className="text-primary text-sm font-bold uppercase tracking-wide">Platform Usage Trends</h3>
                <p className="text-text-secondary text-xs mt-1">API Calls, Sessions & Errors</p>
            </div>
        </div>

        {/* Aquí va la gráfica de Recharts */}
        <div className="flex-1 w-full">
            <UsageTrendsChart />
        </div>
    </div>
);

export const InteractionTable = () => (
    <div className="bg-surface-dark border border-border-dark flex-1">
        <table className="w-full text-left text-xs">
            <thead className="bg-surface-light/5 text-text-secondary font-medium border-b border-border-dark">
                <tr>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Channel</th>
                    <th className="px-4 py-2">Topic</th>
                    <th className="px-4 py-2 text-right">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
                <tr className="hover:bg-surface-dark/50"><td className="px-4 py-3 text-text-secondary">Today</td><td className="px-4 py-3 text-primary">📧 Email</td><td className="px-4 py-3 text-text-secondary">Re: Upgrade</td><td className="px-4 py-3 text-right text-green-400">DELIVERED</td></tr>
                <tr className="hover:bg-surface-dark/50"><td className="px-4 py-3 text-text-secondary">Yesterday</td><td className="px-4 py-3 text-primary">🎙️ Audio</td><td className="px-4 py-3 text-text-secondary">Scaling call</td><td className="px-4 py-3 text-right text-primary">COMPLETED</td></tr>
                <tr className="hover:bg-surface-dark/50"><td className="px-4 py-3 text-text-secondary">Dec 12, 10:00</td><td className="px-4 py-3 text-primary">📝 Note</td><td className="px-4 py-3 text-text-secondary">Contract Review</td><td className="px-4 py-3 text-right text-yellow-400">PENDING</td></tr>
                <tr className="hover:bg-surface-dark/50"><td className="px-4 py-3 text-text-secondary">Dec 10, 14:30</td><td className="px-4 py-3 text-primary">🚨 Alert</td><td className="px-4 py-3 text-text-secondary">API Rate Limit</td><td className="px-4 py-3 text-right text-red-400">RESOLVED</td></tr>
            </tbody>
        </table>
    </div>
);

// --- WIDGET DE SENTIMIENTO CON ANIMACIÓN DE BARRA ---
export const SentimentCard = () => (
    <div className="bg-surface-dark border border-border-dark p-5">
        <div className="flex justify-between mb-4">
            <h3 className="text-primary text-xs font-bold uppercase">Sentiment</h3>
            <span className="text-green-400 text-xs font-bold animate-pulse">POSITIVE</span>
        </div>

        {/* Barra de progreso animada con CSS puro */}
        <div className="relative h-2 bg-background-dark rounded-full overflow-hidden mb-4">
            <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
                style={{ width: '0%', animation: 'growBar 1.5s ease-out forwards' }}
            ></div>
            {/* Definimos la animación keyframe inline o en tu CSS global */}
            <style>{`
                @keyframes growBar { from { width: 0%; } to { width: 85%; } }
            `}</style>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-surface-light p-3 border border-border-dark">
                <span className="text-2xl font-bold text-primary block">
                    <AnimatedNumber value="9" />
                </span>
                <span className="text-[10px] text-text-secondary">NPS Score</span>
            </div>
            <div className="bg-surface-light p-3 border border-border-dark">
                <span className="text-2xl font-bold text-primary block">
                    <AnimatedNumber value="4.8" />
                </span>
                <span className="text-[10px] text-text-secondary">CSAT</span>
            </div>
        </div>
    </div>
);

export const TechnicalHealthCard = () => (
    <div className="bg-surface-dark border border-border-dark p-5">
        <div className="mb-4 border-b border-border-dark pb-2"><h3 className="text-primary text-xs font-bold uppercase">Technical Health</h3></div>
        <div className="space-y-4">
            <div><div className="flex justify-between text-xs mb-1"><span className="text-text-secondary">API Usage</span><span className="text-primary">82%</span></div><div className="w-full bg-background-dark h-1.5 rounded-full"><div className="bg-orange-500 w-[82%] h-full"></div></div></div>
            <div><div className="flex justify-between text-xs mb-1"><span className="text-text-secondary">Storage</span><span className="text-primary">42%</span></div><div className="w-full bg-background-dark h-1.5 rounded-full"><div className="bg-primary w-[42%] h-full"></div></div></div>
            <div><div className="flex justify-between text-xs mb-1"><span className="text-text-secondary">Webhook Success</span><span className="text-primary">99.9%</span></div><div className="w-full bg-background-dark h-1.5 rounded-full"><div className="bg-green-500 w-[99.9%] h-full"></div></div></div>
        </div>
    </div>
);
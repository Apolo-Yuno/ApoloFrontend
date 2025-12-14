import React from 'react';

// --- COLUMNA 1: DETALLES ---
export const SegmentationCard = () => (
    <div className="bg-surface-dark/40 border border-[#2f2839]">
        <div className="bg-[#25202e] px-4 py-2 border-b border-[#2f2839]"><h3 className="text-white text-xs font-bold uppercase">Account Segmentation</h3></div>
        <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono uppercase">VIP Customer</span>
                <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-mono uppercase">SaaS Sector</span>
            </div>
            <div className="space-y-2 text-xs">
                <div className="flex justify-between"><span className="text-white">Cloud Provider</span><span className="text-text-secondary font-mono">AWS</span></div>
                <div className="flex justify-between"><span className="text-white">SSO Enabled</span><span className="text-green-400 font-mono">TRUE</span></div>
            </div>
        </div>
    </div>
);

export const StakeholdersCard = () => (
    <div className="bg-surface-dark/40 border border-[#2f2839]">
        <div className="bg-[#25202e] px-4 py-2 border-b border-[#2f2839] flex justify-between"><h3 className="text-white text-xs font-bold uppercase">Stakeholders</h3><button className="text-primary">+</button></div>
        <div className="divide-y divide-[#2f2839]">
            <div className="p-3 hover:bg-surface-dark/60 transition-colors">
                <div className="flex justify-between mb-1"><p className="text-white text-sm font-medium">Sofia Rodriguez</p><span className="text-[10px] bg-primary/20 text-primary px-1 rounded">DECISION MAKER</span></div>
                <p className="text-text-secondary text-xs">CTO</p>
            </div>
        </div>
    </div>
);

// --- COLUMNA 2: METRICAS ---
export const TrendsCard = () => (
    <div className="bg-surface-dark/40 border border-[#2f2839] p-5">
        <h3 className="text-white text-sm font-bold uppercase mb-6">Platform Usage Trends</h3>
        <div className="flex items-end justify-between gap-2 h-40 w-full px-2">
            {[20, 35, 45, 50, 40, 60, 65, 55, 70, 80, 75, 85].map((h, i) => (
                <div key={i} className="w-full bg-primary rounded-sm opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
            ))}
        </div>
    </div>
);

export const InteractionTable = () => (
    <div className="bg-surface-dark/40 border border-[#2f2839] flex-1">
        <div className="bg-[#25202e] px-4 py-3 border-b border-[#2f2839]"><h3 className="text-white text-xs font-bold uppercase">Interaction Log</h3></div>
        <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-[#2f2839]">
                <tr className="hover:bg-surface-dark/50"><td className="px-4 py-3 text-text-secondary">Today</td><td className="px-4 py-3 text-white">📧 Email</td><td className="px-4 py-3 text-text-secondary">Re: Upgrade</td><td className="px-4 py-3 text-right text-green-400">DELIVERED</td></tr>
                <tr className="hover:bg-surface-dark/50"><td className="px-4 py-3 text-text-secondary">Yesterday</td><td className="px-4 py-3 text-white">🎙️ Audio</td><td className="px-4 py-3 text-text-secondary">Scaling call</td><td className="px-4 py-3 text-right text-white">COMPLETED</td></tr>
            </tbody>
        </table>
    </div>
);

// --- COLUMNA 3: ESTADO ---
export const SentimentCard = () => (
    <div className="bg-surface-dark/40 border border-[#2f2839] p-5">
        <div className="flex justify-between mb-4"><h3 className="text-white text-xs font-bold uppercase">Sentiment</h3><span className="text-green-400 text-xs font-bold">POSITIVE</span></div>
        <div className="relative h-2 bg-[#141118] rounded-full overflow-hidden mb-4"><div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-[85%]"></div></div>
        <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-[#25202e] p-3 border border-[#2f2839]"><span className="text-2xl font-bold text-white">9</span><span className="block text-[10px] text-text-secondary">NPS</span></div>
            <div className="bg-[#25202e] p-3 border border-[#2f2839]"><span className="text-2xl font-bold text-white">4.8</span><span className="block text-[10px] text-text-secondary">CSAT</span></div>
        </div>
    </div>
);

export const TechnicalHealthCard = () => (
    <div className="bg-surface-dark/40 border border-[#2f2839] p-5">
        <div className="mb-4 border-b border-[#2f2839] pb-2"><h3 className="text-white text-xs font-bold uppercase">Technical Health</h3></div>
        <div className="space-y-4">
            <div><div className="flex justify-between text-xs mb-1"><span className="text-text-secondary">API Usage</span><span className="text-white">82%</span></div><div className="w-full bg-[#141118] h-1.5 rounded-full"><div className="bg-orange-500 w-[82%] h-full"></div></div></div>
            <div><div className="flex justify-between text-xs mb-1"><span className="text-text-secondary">Storage</span><span className="text-white">42%</span></div><div className="w-full bg-[#141118] h-1.5 rounded-full"><div className="bg-primary w-[42%] h-full"></div></div></div>
        </div>
    </div>
);
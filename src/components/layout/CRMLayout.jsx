import React from 'react';



export const CRMHeader = () => (
    <header className="bg-[#141118] border-b border-[#2f2839] px-6 pt-6 pb-0 flex-shrink-0 z-10">
        <div className="max-w-[1600px] mx-auto w-full pb-6 flex flex-col gap-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-text-secondary text-xs font-medium font-mono">
                <span>ACCOUNTS</span><span className="material-symbols-outlined text-sm">chevron_right</span>
                <span>ENTERPRISE</span><span className="material-symbols-outlined text-sm">chevron_right</span>
                <span className="text-primary">ZOOP</span>
            </div>

            {/* Info Principal */}
            <div className="flex flex-col xl:flex-row gap-6 justify-between items-start xl:items-center">
                <div className="flex gap-4 items-center">
                    <div className="size-14 rounded bg-[#25202e] flex items-center justify-center text-primary border border-primary/20">
                        <span className="material-symbols-outlined text-3xl">domain</span>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-white mb-0.5">Zoop</h1>
                        <div className="flex items-center gap-4 text-xs text-text-secondary font-mono">
                            <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">key</span> ID: 8492-AX</span>
                            <span className="text-green-400 font-bold">| ACTIVE</span>
                        </div>
                    </div>
                </div>
                {/* Stats Header */}
                <div className="flex items-center divide-x divide-[#2f2839] bg-surface-dark/30 rounded-lg border border-[#2f2839]">
                    <StatBox label="Health Score" value="92" subValue="2%" subColor="text-green-400" icon="arrow_upward" />
                    <StatBox label="ARR" value="$150,000" />
                    <StatBox label="Renewal" value="Nov 20" subValue="35 Days" subColor="text-yellow-500" />
                </div>
            </div>
        </div>
    </header>
);

const StatBox = ({ label, value, subValue, subColor, icon }) => (
    <div className="px-6 py-2">
        <p className="text-[10px] text-text-secondary uppercase tracking-wider mb-0.5">{label}</p>
        <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">{value}</span>
            {subValue && <span className={`text-xs ${subColor} flex items-center`}>{icon && <span className="material-symbols-outlined text-sm">{icon}</span>} {subValue}</span>}
        </div>
    </div>
);
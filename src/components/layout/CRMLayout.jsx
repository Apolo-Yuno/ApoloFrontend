import React from 'react';
import AnimatedNumber from '../crm/AnimatedNumber';

// --- SIDEBAR (Se mantiene igual, necesaria para el layout) ---
export const CRMSidebar = () => (
    <aside className="w-64 bg-[#141118] border-r border-[#2f2839] flex-shrink-0 flex flex-col h-full overflow-y-auto hidden md:flex">
        <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/20 p-2 rounded-lg border border-primary/20">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                </div>
                <h1 className="text-xl font-bold tracking-tight text-white">Nexus Data</h1>
            </div>
            <nav className="flex flex-col gap-2">
                {['Overview', 'Accounts', 'Sales Performance', 'Support Tickets', 'Predictive AI'].map((item, i) => (
                    <a key={item} href="#" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${i === 1 ? 'bg-surface-dark text-white border border-primary/10' : 'text-text-secondary hover:bg-surface-dark hover:text-white'}`}>
                        <span className="material-symbols-outlined text-xl">{['dashboard', 'corporate_fare', 'trending_up', 'confirmation_number', 'query_stats'][i]}</span>
                        <span className="font-medium text-sm">{item}</span>
                    </a>
                ))}
            </nav>
        </div>
    </aside>
);

// --- HEADER ACTUALIZADO CON ANIMACIONES ---
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

                {/* Stats Header (Ahora usa el StatBox animado) */}
                <div className="flex items-center divide-x divide-[#2f2839] bg-surface-dark/30 rounded-lg border border-[#2f2839]">
                    <StatBox label="Health Score" value="92" subValue="2%" subColor="text-green-400" icon="arrow_upward" />
                    <StatBox label="ARR" value="$150,000" />
                    <StatBox label="Renewal" value="Nov 20" subValue="35 Days" subColor="text-yellow-500" />
                </div>
            </div>
        </div>
    </header>
);

// --- COMPONENTE INTERNO STATBOX CON LÓGICA DE ANIMACIÓN ---
const StatBox = ({ label, value, subValue, subColor, icon }) => (
    <div className="px-6 py-2">
        <p className="text-[10px] text-text-secondary uppercase tracking-wider mb-0.5">{label}</p>
        <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">
                {/* CASO 1: Es Dinero ($) -> Animamos con prefijo */}
                {value.toString().includes('$') ? (
                    <AnimatedNumber value={value} prefix="$" />
                ) :
                    /* CASO 2: Es un número simple (92) -> Animamos */
                    (!isNaN(parseFloat(value)) && !value.toString().includes('Nov')) ? (
                        <AnimatedNumber value={value} />
                    ) : (
                        /* CASO 3: Es Fecha (Nov 20) -> Texto estático */
                        value
                    )}
            </span>

            {subValue && (
                <span className={`text-xs ${subColor} flex items-center animate-pulse`}>
                    {icon && <span className="material-symbols-outlined text-sm">{icon}</span>}
                    {subValue}
                </span>
            )}
        </div>
    </div>
);
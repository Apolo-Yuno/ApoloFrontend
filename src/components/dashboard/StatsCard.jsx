// StatsCard Component
import React from 'react';
import { useMerchant } from '../../context/MerchantContext';

const StatsCard = () => {
    const { merchant } = useMerchant();
    const methods = merchant.context?.paymentMethods || [];

    return (
        <div className="rounded-2xl bg-surface-dark border border-border-dark p-6 flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-secondary">monitoring</span>
                    Salud Comercial
                </h3>
                <button className="text-xs font-bold text-primary hover:text-white transition-colors">AUDITORÍA</button>
            </div>

            <div className="flex items-center gap-8 flex-1">
                {/* Gráfico circular CSS */}
                <div className="relative size-32 flex items-center justify-center shrink-0">
                    <svg className="size-full rotate-[-90deg]" viewBox="0 0 36 36">
                        <path className="text-surface-light" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                        <path className="text-primary drop-shadow-[0_0_5px_rgba(192,132,252,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92, 100" strokeLinecap="round" strokeWidth="3"></path>
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">92</span>
                        <span className="text-[10px] text-text-secondary font-bold tracking-widest">SCORE</span>
                    </div>
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <div className="flex justify-between items-center border-b border-border-dark/50 pb-2">
                        <span className="text-text-secondary text-xs uppercase font-bold tracking-wider">Contrato</span>
                        <span className="text-white font-bold text-sm">Enterprise V2.0</span>
                    </div>
                    {/* Estos datos podrían venir también del backend */}
                    <div className="flex justify-between items-center pb-1">
                        <span className="text-text-secondary text-xs uppercase font-bold tracking-wider">Volumen Est.</span>
                        <span className="text-primary font-bold text-sm">$50k USD</span>
                    </div>
                </div>
            </div>

            <div className="bg-surface-light/50 rounded-xl p-3 flex justify-between items-center mt-auto">
                <span className="text-xs text-text-secondary font-medium">Métodos Activos:</span>
                <div className="flex -space-x-2">
                    {methods.length > 0 ? methods.map((m) => (
                        <div key={m} className="size-6 rounded-full bg-white flex items-center justify-center shadow-sm border border-border-dark relative z-10 text-[8px] text-black font-bold">
                            {m.substring(0, 3)}
                        </div>
                    )) : <span className="text-xs text-gray-500">Pendiente...</span>}
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
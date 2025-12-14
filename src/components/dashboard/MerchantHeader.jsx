import React from 'react';
import { useMerchant } from '../../context/MerchantContext';
import LifecycleProgress from './LifecycleProgress';

const MerchantHeader = () => {
    const { merchant } = useMerchant();


    const currentStage = merchant.stage || 'SALES';

    return (
        <div className="flex flex-col gap-6 border-b border-border-dark pb-8">
            {/* 1. TÍTULO Y DATOS PRINCIPALES */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2 text-primary">
                        <span className="material-symbols-outlined text-lg">verified</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Ficha Viva del Merchant</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">{merchant.name}</h1>
                    <div className="flex items-center gap-3 mt-3 text-sm text-text-secondary">
                        <span className="bg-surface-light px-2 py-1 rounded border border-border-dark">ID: {merchant.id}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                            <span className="size-1.5 bg-green-400 rounded-full animate-pulse"></span>
                            {merchant.lastUpdate}
                        </span>
                    </div>
                </div>

                {/* BOTONES DE ACCIÓN */}
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 rounded-lg bg-surface-light hover:bg-border-dark border border-border-dark text-white text-sm font-medium transition-colors flex items-center gap-2">
                        <span className="material-symbols-outlined text-lg">edit</span> Editar
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-lg shadow-primary/25 transition-all transform active:scale-95">
                        Ver Contrato
                    </button>
                </div>
            </div>



            <div className="bg-surface-light/30 border border-border-dark rounded-2xl p-6 mt-2">
                <LifecycleProgress currentStage={currentStage} />
            </div>
        </div>
    );
};

export default MerchantHeader;
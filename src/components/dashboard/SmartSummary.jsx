// SmartSummary Component
import React from 'react';
import { useMerchant } from '../../context/MerchantContext';

const SmartSummary = () => {
    const { merchant } = useMerchant();

    return (
        <div className="rounded-2xl bg-surface-dark border border-border-dark p-6 lg:p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500"></div>
            <div className="flex gap-4 items-start">
                <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined icon-filled">auto_awesome</span>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Resumen Inteligente</h3>
                    <p className="text-gray-300 leading-relaxed">
                        {merchant?.summary}
                    </p>

                    {merchant.context?.riskNotes && (
                        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                            <h4 className="text-xs font-bold text-red-400 uppercase mb-1 flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">warning</span> Alerta de Riesgo
                            </h4>
                            <p className="text-xs text-red-200">{merchant.context.riskNotes}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SmartSummary;
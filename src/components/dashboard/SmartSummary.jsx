// SmartSummary Component
import React from 'react';
import { useMerchant } from '../../context/MerchantContext';

const SmartSummary = () => {
    const { merchant } = useMerchant();
    const ctx = merchant.context || {};

    // Normalizar acceso a la data dependiendo de la estructura
    const riskNotes = ctx.riskData?.notes || ctx.riskNotes;
    const countries = ctx.countries || [];
    const paymentMethods = ctx.paymentMethods || [];
    const providers = ctx.providers || [];

    return (
        <div className="rounded-2xl bg-surface-dark border border-border-dark p-6 lg:p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-blue-500"></div>
            <div className="flex flex-col gap-6">

                {/* Header y Resumen Principal */}
                <div className="flex gap-4 items-start">
                    <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined icon-filled">auto_awesome</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-text-primary mb-2">Smart Summary</h3>
                        <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                            {merchant?.summary || "No summary available yet."}
                        </p>
                    </div>
                </div>

                {/* Detalles Estructurados */}
                {(countries.length > 0 || paymentMethods.length > 0 || providers.length > 0) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 pl-14">
                        {countries.length > 0 && (
                            <div className="bg-surface-light/5 rounded-lg p-3">
                                <h4 className="text-xs font-bold text-text-secondary uppercase mb-2">Markets</h4>
                                <div className="flex flex-wrap gap-2">
                                    {countries.map(c => (
                                        <span key={c} className="px-2 py-1 bg-blue-500/20 text-blue-600 rounded text-xs border border-blue-200">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {paymentMethods.length > 0 && (
                            <div className="bg-surface-light/5 rounded-lg p-3">
                                <h4 className="text-xs font-bold text-text-secondary uppercase mb-2">Payment Methods</h4>
                                <div className="flex flex-wrap gap-2">
                                    {paymentMethods.map(pm => (
                                        <span key={pm} className="px-2 py-1 bg-purple-500/20 text-purple-600 rounded text-xs border border-purple-200">
                                            {pm}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Alertas de Riesgo */}
                {riskNotes && (
                    <div className="ml-14 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <h4 className="text-xs font-bold text-red-400 uppercase mb-1 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">warning</span> Risk Alert
                        </h4>
                        <p className="text-xs text-red-600">{riskNotes}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SmartSummary;
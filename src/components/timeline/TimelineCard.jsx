import React from 'react';

const TimelineCard = ({ data, isLast }) => {
    const { author, role, timestamp, content, type, sourceType } = data;
    const isSystem = type === 'SYSTEM';

    // CONFIGURACIÓN VISUAL SEGÚN EL TIPO DE INTERACCIÓN
    // Esto es clave para el "Timeline Unificado"
    const typeConfig = {
        'CALL': { icon: 'call', color: 'text-orange-600', bg: 'bg-orange-600/10', border: 'border-orange-600/20' },
        'EMAIL': { icon: 'mail', color: 'text-blue-600', bg: 'bg-blue-600/10', border: 'border-blue-600/20' },
        'CONTRACT': { icon: 'description', color: 'text-purple-600', bg: 'bg-purple-600/10', border: 'border-purple-600/20' },
        'NOTE': { icon: 'edit_note', color: 'text-gray-600', bg: 'bg-gray-600/10', border: 'border-gray-600/20' },
        'SYSTEM': { icon: 'smart_toy', color: 'text-emerald-600', bg: 'bg-emerald-600/10', border: 'border-emerald-600/20' }
    };


    const config = isSystem ? typeConfig['SYSTEM'] : (typeConfig[sourceType] || typeConfig['NOTE']);

    return (
        <div className="flex gap-4 relative group">

            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-border-dark group-last:hidden"></div>
            )}


            <div className="shrink-0 relative z-10">
                <div className={`size-10 rounded-full flex items-center justify-center ring-2 ring-white shadow-lg transition-all ${config.bg} ${config.border} border`}>
                    <span className={`material-symbols-outlined text-[18px] ${config.color}`}>
                        {config.icon}
                    </span>
                </div>
            </div>

            {/* CONTENIDO DE LA TARJETA */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-text-primary truncate">{author}</span>
                        <span className="text-[10px] text-text-secondary border border-border-dark px-1.5 rounded bg-surface-dark/50 hidden sm:inline-block">
                            {role || 'User'}
                        </span>
                    </div>
                    <span className="text-[10px] font-mono text-text-secondary whitespace-nowrap ml-2">
                        {timestamp}
                    </span>
                </div>


                <div className={`relative p-3 rounded-r-xl rounded-bl-xl text-sm shadow-sm leading-relaxed border bg-surface-dark ${isSystem ? 'border-emerald-500/30' : 'border-border-dark'}`}>


                    {isSystem && <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl"></div>}

                    <p className={`text-text-secondary ${isSystem ? 'pl-2' : ''}`}>
                        {content}
                    </p>


                    {!isSystem && (
                        <div className="mt-2 flex items-center gap-1">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${config.bg} ${config.color} uppercase tracking-wider`}>
                                {sourceType || 'NOTE'}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;
import React from 'react';

const TimelineCard = ({ data, isLast }) => {
    const { author, role, timestamp, content, type, sourceType } = data;
    const isSystem = type === 'SYSTEM';

    // CONFIGURACIÓN VISUAL SEGÚN EL TIPO DE INTERACCIÓN
    // Esto es clave para el "Timeline Unificado"
    const typeConfig = {
        'CALL': { icon: 'call', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
        'EMAIL': { icon: 'mail', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
        'CONTRACT': { icon: 'description', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
        'NOTE': { icon: 'edit_note', color: 'text-gray-400', bg: 'bg-gray-500/10', border: 'border-gray-500/20' },
        'SYSTEM': { icon: 'smart_toy', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' }
    };

    // Determinar configuración actual (fallback a NOTE si no existe)
    // Si es SYSTEM, forzamos la config de sistema, sino usamos el sourceType
    const config = isSystem ? typeConfig['SYSTEM'] : (typeConfig[sourceType] || typeConfig['NOTE']);

    return (
        <div className="flex gap-4 relative group">
            {/* LÍNEA CONECTORA VERTICAL (El "Hilo" del tiempo) */}
            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-border-dark group-last:hidden"></div>
            )}

            {/* ÍCONO INDICADOR (Burbuja izquierda) */}
            <div className="shrink-0 relative z-10">
                <div className={`size-10 rounded-full flex items-center justify-center ring-2 ring-[#150f1f] shadow-lg transition-all ${config.bg} ${config.border} border`}>
                    <span className={`material-symbols-outlined text-[18px] ${config.color}`}>
                        {config.icon}
                    </span>
                </div>
            </div>

            {/* CONTENIDO DE LA TARJETA */}
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white truncate">{author}</span>
                        <span className="text-[10px] text-text-secondary border border-border-dark px-1.5 rounded bg-surface-dark/50 hidden sm:inline-block">
                            {role || 'User'}
                        </span>
                    </div>
                    <span className="text-[10px] font-mono text-text-secondary whitespace-nowrap ml-2">
                        {timestamp}
                    </span>
                </div>

                {/* BURBUJA DE TEXTO */}
                <div className={`relative p-3 rounded-r-xl rounded-bl-xl text-sm shadow-sm leading-relaxed border bg-surface-dark ${isSystem ? 'border-emerald-500/30' : 'border-border-dark'}`}>

                    {/* Decoración para mensajes del sistema */}
                    {isSystem && <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl"></div>}

                    <p className={`text-gray-300 ${isSystem ? 'pl-2' : ''}`}>
                        {content}
                    </p>

                    {/* Etiqueta del tipo (opcional, ayuda al contexto) */}
                    {!isSystem && (
                        <div className="mt-2 flex items-center gap-1">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${config.bg} ${config.color} uppercase tracking-wider`}>
                                {sourceType || 'NOTA'}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;
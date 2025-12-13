// TimelineCard Component
import React from 'react';

const TimelineCard = ({ data }) => {
    const { author, role, timestamp, content, type } = data;

    const isSystem = type === 'SYSTEM';

    // Estilos dinámicos basados en quién habla
    const avatarGradient = isSystem
        ? "from-emerald-600 to-emerald-800 shadow-emerald-900/20"
        : "from-blue-600 to-blue-800 shadow-blue-900/20";

    const borderClass = isSystem
        ? "border-emerald-900/50"
        : "border-border-dark";

    const avatarText = isSystem
        ? <span className="material-symbols-outlined text-base">smart_toy</span>
        : (author[0] + (author[1] || ''));

    return (
        <div className="flex gap-4 relative group">
            <div className="absolute left-[19px] top-10 bottom-[-24px] w-[2px] bg-border-dark group-last:hidden"></div>
            <div className="shrink-0 relative z-10">
                <div className={`size-10 rounded-full bg-gradient-to-br ${avatarGradient} flex items-center justify-center text-white font-bold text-xs shadow-lg ring-2 ring-[#150f1f]`}>
                    {avatarText}
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-sm text-white">{author} <span className="font-normal text-text-secondary text-xs ml-1">{role}</span></span>
                    <span className="text-[10px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">{timestamp}</span>
                </div>
                <div className={`bg-surface-dark border ${borderClass} p-3 rounded-r-xl rounded-bl-xl text-sm text-gray-300 shadow-sm leading-relaxed relative overflow-hidden`}>
                    {isSystem && <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>}
                    {content}
                </div>
            </div>
        </div>
    );
};

export default TimelineCard;
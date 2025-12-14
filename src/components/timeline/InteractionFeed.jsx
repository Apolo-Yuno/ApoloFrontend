import React, { useEffect, useRef } from 'react';
import TimelineCard from './TimelineCard';
import { useMerchant } from '../../context/MerchantContext';

const InteractionFeed = () => {
    const { history } = useMerchant();
    const bottomRef = useRef(null);

    // Auto-scroll al fondo cuando llega un nuevo mensaje
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    if (history.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-48 text-text-secondary opacity-50">
                <span className="material-symbols-outlined text-4xl mb-2">history_edu</span>
                <span className="text-sm">El historial está vacío</span>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
            {/* Renderizado Inverso: Lo más nuevo arriba o abajo según prefieras. 
                Aquí asumimos orden cronológico (nuevo abajo) para chat style */}

            {[...history].reverse().map((interaction, index) => (
                <TimelineCard
                    key={index}
                    data={interaction}
                    isLast={index === history.length - 1}
                />
            ))}
            <div ref={bottomRef} />
        </div>
    );
};

export default InteractionFeed;
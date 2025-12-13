// InteractionFeed Component
import React from 'react';
import TimelineCard from './TimelineCard';
import { useMerchant } from '../../context/MerchantContext';

const InteractionFeed = () => {
    const { history } = useMerchant();

    if (history.length === 0) {
        return <div className="p-8 text-center text-text-secondary text-sm">No hay interacciones aún.</div>;
    }

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {history.map((interaction, index) => (
                <TimelineCard key={index} data={interaction} />
            ))}
        </div>
    );
};

export default InteractionFeed;
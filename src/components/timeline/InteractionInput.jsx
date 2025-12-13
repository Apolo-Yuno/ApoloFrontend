// InteractionInput Component
import React, { useState } from 'react';
import { useMerchant } from '../../context/MerchantContext';
import { INTERACTION_TYPES } from '../../constants/interactionTypes';

const InteractionInput = () => {
    const [text, setText] = useState('');
    const [type, setType] = useState(INTERACTION_TYPES.NOTE.value);
    const { handleIngest, loading } = useMerchant();

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (!text.trim()) return;
        handleIngest(text, type);
        setText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSubmit(e);
        }
    };

    return (
        <div className="p-4 bg-surface-dark/50 border-b border-border-dark">
            <form className="relative" onSubmit={handleSubmit}>
                <div className="flex gap-2 mb-2">
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="bg-surface-dark border border-border-dark rounded-lg text-xs text-text-secondary py-1 px-2 focus:ring-primary focus:border-primary"
                    >
                        {Object.values(INTERACTION_TYPES).map((interactionType) => (
                            <option key={interactionType.value} value={interactionType.value}>
                                {interactionType.label}
                            </option>
                        ))}
                    </select>
                </div>
                <textarea
                    className="w-full h-24 bg-surface-dark border border-border-dark rounded-xl p-3 text-sm text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Registrar nueva interacción... (ej: 'El cliente quiere PSE en Colombia')"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                ></textarea>
                <button
                    type="submit"
                    disabled={loading}
                    className="absolute bottom-2 right-2 bg-primary hover:bg-primary-dark text-white rounded-lg p-2 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                    <span className="material-symbols-outlined text-[20px] block">
                        {loading ? 'hourglass_empty' : 'send'}
                    </span>
                </button>
            </form>
        </div>
    );
};

export default InteractionInput;
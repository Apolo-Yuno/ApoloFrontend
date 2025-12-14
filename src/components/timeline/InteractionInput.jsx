// InteractionInput Component
import React, { useState } from 'react';
import { useMerchant } from '../../context/MerchantContext';
import { INTERACTION_TYPES } from '../../constants/interactionTypes';

const InteractionInput = () => {
    const [text, setText] = useState('');
    const [type, setType] = useState(INTERACTION_TYPES.NOTE.value);
    const [file, setFile] = useState(null);
    const { handleIngest, loading } = useMerchant();

    const handleSubmit = (e) => {
        if (e) e.preventDefault();

        // Si hay archivo, enviamos el audio real
        if (type === INTERACTION_TYPES.CALL.value && file) {
            handleIngest(file, type);
            setText('');
            setFile(null);
            return;
        }

        if (!text.trim()) return;
        handleIngest(text, type);
        setText('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    // Manejador de cambio de archivo
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div className="p-4 bg-surface-dark/50 border-b border-border-dark">
            <form className="relative" onSubmit={handleSubmit}>
                <div className="flex gap-2 mb-2">
                    <select
                        value={type}
                        onChange={(e) => {
                            setType(e.target.value);
                            setFile(null);
                        }}
                        className="bg-surface-dark border border-border-dark rounded-lg text-xs text-text-secondary py-1 px-2 focus:ring-primary focus:border-primary"
                    >
                        {Object.values(INTERACTION_TYPES).map((interactionType) => (
                            <option key={interactionType.value} value={interactionType.value}>
                                {interactionType.label}
                            </option>
                        ))}
                    </select>
                </div>


                {type === INTERACTION_TYPES.CALL.value ? (
                    <div className="w-full h-24 bg-surface-dark border border-dashed border-border-dark rounded-xl p-3 flex flex-col items-center justify-center text-text-secondary hover:bg-surface-light/5 transition-colors relative cursor-pointer group">
                        <input
                            type="file"
                            accept=".mp3,audio/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                        />
                        {file ? (
                            <div className="flex items-center gap-2 text-white">
                                <span className="material-symbols-outlined text-green-400">audio_file</span>
                                <span className="text-sm font-medium">{file.name}</span>
                                <button
                                    type="button"
                                    onClick={(e) => { e.preventDefault(); setFile(null); }}
                                    className="z-10 bg-surface-dark rounded-full p-1 hover:text-red-400"
                                >
                                    <span className="material-symbols-outlined text-base">close</span>
                                </button>
                            </div>
                        ) : (
                            <>
                                <span className="material-symbols-outlined text-3xl mb-1 text-primary/50 group-hover:text-primary transition-colors">cloud_upload</span>
                                <span className="text-xs">Arrastra tu MP3 o haz clic para subir</span>
                            </>
                        )}
                    </div>
                ) : (
                    <textarea
                        className="w-full h-24 bg-surface-dark border border-border-dark rounded-xl p-3 text-sm text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Registrar nueva interacción... (ej: 'El cliente quiere PSE en Colombia')"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                    ></textarea>
                )}

                <button
                    type="submit"
                    disabled={loading || (type === INTERACTION_TYPES.CALL.value && !file) || (type !== INTERACTION_TYPES.CALL.value && !text.trim())}
                    className="absolute bottom-2 right-2 bg-primary hover:bg-primary-dark text-white rounded-lg p-2 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
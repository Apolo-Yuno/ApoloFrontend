// MerchantContext - Global State Management
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ingestText, getMerchantData, ingestAudio } from '../services/api';

const MerchantContext = createContext();

export const MerchantProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    // Estado inicial visual (Placeholder mientras carga o se crea)
    const [merchant, setMerchant] = useState({
        name: 'Zoop',
        id: 'MER-8821-XYS',
        stage: 'SALES',
        summary: 'Waiting for first interaction to generate context...',
        context: {
            countries: [],
            providers: [],
            paymentMethods: [],
            riskNotes: ''
        },
        lastUpdate: 'A moment ago'
    });

    // Historial simulado inicial (puedes vaciarlo si prefieres)
    const [history, setHistory] = useState([]);

    const handleIngest = async (content, type) => {
        setLoading(true);
        // Agregar optimísticamente al historial (Feedback instantáneo)
        const isFile = content instanceof File;
        const displayContent = isFile ? `[Audio Uploaded] ${content.name}` : content;

        const newInteraction = {
            author: 'Tú',
            role: 'Sales',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            content: displayContent,
            type: 'USER',
            sourceType: type
        };
        setHistory(prev => [newInteraction, ...prev]);

        try {
            let updatedMerchant;
            // Llamada real al backend
            if (isFile) {
                updatedMerchant = await ingestAudio(content);
            } else {
                updatedMerchant = await ingestText(content, type, merchant.name);
            }

            if (!updatedMerchant) throw new Error("Invalid server response");

            setMerchant(prev => ({
                ...prev,
                id: updatedMerchant.id || prev.id,
                name: updatedMerchant.name || prev.name,
                stage: updatedMerchant.lifeCicleState || prev.stage,
                summary: (prev.summary && !prev.summary.startsWith('Waiting') && updatedMerchant.merchantContext?.lastSummary)
                    ? `${prev.summary}\n\n• ${updatedMerchant.merchantContext.lastSummary}`
                    : (updatedMerchant.merchantContext?.lastSummary || prev.summary),
                context: updatedMerchant.merchantContext || prev.context,
                lastUpdate: 'A few seconds ago'
            }));

            // Si el backend devolviera una respuesta del sistema (feedback de IA)
            if (updatedMerchant.merchantContext?.lastSummary) {
                setHistory(prev => [{
                    author: 'ApoloBot',
                    role: 'IA Brain',
                    timestamp: 'Ahora',
                    content: `Context updated: ${updatedMerchant.merchantContext.lastSummary}`,
                    type: 'SYSTEM'
                }, ...prev]);
            }

        } catch (error) {
            console.error("Error conectando con IA", error);
            // Feedback visual de error
            setHistory(prev => [{
                author: 'ApoloBot',
                role: 'Error',
                timestamp: 'Ahora',
                content: `Error processing request: ${error.message}. Try with a shorter text.`,
                type: 'SYSTEM',
                sourceType: 'NOTE'
            }, ...prev]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <MerchantContext.Provider value={{ merchant, history, loading, handleIngest }}>
            {children}
        </MerchantContext.Provider>
    );
};

export const useMerchant = () => useContext(MerchantContext);
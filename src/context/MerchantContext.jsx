// MerchantContext - Global State Management
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ingestText, getMerchantData } from '../services/api';

const MerchantContext = createContext();

export const MerchantProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    // Estado inicial visual (Placeholder mientras carga o se crea)
    const [merchant, setMerchant] = useState({
        name: 'Zoop',
        id: 'MER-8821-XYS',
        stage: 'SALES',
        summary: 'Esperando primera interacción para generar contexto...',
        context: {
            countries: [],
            providers: [],
            paymentMethods: [],
            riskNotes: ''
        },
        lastUpdate: 'Hace un momento'
    });

    // Historial simulado inicial (puedes vaciarlo si prefieres)
    const [history, setHistory] = useState([]);

    const handleIngest = async (text, type) => {
        setLoading(true);
        // Agregar optimísticamente al historial (Feedback instantáneo)
        const newInteraction = {
            author: 'Tú',
            role: 'Vendedor',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            content: text,
            type: 'USER',
            sourceType: type
        };
        setHistory(prev => [newInteraction, ...prev]);

        try {
            // Llamada real al backend
            const updatedMerchant = await ingestText(text, type, merchant.name);

            if (!updatedMerchant) throw new Error("Respuesta inválida del servidor");

            setMerchant(prev => ({
                ...prev,
                id: updatedMerchant.id || prev.id,
                name: updatedMerchant.name || prev.name,
                stage: updatedMerchant.lifeCicleState || prev.stage,
                summary: updatedMerchant.merchantContext?.lastSummary || prev.summary,
                context: updatedMerchant.merchantContext || prev.context,
                lastUpdate: 'Hace unos segundos'
            }));

            // Si el backend devolviera una respuesta del sistema (feedback de IA)
            if (updatedMerchant.merchantContext?.lastSummary) {
                setHistory(prev => [{
                    author: 'ApoloBot',
                    role: 'IA Brain',
                    timestamp: 'Ahora',
                    content: `Contexto actualizado: ${updatedMerchant.merchantContext.lastSummary}`,
                    type: 'SYSTEM'
                }, ...prev]);
            }

        } catch (error) {
            console.error("Error conectando con IA", error);
            // Feedback visual de error
            setHistory(prev => [{
                author: 'Sistema',
                role: 'Error',
                timestamp: 'Ahora',
                content: `Error al procesar la solicitud: ${error.message}. Intenta con un texto más corto.`,
                type: 'SYSTEM', // Usamos SYSTEM para que se vea diferente, o podrías crear un tipo ERROR
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
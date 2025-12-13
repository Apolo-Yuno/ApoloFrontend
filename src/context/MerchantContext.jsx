// MerchantContext - Global State Management
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ingestText, getMerchantData } from '../services/api';

const MerchantContext = createContext();

export const MerchantProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    // Estado inicial visual (Placeholder mientras carga o se crea)
    const [merchant, setMerchant] = useState({
        name: 'Yuno',
        id: 'MER-8821-XYS',
        stage: 'PROSPECT',
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
            timestamp: 'Ahora',
            content: text,
            type: 'USER',
            sourceType: type
        };
        setHistory(prev => [newInteraction, ...prev]);

        try {
            // Llamada real al backend
            const updatedMerchant = await ingestText('Yuno', text, type);


            setMerchant(prev => ({
                ...prev,
                name: updatedMerchant.name || prev.name,
                stage: updatedMerchant.stage,
                summary: updatedMerchant.context?.lastSummary || prev.summary,
                context: updatedMerchant.context || prev.context,
                lastUpdate: 'Hace unos segundos'
            }));

            // Si el backend devolviera una respuesta del sistema (feedback de IA)
            if (updatedMerchant.context?.lastSummary) {
                setHistory(prev => [{
                    author: 'Sistema',
                    role: 'IA Brain',
                    timestamp: 'Ahora',
                    content: `Contexto actualizado: ${updatedMerchant.context.lastSummary}`,
                    type: 'SYSTEM'
                }, ...prev]);
            }

        } catch (error) {
            console.error("Error conectando con IA", error);
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
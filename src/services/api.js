//Conexion Con el back
const API_URL = 'http://localhost:8081/merchant';

export const ingestText = async (text, type, merchantName) => {
    try {
        const response = await fetch(`${API_URL}/ingest`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: text,
                type: type,
                merchantName: "Zoop"
            })
        });
        if (!response.ok) throw new Error('Error en la ingestión');
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getMerchantData = async (merchantId) => {
    try {
        const response = await fetch(`${API_URL}/${merchantId}`);
        if (!response.ok) throw new Error('Error obteniendo merchant');
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
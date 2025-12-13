//Conexion Con el back
const API_URL = 'http://localhost:8080/api/merchants';

export const ingestText = async (merchantId, text, type) => {
    try {
        const response = await fetch(`${API_URL}/${merchantId}/ingest?type=${type}`, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: text
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
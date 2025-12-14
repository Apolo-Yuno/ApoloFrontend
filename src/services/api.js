const API_URL = '/api/text/merchant';
const AUDIO_API_URL = '/api/audio/merchant';

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

export const ingestAudio = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);


        const response = await fetch(`${AUDIO_API_URL}/upload-audio`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error subiendo audio: ${errorText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error en ingestAudio:", error);
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
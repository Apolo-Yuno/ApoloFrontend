import React, { useState, useRef } from 'react';
import { useMerchant } from '../../context/MerchantContext';

const InteractionInput = () => {
    const [text, setText] = useState('');
    const [type, setType] = useState('NOTE'); // El estado del menú
    const [audioFile, setAudioFile] = useState(null);
    const [isSimulating, setIsSimulating] = useState(false); // Estado para la animación de carga

    const fileInputRef = useRef(null);
    const { handleIngest, loading } = useMerchant();

    // 1. LÓGICA DE SIMULACIÓN 
    const simulateIncomingWebhook = async () => {
        setIsSimulating(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            const response = await fetch('/demoAudio.mp3');
            if (!response.ok) throw new Error("No encontré 'demoAudio.mp3' en la carpeta public/");
            const blob = await response.blob();
            const file = new File([blob], "demoAudio.mp3", { type: "audio/mpeg" });

            setAudioFile(file);
            setType('AUDIO');
            setText("📞 Llamada entrante detectada (Webhook). Procesando audio...");

            // OPCIONAL: Si quieres que se envíe solo al backend descomenta esto:
            // handleIngest("Simulación de llamada", 'AUDIO'); 

        } catch (error) {
            console.error("Error en simulación:", error);
            alert("Error: Revisa que 'demoAudio.mp3' esté en la carpeta public y tenga ese nombre exacto.");
        } finally {
            setIsSimulating(false);
        }
    };

    // Lógica manual de subida de archivos (por si el usuario quiere subir otro)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "audio/mpeg") {
            setAudioFile(file);
        }
    };

    // Envío al Backend
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim() && !audioFile) return;

        // Aquí unimos texto + indicación de audio si existe
        // NOTA: Si tu backend espera Multipart real, asegúrate de ajustar handleIngest como vimos antes.
        // Por ahora, enviamos el texto y simulamos que el audio va adjunto.
        handleIngest(text, type);

        // Limpieza
        setText('');
        setAudioFile(null);
        setType('NOTE'); // Volver a nota por defecto
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="p-4 bg-surface-dark/50 border-b border-border-dark">

            {/* BARRA DE HERRAMIENTAS SUPERIOR */}
            <div className="flex justify-between items-center mb-3">

                {/* 1. EL MENÚ DESPLEGABLE (Lo que pediste mantener) */}
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="bg-surface-dark border border-border-dark rounded-lg text-xs text-text-secondary py-1.5 px-2 focus:ring-primary focus:border-primary outline-none"
                >
                    <option value="NOTE">📝 Nota Rápida</option>
                    <option value="EMAIL">📧 Correo</option>
                    <option value="AUDIO">🎙️ Audio / Llamada</option>
                    <option value="CONTRACT">📄 Contrato</option>
                    <option value="SLACK">💬 Slack</option>
                </select>

                {/* 2. EL BOTÓN DE SIMULACIÓN (Webhook) */}
                <button
                    type="button"
                    onClick={simulateIncomingWebhook}
                    disabled={isSimulating}
                    className={`text-[10px] px-2 py-1 rounded border flex items-center gap-1 transition-all ${isSimulating
                        ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500 cursor-wait'
                        : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20'
                        }`}
                >
                    <span className={`material-symbols-outlined text-sm ${isSimulating ? 'animate-spin' : ''}`}>
                        {isSimulating ? 'progress_activity' : 'wifi_tethering'}
                    </span>
                    {isSimulating ? 'Recibiendo...' : 'Simular Webhook'}
                </button>
            </div>

            {/* FORMULARIO PRINCIPAL */}
            <form className="relative" onSubmit={handleSubmit}>

                {/* Visualización de archivo cargado (Manual o Automático) */}
                {type === 'AUDIO' && (
                    <div className="flex items-center gap-2 mb-2 animate-fade-in bg-black/20 p-2 rounded border border-white/5">
                        <input
                            type="file"
                            accept=".mp3,audio/mpeg"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            id="audio-upload"
                        />

                        {/* Botón manual pequeño por si acaso */}
                        <label htmlFor="audio-upload" className="cursor-pointer text-text-secondary hover:text-white">
                            <span className="material-symbols-outlined text-lg">upload_file</span>
                        </label>

                        <div className="flex-1 text-xs text-green-400 flex items-center gap-1">
                            {audioFile ? (
                                <>
                                    <span className="material-symbols-outlined text-sm">check_circle</span>
                                    <span className="truncate max-w-[150px]">{audioFile.name}</span>
                                </>
                            ) : (
                                <span className="text-text-secondary italic">Esperando audio...</span>
                            )}
                        </div>
                    </div>
                )}

                <textarea
                    className="w-full h-24 bg-surface-dark border border-border-dark rounded-xl p-3 text-sm text-white placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none outline-none"
                    placeholder="Escribe el contexto o usa el botón de simulación..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>

                <button
                    type="submit"
                    disabled={loading || isSimulating}
                    className="absolute bottom-2 right-2 bg-primary hover:bg-primary-dark text-white rounded-lg p-2 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <span className="material-symbols-outlined text-[20px] block">send</span>
                </button>
            </form>
        </div>
    );
};

export default InteractionInput;
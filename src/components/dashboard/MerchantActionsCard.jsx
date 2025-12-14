import React from 'react';
import { useMerchant } from '../../context/MerchantContext';
import { jsPDF } from 'jspdf'; // Si no instalaste esto, comenta esta línea

const MerchantActionsCard = () => {
    const { merchant } = useMerchant();

    // Lógica para Generar el PDF real con el Resumen Inteligente
    const generatePDF = () => {
        try {
            const doc = new jsPDF();

            // Título
            doc.setFontSize(20);
            doc.text(`Reporte Ejecutivo: ${merchant.name}`, 10, 20);

            // Fecha
            doc.setFontSize(10);
            doc.text(`Generado el: ${new Date().toLocaleDateString()}`, 10, 30);

            // Línea separadora
            doc.line(10, 35, 200, 35);

            // Resumen Inteligente
            doc.setFontSize(14);
            doc.text("Resumen de Inteligencia Artificial:", 10, 50);

            doc.setFontSize(12);
            // splitTextToSize ajusta el texto largo para que no se salga de la hoja
            const splitSummary = doc.splitTextToSize(merchant.summary || "Sin datos...", 180);
            doc.text(splitSummary, 10, 60);

            // Riesgos
            if (merchant.context?.riskNotes) {
                doc.setTextColor(255, 0, 0);
                doc.text(`Notas de Riesgo: ${merchant.context.riskNotes}`, 10, 100);
            }

            // Descarga
            doc.save(`Reporte_${merchant.name}.pdf`);
        } catch (error) {
            console.error(error);
            alert("Para generar el PDF real instala: npm install jspdf. Por ahora es una simulación.");
        }
    };


    const handleEmail = () => {
        const subject = `Atención requerida: ${merchant.name}`;
        const body = `Hola,\n\nRevisando el resumen inteligente de ${merchant.name}:\n\n"${merchant.summary}"\n\nNecesitamos tomar acción.`;
        window.location.href = `mailto:account_manager@yuno.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="rounded-2xl bg-surface-dark border border-border-dark p-6 flex flex-col h-full justify-between">

            {/* HEADER DEL CARD */}
            <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-full bg-[#453b54] flex items-center justify-center">
                    <span className="material-symbols-outlined text-text-secondary">smart_button</span>
                </div>
                <div>
                    <h3 className="text-white text-lg font-bold leading-tight">Key Actions<br /> </h3>
                </div>
            </div>

            {/* SECCIÓN 1: DESCARGA */}
            <div className="mb-6">
                <h4 className="text-[10px] text-text-secondary uppercase font-bold tracking-wider mb-3">
                    Donwload documents
                </h4>
                <button
                    onClick={generatePDF}
                    className="w-full bg-[#1a1620] hover:bg-[#25202e] border border-border-dark rounded-xl py-4 px-4 flex items-center justify-center gap-3 group transition-all duration-300"
                >
                    <span className="material-symbols-outlined text-white group-hover:scale-110 transition-transform">download</span>
                    <span className="text-white font-medium text-sm">Reporte General (PDF)</span>
                </button>
            </div>


            <div>

            </div>

        </div>
    );
};

export default MerchantActionsCard;
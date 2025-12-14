// src/pages/MerchantPage.jsx
import React from 'react';
import InteractionInput from '../components/timeline/InteractionInput';
import InteractionFeed from '../components/timeline/InteractionFeed';
import MerchantHeader from '../components/dashboard/MerchantHeader';
import SmartSummary from '../components/dashboard/SmartSummary';
import ConfigMap from '../components/dashboard/ConfigMap';
import Sidebar from '../components/layout/Sidebar';

// 1. CAMBIO AQUÍ: Importamos la nueva tarjeta de acciones en lugar de StatsCard
import MerchantActionsCard from '../components/dashboard/MerchantActionsCard';
// import StatsCard from '../components/dashboard/StatsCard'; // Ya no lo usamos

const MerchantPage = () => {
    return (
        <div className="flex h-screen bg-background-dark text-text-primary font-display overflow-hidden">
            <Sidebar />

            <main className="flex-1 flex overflow-hidden relative">

                {/* COLUMNA IZQUIERDA (Input + Chat) */}
                <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[380px] 2xl:w-[450px] bg-background-dark border-r border-border-dark flex flex-col z-10 shadow-xl relative">
                    <div className="p-6 pb-4 bg-surface-dark border-b border-border-dark z-20">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-1 text-text-primary">
                            <span className="material-symbols-outlined text-primary">forum</span>
                            Interaction Wall
                        </h2>
                        <p className="text-text-secondary text-xs">Chronological communication history.</p>
                    </div>

                    <InteractionInput />
                    <InteractionFeed />
                </div>

                {/* COLUMNA DERECHA (Dashboard) */}
                <div className="flex-1 h-full overflow-y-auto bg-gradient-to-br from-background-dark bg-background-dark relative p-6 lg:p-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto space-y-8 relative z-10">

                        {/* Header con la Barra de Progreso (Lifecycle) */}
                        <MerchantHeader />

                        {/* Resumen generado por IA */}
                        <SmartSummary />

                        {/* Grid Inferior */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                            {/* Mapa de Configuración (Izquierda) */}
                            <ConfigMap />

                            {/* 2. CAMBIO AQUÍ: Tarjeta de Acciones (Derecha) */}
                            {/* Reemplaza a StatsCard */}
                            <MerchantActionsCard />

                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default MerchantPage;
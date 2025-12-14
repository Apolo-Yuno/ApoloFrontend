import React from 'react';
import { CRMHeader } from '../components/layout/CRMLayout';
import Sidebar from '../components/layout/Sidebar';
import {
    SegmentationCard, StakeholdersCard,
    TrendsCard, InteractionTable,
    SentimentCard, TechnicalHealthCard,
    RevenuePieCard
} from '../components/crm/CRMWidgets';

const CRMPage = () => {
    return (
        <div className="flex h-screen bg-background-dark font-display text-text-primary overflow-hidden">
            <Sidebar />

            <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-background-dark">
                <CRMHeader />

                {/* CONTENIDO SCROLLABLE */}
                <div className="flex-1 overflow-y-auto bg-background-dark p-6">
                    <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 xl:grid-cols-12 gap-6 pb-10">

                        {/* COLUMNA 1: Detalles de la Cuenta */}
                        <div className="xl:col-span-3 flex flex-col gap-6">
                            <SegmentationCard />
                            <StakeholdersCard />
                        </div>

                        {/* COLUMNA 2: Métricas e Interacciones */}
                        <div className="xl:col-span-6 flex flex-col gap-6">
                            <TrendsCard />
                            {/* Aquí puedes agregar las cartas de Riesgo y Oportunidad si quieres */}
                            <InteractionTable />
                        </div>

                        {/* COLUMNA 3: Estado y Acciones */}
                        <div className="xl:col-span-3 flex flex-col gap-6">
                            <RevenuePieCard />
                            <SentimentCard />
                            <TechnicalHealthCard />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CRMPage;
// MerchantPage - Main Page
import InteractionInput from '../components/timeline/InteractionInput';
import InteractionFeed from '../components/timeline/InteractionFeed';
import MerchantHeader from '../components/dashboard/MerchantHeader';
import SmartSummary from '../components/dashboard/SmartSummary';
import ConfigMap from '../components/dashboard/ConfigMap';
import StatsCard from '../components/dashboard/StatsCard';
import Sidebar from '../components/layout/Sidebar';

const MerchantPage = () => {
    return (
        <div className="flex h-screen bg-background-dark text-white font-display overflow-hidden">
            <Sidebar />

            <main className="flex-1 flex overflow-hidden relative">

                {/* COLUMNA IZQUIERDA (Input + Chat) */}
                <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[380px] 2xl:w-[450px] bg-[#150f1f] border-r border-border-dark flex flex-col z-10 shadow-xl relative">
                    <div className="p-6 pb-4 bg-surface-dark border-b border-border-dark z-20">
                        <h2 className="text-xl font-bold flex items-center gap-2 mb-1 text-white">
                            <span className="material-symbols-outlined text-primary">forum</span>
                            Muro de Interacciones
                        </h2>
                        <p className="text-text-secondary text-xs">Historial cronológico de comunicaciones.</p>
                    </div>

                    <InteractionInput />
                    <InteractionFeed />
                </div>

                {/* COLUMNA DERECHA (Dashboard) */}
                <div className="flex-1 h-full overflow-y-auto bg-gradient-to-br from-background-dark to-[#1a1025] relative p-6 lg:p-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto space-y-8 relative z-10">
                        <MerchantHeader />
                        <SmartSummary />
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            <ConfigMap />
                            <StatsCard />
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default MerchantPage;
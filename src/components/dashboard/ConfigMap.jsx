// ConfigMap Component
import { useMerchant } from '../../context/MerchantContext';
import InteractiveMap from '../../components/InteractiveMap/InteractiveMap'
import MexicoImg from '../../../public/mexico.png'
import ColombiaImg from '../../../public/colombia.png'
import { useMemo } from 'react';

const COUNTRY_DATA = {
    'MX': { lat: 23.634501, lng: -102.552784, name: "México", icon: MexicoImg },
    'CO': { lat: 4.570868, lng: -74.297333, name: "Colombia", icon: ColombiaImg },
};

const ConfigMap = () => {
    const { merchant } = useMerchant();
    const countries = merchant.context?.countries?.length > 0 ? merchant.context.countries : ['MX', 'CO'];

    const mapLocations = useMemo(() => {
        return countries
            .map(code => COUNTRY_DATA[code])
            .filter(Boolean);
    }, [countries]);

    return (
        <div className="rounded-2xl bg-surface-dark border border-border-dark p-6 flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-secondary">public</span>
                    Mapa de Configuración
                </h3>
            </div>

            <div className="relative w-full h-64 rounded-xl overflow-hidden bg-[#100b1a] border border-border-dark shadow-inner">
                {mapLocations.length > 0 ? (
                    <InteractiveMap locations={mapLocations} />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-sm text-text-secondary">
                        Sin ubicaciones configuradas
                    </div>
                )}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
                {countries.length > 0 ? countries.map(country => (
                    <div key={country}
                        className="flex items-center gap-2 bg-surface-light px-3 py-1.5 rounded-lg border border-border-dark animate-fade-in 
                        hover:bg-purple-500 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                        <span className="text-lg">
                            {country === 'MX' ? '🇲🇽' : country === 'CO' ? '🇨🇴' : '🏳️'}
                        </span>
                        <span className="text-sm font-medium">{country}</span>
                    </div>
                )) : (
                    <span className="text-sm text-text-secondary italic">Esperando información de geografía...</span>
                )}
            </div>
        </div>
    );
};

export default ConfigMap;
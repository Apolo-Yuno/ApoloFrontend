// ConfigMap Component
import React from 'react';
import { useMerchant } from '../../context/MerchantContext';

const ConfigMap = () => {
    const { merchant } = useMerchant();
    const countries = merchant.context?.countries || [];

    return (
        <div className="rounded-2xl bg-surface-dark border border-border-dark p-6 flex flex-col gap-5">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-text-secondary">public</span>
                    Mapa de Configuración
                </h3>
                <button className="text-xs font-bold text-primary hover:text-white transition-colors">VER DETALLES</button>
            </div>

            {/* Imagen de fondo simulando el mapa */}
            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-[#100b1a] border border-border-dark">
                <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-screen" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/pw/ABLVV87-J2_zN_FjWqD2yM4eQ0cN-57rF_jFjWqD2yM4eQ0cN-57rF_jFjWqD2yM4eQ0cN=w600-h300-no")' }}></div>

                {/* Aquí podrías mapear puntos dinámicamente si tuvieras coordenadas, por ahora es estático el fondo */}
                {countries.length === 0 && <div className="absolute inset-0 flex items-center justify-center text-xs text-text-secondary">Sin países detectados</div>}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
                {countries.length > 0 ? countries.map(country => (
                    <div key={country} className="flex items-center gap-2 bg-surface-light px-3 py-1.5 rounded-lg border border-border-dark animate-fade-in">
                        <span className="text-lg">
                            {country === 'MX' ? '🇲🇽' : country === 'CO' ? '🇨🇴' : country === 'BR' ? '🇧🇷' : '🏳️'}
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
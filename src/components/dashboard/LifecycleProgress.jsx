import React from 'react';

const LifecycleProgress = ({ currentStage }) => {
    // 1. Definimos los pasos en orden lógico
    const STEPS = [
        { id: 'SALES', label: 'Ventas', icon: 'sell' },
        { id: 'CONTRACT', label: 'Firma', icon: 'history_edu' }, // history_edu es como una firma/contrato
        { id: 'INTEGRATION', label: 'Integración', icon: 'build' },
        { id: 'LIVE', label: 'Go-Live', icon: 'rocket_launch' }
    ];


    const getStepIndex = (stage) => {
        if (!stage) return 0;
        const index = STEPS.findIndex(s => s.id.toUpperCase() === stage.toUpperCase());
        return index === -1 ? 0 : index;
    };

    const activeIndex = getStepIndex(currentStage);

    return (
        <div className="w-full py-4 px-2">
            <div className="relative flex items-center justify-between w-full">


                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-surface-light rounded-full -z-10"></div>


                <div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-gradient-to-r from-primary-dark to-primary rounded-full -z-10 transition-all duration-1000 ease-out"
                    style={{ width: `${(activeIndex / (STEPS.length - 1)) * 100}%` }}
                ></div>


                {STEPS.map((step, index) => {
                    // Estados lógicos
                    const isCompleted = index < activeIndex;
                    const isActive = index === activeIndex;
                    const isPending = index > activeIndex;

                    return (
                        <div key={step.id} className="flex flex-col items-center group cursor-default">


                            <div className={`
                                size-10 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative z-10
                                ${isCompleted ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(192,132,252,0.4)]' : ''}
                                ${isActive ? 'bg-surface-dark border-primary text-primary shadow-[0_0_20px_rgba(192,132,252,0.6)] scale-110' : ''}
                                ${isPending ? 'bg-surface-dark border-border-dark text-text-secondary' : ''}
                            `}>
                                {isCompleted ? (
                                    <span className="material-symbols-outlined text-lg font-bold">check</span>
                                ) : (
                                    <span className={`material-symbols-outlined text-lg ${isActive ? 'animate-pulse' : ''}`}>
                                        {step.icon}
                                    </span>
                                )}
                            </div>

                            {/* ETIQUETA DE TEXTO */}
                            <span className={`
                                mt-3 text-xs font-bold tracking-wide transition-colors duration-300
                                ${isActive ? 'text-primary' : ''}
                                ${isCompleted ? 'text-white' : ''}
                                ${isPending ? 'text-text-secondary' : ''}
                            `}>
                                {step.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LifecycleProgress;
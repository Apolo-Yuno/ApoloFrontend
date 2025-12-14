import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Podemos determinar cambios visuales sutiles según la ruta si es necesario
    const isCRM = location.pathname.startsWith('/crm');

    return (
        <aside className="w-20 lg:w-64 bg-background-dark border-r border-border-dark flex flex-col justify-between shrink-0 transition-all duration-300 z-30 h-screen sticky top-0">
            <div className="flex flex-col h-full">
                {/* HEADERYUNO */}
                <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-border-dark">
                    <div className="size-8 flex items-center justify-center text-primary bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined">hub</span>
                    </div>
                    <span className="ml-3 font-bold text-lg hidden lg:block tracking-tight text-text-primary">Yuno</span>
                </div>

                {/* NAVIGATION */}
                <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2">

                    <div className="px-3 mb-2 hidden lg:block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                        Main Views
                    </div>

                    <NavItem to="/" icon="store" label="Merchant View" end />
                    <NavItem to="/crm" icon="analytics" label="CRM View" />


                    {/* SECCIÓN ESPECÍFICA (Solo visual por ahora, simulando la unificación) */}
                    <div className="my-2 border-t border-border-dark"></div>

                    <div className="px-3 my-2 hidden lg:block text-[10px] font-bold text-text-secondary uppercase tracking-wider">

                    </div>



                </nav>

                {/* FOOTER USER */}
                <div className="p-4 border-t border-border-dark">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-light transition-colors cursor-pointer">
                        <div className="hidden lg:block overflow-hidden">

                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

const NavItem = ({ to, icon, label, end, disabled, active: forceActive }) => (
    <NavLink
        to={to}
        end={end}
        className={({ isActive }) => `
            flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group
            ${(isActive || forceActive) && !disabled ? 'bg-primary/10 text-text-primary shadow-[inset_3px_0_0_0_#2563eb]' : 'text-text-secondary hover:bg-surface-light hover:text-text-primary'}
            ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
        `}
    >
        <span className={`material-symbols-outlined text-xl group-hover:scale-110 transition-transform ${disabled ? '' : 'text-current'}`}>
            {icon}
        </span>
        <span className="font-medium text-sm hidden lg:block">{label}</span>
    </NavLink>
);

export default Sidebar;

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Podemos determinar cambios visuales sutiles según la ruta si es necesario
    const isCRM = location.pathname.startsWith('/crm');

    return (
        <aside className="w-20 lg:w-64 bg-[#141118] border-r border-[#2f2839] flex flex-col justify-between shrink-0 transition-all duration-300 z-30 h-screen sticky top-0">
            <div className="flex flex-col h-full">
                {/* HEADERYUNO */}
                <div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-[#2f2839]">
                    <div className="size-8 flex items-center justify-center text-primary bg-primary/10 rounded-lg">
                        <span className="material-symbols-outlined">hub</span>
                    </div>
                    <span className="ml-3 font-bold text-lg hidden lg:block tracking-tight text-white">Yuno</span>
                </div>

                {/* NAVIGATION */}
                <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-2">

                    <div className="px-3 mb-2 hidden lg:block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                        Main Views
                    </div>

                    <NavItem to="/" icon="store" label="Merchant View" end />
                    <NavItem to="/crm" icon="analytics" label="CRM View" />


                    {/* SECCIÓN ESPECÍFICA (Solo visual por ahora, simulando la unificación) */}
                    <div className="my-2 border-t border-[#2f2839]"></div>

                    <div className="px-3 my-2 hidden lg:block text-[10px] font-bold text-text-secondary uppercase tracking-wider">
                        {isCRM ? 'CRM Tools' : 'Merchant Tools'}
                    </div>

                    {isCRM ? (
                        <>
                            <NavItem to="/crm/overview" icon="dashboard" label="Overview" disabled />
                            <NavItem to="/crm/accounts" icon="corporate_fare" label="Accounts" disabled />
                            <NavItem to="/crm/tickets" icon="confirmation_number" label="Tickets" disabled />
                        </>
                    ) : (
                        <>
                            <NavItem to="/interactions" icon="forum" label="Interacciones" disabled active />
                            <NavItem to="/config" icon="settings" label="Configuración" disabled />
                            <NavItem to="/api" icon="api" label="API Keys" disabled />
                        </>
                    )}

                </nav>

                {/* FOOTER USER */}
                <div className="p-4 border-t border-[#2f2839]">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
                        <div className="size-8 rounded-full bg-gradient-to-tr from-primary to-purple-400"></div>
                        <div className="hidden lg:block overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">Admin User</p>
                            <p className="text-xs text-text-secondary truncate">admin@yuno.com</p>
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
            ${(isActive || forceActive) && !disabled ? 'bg-primary/10 text-white shadow-[inset_3px_0_0_0_#9333ea]' : 'text-text-secondary hover:bg-white/5 hover:text-white'}
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

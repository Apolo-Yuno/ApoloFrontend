/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Colores personalizados del diseño (Yuno Light Theme)
                primary: {
                    DEFAULT: '#2563eb', // Blue-600
                    dark: '#1d4ed8',    // Blue-700
                },
                background: {
                    dark: '#f8fafc',    // Slate-50 (Light Background)
                },
                surface: {
                    dark: '#ffffff',    // White
                    light: '#f1f5f9',   // Slate-100
                },
                border: {
                    dark: '#e2e8f0',    // Slate-200
                },
                text: {
                    secondary: '#64748b', // Slate-500
                    primary: '#0f172a',   // Slate-900
                },
            },
            fontFamily: {
                display: ['"Spline Sans"', 'sans-serif'],
                body: ['"Noto Sans"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

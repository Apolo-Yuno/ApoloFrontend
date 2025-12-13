/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Colores personalizados del diseño
                primary: {
                    DEFAULT: '#c084fc',
                    dark: '#a855f7',
                },
                background: {
                    dark: '#0a0612',
                },
                surface: {
                    dark: '#1a1025',
                    light: '#251832',
                },
                border: {
                    dark: '#2d1f3d',
                },
                text: {
                    secondary: '#9ca3af',
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

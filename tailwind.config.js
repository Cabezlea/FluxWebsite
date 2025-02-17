/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'gradient-flow': 'gradient-flow 15s ease infinite',
                'glow': 'glow 2s ease-in-out infinite',
            },
            keyframes: {
                'gradient-flow': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'glow': {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(0,123,255,0.5)' },
                    '50%': { boxShadow: '0 0 20px rgba(0,123,255,0.8)' },
                }
            },
            backdropBlur: {
                'xs': '2px',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem'
            }
        },
    },
    plugins: [],
}

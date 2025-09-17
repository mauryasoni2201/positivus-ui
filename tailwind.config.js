/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const { nextui } = require('@nextui-org/react');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            sm: '360px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                primary: '#B9FF66',
                black: '#191A23',
                grey: '#F3F3F3',
                white: '#fff',
                lightBlack: '#292A32',
            },
            borderRadius: {
                'xl-custom': '45px',
            },
            keyframes: {
                slideIn: {
                    '0%': { right: '-100%', opacity: '0' },
                    '100%': { right: '0', opacity: '1' },
                },
                slideOut: {
                    '0%': { right: '0', opacity: '1' },
                    '100%': { right: '-100%', opacity: '0' },
                },
            },
            animation: {
                slideIn: 'slideIn 0.6s ease-in-out forwards',
                slideOut: 'slideOut 0.6s ease-in-out forwards',
            },
        },
    },
    plugins: [nextui()],
};

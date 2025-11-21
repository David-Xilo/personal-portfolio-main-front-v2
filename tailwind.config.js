/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'custom-gray': '#f0f2f5',
            },
            boxShadow: {
                custom: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
            spacing: {
                2.5: '10px',
            },
        },
    },
    plugins: [],
}

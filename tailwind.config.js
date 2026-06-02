/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
                serif: ['"Newsreader"', 'Georgia', '"Times New Roman"', 'serif'],
                mono: ['"IBM Plex Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
            },
            colors: {
                dm: {
                    bg: {
                        DEFAULT: '#f6f5f2',
                        dark: '#0a0c10',
                        elev: '#ffffff',
                        'elev-dark': '#111419',
                        elev2: '#ffffff',
                        'elev2-dark': '#161a21',
                    },
                    text: {
                        DEFAULT: '#14181f',
                        dark: '#e9eaee',
                        mut: '#555c67',
                        'mut-dark': '#9aa1ad',
                        faint: '#8b929d',
                        'faint-dark': '#5a616e',
                    },
                    accent: {
                        DEFAULT: '#2563eb',
                        dark: '#5b9bf8',
                        '2': '#1d4ed8',
                        '2-dark': '#82b4ff',
                        soft: 'rgba(37, 99, 235, 0.09)',
                        'soft-dark': 'rgba(91, 155, 248, 0.13)',
                    },
                    good: {
                        DEFAULT: '#0fa968',
                        dark: '#46d39a',
                    },
                    line: {
                        DEFAULT: 'rgba(20, 24, 31, 0.13)',
                        dark: 'rgba(255, 255, 255, 0.09)',
                        soft: 'rgba(20, 24, 31, 0.07)',
                        'soft-dark': 'rgba(255, 255, 255, 0.05)',
                    }
                },
                'custom-gray': '#f0f2f5',
            },
            boxShadow: {
                custom: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
            spacing: {
                2.5: '10px',
            },
            animation: {
                'spin-reverse': 'spin 1s linear infinite reverse',
            },
        },
    },
    plugins: [],
}

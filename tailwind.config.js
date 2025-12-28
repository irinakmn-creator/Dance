/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1A1A1A',        // Black/Charcoal
                accent: '#D4AF37',         // Gold
                'bg-secondary': '#F5F5F0', // Soft Sand
                text: '#333333',           // Dark Grey
                'text-light': '#F9F9F9',   // Off-white
                sage: '#9CAF88',
                blush: '#E8D5D5',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1.5rem',
            },
        },
    },
    plugins: [],
}

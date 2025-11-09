/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
module.exports = {
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 60s linear infinite',
            },
        },
    },
};
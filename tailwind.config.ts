const config = {
    theme: {
        extend: {
            // keyframes: {
            //     microBlob: {
            //         '0%': { transform: 'translate(-10px, -10px) scale(1)' },
            //         '100%': { transform: 'translate(10px, 10px) scale(1.1)' },
            //     },
            //     microStreak: {
            //         '0%': { transform: 'translateX(-10%)' },
            //         '100%': { transform: 'translateX(10%)' },
            //     },
            // },
            // animation: {
            //     microBlob: 'microBlob 12s ease-in-out infinite alternate',
            //     microStreak: 'microStreak 8s ease-in-out infinite alternate',
            // },

            containers: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
            },
        }
    },

    plugins: [
        require('@tailwindcss/container-queries'),
    ],
};

export default config;

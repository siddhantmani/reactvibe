const config = {
    theme: {
        extend: {
            keyframes: {
                microBlob: {
                    '0%': { transform: 'translate(-10px, -10px) scale(1)' },
                    '100%': { transform: 'translate(10px, 10px) scale(1.1)' },
                },
                microStreak: {
                    '0%': { transform: 'translateX(-10%)' },
                    '100%': { transform: 'translateX(10%)' },
                },
            },
            animation: {
                microBlob: 'microBlob 12s ease-in-out infinite alternate',
                microStreak: 'microStreak 8s ease-in-out infinite alternate',
            },
        }
    }
};

export default config;

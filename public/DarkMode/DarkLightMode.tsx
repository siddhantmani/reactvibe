"use client"

import { useTheme } from '@/components/ThemeProvider';

function DarkLightMode() {
    const { setTheme } = useTheme();

    return (
        <div>
            <button onClick={() => setTheme("dark")}>
                Dark
            </button>

            <button onClick={() => setTheme("light")}>
                Light
            </button>
        </div>
    )
}

export default DarkLightMode
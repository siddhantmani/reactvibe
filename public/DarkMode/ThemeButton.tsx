"use client"

import { useTheme } from './ThemeProvider';

function ThemeButton() {
    const { toggleTheme } = useTheme();
    return (
        <div>
            <button onClick={toggleTheme} className='bg-white text-black rounded-sm p-1 px-2 border border-black/10 dark:bg-black dark:border-white/10 dark:text-white'>
                Toggle
            </button>
        </div>
    )
}

export default ThemeButton
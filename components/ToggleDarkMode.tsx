"use client"

import * as React from "react"
import { BsHighlights } from "react-icons/bs";
import { useTheme } from "./ThemeProvider";
export default function ToggleDarkMode() {
    const { toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="relative flex items-center cursor-pointer justify-center rounded-md transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        >
            {/* Sun icon (visible in light mode) */}
            <BsHighlights className="text-lg transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />

            {/* Moon icon (visible in dark mode) */}
            <BsHighlights className="absolute text-lg transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
        </button>
    )
}

import React from 'react'
import RisingLines from './RisingLines'

function Page() {
    return (
        <div className="relative min-h-screen w-full bg-white dark:bg-[#0c0c0c] flex flex-col items-center justify-center overflow-hidden font-sans">

            <RisingLines
                lineCount={200}         // Number of total lines
                color="#737373"        // Tailwind neutral-500 hex
                thickness={1}        // Thickness in pixels
                speed={10}  // Slowest line takes 25s to cross
                heightMin={120}        // Shortest line is 150px
                heightMax={370}        // Tallest line is 400px
                opacityMin={0.15}      // Faintest line opacity
                opacityMax={0.6}       // Most visible line opacity
                direction="bottom-to-top" // Accepts "bottom-to-top" or "top-to-bottom"
            />

        </div>
    )
}

export default Page
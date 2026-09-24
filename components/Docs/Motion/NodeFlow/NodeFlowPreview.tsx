"use client"

import React from 'react'
import { motion } from "framer-motion"

function NodeFlowPreview() {
    return (
        <div className='relative w-full max-w-xs aspect-square mx-auto mt-45'>
            <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
                {/* Center to Top-Left */}
                <path id="line-tl" d="M50,50 L15,15" stroke="#C5D6FF" strokeWidth="1" fill="none" opacity="0.8" />
                {/* Center to Top-Right */}
                <path id="line-tr" d="M50,50 L80,20" stroke="#C5D6FF" strokeWidth="1" fill="none" opacity="0.8" />
                {/* Center to Bottom-Left */}
                <path id="line-bl" d="M50,50 L20,85" stroke="#C5D6FF" strokeWidth="1" fill="none" opacity="0.8" />

                {/* Moving Dots */}
                <circle r="1.5" fill="#C5D6FF">
                    <animateMotion dur="2s" repeatCount="indefinite">
                        <mpath href="#line-tl" />
                    </animateMotion>
                </circle>
                <circle r="1.5" fill="#C5D6FF">
                    <animateMotion dur="2s" repeatCount="indefinite">
                        <mpath href="#line-tr" />
                    </animateMotion>
                </circle>
                <circle r="1.5" fill="#C5D6FF">
                    <animateMotion dur="2s" repeatCount="indefinite">
                        <mpath href="#line-bl" />
                    </animateMotion>
                </circle>
            </svg>

            {/* Center Node (50, 50) */}
            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square z-10 bg-white rounded-full flex items-center justify-center">
                <motion.div
                    className="w-full h-full bg-[#C5D6FF] rounded-full"
                    animate={{
                        x: [0, 3, 0, -3, 0],
                        y: [0, -2, 0, 2, 0],
                        rotate: [-2, 2, -1, 1, -2],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Top-Left Node (25, 25) */}
            <div className="absolute left-[15%] top-[15%] -translate-x-1/2 -translate-y-1/2 w-[22%] aspect-square z-10 bg-white rounded-full flex items-center justify-center">
                <motion.div
                    className="w-full h-full bg-[#C5D6FF] rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Top-Right Node (75, 25) */}
            <div className="absolute left-[80%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-[15%] aspect-square z-10 bg-white rounded-full flex items-center justify-center">
                <motion.div
                    className="w-full h-full bg-[#C5D6FF] rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Bottom-Left Node (30, 75) */}
            <div className="absolute left-[20%] top-[85%] -translate-x-1/2 -translate-y-1/2 w-[20%] aspect-square z-10 bg-white rounded-full flex items-center justify-center">
                <motion.div
                    className="w-full h-full bg-[#C5D6FF] rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

        </div>
    )
}

export default NodeFlowPreview
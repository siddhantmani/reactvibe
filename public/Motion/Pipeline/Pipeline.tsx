"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Generic workflow nodes replacing the specific niche text
const endNodes = [
    {
        id: 0,
        title: "Database",
        info: "Database: 240 new records successfully committed",
    },
    {
        id: 1,
        title: "Dashboard",
        info: "Dashboard: Real-time analytics and metrics updated",
    },
    {
        id: 2,
        title: "Email Service",
        info: "Email Service: 12 summary reports dispatched to users",
    },
];

interface PipelineProps {
    particleCount?: number;
    particleSpeed?: number;
    particleSize?: number;
}

export default function Pipeline({
    particleCount = 3,
    particleSpeed = 3,
    particleSize = 2.5
}: PipelineProps) {
    const [activeIndex, setActiveIndex] = useState(1);

    // Auto-rotate the active node every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % endNodes.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // SVG Paths meticulously calculated to touch exactly the edges of the 160px wide cards
    const path1 = "M 230 175 L 320 175";
    const path2 = "M 480 175 L 570 175";
    const pathTop = "M 730 175 C 760 175, 765 75, 800 75";
    const pathMid = "M 730 175 L 800 175";
    const pathBot = "M 730 175 C 760 175, 765 275, 800 275";

    // Create an array based on the requested particle count
    const particles = Array.from({ length: particleCount }, (_, i) => i);

    // Automatically calculate the perfect delay between particles so they are evenly spaced
    const delayInterval = particleSpeed / particleCount;

    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-8 font-sans transition-colors duration-300">
            <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
                <div className="w-[1000px] h-[350px] relative mx-auto">

                    {/* =========================================
                        SVG Canvas for Connecting Lines
                    ========================================= */}
                    <svg
                        viewBox="0 0 1000 350"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                        <defs>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                            </filter>
                        </defs>

                        {/* Static Dashed Lines */}
                        <g strokeWidth="1.5" strokeDasharray="4 4" className="stroke-gray-300 dark:stroke-gray-700 transition-colors duration-300">
                            <path d={path1} />
                            <path d={path2} />
                            <path d={pathTop} />
                            <path d={pathMid} />
                            <path d={pathBot} />
                        </g>

                        {/* Moving Particles mapped perfectly along each path */}
                        <g>
                            {particles.map((i) => (
                                <Particle key={`p1-${i}`} path={path1} delay={`${i * delayInterval}s`} dur={`${particleSpeed}s`} size={particleSize} />
                            ))}
                            {particles.map((i) => (
                                <Particle key={`p2-${i}`} path={path2} delay={`${i * delayInterval}s`} dur={`${particleSpeed}s`} size={particleSize} />
                            ))}
                            {particles.map((i) => (
                                <Particle key={`pt-${i}`} path={pathTop} delay={`${i * delayInterval}s`} dur={`${particleSpeed}s`} size={particleSize} />
                            ))}
                            {particles.map((i) => (
                                <Particle key={`pm-${i}`} path={pathMid} delay={`${i * delayInterval}s`} dur={`${particleSpeed}s`} size={particleSize} />
                            ))}
                            {particles.map((i) => (
                                <Particle key={`pb-${i}`} path={pathBot} delay={`${i * delayInterval}s`} dur={`${particleSpeed}s`} size={particleSize} />
                            ))}
                        </g>
                    </svg>

                    {/* =========================================
                        HTML Nodes (Absolutely Positioned)
                    ========================================= */}

                    {/* Node 1: Input */}
                    <div className="absolute top-[175px] left-[150px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 w-[160px]">
                        <div className="w-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-sm h-[80px] flex flex-col justify-center transition-colors duration-300">
                            <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1 block">
                                Input
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                                Data Sources
                            </span>
                        </div>
                    </div>
                    <span className="absolute top-[230px] left-[150px] -translate-x-1/2 text-[10px] text-gray-400 dark:text-gray-500 font-mono tracking-wide whitespace-nowrap transition-colors duration-300">
                        rest · graphql · streams
                    </span>

                    {/* Node 2: Processing */}
                    <div className="absolute top-[175px] left-[400px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 w-[160px]">
                        <div className="w-full bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-sm h-[80px] flex flex-col justify-center transition-colors duration-300">
                            <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1 block">
                                Processing
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100 transition-colors duration-300">
                                Transformation
                            </span>
                        </div>
                    </div>
                    <span className="absolute top-[230px] left-[400px] -translate-x-1/2 text-[10px] text-gray-400 dark:text-gray-500 font-mono tracking-wide whitespace-nowrap transition-colors duration-300">
                        clean · parse · validate
                    </span>

                    {/* Node 3: Routing (Inverted Accent Card: Black in Light Mode, White in Dark Mode) */}
                    <div className="absolute top-[175px] left-[650px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 w-[160px]">
                        <div className="w-full bg-[#111111] dark:bg-white border border-[#222] dark:border-gray-200 rounded-2xl p-4 shadow-xl dark:shadow-md h-[80px] flex flex-col justify-center transition-colors duration-300">
                            <span className="text-[9px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-1 block transition-colors duration-300">
                                Routing
                            </span>
                            <span className="text-sm font-medium text-white dark:text-gray-900 block mb-2 transition-colors duration-300">
                                Logic Engine
                            </span>
                            {/* Animated processing dots */}
                            <div className="flex gap-1.5">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 transition-colors duration-300"
                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className="absolute top-[230px] left-[650px] -translate-x-1/2 text-[10px] text-gray-400 dark:text-gray-500 font-mono tracking-wide whitespace-nowrap transition-colors duration-300">
                        filter · map · dispatch
                    </span>

                    {/* End Nodes (Right Side) */}
                    <div className="absolute top-[75px] left-[880px] -translate-x-1/2 -translate-y-1/2 z-10">
                        <EndNode node={endNodes[0]} isActive={activeIndex === 0} />
                    </div>
                    <div className="absolute top-[175px] left-[880px] -translate-x-1/2 -translate-y-1/2 z-10">
                        <EndNode node={endNodes[1]} isActive={activeIndex === 1} />
                    </div>
                    <div className="absolute top-[275px] left-[880px] -translate-x-1/2 -translate-y-1/2 z-10">
                        <EndNode node={endNodes[2]} isActive={activeIndex === 2} />
                    </div>
                </div>
            </div>

            {/* =========================================
                Bottom Dynamic Info Bar
            ========================================= */}
            <div className="w-full max-w-[1000px] mx-auto mt-2">
                <div className="w-full bg-[#f8f9fa] dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl px-5 py-4 min-h-[56px] flex items-center shadow-sm transition-colors duration-300">
                    <span className="text-gray-400 dark:text-gray-500 mr-3 font-mono">›</span>
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={activeIndex}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-[13px] md:text-sm text-gray-600 dark:text-gray-400 font-mono transition-colors duration-300"
                        >
                            {endNodes[activeIndex].info}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

// Sub-component for the Moving Particle
interface ParticleProps {
    path: string;
    delay: string;
    dur: string;
    size: number;
}

function Particle({ path, delay, dur, size }: ParticleProps) {
    return (
        <g>
            {/* Blurred outer glow */}
            <circle cx="0" cy="0" r={size * 2.4} className="fill-gray-400 dark:fill-gray-500 transition-colors duration-300" opacity="0.4" filter="url(#glow)">
                <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={path} />
            </circle>
            {/* Solid inner core */}
            <circle cx="0" cy="0" r={size} className="fill-gray-600 dark:fill-gray-400 transition-colors duration-300">
                <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={path} />
            </circle>
        </g>
    );
}

interface NodeData {
    id: number;
    title: string;
    info: string;
}

interface EndNodeProps {
    node: NodeData;
    isActive: boolean;
}

function EndNode({ node, isActive }: EndNodeProps) {
    return (
        <div
            className={`
                w-[160px] h-[48px] border rounded-xl px-4 flex items-center justify-between 
                transition-all duration-300 bg-white dark:bg-[#0a0a0a] shadow-sm
                ${isActive
                    ? 'border-gray-800 dark:border-gray-400'
                    : 'border-gray-200 dark:border-gray-800'
                }
            `}
        >
            <span className={`text-[13px] font-medium transition-colors duration-300 ${isActive ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
                {node.title}
            </span>
            {/* Active Indicator Dot */}
            <motion.div
                animate={{
                    scale: isActive ? 1.25 : 1,
                }}
                transition={{ duration: 0.2 }}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${isActive
                    ? 'bg-gray-800 dark:bg-white'
                    : 'bg-gray-300 dark:bg-gray-700'
                    }`}
            />
        </div>
    );
}
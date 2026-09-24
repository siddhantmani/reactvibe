"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const networkData = [
    {
        id: 0,
        title: "Distributed Teams",
        desc: "Monitoring real-time activity, synchronization, and collaboration metrics across global, distributed team nodes.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.496m-7.533 2.496c-.84-1.29-1.92-2.148-3.136-2.496a4.125 4.125 0 00-7.533 2.496 9.337 9.337 0 004.121.952 9.38 9.38 0 002.625-.372m-2.625-10a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm10.5 0a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
            </svg>
        )
    },
    {
        id: 1,
        title: "System Integrations",
        desc: "Seamlessly routing data packets and maintaining webhooks between internal microservices and third-party APIs.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
            </svg>
        )
    },
    {
        id: 2,
        title: "Live User Activity",
        desc: "Tracking concurrent sessions, engagement rates, and live customer interactions flowing through the platform.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
        )
    },
    {
        id: 3,
        title: "Partner Network",
        desc: "Maintaining secure, low-latency, and encrypted connections with regional partners and external ecosystem stakeholders.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.974 0-5.749-.547-8.284-1.518m16.568 0A11.955 11.955 0 0112 15c-2.974 0-5.749-.547-8.284-1.518" />
            </svg>
        )
    }
];

export interface NetworkPulseProps {
    CurveRadius?: number;
    MiddleCurve?: number;
    TopGap?: number;
    MiddleTopGap?: number;
    IconsGap?: number;
}

export default function NetworkPulse({
    CurveRadius = 70,
    MiddleCurve = 35,
    TopGap = 60,
    MiddleTopGap = 40,
    IconsGap = 53,
}: NetworkPulseProps) {
    const [activeIndex, setActiveIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % networkData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    //  Dynamic Calculation Logic 
    const centerX = 350;
    const startY = 90;
    const endY = 260;
    const iconWidth = 80;

    const iconPositions = [
        centerX - 1.5 * (iconWidth + IconsGap),
        centerX - 0.5 * (iconWidth + IconsGap),
        centerX + 0.5 * (iconWidth + IconsGap),
        centerX + 1.5 * (iconWidth + IconsGap),
    ];

    const generatePath = (index: number, endX: number) => {
        const startX = centerX + (index - 1.5) * 12;
        const isInner = index === 1 || index === 2;
        const splitY = startY + TopGap + (isInner ? MiddleTopGap : 0);

        const isLeft = index < 2;
        const dir = isLeft ? -1 : 1;

        const activeRadius = isInner ? MiddleCurve : CurveRadius;

        const maxHorizontalRadius = Math.abs(startX - endX) / 2;
        const safeHorizontal = Math.min(activeRadius, maxHorizontalRadius);

        const maxVerticalTop = splitY - startY;
        const maxVerticalBottom = endY - splitY;
        const safeVertical = Math.min(activeRadius, maxVerticalTop, maxVerticalBottom);

        return `
            M ${startX} ${startY} 
            L ${startX} ${splitY - safeVertical} 
            Q ${startX} ${splitY} ${startX + dir * safeHorizontal} ${splitY} 
            L ${endX - dir * safeHorizontal} ${splitY} 
            Q ${endX} ${splitY} ${endX} ${splitY + safeVertical} 
            L ${endX} ${endY}
        `;
    };

    const paths = iconPositions.map((x, i) => generatePath(i, x));

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#050505] flex items-center justify-center font-sans w-full transition-colors duration-300">
            <div className="w-full overflow-x-auto custom-scrollbar flex justify-start md:justify-center px-4 py-10">
                <div className="w-[700px] h-[550px] relative shrink-0">

                    {/*Dynamic SVG Canvas */}
                    <svg
                        viewBox="0 0 700 550"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                    >
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            <filter id="particle-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Background Inactive Paths */}
                        {paths.map((path, index) => (
                            <path
                                key={`bg-${index}`}
                                d={path}
                                strokeWidth="1.5"
                                className="stroke-gray-200 dark:stroke-[#222] transition-colors duration-300"
                            />
                        ))}

                        {/* Active Glowing Path */}
                        <motion.path
                            key={`active-line-${activeIndex}`}
                            d={paths[activeIndex]}
                            strokeWidth="2"
                            className="stroke-gray-900 dark:stroke-white"
                            filter="url(#glow)"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                        />

                        {/* Moving Particle */}
                        <g key={`particle-${activeIndex}`}>
                            <circle
                                r="6"
                                className="fill-gray-900 dark:fill-white"
                                filter="url(#particle-glow)"
                                opacity="0.4"
                            >
                                <animateMotion dur="2.5s" repeatCount="indefinite" path={paths[activeIndex]} />
                            </circle>
                            <circle
                                r="2.5"
                                className="fill-gray-900 dark:fill-white"
                            >
                                <animateMotion dur="2.5s" repeatCount="indefinite" path={paths[activeIndex]} />
                            </circle>
                        </g>
                    </svg>

                    {/* Top pill */}
                    <div className="absolute top-[35px] left-[350px] -translate-x-1/2 z-10">
                        <div className="flex items-center gap-3 px-6 py-3.5 bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700/50 rounded-full shadow-sm dark:shadow-lg transition-colors duration-300">
                            <div className="w-5 h-5 text-gray-800 dark:text-white flex items-center justify-center transition-colors duration-300">
                                {/* Activity/Broadcast Icon for Top Pill */}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 115.304 0M5.106 18.894c3.808-3.808 9.98-3.808 13.788 0M1.924 22.076c5.565-5.565 14.587-5.565 20.152 0M12.53 10.53l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                                </svg>
                            </div>
                            <span className="text-gray-800 dark:text-white text-[16px] font-medium tracking-wide whitespace-nowrap transition-colors duration-300">
                                Monitoring live network pulse & node synchronization..
                            </span>
                        </div>
                    </div>

                    {/* icons */}
                    {networkData.map((node, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={node.id}
                                onClick={() => setActiveIndex(index)}
                                className={`absolute top-[260px] -translate-x-1/2 cursor-pointer w-[80px] h-[80px] rounded-[24px] border-[2px] flex items-center justify-center transition-all duration-500 ease-in-out z-10 
                                    ${isActive
                                        ? "border-gray-900 dark:border-white bg-white dark:bg-gradient-to-b dark:from-[#444] dark:to-[#111] shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] scale-105"
                                        : "border-gray-200 dark:border-[#222] bg-gray-50 dark:bg-[#0c0c0e] opacity-70 hover:opacity-100 scale-100"
                                    }`}
                                style={{ left: `${iconPositions[index]}px` }}
                            >
                                <div className={`transition-colors duration-500 z-10 ${isActive ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500"}`}>
                                    {node.icon}
                                </div>

                                {/* Inner ring highlight exclusively for dark mode to maintain the glass effect */}
                                {isActive && (
                                    <div className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-transparent dark:ring-white/10" />
                                )}
                            </div>
                        );
                    })}

                    {/* Bottom Dynamic Info Box */}
                    <div className="absolute top-[380px] left-[350px] -translate-x-1/2 w-[560px] z-10">
                        <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-700/40 rounded-[24px] p-7 min-h-[150px] shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2" className="animate-[spin_2s_linear_infinite] origin-center" />
                                        </svg>
                                        <h3 className="text-gray-900 dark:text-gray-200 font-medium text-lg tracking-wide transition-colors duration-300">
                                            {networkData[activeIndex].title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed font-medium mt-1 transition-colors duration-300">
                                        {networkData[activeIndex].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
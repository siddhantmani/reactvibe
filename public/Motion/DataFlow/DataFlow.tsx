"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Manrope } from "next/font/google";

const font = Manrope({
    weight: '700',
    subsets: ['vietnamese']
});

interface DataFlowProps {
    // Individual Gap Controls
    leftGap?: number;
    rightGap?: number;

    centerIcon?: React.ReactNode;

    // Left side controls
    leftpathColor?: string;
    leftparticleColor?: string;
    leftparticleSpeed?: number;
    leftpathWidth?: number;
    leftparticleSize?: number;

    // Right side controls
    rightpathColor?: string;
    rightparticleColor?: string;
    rightparticleSpeed?: number;
    rightpathWidth?: number;
    rightparticleSize?: number;
}

function DataFlow({
    leftGap = 30,
    rightGap = 30,
    centerIcon = <span className="text-3xl">🔥</span>,
    leftpathColor,
    leftparticleColor = "#ef4444",
    leftparticleSpeed = 2.5,
    leftpathWidth = 2,
    leftparticleSize = 4,
    rightpathColor,
    rightparticleColor = "#10b981",
    rightparticleSpeed = 2.5,
    rightpathWidth = 2,
    rightparticleSize = 4
}: DataFlowProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // === Dynamic Math Logic: Left Side ===
    const leftTopPercent = 50 - leftGap;
    const leftBottomPercent = 50 + leftGap;
    const leftTopY = 500 * (leftTopPercent / 100);
    const leftBottomY = 500 * (leftBottomPercent / 100);

    // === Dynamic Math Logic: Right Side ===
    const rightTopPercent = 50 - rightGap;
    const rightBottomPercent = 50 + rightGap;
    const rightTopY = 500 * (rightTopPercent / 100);
    const rightBottomY = 500 * (rightBottomPercent / 100);

    const leftPathClass = leftpathColor
        ? "transition-colors duration-300"
        : "stroke-gray-300 dark:stroke-gray-600/50 transition-colors duration-300";

    const rightPathClass = rightpathColor
        ? "transition-colors duration-300"
        : "stroke-gray-300 dark:stroke-gray-600/50 transition-colors duration-300";

    return (
        <div className="w-full overflow-x-auto pb-4 custom-scrollbar transition-colors duration-300">
            <div className="w-full min-w-[800px] max-w-6xl aspect-[2/1] mx-auto relative bg-gray-50 dark:bg-[#0c0c0c] flex items-center justify-center rounded-2xl overflow-hidden font-sans border border-gray-200 dark:border-gray-800 transition-colors duration-300">

                <motion.svg
                    ref={ref}
                    viewBox="0 0 1000 500"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/*  LEFT TO CENTER PATHS  */}
                    <motion.path
                        d={`M 270 ${leftTopY} C 380 ${leftTopY}, 380 250, 470 250`}
                        className={leftPathClass}
                        stroke={leftpathColor}
                        strokeWidth={leftpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                    />
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 6px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftparticleSpeed}s`} repeatCount="indefinite" path={`M 270 ${leftTopY} C 380 ${leftTopY}, 380 250, 470 250`} />
                    </circle>

                    <motion.path
                        d="M 270 250 L 470 250"
                        className={leftPathClass}
                        stroke={leftpathColor}
                        strokeWidth={leftpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
                    />
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 6px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftparticleSpeed}s`} repeatCount="indefinite" path="M 270 250 L 470 250" />
                    </circle>

                    <motion.path
                        d={`M 270 ${leftBottomY} C 380 ${leftBottomY}, 380 250, 470 250`}
                        className={leftPathClass}
                        stroke={leftpathColor}
                        strokeWidth={leftpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
                    />
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 6px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftparticleSpeed}s`} repeatCount="indefinite" path={`M 270 ${leftBottomY} C 380 ${leftBottomY}, 380 250, 470 250`} />
                    </circle>

                    {/*  CENTER TO RIGHT PATHS  */}
                    <motion.path
                        d={`M 530 250 C 620 250, 620 ${rightTopY}, 730 ${rightTopY}`}
                        className={rightPathClass}
                        stroke={rightpathColor}
                        strokeWidth={rightpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
                    />
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 6px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightparticleSpeed}s`} repeatCount="indefinite" path={`M 530 250 C 620 250, 620 ${rightTopY}, 730 ${rightTopY}`} />
                    </circle>

                    <motion.path
                        d="M 530 250 L 730 250"
                        className={rightPathClass}
                        stroke={rightpathColor}
                        strokeWidth={rightpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.0 }}
                    />
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 6px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightparticleSpeed}s`} repeatCount="indefinite" path="M 530 250 L 730 250" />
                    </circle>

                    <motion.path
                        d={`M 530 250 C 620 250, 620 ${rightBottomY}, 730 ${rightBottomY}`}
                        className={rightPathClass}
                        stroke={rightpathColor}
                        strokeWidth={rightpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
                    />
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 6px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightparticleSpeed}s`} repeatCount="indefinite" path={`M 530 250 C 620 250, 620 ${rightBottomY}, 730 ${rightBottomY}`} />
                    </circle>
                </motion.svg>

                {/*  HTML UI OVERLAYS  */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[115%] flex flex-col items-center justify-center z-10 pointer-events-none">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative w-60 h-60 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.15)_0%,transparent_70%)] flex items-center justify-center pointer-events-auto"
                    >
                        <div className="w-16 h-16 rounded-full bg-white dark:bg-[#151515] border-2 border-red-500 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-colors duration-300">
                            {centerIcon}
                        </div>
                    </motion.div>
                    <span className="mt-[-10px] text-xs tracking-[0.2em] text-gray-500 dark:text-gray-400 font-semibold uppercase whitespace-nowrap transition-colors duration-300">
                        Agents
                    </span>
                </div>

                {/* Left Cards */}
                <div className="absolute left-[5%] -translate-y-1/2 w-[22%] flex flex-col items-start z-10" style={{ top: `${leftTopPercent}%` }}>
                    <Card title="Product 1" subtitle="Item 1" borderColor="border-orange-500/20" icon="👤" />
                </div>
                <div className="absolute left-[5%] top-[50%] -translate-y-1/2 w-[22%] flex flex-col items-start z-10">
                    <Card title="Product 2" subtitle="Item 2" borderColor="border-blue-500/20" icon="👤" />
                </div>
                <div className="absolute left-[5%] -translate-y-1/2 w-[22%] flex flex-col items-start z-10" style={{ top: `${leftBottomPercent}%` }}>
                    <Card title="Product 3" subtitle="Item 3" borderColor="border-purple-500/20" icon="👤" />
                </div>

                {/* Right Cards */}
                <div className="absolute right-[5%] -translate-y-1/2 w-[22%] flex flex-col items-end z-10" style={{ top: `${rightTopPercent}%` }}>
                    <RightCard />
                </div>
                <div className="absolute right-[5%] top-[50%] -translate-y-1/2 w-[22%] flex flex-col items-end z-10">
                    <RightCard />
                </div>
                <div className="absolute right-[5%] -translate-y-1/2 w-[22%] flex flex-col items-end z-10" style={{ top: `${rightBottomPercent}%` }}>
                    <RightCard />
                </div>

            </div>
        </div>
    );
}

interface CardProps {
    title: string;
    subtitle?: string;
    borderColor?: string;
    icon?: React.ReactNode;
}

function Card({ title, subtitle, borderColor, icon }: CardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`w-full bg-white dark:bg-[#15171B] border ${borderColor} transition-colors duration-300 p-3 lg:p-4 rounded-xl flex items-center gap-3 lg:gap-4 shadow-sm dark:shadow-lg relative z-20`}
        >
            <div className="text-xl lg:text-2xl opacity-80 shrink-0">{icon}</div>
            <div className="flex flex-col min-w-0">
                <span className={`${font.className} text-gray-900 dark:text-white text-xs lg:text-sm font-semibold truncate transition-colors duration-300`}>{title}</span>
                <span className={`${font.className} text-gray-500 text-[10px] lg:text-xs truncate transition-colors duration-300`}>{subtitle}</span>
            </div>
        </motion.div>
    );
}

function RightCard() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full bg-white dark:bg-[#15171B] border border-gray-200 dark:border-gray-800 transition-colors duration-300 p-3 lg:p-4 rounded-xl flex items-center gap-3 lg:gap-4 shadow-sm dark:shadow-lg relative z-20"
        >
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <div className="h-1.5 lg:h-2 w-3/4 bg-gray-200 dark:bg-gray-700/50 rounded-full transition-colors duration-300"></div>
                <div className="h-1.5 lg:h-2 w-1/2 bg-gray-200 dark:bg-gray-700/50 rounded-full transition-colors duration-300"></div>
            </div>
        </motion.div>
    );
}

export default DataFlow;
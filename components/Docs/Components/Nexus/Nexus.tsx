"use client";

import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Geist } from "next/font/google";

const MiniHeading = Geist({
    weight: "600",
    subsets: ["latin"],
});

const DefaultIcons = [
    <svg key="1" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#ff4f00]"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.22 1.75-.61 2.51l2.6 1.5c.65-1.21 1.01-2.58 1.01-4.01 0-4.66-3.56-8.5-8-8.95zM9 5.08V2.05C4.56 2.5 1 6.34 1 11c0 1.43.36 2.8 1.01 4.01l2.6-1.5C4.22 12.75 4 11.9 4 11c0-3.53 2.61-6.43 6-6.92zM12 19c-2.09 0-3.95-.91-5.23-2.35l-2.2 2.2C6.18 20.48 8.93 21.5 12 21.5s5.82-1.02 7.43-2.65l-2.2-2.2C15.95 18.09 14.09 19 12 19z" /></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#E01E5A]"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522v-2.521zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" /></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#635BFF]"><path d="M13.976 9.15c-1.389-.529-2.008-.857-2.008-1.579 0-.66.602-1.071 1.488-1.071 1.096 0 2.223.361 3.149.897l.86-2.518c-1.011-.538-2.316-.838-3.793-.838-2.854 0-4.834 1.47-4.834 3.992 0 3.398 4.298 2.825 4.298 4.605 0 .753-.746 1.25-1.749 1.25-1.39 0-2.871-.561-3.921-1.229l-.914 2.6c1.173.669 2.85 1.072 4.453 1.072 3.011 0 5.011-1.442 5.011-4.041 0-3.666-4.434-3.08-4.434-4.595z" /></svg>,
    <svg key="4" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black dark:text-white"><path d="M4.192 3.659L20.47 5.76c.49.062.836.505.776.994l-1.332 10.3c-.06.49-.51.84-.999.778l-16.28-2.102c-.49-.063-.837-.506-.777-.996l1.333-10.3c.06-.49.509-.84.998-.777zm11.236 3.864c-.116.033-.217.114-.265.23L11.51 16.59l-2.072-10.02c-.066-.324-.383-.532-.71-.462l-2.03.428c-.287.06-.445.362-.313.627l3.653 7.31c.148.297.48.437.785.33l2.87-1.01c.27-.096.425-.386.353-.66l-1.43-5.26 3.653-8.868c.114-.276-.046-.583-.33-.65z" /></svg>,
    <svg key="5" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#0F9D58]"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z" /></svg>,
    <svg key="6" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#4285F4]"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
];

export interface NexusProps {
    icons?: React.ReactNode[];
    centerContent?: React.ReactNode;
    curve?: number;
    centerGapX?: number;
    centerGapY?: number;
    nodeGap?: number;
    curveColor?: string;
    particleSpeed?: number;
    particleColor?: string;
    particleLength?: number;
    particleRadius?: number;
    particleWeight?: number;
    particleGlow?: string;
    strokeWidth?: number;
}

export default function Nexus({
    icons = DefaultIcons,
    centerContent,
    curve = 150,
    centerGapX = 70,
    centerGapY = 30,
    nodeGap = 40,
    curveColor = "#ffffff",
    particleSpeed = 3,
    particleColor = "#ffffff",
    particleLength = 12,
    particleRadius = 2,
    particleWeight = 4,
    strokeWidth = 1.5,
}: NexusProps) {

    const angle = useMotionValue(0);
    const colorIndex = useMotionValue(0);

    const smoothAngle = useSpring(angle, { stiffness: 30, damping: 20 });
    const smoothIndex = useSpring(colorIndex, { stiffness: 15, damping: 15 });

    const gradients = [
        ["#0F0F0F", "#141313", "#1B1A1A"],
        ["#141313", "#1E1D1D", "#2A2929"],
        ["#111111", "#181717", "#242323"],
        ["#161515", "#232222", "#2F2E2E"],
        ["#1A1919", "#2A2828", "#3A3838"],
    ];

    const mix = (start: string, end: string, progress: number) => {
        const s = parseInt(start.slice(1), 16);
        const e = parseInt(end.slice(1), 16);
        const sr = (s >> 16) & 255, sg = (s >> 8) & 255, sb = s & 255;
        const er = (e >> 16) & 255, eg = (e >> 8) & 255, eb = e & 255;
        const r = Math.round(sr + (er - sr) * progress);
        const g = Math.round(sg + (eg - sg) * progress);
        const b = Math.round(sb + (eb - sb) * progress);
        return `rgb(${r}, ${g}, ${b})`;
    };

    const background = useTransform([smoothAngle, smoothIndex], (values: number[]) => {
        const [a, i] = values;
        const rawIndex = Math.floor(i);
        const index = ((rawIndex % gradients.length) + gradients.length) % gradients.length;
        const nextIndex = (index + 1) % gradients.length;
        let t = i - rawIndex;
        if (t < 0) t = 0; else if (t > 1) t = 1;

        const [c1a, c2a, c3a] = gradients[index];
        const [c1b, c2b, c3b] = gradients[nextIndex];

        return `linear-gradient(${a}deg, ${mix(c1a, c1b, t)} 10%, ${mix(c2a, c2b, t)} 60%, ${mix(c3a, c3b, t)} 100%)`;
    });

    useEffect(() => {
        animate(angle, 360, { duration: 12, ease: "linear", repeat: Infinity });
        animate(colorIndex, gradients.length, { duration: gradients.length * 6, ease: "linear", repeat: Infinity });
    }, [angle, colorIndex, gradients.length]);

    // Added the `curve` prop to directly influence the X-axis sweep of the bezier control points
    const layoutNodes = [
        { id: "tl", startX: 200, startY: 150, path: `M 200 ${150 + nodeGap} C 200 300, ${200 + curve} 300, ${500 - centerGapX} 300` },
        { id: "tc", startX: 500, startY: 90, path: `M 500 ${90 + nodeGap} L 500 ${300 - centerGapY}` },
        { id: "tr", startX: 800, startY: 150, path: `M 800 ${150 + nodeGap} C 800 300, ${800 - curve} 300, ${500 + centerGapX} 300` },
        { id: "bl", startX: 200, startY: 450, path: `M 200 ${450 - nodeGap} C 200 300, ${200 + curve} 300, ${500 - centerGapX} 300` },
        { id: "bc", startX: 500, startY: 510, path: `M 500 ${510 - nodeGap} L 500 ${300 + centerGapY}` },
        { id: "br", startX: 800, startY: 450, path: `M 800 ${450 - nodeGap} C 800 300, ${800 - curve} 300, ${500 + centerGapX} 300` },
    ];

    return (
        <div className="w-full overflow-x-auto overflow-y-hidden flex justify-start @md:justify-center @md:[&::-webkit-scrollbar]:hidden @md:[scrollbar-width:none]">
            <motion.div
                style={{ background }}
                className="relative shrink-0 w-[1000px] h-[600px] rounded-2xl overflow-hidden drop-shadow-xl"
            >
                <div className='flex justify-between w-full h-full absolute inset-0 pointer-events-none z-0'>
                    <div className='bg-[#B8A9DD] h-64 w-64 rounded-xl blur-[140px] absolute -bottom-[100px] left-0 opacity-40' />
                    <div className='bg-[#ba2ba7] h-52 w-36 rounded-full blur-[100px] absolute top-1/2 right-0 opacity-30' />
                </div>

                <svg
                    width="1000"
                    height="600"
                    viewBox="0 0 1000 600"
                    className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
                >
                    <defs>
                        <filter id="nexus-glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {layoutNodes.map((node, index) => (
                        <g key={`path-${node.id}`}>
                            <path
                                d={node.path}
                                stroke={curveColor}
                                strokeWidth={strokeWidth}
                                fill="none"
                                className="opacity-20"
                            />
                            <g filter="url(#nexus-glow)">
                                <rect
                                    width={particleLength}
                                    height={particleWeight}
                                    rx={particleRadius}
                                    fill={particleColor}
                                    x={-(particleLength / 2)}
                                    y={-(particleWeight / 2)}
                                >
                                    <animateMotion
                                        dur={`${particleSpeed + (index % 2 === 0 ? 0.3 : 0)}s`}
                                        repeatCount="indefinite"
                                        path={node.path}
                                        rotate="auto"
                                    />
                                </rect>
                            </g>
                        </g>
                    ))}
                </svg>

                {layoutNodes.map((node, index) => (
                    <div
                        key={`node-${node.id}`}
                        style={{ top: `${node.startY}px`, left: `${node.startX}px` }}
                        className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{
                                duration: 2.5 + (index * 0.4),
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-16 h-16 @md:w-20 @md:h-20 bg-white dark:bg-[#1A1C23] rounded-2xl shadow-xl dark:shadow-black/50 flex items-center justify-center border border-gray-100 dark:border-white/5"
                        >
                            {icons[index] || icons[0]}
                        </motion.div>
                    </div>
                ))}

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                    {centerContent || (
                        <motion.button
                            style={{ background }}
                            className={`${MiniHeading.className} bg-gradient-to-r from-[#efc2d7] to-[#c5bdf1] 
                            text-white text-[15px] @md:text-[18px] font-bold rounded-xl px-8 py-4 shadow-2xl whitespace-nowrap tracking-wide border border-white/10`}
                        >
                            Integrated
                        </motion.button>
                    )}
                </div>

            </motion.div>
        </div>
    );
}
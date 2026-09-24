// HubFlow.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const topInputNodes = [
    { id: "google", name: "Google", color: "#4285F4", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" /></svg> },
    { id: "openai", name: "OpenAI", color: "#10a37f", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A6.0651 6.0651 0 0 0 19.022 19.818a5.9847 5.9847 0 0 0 3.9977-2.9001 6.0462 6.0462 0 0 0-.7378-7.0968zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829 14.6174 7.2144a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.807 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" /></svg> },
    { id: "anthropic", name: "Anthropic", color: "#D97757", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-3-8.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" /></svg> },
    { id: "gemini", name: "Gemini", color: "#8AB4F8", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM9 11.5c0 .828-.672 1.5-1.5 1.5S6 12.328 6 11.5 6.672 10 7.5 10 9 10.672 9 11.5zm4 4.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zm5-4.5c0 .828-.672 1.5-1.5 1.5S15 12.328 15 11.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5z" /></svg> },
    { id: "tool1", name: "Tool 1", color: "#FFC107", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.22 1.75-.61 2.51l2.6 1.5c.65-1.21 1.01-2.58 1.01-4.01 0-4.66-3.56-8.5-8-8.95zM9 5.08V2.05C4.56 2.5 1 6.34 1 11c0 1.43.36 2.8 1.01 4.01l2.6-1.5C4.22 12.75 4 11.9 4 11c0-3.53 2.61-6.43 6-6.92zM12 19c-2.09 0-3.95-.91-5.23-2.35l-2.2 2.2C6.18 20.48 8.93 21.5 12 21.5s5.82-1.02 7.43-2.65l-2.2-2.2C15.95 18.09 14.09 19 12 19z" /></svg> },
    { id: "tool2", name: "Tool 2", color: "#00BCD4", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z" /></svg> },
];

const bottomOutputIcons = [
    { id: "reddit", color: "#FF4500", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.508 1.183-.838 2.815-1.39 4.615-1.472l.91-4.263a.194.194 0 0 1 .197-.154l2.884.615a1.252 1.252 0 0 1 1.415-.736zM8.76 13.36c-1.025 0-1.854.83-1.854 1.855s.829 1.854 1.854 1.854c1.024 0 1.853-.83 1.853-1.854s-.829-1.855-1.853-1.855zm6.48 0c-1.024 0-1.853.83-1.853 1.855s.829 1.854 1.853 1.854c1.025 0 1.854-.83 1.854-1.854s-.829-1.855-1.854-1.855zm-3.24 4.708c-1.42 0-2.652-.408-2.91-1.037l-.87.48c.453 1.055 2.052 1.637 3.78 1.637 1.728 0 3.327-.582 3.78-1.637l-.87-.48c-.258.63-1.49 1.037-2.91 1.037z" /></svg> },
    { id: "wordpress", color: "#21759B", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.05-.18 2.986-.51-.024-.037-.046-.078-.065-.123l-2.763-7.572zM3.008 12c0 3.56 2.07 6.634 5.068 8.092L3.788 8.341c-.516 1.117-.78 2.354-.78 3.659zm14.887-5.596c-.68 0-1.127.35-1.127.84 0 .493.535.888 1.127 1.346.736.568 1.583 1.258 1.583 2.52 0 1.144-.766 2.585-2.227 4.542l-2.684 7.234c2.812-1.624 4.697-4.664 4.697-8.136 0-3.353-2.155-5.962-4.148-7.147-1.14-.678-1.785-1.286-1.785-1.93 0-.582.47-1.1 1.037-1.205.152-.027.305-.043.46-.043 1.085 0 2.115.344 2.955.93-.05-.015-.1-.027-.15-.027-.577 0-1.042.482-1.042 1.076zM12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" /></svg> },
    { id: "quora", color: "#B92B27", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10c-1.398 0-2.73-.287-3.955-.807l-.92.836-1.29-.693.303-1.026A9.957 9.957 0 0 1 2 12C2 6.477 6.477 2 12 2zm2.977 12.06c.365-.417.653-.883.856-1.392.204-.509.307-1.05.307-1.616 0-.555-.1-1.08-.293-1.572-.192-.49-.47-.936-.82-1.325a3.865 3.865 0 0 0-1.296-.91C13.23 7.085 12.656 7 12 7c-.668 0-1.25.086-1.728.253a3.687 3.687 0 0 0-1.28.71 3.541 3.541 0 0 0-.825 1.13c-.198.44-.302.946-.302 1.503 0 .546.096 1.05.286 1.5.188.448.455.845.792 1.179.336.335.753.601 1.238.79.484.186 1.05.284 1.683.284.28 0 .553-.024.815-.07.08.156.177.306.29.444.204.248.455.432.744.54l-1.332 1.347 1.173.553 1.492-1.606c.404-.207.753-.453 1.036-.732a3.834 3.834 0 0 0 .917-1.266zM12 8.78c.414 0 .736.14.954.417.217.275.328.712.328 1.295 0 .61-.115 1.066-.34 1.353-.223.283-.55.427-.96.427-.406 0-.726-.14-.948-.415-.22-.275-.333-.708-.333-1.29 0-.6.11-1.042.33-1.316.223-.277.546-.417.962-.417z" /></svg> },
    { id: "facebook", color: "#1877F2", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
    {
        id: "x",
        color: "#5c626b",
        icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.974H5.078z" /></svg>
    },
];

export interface HubFlowProps {
    gap?: number;
    pillGap?: number;
    pillRadius?: number;
    topCurve?: number;
    bottomCurve?: number;
    particleColor?: string;
    bottomParticleColor?: string;
    particleSpeed?: number;
    particleLength?: number;
    particleWeight?: number;
    particleCurve?: number;
    curveTopGap?: number;
    curveBottomGap?: number;
}

export default function HubFlow({
    gap = 0,
    pillGap = 130,
    pillRadius = 999,
    topCurve = 120,
    bottomCurve = 120,
    particleColor = "#f97316",
    bottomParticleColor = "#3b82f6", 
    particleSpeed = 2.5,
    particleLength = 16,
    particleWeight = 3,
    particleCurve = 1.5,
    curveTopGap = 0,
    curveBottomGap = 0,
}: HubFlowProps) {

    // SVG Canvas configuration
    const CANVAS_WIDTH = 1000;
    const CANVAS_HEIGHT = 800;

    const TOP_Y = 120;
    const MID_Y = 400;
    const BOTTOM_Y = 650;
    const CENTER_X = CANVAS_WIDTH / 2;

    // Horizontal Spacing calculation
    const topNodesStartX = CENTER_X - (pillGap * (topInputNodes.length - 1)) / 2;
    const bottomNodeSpacing = pillGap * 0.65;
    const bottomNodesStartX = CENTER_X - (bottomNodeSpacing * (bottomOutputIcons.length - 1)) / 2;

    // Central Pill Dimensions
    const PILL_WIDTH = 170;
    const PILL_HEIGHT = 50;

    // Calculate exact target points based on the props
    const topStartY = TOP_Y + 36 + curveTopGap;
    const topTargetY = MID_Y - (PILL_HEIGHT / 2) - gap;

    const bottomStartY = MID_Y + (PILL_HEIGHT / 2) + gap;
    const bottomEndY = BOTTOM_Y - 24 - curveBottomGap;

    // Flawless cubic bezier generators
    const generateTopPath = (startX: number) => {
        return `M ${startX} ${topStartY} C ${startX} ${topStartY + topCurve}, ${CENTER_X} ${topTargetY - topCurve}, ${CENTER_X} ${topTargetY}`;
    };

    const generateBottomPath = (endX: number) => {
        return `M ${CENTER_X} ${bottomStartY} C ${CENTER_X} ${bottomStartY + bottomCurve}, ${endX} ${bottomEndY - bottomCurve}, ${endX} ${bottomEndY}`;
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#050505] flex items-center justify-center p-4 font-sans overflow-hidden transition-colors duration-300">

            <div className="w-full overflow-x-auto custom-scrollbar flex justify-start md:justify-center">

                <div className="w-[1000px] h-[800px] relative shrink-0">

                    {/* Ambient Glow */}
                    <div
                        className="absolute inset-0 pointer-events-none rounded-2xl hidden dark:block transition-opacity duration-300"
                        style={{ background: `radial-gradient(circle at center, ${particleColor}15 0%, transparent 60%)` }}
                    />

                    {/* SVG Paths & Particles Canvas */}
                    <svg
                        viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    >
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2.5" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {/* Top Paths & Particles */}
                        {topInputNodes.map((node, index) => {
                            const nodeX = topNodesStartX + index * pillGap;
                            const pathData = generateTopPath(nodeX);
                            const delay = index * 0.4;

                            return (
                                <g key={`top-path-${node.id}`}>
                                    <path d={pathData} strokeWidth="1.5" className="stroke-gray-300 dark:stroke-[#1f1f1f] transition-colors duration-300" />

                                    <g filter="url(#glow)">
                                        <rect width={particleLength} height={particleWeight} rx={particleCurve} fill={particleColor} x={-(particleLength / 2)} y={-(particleWeight / 2)}>
                                            <animateMotion dur={`${particleSpeed}s`} repeatCount="indefinite" path={pathData} rotate="auto" begin={`${delay}s`} />
                                        </rect>
                                    </g>
                                </g>
                            );
                        })}

                        {/* Bottom Paths & Particles - Perfectly Synchronized */}
                        {bottomOutputIcons.map((node, index) => {
                            const nodeX = bottomNodesStartX + index * bottomNodeSpacing;
                            const pathData = generateBottomPath(nodeX);

                            // The exact moment a top particle hits the center, a bottom particle emerges!
                            const delay = (index * 0.4) + particleSpeed;

                            return (
                                <g key={`bottom-path-${node.id}`}>
                                    <path d={pathData} strokeWidth="1.5" className="stroke-gray-300 dark:stroke-[#1f1f1f] transition-colors duration-300" />

                                    <g filter="url(#glow)">
                                        <rect width={particleLength - 2} height={particleWeight} rx={particleCurve} fill={bottomParticleColor} x={-((particleLength - 2) / 2)} y={-(particleWeight / 2)}>
                                            <animateMotion dur={`${particleSpeed * 0.8}s`} repeatCount="indefinite" path={pathData} rotate="auto" begin={`${delay}s`} />
                                        </rect>
                                    </g>
                                </g>
                            );
                        })}
                    </svg>

                    {/* Top Input Nodes */}
                    {topInputNodes.map((node, index) => {
                        const nodeX = topNodesStartX + index * pillGap;
                        return (
                            <div
                                key={node.id}
                                className="absolute z-20 w-[72px] h-[72px] rounded-2xl border bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center p-2 shadow-sm dark:shadow-lg transition-colors duration-300"
                                style={{ left: `${nodeX - 36}px`, top: `${TOP_Y - 36}px` }}
                            >
                                <div style={{ color: node.color }} className="transition-colors duration-300">
                                    {node.icon}
                                </div>
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/5 transition-colors duration-300" />
                            </div>
                        );
                    })}

                    {/* Central Brand Node & Pulse */}
                    <motion.div
                        className="absolute z-10 rounded-full blur-2xl opacity-10 dark:opacity-20 transition-opacity duration-300"
                        style={{ width: '120px', height: '120px', left: `${CENTER_X - 60}px`, top: `${MID_Y - 60}px`, backgroundColor: particleColor }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div
                        className="absolute z-30 flex items-center justify-center pl-3 pr-4 bg-white dark:bg-[#E5E2D9] shadow-lg dark:shadow-[0_0_40px_rgba(249,115,22,0.15)] transition-colors duration-300"
                        style={{
                            left: `${CENTER_X - (PILL_WIDTH / 2)}px`,
                            top: `${MID_Y - (PILL_HEIGHT / 2)}px`,
                            width: `${PILL_WIDTH}px`,
                            height: `${PILL_HEIGHT}px`,
                            borderRadius: `${pillRadius}px`
                        }}
                    >
                        <span className="text-gray-900 font-bold text-[15px] tracking-tight">React Vibe</span>
                    </div>

                    {/* Bottom Output Nodes */}
                    {bottomOutputIcons.map((node, index) => {
                        const nodeX = bottomNodesStartX + index * bottomNodeSpacing;
                        return (
                            <div
                                key={node.id}
                                className="absolute z-20 w-12 h-12 rounded-full border bg-white dark:bg-[#0a0a0a] border-gray-200 dark:border-gray-800 flex items-center justify-center shadow-sm dark:shadow-lg transition-colors duration-300"
                                style={{ left: `${nodeX - 24}px`, top: `${BOTTOM_Y - 24}px` }}
                            >
                                <div style={{ color: node.color }} className="transition-colors duration-300">
                                    {node.icon}
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}
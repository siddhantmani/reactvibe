"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineOpenAI } from "react-icons/ai";
import { RiClaudeFill } from "react-icons/ri";
import { TbBrandXdeep } from "react-icons/tb";
import { RiGeminiFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const aiSources = [
    {
        id: "gpt",
        name: "GPT-4",
        detail: "120ms",
        color: "#10a37f",
        y: 100,
        icon: <AiOutlineOpenAI size={25} />
    },
    {
        id: "claude",
        name: "Claude 3",
        detail: "98ms",
        color: "#d97757",
        y: 180,
        icon: <RiClaudeFill size={25} />

    },
    {
        id: "gemini",
        name: "Gemini",
        detail: "85ms",
        color: "#8ab4f8",
        y: 260,
        icon: <RiGeminiFill size={25} />

    },
    {
        id: "deepseek",
        name: "DeepSeek",
        detail: "142ms",
        color: "#4d6bfe",
        y: 340,
        icon: <TbBrandXdeep size={25} />

    },
    {
        id: "grok",
        name: "Grok",
        detail: "102ms",
        color: "#999784",
        y: 420,
        icon: <FaXTwitter size={25} />

    }
];

export interface DataSourceItem {
    id: string;
    name: string;
    detail: string;
    color: string;
    y: number;
    icon: React.ReactNode;
}

export interface ConvergeProps {
    CurveRadius?: number;
    CurveWeight?: number;
    CurveColor?: string;
    CurcePillColor?: string;
    PillSpeed?: number;
    PillWeight?: number;
    PillLength?: number;
    PillRadius?: number;

    // New props for full customizability
    headerText?: string;
    hubTopText?: string;
    hubBottomText?: string;
    dataSources?: DataSourceItem[];
}

export default function Converge({
    CurveRadius = 150,
    CurveWeight = 1.5,
    CurveColor,
    CurcePillColor = "#8ab4f8", // Adjusted default to match Gemini's blue for this theme
    PillSpeed = 3,
    PillWeight = 2.5,
    PillLength = 14,
    PillRadius = 1,

    headerText = "AI MODEL ORCHESTRATION",
    hubTopText = "RESULT",
    hubBottomText = "BEST",
    dataSources = aiSources
}: ConvergeProps) {
    // Canvas layout coordinates
    const startX = 260;
    const endX = 600;
    const endY = 220; // Adjusted slightly up to center between the 4 items

    // Generate smooth bezier curves for each source based on CurveRadius
    const generatePath = (startY: number) => {
        const offset1 = CurveRadius;
        const offset2 = CurveRadius * 0.66;
        return `M ${startX} ${startY} C ${startX + offset1} ${startY}, ${endX - offset2} ${endY}, ${endX} ${endY}`;
    };

    return (
        <div className=" bg-white dark:bg-[#0b0b0b] flex items-center justify-center p-4 font-sans transition-colors duration-300">

            <div className="w-full overflow-x-auto custom-scrollbar flex justify-start @md:justify-center">

                {/* Main Container */}
                <div className="w-[850px] h-[500px] relative shrink-0 bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1a1a1a] rounded-xl overflow-hidden dark:shadow-2xl transition-colors duration-300">

                    {/* Top Header */}
                    <div className="absolute top-6 left-8 right-8 flex justify-between items-center z-20 font-mono text-sm tracking-wider">
                        <div className="text-gray-500 font-semibold transition-colors duration-300">
                            {headerText}
                        </div>
                        <div className="font-bold flex items-center gap-2" style={{ color: CurcePillColor }}>
                            <span className="text-lg">⚡</span> ACTIVE
                        </div>
                    </div>

                    {/* SVG Connecting Lines & Particles */}
                    <svg
                        viewBox="0 0 850 500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    >
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {dataSources.map((source, index) => {
                            const pathData = generatePath(source.y);
                            const delay = index * 0.4;

                            return (
                                <g key={`connection-${source.id}`}>
                                    <path
                                        d={pathData}
                                        strokeWidth={CurveWeight}
                                        className={CurveColor ? "" : "stroke-gray-200 dark:stroke-[#1f1f1f] transition-colors duration-300"}
                                        style={CurveColor ? { stroke: CurveColor } : {}}
                                    />

                                    <g filter="url(#glow)">
                                        <rect
                                            width={PillLength}
                                            height={PillWeight}
                                            rx={PillRadius}
                                            fill={CurcePillColor}
                                            x={-(PillLength / 2)}
                                            y={-(PillWeight / 2)}
                                        >
                                            <animateMotion
                                                dur={`${PillSpeed}s`}
                                                repeatCount="indefinite"
                                                path={pathData}
                                                rotate="auto"
                                                begin={`${delay}s`}
                                            />
                                        </rect>
                                    </g>
                                </g>
                            );
                        })}
                    </svg>

                    {/*Left List Items */}
                    {dataSources.map((source) => (
                        <div
                            key={`item-${source.id}`}
                            className="absolute left-8 flex items-center z-20"
                            style={{ top: `${source.y - 12}px` }}
                        >
                            <div
                                className="w-8 h-8 flex items-center justify-center mr-3"
                                style={{ color: source.color }}
                            >
                                {source.icon}
                            </div>
                            <span className="text-gray-800 dark:text-gray-200 font-medium text-sm w-28 transition-colors duration-300">
                                {source.name}
                            </span>
                            <span className="text-gray-400 dark:text-gray-600 font-mono text-sm transition-colors duration-300">
                                {source.detail}
                            </span>
                        </div>
                    ))}

                    {/*Central Hub & Pulsing Glow */}

                    {/* Infinite Breathing Pulse Background */}
                    <motion.div
                        className="absolute z-10 rounded-full blur-xl dark:blur-2xl"
                        style={{
                            width: '90px',
                            height: '90px',
                            left: `${endX - 5}px`,
                            top: `${endY - 45}px`,
                            backgroundColor: CurcePillColor
                        }}
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.15, 0.35, 0.15]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Main Hub Node */}
                    <div
                        className="absolute z-20 flex flex-col items-center justify-center rounded-full bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
                        style={{
                            width: '80px',
                            height: '80px',
                            left: `${endX}px`,
                            top: `${endY - 40}px`,
                            border: `1px solid ${CurcePillColor}`,
                            boxShadow: `0 0 30px ${CurcePillColor}25`
                        }}
                    >
                        {/* Inner glowing core */}
                        <div
                            className="absolute inset-0 rounded-full transition-shadow duration-300"
                            style={{ boxShadow: `inset 0 0 20px ${CurcePillColor}30` }}
                        />

                        <span className="text-gray-500 dark:text-gray-400 text-[10px] font-mono tracking-widest uppercase mb-0.5 transition-colors duration-300">
                            {hubTopText}
                        </span>
                        <span className="font-mono font-bold text-lg leading-none" style={{ color: CurcePillColor }}>
                            {hubBottomText}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

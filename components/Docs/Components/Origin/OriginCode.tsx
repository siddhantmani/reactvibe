"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DefaultTopIcon = <svg viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-500"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>;
const DefaultIcon1 = <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600"><path d="M7.077 16.205l1.673-10.575a.86.86 0 0 1 .848-.72h4.582c1.848 0 2.923.415 3.513 1.258.468.66.57 1.547.28 2.529-.537 1.83-2.164 2.898-4.225 2.898H11.53l-.865 5.48h-3.588zm4.354-9.35l-1.04 6.586h1.834c1.173 0 2.214-.493 2.532-1.895.2-.876.012-1.428-.21-1.74-.298-.42-.942-.647-2.023-.647h-1.63l.537-2.304z" /></svg>;
const DefaultIcon2 = <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500"><path d="M21 4H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 18V9h18v9H3zm18-11H3V6h18v1z" /></svg>;
const DefaultIcon3 = <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-500"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.06 14.52V18h-2.12v-1.45c-1.32-.23-2.47-.94-2.92-2.18l1.79-.75c.26.69.83 1.14 1.62 1.14 1.05 0 1.56-.51 1.56-1.14 0-.82-.87-1.04-2.18-1.46-1.57-.51-2.48-1.38-2.48-2.6 0-1.22 1-2.12 2.6-2.39V5h2.12v1.44c1.13.2 1.95.82 2.37 1.83l-1.79.75c-.2-.59-.7-1.01-1.5-1.01-.9 0-1.44.47-1.44 1.1 0 .75.76 1.01 2.21 1.48 1.57.51 2.45 1.34 2.45 2.62 0 1.25-1 2.08-2.61 2.31z" /></svg>;
const DefaultIcon4 = <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600"><path d="M4 10h16v2H4zm10-5h6v2h-6zm-6 0h4v2H8zm-4 0h2v2H4zm0 10h16v2H4zM2 22h20L12 2 2 22z" /></svg>;

export interface OriginCodeProps {
    topIcon?: React.ReactNode;
    bottomIcons?: React.ReactNode[];
    curveColor?: string;
    curve?: number;
    topGap?: number;
    bottomGap?: number;
    particleSpeed?: number;
    particleColor?: string;
    particleLength?: number;
    particleRadius?: number;
    particleWeight?: number;
    particleGlow?: string;
    strokeWidth?: number;
    delay?: number;
}

export default function OriginCode({
    topIcon = DefaultTopIcon,
    bottomIcons = [DefaultIcon1, DefaultIcon2, DefaultIcon3, DefaultIcon4],
    curveColor = "",
    curve = 80,
    topGap = 0,
    bottomGap = 0,
    particleSpeed = 2.8,
    particleColor = "#ffffff",
    particleLength = 16,
    particleRadius = 1.25,
    particleWeight = 2.5,
    strokeWidth = 2.5,
    delay = 1.4,
}: OriginCodeProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const CANVAS_WIDTH = 800;
    const CANVAS_HEIGHT = 450;
    const CENTER_X = CANVAS_WIDTH / 2;
    const TOP_Y = 120;
    const BOTTOM_Y = 320;
    const TOP_NODE_SIZE = 72;
    const BOTTOM_NODE_SIZE = 56;

    const bottomXPositions = [180, 310, 490, 620];
    const pathStartY = TOP_Y + (TOP_NODE_SIZE / 2) + topGap;
    const pathEndY = BOTTOM_Y - (BOTTOM_NODE_SIZE / 2) - bottomGap;

    const generatePath = (endX: number) => {
        return `M ${CENTER_X} ${pathStartY} C ${CENTER_X} ${pathStartY + curve}, ${endX} ${pathEndY - curve}, ${endX} ${pathEndY}`;
    };

    return (
        <div className="w-full bg-gradient-to-t from-[#ffffff] via-[#eef2f9] to-[#c1d1fa] dark:from-[#080808] dark:via-[#0c0f17] dark:to-[#161a28] flex items-center justify-center p-4 @md:p-8 font-sans transition-colors duration-300 rounded-3xl overflow-hidden">

            {/* Added scrollbar hiding classes specifically for @md: and larger devices */}
            <div className="w-full overflow-x-auto overflow-y-hidden flex justify-start @md:justify-center @md:[&::-webkit-scrollbar]:hidden @md:[scrollbar-width:none]">

                <div className="w-[800px] h-[450px] relative shrink-0">

                    {/* Central Top Node */}
                    <div
                        className="absolute z-20 flex items-center justify-center bg-white dark:bg-[#1A1C23] shadow-xl dark:shadow-black/60 rounded-2xl transition-colors duration-300"
                        style={{
                            width: `${TOP_NODE_SIZE}px`,
                            height: `${TOP_NODE_SIZE}px`,
                            left: `${CENTER_X - (TOP_NODE_SIZE / 2)}px`,
                            top: `${TOP_Y - (TOP_NODE_SIZE / 2)}px`,
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: delay - 0.4 }}
                            className="w-full h-full flex items-center justify-center"
                        >
                            {topIcon}
                        </motion.div>
                    </div>

                    {/* SVG Paths & Particles Canvas */}
                    <motion.svg
                        ref={ref}
                        viewBox={`0 0 ${CANVAS_WIDTH} ${CANVAS_HEIGHT}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    >
                        <defs>
                            <filter id="glow-particle" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2.5" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        {bottomXPositions.map((xPos, index) => {
                            const pathData = generatePath(xPos);

                            return (
                                <g key={`path-${index}`}>
                                    <motion.path
                                        d={pathData}
                                        className={curveColor ? "" : "stroke-blue-200 dark:stroke-[#2A3043] transition-colors duration-300"}
                                        style={curveColor ? { stroke: curveColor } : {}}
                                        strokeWidth={strokeWidth}
                                        strokeLinecap="round"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: isInView ? 1 : 0 }}
                                        transition={{ duration: 1.2, ease: "easeInOut", delay }}
                                    />

                                    <g filter="url(#glow-particle)">
                                        <rect
                                            width={particleLength}
                                            height={particleWeight}
                                            rx={particleRadius}
                                            fill={particleColor}
                                            x={-(particleLength / 2)}
                                            y={-(particleWeight / 2)}
                                        >
                                            <animateMotion
                                                dur={`${particleSpeed}s`}
                                                repeatCount="indefinite"
                                                path={pathData}
                                                rotate="auto"
                                                begin={`${index * 0.2}s`}
                                            />
                                        </rect>
                                    </g>
                                </g>
                            );
                        })}
                    </motion.svg>

                    {/* Bottom Output Nodes */}
                    {bottomXPositions.map((xPos, index) => {
                        const icon = bottomIcons[index] || bottomIcons[0];

                        return (
                            <div
                                key={`bottom-node-${index}`}
                                className="absolute z-20 flex items-center justify-center bg-white dark:bg-[#1A1C23] shadow-lg dark:shadow-black/50 rounded-xl transition-colors duration-300"
                                style={{
                                    width: `${BOTTOM_NODE_SIZE}px`,
                                    height: `${BOTTOM_NODE_SIZE}px`,
                                    left: `${xPos - (BOTTOM_NODE_SIZE / 2)}px`,
                                    top: `${BOTTOM_Y - (BOTTOM_NODE_SIZE / 2)}px`,
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                                    transition={{ duration: 0.6, delay: delay + 0.6 + (index * 0.1) }}
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    {icon}
                                </motion.div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}
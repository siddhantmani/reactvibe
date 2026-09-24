"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect } from "react";

const WAVE_DATA = [
    { d: "M0 200 C200 100, 200 300, 400 200", duration: 3, opacity: 0.3, r: 4, delay: 0, side: "left" },
    { d: "M0 200 C200 100, 250 300, 400 200", duration: 3, opacity: 0.3, r: 4, delay: 0, side: "left" },
    { d: "M0 200 C200 100, 300 300, 400 200", duration: 3, opacity: 0.3, r: 4, delay: 0, side: "left" },
    { d: "M0 200 C200 100, 150 350, 400 200", duration: 3.5, opacity: 0.25, r: 3, delay: 0.2, side: "left" },
    { d: "M0 200 C200 100, 250 400, 400 200", duration: 4, opacity: 0.2, r: 3, delay: 0.4, side: "left" },
    { d: "M400 200 C500 100, 600 150, 800 200", duration: 3, opacity: 0.3, r: 4, delay: 0.1, side: "right" },
    { d: "M400 200 C500 100, 600 200, 800 200", duration: 3, opacity: 0.3, r: 4, delay: 0.2, side: "right" },
    { d: "M400 200 C500 100, 600 250, 800 200", duration: 3, opacity: 0.3, r: 4, delay: 0.3, side: "right" },
    { d: "M400 200 C500 100, 600 300, 800 200", duration: 3, opacity: 0.25, r: 3, delay: 0.2, side: "right" },
    { d: "M400 200 C500 100, 600 350, 800 200", duration: 3.5, opacity: 0.2, r: 3, delay: 0.4, side: "right" },
];

type ColorProp = string | string[];

interface WaveCTAProps {
    leftWave?: ColorProp;
    leftCircle?: ColorProp;
    rightWave?: ColorProp;
    rightCircle?: ColorProp;
    buttonBorder?: ColorProp;
}


const toColorArray = (color?: ColorProp, fallback: string[] = ["#0a52f0"]): string[] => {
    if (!color) return fallback;
    return Array.isArray(color) ? color : [color];
};

const WaveBackground = ({
    leftWave,
    leftCircle,
    rightWave,
    rightCircle
}: Omit<WaveCTAProps, "buttonBorder">) => {
    // Process the props into usable arrays
    const colors = {
        leftWave: toColorArray(leftWave),
        leftCircle: toColorArray(leftCircle),
        rightWave: toColorArray(rightWave),
        rightCircle: toColorArray(rightCircle),
    };

    return (
        <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
        >
            <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Render Paths */}
            {WAVE_DATA.map((line, index) => {
                const palette = line.side === "left" ? colors.leftWave : colors.rightWave;
                const waveColor = palette[index % palette.length];

                return (
                    <motion.path
                        key={`wave-path-${index}`}
                        d={line.d}
                        stroke={waveColor}
                        strokeWidth={2}
                        fill="none"
                        strokeOpacity={line.opacity}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: line.opacity }}
                        transition={{
                            pathLength: { duration: line.duration, repeat: Infinity, repeatType: "reverse" },
                            opacity: { duration: 0.5, delay: line.delay },
                        }}
                    />
                );
            })}

            {/* Render Particles */}
            {WAVE_DATA.map((line, index) => {
                const palette = line.side === "left" ? colors.leftCircle : colors.rightCircle;
                const particleColor = palette[index % palette.length];

                return (
                    <motion.circle
                        key={`wave-particle-${index}`}
                        r={line.r}
                        fill={particleColor}
                        filter="url(#glow)"
                    >
                        <animateMotion
                            dur={`${line.duration}s`}
                            repeatCount="indefinite"
                            path={line.d}
                        />
                    </motion.circle>
                );
            })}
        </svg>
    );
};

export default function WaveCTA({
    leftWave,
    leftCircle,
    rightWave,
    rightCircle,
}: WaveCTAProps) {
    const angle = useMotionValue(0);
    const animatedBorder = useTransform(
        angle,
        (a) => `linear-gradient(${a}deg, #0a52f0, #ffffff, #ffffff, #f5e2ae, #dcd7fc)`
    );

    useEffect(() => {
        animate(angle, 360, {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        });
    }, [angle]);


    return (
        <div className="flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5,
                }}
            >
                <div className="relative flex items-center justify-center w-screen max-w-7xl h-screen">

                    <WaveBackground
                        leftWave={leftWave}
                        leftCircle={leftCircle}
                        rightWave={rightWave}
                        rightCircle={rightCircle}
                    />

                    <div className="relative z-10 flex items-center justify-center">
                        <motion.div
                            className="rounded-full p-[2px]"
                            style={{ background: animatedBorder }}
                        >
                            {/* Actual button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 text-base font-semibold rounded-full bg-white text-[#000000] transition-all"
                                style={{
                                    boxShadow: `
                                        0px 12px 40px rgba(60,80,180,0.08),
                                        0px 20px 60px rgba(0,0,0,0.05)
                                    `,
                                }}
                            >
                                Start For Free
                            </motion.button>
                        </motion.div>
                    </div>


                </div>
            </motion.div>
        </div>
    );
}
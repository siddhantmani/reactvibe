"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect } from "react";

function WaveCTAPreview() {
    const angle = useMotionValue(0);
    const animatedBorder = useTransform(
        angle,
        (a) =>
            `linear-gradient(${a}deg, #0a52f0, #ffffff, #ffffff, #f5e2ae, #dcd7fc)`
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
                {/* FIXED container */}
                <div className="relative flex items-center justify-center w-[800px] h-[200px] ">

                    {/* SVG ANIMATIONS (untouched)  */}
                    <svg
                        viewBox="0 0 800 400"
                        className="absolute inset-0 w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Left lines */}
                        <motion.path
                            d="M0 200 C200 100, 300 300, 400 200"
                            stroke="#0a52f0"
                            strokeWidth="2"
                            fill="none"
                            strokeOpacity="0.3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.3 }}
                            transition={{
                                pathLength: { duration: 3, repeat: Infinity, repeatType: "reverse" },
                                opacity: { duration: 0.5 },
                            }}
                        />

                        <motion.path
                            d="M0 200 C200 100, 150 350, 400 200"
                            stroke="#0a52f0"
                            strokeWidth="2"
                            fill="none"
                            strokeOpacity="0.25"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.25 }}
                            transition={{
                                pathLength: { duration: 3.5, repeat: Infinity, repeatType: "reverse" },
                                opacity: { duration: 0.5, delay: 0.2 },
                            }}
                        />

                        <motion.path
                            d="M0 200 C200 100, 250 400, 400 200"
                            stroke="#0a52f0"
                            strokeWidth="2"
                            fill="none"
                            strokeOpacity="0.2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.2 }}
                            transition={{
                                pathLength: { duration: 4, repeat: Infinity, repeatType: "reverse" },
                                opacity: { duration: 0.5, delay: 0.4 },
                            }}
                        />

                        {/* Right lines */}
                        <motion.path
                            d="M400 200 C500 100, 600 250, 800 200"
                            stroke="#0a52f0"
                            strokeWidth="2"
                            fill="none"
                            strokeOpacity="0.3"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.3 }}
                            transition={{
                                pathLength: { duration: 2.5, repeat: Infinity, repeatType: "reverse" },
                                opacity: { duration: 0.5 },
                            }}
                        />

                        <motion.path
                            d="M400 200 C500 100, 600 300, 800 200"
                            stroke="#0a52f0"
                            strokeWidth="2"
                            fill="none"
                            strokeOpacity="0.25"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.25 }}
                            transition={{
                                pathLength: { duration: 3, repeat: Infinity, repeatType: "reverse" },
                                opacity: { duration: 0.5, delay: 0.2 },
                            }}
                        />

                        <motion.path
                            d="M400 200 C500 100, 600 350, 800 200"
                            stroke="#0a52f0"
                            strokeWidth="2"
                            fill="none"
                            strokeOpacity="0.2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.2 }}
                            transition={{
                                pathLength: { duration: 3.5, repeat: Infinity, repeatType: "reverse" },
                                opacity: { duration: 0.5, delay: 0.4 },
                            }}
                        />

                        {/* Moving particles */}
                        <motion.circle r="4" fill="#0a52f0" filter="url(#glow)">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M0 200 C200 100, 300 300, 400 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#0a52f0" filter="url(#glow)">
                            <animateMotion dur="3.5s" repeatCount="indefinite" path="M0 200 C200 100, 150 350, 400 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#0a52f0" filter="url(#glow)">
                            <animateMotion dur="4s" repeatCount="indefinite" path="M0 200 C200 100, 250 400, 400 200" />
                        </motion.circle>

                        <motion.circle r="4" fill="#0a52f0" filter="url(#glow)">
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M400 200 C500 100, 600 250, 800 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#0a52f0" filter="url(#glow)">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M400 200 C500 100, 600 300, 800 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#0a52f0" filter="url(#glow)">
                            <animateMotion dur="3.5s" repeatCount="indefinite" path="M400 200 C500 100, 600 350, 800 200" />
                        </motion.circle>
                    </svg>

                    {/* BUTTON WITH ROTATING BORDER */}
                    <div className="relative z-10 flex items-center justify-center">
                        {/* Rotating border wrapper */}
                        <motion.div
                            className="rounded-full p-[2px]"
                            style={{ background: animatedBorder }}
                        >
                            {/* Actual button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 text-base font-semibold rounded-full bg-gradient-to-b from-[#d7e0f7] via-[#cfdcfe] to-[#e0e7f7] text-[#000000] transition-all"
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

export default WaveCTAPreview;

"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Figtree } from "next/font/google";
import Link from "next/link";
import React, { useEffect } from "react";

const BTNFont = Figtree({
  weight: "500",
  subsets: ["latin"],
})

function HeroSectionBTN() {
    // 🔥 Rotating border setup (same as Footer / NavbarCTA)
    const angle = useMotionValue(0);
    const animatedBorder = useTransform(
        angle,
        (a) =>
            `linear-gradient(${a}deg, #bafca2, #000000, #000000, #000000, #ffa600)`
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
                <div className="relative flex items-center justify-center xl:w-[400px] xl:h-[280px] w-[800px] h-[230px] ">

                    {/* --- SVG ANIMATIONS (untouched) --- */}
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
                            stroke="#61e60e"
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
                            stroke="#fa3ef4"
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
                            stroke="#ffa600"
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
                            stroke="#61e60e"
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
                            stroke="#fa3ef4"
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
                            stroke="#ffa600"
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
                        <motion.circle r="3" fill="#d6fcbd" filter="url(#glow)">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M0 200 C200 100, 300 300, 400 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#d6fcbd" filter="url(#glow)">
                            <animateMotion dur="3.5s" repeatCount="indefinite" path="M0 200 C200 100, 150 350, 400 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#d6fcbd" filter="url(#glow)">
                            <animateMotion dur="4s" repeatCount="indefinite" path="M0 200 C200 100, 250 400, 400 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#d6fcbd" filter="url(#glow)">
                            <animateMotion dur="2.5s" repeatCount="indefinite" path="M400 200 C500 100, 600 250, 800 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#d6fcbd" filter="url(#glow)">
                            <animateMotion dur="3s" repeatCount="indefinite" path="M400 200 C500 100, 600 300, 800 200" />
                        </motion.circle>

                        <motion.circle r="3" fill="#d6fcbd" filter="url(#glow)">
                            <animateMotion dur="3.5s" repeatCount="indefinite" path="M400 200 C500 100, 600 350, 800 200" />
                        </motion.circle>
                    </svg>

                    {/* --- BUTTON WITH ROTATING BORDER --- */}
                    <div className="relative z-10 flex items-center justify-center">
                        {/* Rotating border wrapper */}
                        <Link href="/docs">
                            <motion.div
                                className="rounded-full p-[1px] scale-105"
                                style={{ background: animatedBorder }}
                            >
                                {/* Actual button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={` ${BTNFont.className} px-6 cursor-pointer py-3 text-base font-semibold rounded-full bg-gradient-to-b from-[#151515] via-[#0a0a0a] to-[#0e0e0e] text-[#ffffff] transition-all xl:text-sm`}
                                    style={{
                                        boxShadow: `
                                    0px 12px 40px rgba(60,80,180,0.08),
                                    0px 20px 60px rgba(0,0,0,0.05)
                                    `,
                                    }}
                                >
                                    View Components
                                </motion.button>
                            </motion.div>
                        </Link>
                    </div>

                </div>
            </motion.div>
        </div>
    );
}

export default HeroSectionBTN;

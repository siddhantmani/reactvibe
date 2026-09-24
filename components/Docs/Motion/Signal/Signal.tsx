"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiRobot3Fill } from "react-icons/ri";

interface SignalProps {
    leftGap?: number;
    rightGap?: number;
    centerIcon?: React.ReactNode;

    leftpathColor?: string;
    leftparticleColor?: string;
    leftparticleSpeed?: number;
    leftpathWidth?: number;
    leftparticleSize?: number;
    leftParticleDelay?: number;

    rightpathColor?: string;
    rightparticleColor?: string;
    rightparticleSpeed?: number;
    rightpathWidth?: number;
    rightparticleSize?: number;
    rightParticleDelay?: number;
}

function Signal({
    leftGap = 30,
    rightGap = 30,

    leftpathColor,
    leftparticleColor = "#ef4444",
    leftparticleSpeed = 3,
    leftpathWidth = 1.5,
    leftparticleSize = 4,
    leftParticleDelay = 0,

    rightpathColor,
    rightparticleColor = "#10b981",
    rightparticleSpeed = 3,
    rightpathWidth = 1.5,
    rightparticleSize = 4,
    rightParticleDelay = 0,
}: SignalProps) {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-50px",
    });

    const leftSpeeds = [
        leftparticleSpeed * 1,
        leftparticleSpeed * 1.1,
        leftparticleSpeed * 1.2,
        leftparticleSpeed * 1.3,
        leftparticleSpeed * 1.4,
        leftparticleSpeed * 1.5,
    ];

    const rightSpeeds = [
        rightparticleSpeed * 1.6,
        rightparticleSpeed * 1.7,
        rightparticleSpeed * 1.8,
        rightparticleSpeed * 1.9,
        rightparticleSpeed * 2,
        rightparticleSpeed * 2.1,
    ];

    const leftTopY = 250 - leftGap * 4;
    const leftBottomY = 250 + leftGap * 4;

    const rightTopY = 250 - rightGap * 4;
    const rightBottomY = 250 + rightGap * 4;

    const leftPathClass = leftpathColor
        ? "transition-colors duration-300"
        : "stroke-gray-300 dark:stroke-gray-600/50 transition-colors duration-300";

    const rightPathClass = rightpathColor
        ? "transition-colors duration-300"
        : "stroke-gray-300 dark:stroke-gray-600/50 transition-colors duration-300";

    const leftPathTop = `
        M 0 250
        C 50 250, 60 ${leftTopY}, 117.5 ${leftTopY}
        C 175 ${leftTopY}, 185 250, 235 250
        C 285 250, 295 ${leftBottomY}, 352.5 ${leftBottomY}
        C 410 ${leftBottomY}, 420 250, 470 250
    `;

    const leftPathBottom = `
        M 0 250
        C 50 250, 60 ${leftBottomY}, 117.5 ${leftBottomY}
        C 175 ${leftBottomY}, 185 250, 235 250
        C 285 250, 295 ${leftTopY}, 352.5 ${leftTopY}
        C 410 ${leftTopY}, 420 250, 470 250
    `;

    const leftPathMiddle = `
        M 0 250
        L 470 250
    `;

    const rightPathTop = `
        M 530 250
        C 580 250, 590 ${rightTopY}, 647.5 ${rightTopY}
        C 705 ${rightTopY}, 715 250, 765 250
        C 815 250, 825 ${rightBottomY}, 882.5 ${rightBottomY}
        C 940 ${rightBottomY}, 950 250, 1000 250
    `;

    const rightPathBottom = `
        M 530 250
        C 580 250, 590 ${rightBottomY}, 647.5 ${rightBottomY}
        C 705 ${rightBottomY}, 715 250, 765 250
        C 815 250, 825 ${rightTopY}, 882.5 ${rightTopY}
        C 940 ${rightTopY}, 950 250, 1000 250
    `;

    const rightPathMiddle = `
        M 530 250
        L 1000 250
    `;

    return (
        <div className="w-full overflow-hidden pb-4 transition-colors duration-300">
            <div
                className="
                    w-full
                    aspect-[2/1]
                    @lg:aspect-[2/1]
                    mx-auto
                    relative
                    bg-white
                    dark:bg-[#0b0b0b]
                    flex
                    items-center
                    justify-center
                    font-sans
                    border-y
                    border-gray-200
                    dark:border-gray-800
                    transition-colors
                    duration-300
                "
            >
                <motion.svg
                    ref={ref}
                    viewBox="0 0 1000 500"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* LEFT TOP */}
                    <motion.path
                        d={leftPathTop}
                        className={leftPathClass}
                        stroke={leftpathColor}
                        strokeWidth={leftpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                    />
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 8px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftSpeeds[0]}s`} begin={`${leftParticleDelay}s`} repeatCount="indefinite" path={leftPathTop} />
                    </circle>
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 8px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftSpeeds[1]}s`} begin={`${leftSpeeds[1] / 2 + leftParticleDelay}s`} repeatCount="indefinite" path={leftPathTop} />
                    </circle>

                    {/* LEFT MIDDLE */}
                    <motion.path
                        d={leftPathMiddle}
                        className={leftPathClass}
                        stroke={leftpathColor}
                        strokeWidth={leftpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
                    />
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 8px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftSpeeds[2]}s`} begin={`${0.35 + leftParticleDelay}s`} repeatCount="indefinite" path={leftPathMiddle} />
                    </circle>
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 8px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftSpeeds[3]}s`} begin={`${leftSpeeds[3] / 2 + 0.2 + leftParticleDelay}s`} repeatCount="indefinite" path={leftPathMiddle} />
                    </circle>

                    {/* LEFT BOTTOM */}
                    <motion.path
                        d={leftPathBottom}
                        className={leftPathClass}
                        stroke={leftpathColor}
                        strokeWidth={leftpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
                    />
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 8px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftSpeeds[4]}s`} begin={`${0.7 + leftParticleDelay}s`} repeatCount="indefinite" path={leftPathBottom} />
                    </circle>
                    <circle r={leftparticleSize} fill={leftparticleColor} filter={`drop-shadow(0 0 8px ${leftparticleColor})`}>
                        <animateMotion dur={`${leftSpeeds[5]}s`} begin={`${leftSpeeds[5] / 2 + 0.4 + leftParticleDelay}s`} repeatCount="indefinite" path={leftPathBottom} />
                    </circle>

                    {/* RIGHT TOP */}
                    <motion.path
                        d={rightPathTop}
                        className={rightPathClass}
                        stroke={rightpathColor}
                        strokeWidth={rightpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.8 }}
                    />
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 8px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightSpeeds[0]}s`} begin={`${0.2 + rightParticleDelay}s`} repeatCount="indefinite" path={rightPathTop} />
                    </circle>
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 8px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightSpeeds[1]}s`} begin={`${rightSpeeds[1] / 2 + 0.3 + rightParticleDelay}s`} repeatCount="indefinite" path={rightPathTop} />
                    </circle>

                    {/* RIGHT MIDDLE */}
                    <motion.path
                        d={rightPathMiddle}
                        className={rightPathClass}
                        stroke={rightpathColor}
                        strokeWidth={rightpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.0 }}
                    />
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 8px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightSpeeds[2]}s`} begin={`${0.5 + rightParticleDelay}s`} repeatCount="indefinite" path={rightPathMiddle} />
                    </circle>
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 8px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightSpeeds[3]}s`} begin={`${rightSpeeds[3] / 2 + 0.2 + rightParticleDelay}s`} repeatCount="indefinite" path={rightPathMiddle} />
                    </circle>

                    {/* RIGHT BOTTOM */}
                    <motion.path
                        d={rightPathBottom}
                        className={rightPathClass}
                        stroke={rightpathColor}
                        strokeWidth={rightpathWidth}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isInView ? 1 : 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 1.2 }}
                    />
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 8px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightSpeeds[4]}s`} begin={`${0.8 + rightParticleDelay}s`} repeatCount="indefinite" path={rightPathBottom} />
                    </circle>
                    <circle r={rightparticleSize} fill={rightparticleColor} filter={`drop-shadow(0 0 8px ${rightparticleColor})`}>
                        <animateMotion dur={`${rightSpeeds[5]}s`} begin={`${rightSpeeds[5] / 2 + 0.3 + rightParticleDelay}s`} repeatCount="indefinite" path={rightPathBottom} />
                    </circle>
                </motion.svg>

                <div
                    className="
                        absolute
                        top-1/2
                        left-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        scale-[115%]
                        flex
                        flex-col
                        items-center
                        justify-center
                        z-10
                        pointer-events-none
                    "
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="
                            relative
                            w-20 @md:w-30 @xl:w-40
                            h-20 @md:h-30 @xl:h-40
                            rounded-full
                            bg-[radial-gradient(circle,rgba(239,68,68,0.25)_0%,transparent_60%)]
                            flex
                            items-center
                            justify-center
                            pointer-events-auto
                        "
                    >
                        <div
                            className="
                                w-10 @md:w-15 @xl:w-20 2@xl:w-25
                                h-10 @md:h-15 @xl:h-20 2@xl:h-25
                                rounded-full
                                bg-white
                                dark:bg-[#151515]
                                border
                                border-red-500/50
                                flex
                                items-center
                                justify-center
                                z-20
                                shadow-[0_0_25px_rgba(239,68,68,0.5)]
                                transition-colors
                                duration-300
                            "
                        >
                            <RiRobot3Fill className="text-2xl @md:text-4xl @xl:text-5xl 2@xl:text-6xl fill-red-500" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Signal;
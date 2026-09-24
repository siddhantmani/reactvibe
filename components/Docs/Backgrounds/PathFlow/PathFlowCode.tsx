"use client"
import { motion } from "framer-motion"

// left
import apple from "@/images/brand/apple.svg"
import x from "@/images/brand/x.svg"
import discard from "@/images/brand/dicard.svg"
import spotify from "@/images/brand/spotify.svg"

// right
import youtube from "@/images/brand/youtube.svg"
import notion from "@/images/brand/notion.svg"
import figma from "@/images/brand/figma.svg"
import xbox from "@/images/brand/xbox.svg"

function PathFlowCode() {
    const CENTER_X = 400

    const leftCurves = [-740, -620, -500, -400, -320, -250, -180, -120]
    const rightCurves = [120, 180, 250, 320, 400, 500, 620, 740]

    // Brand Images for left curves
    const leftBrands = [apple, x, discard, spotify, apple, x, discard, spotify]

    // Brand Images for right curves
    const rightBrands = [youtube, notion, figma, xbox, youtube, notion, figma, xbox]

    return (
        <div className="w-full overflow-hidden bg-white dark:bg-[#0c0c0c] transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5,
                }}
            >
                {/* Increased min-height to give the taller SVG room to breathe */}
                <div className="relative flex items-center justify-center w-full min-h-[550px]">

                    {/* SVG ANIMATIONS */}
                    {/* Increased viewBox height from 300 to 700 to fit the new taller paths */}
                    <svg
                        viewBox="-350 0 1500 700"
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

                        {/* LEFT CURVES WITH ANIMATED Images */}
                        {leftCurves.map((offset, i) => {
                            // Stretched Y coordinates: 20 -> 250 -> 450 -> 680
                            // Increased X curve intensity: 40 -> 80 so it stays curvy
                            const pathD = `
                                M ${CENTER_X + offset} 20
                                C ${CENTER_X + offset + 80} 250,
                                  ${CENTER_X + offset + 80} 450,
                                  ${CENTER_X + offset} 680
                            `

                            return (
                                <g key={`left-${i}`}>
                                    <motion.path
                                        d={pathD}
                                        className="stroke-black dark:stroke-white transition-colors duration-300"
                                        strokeWidth="1"
                                        fill="none"
                                        opacity="0.15"
                                    />
                                    <image
                                        href={leftBrands[i].src}
                                        width="70"
                                        height="70"
                                        x="-30"
                                        y="-10"
                                        opacity="0.7"
                                        filter="url(#glow)"
                                    >
                                        <animateMotion
                                            dur={`${4 + i * 0.3}s`}
                                            repeatCount="indefinite"
                                            path={pathD}
                                        />
                                    </image>
                                </g>
                            )
                        })}

                        {/* CENTER LINE WITH ANIMATED IMAGE */}
                        <g>
                            {/* Stretched bottom Y coordinate to 680 */}
                            <motion.path
                                d={`M ${CENTER_X} 20 L ${CENTER_X} 680`}
                                className="stroke-black dark:stroke-white transition-colors duration-300"
                                strokeWidth="1"
                                fill="none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.15 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                            <image
                                href={apple.src}
                                width="70"
                                height="70"
                                x="-30"
                                y="-10"
                                opacity="0.7"
                                filter="url(#glow)"
                            >
                                <animateMotion
                                    dur="4.5s"
                                    repeatCount="indefinite"
                                    path={`M ${CENTER_X} 20 L ${CENTER_X} 680`}
                                />
                            </image>
                        </g>

                        {/* RIGHT CURVES WITH ANIMATED Images */}
                        {rightCurves.map((offset, i) => {
                            // Stretched Y coordinates: 20 -> 250 -> 450 -> 680
                            // Increased X curve intensity: -40 -> -80 so it stays curvy
                            const pathD = `
                                M ${CENTER_X + offset} 20
                                C ${CENTER_X + offset - 80} 250,
                                  ${CENTER_X + offset - 80} 450,
                                  ${CENTER_X + offset} 680
                            `

                            return (
                                <g key={`right-${i}`}>
                                    <motion.path
                                        d={pathD}
                                        className="stroke-black dark:stroke-white transition-colors duration-300"
                                        strokeWidth="1"
                                        fill="none"
                                        opacity="0.15"
                                    />
                                    <image
                                        href={rightBrands[i].src}
                                        width="70"
                                        height="70"
                                        x="-35"
                                        y="-10"
                                        opacity="0.7"
                                        filter="url(#glow)"
                                    >
                                        <animateMotion
                                            dur={`${4 + i * 0.3}s`}
                                            repeatCount="indefinite"
                                            path={pathD}
                                        />
                                    </image>
                                </g>
                            )
                        })}
                    </svg>
                </div>
            </motion.div>
        </div>
    )
}

export default PathFlowCode
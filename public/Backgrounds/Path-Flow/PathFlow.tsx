"use client"
import { motion } from "framer-motion"

// Import images for left and right
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

function PathFlow() {
    const CENTER_X = 400

    const leftCurves = [-740, -620, -500, -400, -320, -250, -180, -120]
    const rightCurves = [120, 180, 250, 320, 400, 500, 620, 740]

    // Brand images for left curves
    const leftBrands = [apple, x, discard, spotify, apple, x, discard, spotify]

    // Brand images for right curves
    const rightBrands = [youtube, notion, figma, xbox, youtube, notion, figma, xbox]

    return (
        <div className=''>
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
                <div className="relative flex items-center justify-center w-[500px] h-[500px] scale-[250%]">

                    {/* SVG ANIMATIONS */}
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

                        {/* LEFT CURVES WITH ANIMATED IMAGES */}
                        {leftCurves.map((offset, i) => {
                            const pathD = `
                                M ${CENTER_X + offset} 20
                                C ${CENTER_X + offset + 40} 120,
                                  ${CENTER_X + offset + 40} 180,
                                  ${CENTER_X + offset} 280
                            `

                            return (
                                <g key={`left-${i}`}>
                                    <motion.path
                                        d={pathD}
                                        stroke="#000000"
                                        strokeWidth="0.1"
                                        fill="none"
                                        opacity="0.35"
                                    />
                                    <image
                                        href={leftBrands[i].src}
                                        width="30"
                                        height="30"
                                        x="-10"
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
                            <motion.path
                                d={`M ${CENTER_X} 20 L ${CENTER_X} 280`}
                                stroke="#000000"
                                strokeWidth="0.1"
                                fill="none"
                                opacity="0.35"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.35 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            />
                            <image
                                href={apple.src}
                                width="30"
                                height="30"
                                x="-10"
                                y="-10"
                                opacity="0.7"
                                filter="url(#glow)"
                            >
                                <animateMotion
                                    dur="4.5s"
                                    repeatCount="indefinite"
                                    path={`M ${CENTER_X} 20 L ${CENTER_X} 280`}
                                />
                            </image>
                        </g>

                        {/* RIGHT CURVES WITH ANIMATED IMAGES */}
                        {rightCurves.map((offset, i) => {
                            const pathD = `
                                M ${CENTER_X + offset} 20
                                C ${CENTER_X + offset - 40} 120,
                                  ${CENTER_X + offset - 40} 180,
                                  ${CENTER_X + offset} 280
                            `

                            return (
                                <g key={`right-${i}`}>
                                    <motion.path
                                        d={pathD}
                                        stroke="#000000"
                                        strokeWidth="0.1"
                                        fill="none"
                                        opacity="0.35"
                                    />
                                    <image
                                        href={rightBrands[i].src}
                                        width="30"
                                        height="30"
                                        x="-10"
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

export default PathFlow
"use client"

import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"

import { motion } from "framer-motion"
import { manrope } from "@/lib/fonts"
import { useTheme } from "@/components/ThemeProvider"
import Glow from "@/components/Docs/Components/Glow/Glow"

const data = [
    { day: "May 1", value: 1600 },
    { day: "May 5", value: 1100 },
    { day: "May 8", value: 1200 },
    { day: "May 12", value: 2100 },
    { day: "May 15", value: 2430 },
    { day: "May 18", value: 1500 },
    { day: "May 22", value: 1900 },
    { day: "May 25", value: 2600 },
    { day: "May 29", value: 2000 },
]

const width = 1050
const height = 380

const paddingTop = 25
const paddingBottom = 40

const minValue = 1000
const maxValue = 3000

function PerformanceOverviewChart() {

    const [hoverX, setHoverX] =
        useState(width / 2)

    const [isHovering, setIsHovering] =
        useState(false)

    const [activePoint, setActivePoint] =
        useState({
            x: width / 2,
            y: height / 2,
        })

    const pathRef =
        useRef<SVGPathElement>(null)

    const points = useMemo(() => {

        return data.map((item, index) => {

            const x =
                (index /
                    (data.length - 1)) *
                width

            const normalized =
                (item.value - minValue) /
                (maxValue - minValue)

            const y =
                height -
                paddingBottom -
                normalized *
                (height -
                    paddingTop -
                    paddingBottom)

            return {
                x,
                y,
                value: item.value,
                day: item.day,
            }

        })

    }, [])

    const pathData = useMemo(() => {

        return points.reduce(
            (
                acc,
                point,
                index
            ) => {

                if (index === 0) {
                    return `M ${point.x} ${point.y}`
                }

                const prev =
                    points[index - 1]

                const cx =
                    (prev.x + point.x) /
                    2

                return `
                    ${acc}
                    C
                    ${cx} ${prev.y},
                    ${cx} ${point.y},
                    ${point.x} ${point.y}
                `

            },
            ""
        )

    }, [points])

    useEffect(() => {

        if (!pathRef.current) return

        const totalLength =
            pathRef.current.getTotalLength()

        const point =
            pathRef.current.getPointAtLength(
                (hoverX / width) *
                totalLength
            )

        setActivePoint({
            x: point.x,
            y: point.y,
        })

    }, [hoverX])

    const activeData = useMemo(() => {

        const index = Math.min(
            data.length - 1,
            Math.max(
                0,
                Math.round(
                    (hoverX / width) *
                    (data.length - 1)
                )
            )
        )

        return data[index]

    }, [hoverX])

    const totalText = useMemo(() => {

        return activeData.value.toLocaleString()

    }, [activeData.value])

    const { theme } = useTheme()

    return (

        <div className=" border dark:border-[#222121] border-black/10 rounded-2xl">

            <Glow
                backgroundColor={`${theme == "dark" ? "#000000" : "#ffffff"}`}
                glowColor="#0d7525"
                glowSize="180px"
                glowOpacity={0.4}
                glowFadeAt="100%"
                borderGlow={false}
                borderGlowColor="rgba(130,100,255,0.4)"
                borderGlowSize="100px"
                borderGlowTransparency="80%"
                className="p-4 "
            >


                <div className=" z-10">

                    {/* Top */}
                    <div className="flex items-start justify-between">

                        <div>

                            <h2
                                className={`${manrope.className} text-[14px] tracking-[-0.03em] dark:text-[#ffffff] text-black`}
                            >
                                Performance Overview
                            </h2>

                            <p
                                className={`${manrope.className} mt-2 text-[12px] text-black/45 dark:text-white/45`}
                            >
                                Total syncs this month
                            </p>

                            <h1
                                className={`${manrope.className} mt-2 text-[30px] tracking-[-0.06em] dark:text-[#ffffff] text-black`}
                            >
                                {totalText}
                            </h1>

                        </div>

                        <button
                            className={`${manrope.className} rounded-[8px] border border-black/[0.06] bg-black/[0.02] dark:border-white/[0.06] dark:bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-black/60 dark:text-white/60 backdrop-blur-md transition-all duration-300 hover:bg-black/[0.04] hover:text-black dark:hover:bg-white/[0.04] dark:hover:text-white`}
                        >
                            This Month
                        </button>

                    </div>

                    {/* Chart */}
                    <div className="mt-2 @lg:h-70 @xl:h-95 w-full p-6">

                        <svg
                            viewBox={`0 0 ${width} ${height}`}
                            className="h-full w-full overflow-visible"
                        >

                            {/* Grid */}
                            {[0, 1, 2, 3, 4].map(
                                (line) => {

                                    const y =
                                        paddingTop +
                                        ((height -
                                            paddingTop -
                                            paddingBottom) /
                                            4) *
                                        line

                                    return (
                                        <line
                                            key={line}
                                            x1="0"
                                            y1={y}
                                            x2={width}
                                            y2={y}
                                            stroke={`${theme == "dark" ? "#141414" : "#e6e6e6"}`}
                                            strokeWidth="1"
                                        />
                                    )

                                }
                            )}

                            {/* Y Axis */}
                            {[1, 1.5, 2, 2.5, 3].map(
                                (value, index) => {

                                    const y =
                                        paddingTop +
                                        ((height -
                                            paddingTop -
                                            paddingBottom) /
                                            4) *
                                        (4 - index)

                                    return (
                                        <text
                                            key={index}
                                            x={-45}
                                            y={y - 5}
                                            fill={`${theme == "dark" ? "#969393" : "#696464"}`}
                                            fontSize="15"
                                        >
                                            {value}K
                                        </text>
                                    )

                                }
                            )}

                            {/* X Axis */}
                            {points.map(
                                (
                                    point,
                                    index
                                ) => (

                                    <text
                                        key={index}
                                        x={point.x}
                                        y={height - 10}
                                        textAnchor="middle"
                                        fill={`${theme == "dark" ? "#969393" : "#696464"}`}
                                        fontSize="15"
                                    >
                                        {point.day}
                                    </text>

                                )
                            )}

                            {/* Gradient */}
                            <defs>

                                <linearGradient
                                    id="purpleFill"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >

                                    <stop
                                        offset="0%"
                                        stopColor="#0d7525"
                                        stopOpacity="0.18"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#0d7525"
                                        stopOpacity="0"
                                    />

                                </linearGradient>

                                <filter id="glow">

                                    <feGaussianBlur
                                        stdDeviation="3"
                                        result="blur"
                                    />

                                    <feMerge>

                                        <feMergeNode in="blur" />

                                        <feMergeNode in="SourceGraphic" />

                                    </feMerge>

                                </filter>

                            </defs>

                            {/* Fill */}
                            <path
                                d={`
                                ${pathData}
                                L ${width} ${height - paddingBottom}
                                L 0 ${height - paddingBottom}
                                Z
                            `}
                                fill="url(#purpleFill)"
                            />

                            {/* Main Path */}
                            <motion.path
                                ref={pathRef}
                                d={pathData}
                                fill="none"
                                stroke="#119F25"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                filter="url(#glow)"
                                initial={{
                                    pathLength: 0,
                                }}
                                animate={{
                                    pathLength: 1,
                                }}
                                transition={{
                                    duration: 1.8,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Hover Line */}
                            <motion.line
                                x1={activePoint.x}
                                y1={paddingTop}
                                x2={activePoint.x}
                                y2={
                                    height -
                                    paddingBottom
                                }
                                stroke="#119F25"
                                strokeDasharray="5 5"
                                strokeOpacity={0.25}
                                initial={false}
                                animate={{
                                    opacity:
                                        isHovering
                                            ? 1
                                            : 0,
                                }}
                                transition={{
                                    duration: 0.08,
                                }}
                            />

                            {/* Active Dot */}
                            <motion.circle
                                cx={activePoint.x}
                                cy={activePoint.y}
                                r={6}
                                fill="#119F25"
                                stroke="#F3E8FF"
                                strokeWidth="3"
                                initial={false}
                                animate={{
                                    opacity:
                                        isHovering
                                            ? 1
                                            : 0,
                                    scale:
                                        isHovering
                                            ? 1
                                            : 0.7,
                                }}
                                transition={{
                                    duration: 0.08,
                                }}
                                style={{
                                    transformOrigin: `${activePoint.x}px ${activePoint.y}px`,
                                }}
                            />

                            {/* Tooltip */}
                            <foreignObject
                                x={
                                    activePoint.x -
                                    45
                                }
                                y={
                                    activePoint.y -
                                    70
                                }
                                width="100"
                                height="100"
                                style={{
                                    pointerEvents:
                                        "none",
                                    opacity:
                                        isHovering
                                            ? 1
                                            : 0,
                                    transition:
                                        "opacity 0.08s linear",
                                }}
                            >

                                <div className="rounded-[10px] border border-black/[0.06] bg-black/95 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">

                                    <p
                                        className={`${manrope.className} text-[15px] text-white/70`}
                                    >
                                        {
                                            activeData.day
                                        }
                                    </p>

                                    <h3
                                        className={`${manrope.className} mt-1 text-[12px] text-[#ffffff]`}
                                    >
                                        {activeData.value.toLocaleString()}

                                        <span
                                            className={`${manrope.className} ml-1 text-[12px] text-ffffff/70`}
                                        >
                                            syncs
                                        </span>

                                    </h3>

                                </div>

                            </foreignObject>

                            {/* Hover Overlay */}
                            <rect
                                x="0"
                                y="0"
                                width={width}
                                height={height}
                                fill="transparent"
                                className="cursor-pointer"

                                onMouseEnter={() =>
                                    setIsHovering(
                                        true
                                    )
                                }

                                onMouseLeave={() =>
                                    setIsHovering(
                                        false
                                    )
                                }

                                onMouseMove={(e) => {

                                    const svg =
                                        e.currentTarget.ownerSVGElement

                                    if (!svg) return

                                    const rect =
                                        svg.getBoundingClientRect()

                                    const mouseX =
                                        e.clientX -
                                        rect.left

                                    const normalizedX =
                                        (mouseX /
                                            rect.width) *
                                        width

                                    setHoverX(
                                        Math.max(
                                            0,
                                            Math.min(
                                                width,
                                                normalizedX
                                            )
                                        )
                                    )

                                }}
                            />

                        </svg>

                    </div>

                </div>
            </Glow>

        </div>

    )
}

export default PerformanceOverviewChart
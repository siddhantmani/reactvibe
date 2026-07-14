"use client"

import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"

import { motion } from "framer-motion"
import { Manrope } from "next/font/google"

const fontBold = Manrope({
    weight: ["500"],
    subsets: ["latin"],
})

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

const width = 700
const height = 280

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

    return (

        <div
            className="relative aspect-video overflow-hidden rounded-[18px] border border-black/[0.06] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)]"
        >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.05),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.04),_transparent_40%)]" />

            {/* Purple Glow */}
            <div className="absolute right-[-60px] top-[-60px] h-[220px] w-[220px] rounded-full bg-[#8B5CF6]/[0.05] blur-3xl" />

            <div className="relative z-10">

                {/* Top */}
                <div className="flex items-start justify-between">

                    <div>

                        <h2
                            className={`${fontBold.className} text-[14px] tracking-[-0.03em] text-[#111111]`}
                        >
                            Performance Overview
                        </h2>

                        <p
                            className={`${fontBold.className} mt-2 text-[12px] text-black/45`}
                        >
                            Total syncs this month
                        </p>

                        <h1
                            className={`${fontBold.className} mt-2 text-[30px] tracking-[-0.06em] text-[#111111]`}
                        >
                            {totalText}
                        </h1>

                    </div>

                    <button
                        className={`${fontBold.className} rounded-[8px] border border-black/[0.06] bg-black/[0.02] px-3 py-1.5 text-[11px] font-medium text-black/60 backdrop-blur-md transition-all duration-300 hover:bg-black/[0.04] hover:text-black`}
                    >
                        This Month
                    </button>

                </div>

                {/* Chart */}
                <div className="mt-0 h-[330px] w-full">

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
                                        stroke="rgba(0,0,0,0.06)"
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
                                        x={-37}
                                        y={y - 5}
                                        fill="rgba(0,0,0,0.4)"
                                        fontSize="12"
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
                                    fill="rgba(0,0,0,0.4)"
                                    fontSize="12"
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
                                    stopColor="#119F25"
                                    stopOpacity="0.18"
                                />

                                <stop
                                    offset="100%"
                                    stopColor="#119F25"
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
                            height="55"
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

                            <div className="rounded-[10px] border border-black/[0.06] bg-white/95 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">

                                <p
                                    className={`${fontBold.className} text-[8px] text-black/70`}
                                >
                                    {
                                        activeData.day
                                    }
                                </p>

                                <h3
                                    className={`${fontBold.className} mt-1 text-[12px] text-[#111111]`}
                                >
                                    {activeData.value.toLocaleString()}

                                    <span
                                        className={`${fontBold.className} ml-1 text-[8px] text-black/70`}
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

        </div>

    )
}

export default PerformanceOverviewChart
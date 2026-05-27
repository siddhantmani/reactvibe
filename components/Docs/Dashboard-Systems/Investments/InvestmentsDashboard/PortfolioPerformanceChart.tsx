"use client"

import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Manrope } from "next/font/google"

const boldFont = Manrope({
    weight: "500",
    subsets: ["latin"],
})

const data = [
    { day: "May 1", value: 65000 },
    { day: "May 3", value: 69000 },
    { day: "May 5", value: 67000 },
    { day: "May 7", value: 70000 },
    { day: "May 9", value: 71000 },
    { day: "May 11", value: 68500 },
    { day: "May 14", value: 78000 },
    { day: "May 16", value: 75000 },
    { day: "May 18", value: 74000 },
    { day: "May 21", value: 80500 },
    { day: "May 24", value: 82000 },
    { day: "May 26", value: 77000 },
    { day: "May 28", value: 84500 },
    { day: "May 30", value: 83000 },
    { day: "May 31", value: 90000 },
]

const filters = ["1D", "1W", "1M", "3M", "1Y", "All"]

const CHART_WIDTH = 700
const CHART_HEIGHT = 200

function PortfolioPerformanceChart() {

    const initialValue = 78245.5

    const [hoverX, setHoverX] =
        useState(CHART_WIDTH)

    const [isHovering, setIsHovering] =
        useState(false)

    const [activePathPoint, setActivePathPoint] =
        useState({
            x: CHART_WIDTH,
            y: 35,
        })

    const pathRef =
        useRef<SVGPathElement>(null)

    const chartPath = `
        M 0 150
        C 30 160, 60 130, 90 140
        S 150 120, 180 125
        S 240 90, 270 100
        S 330 110, 360 95
        S 420 55, 450 60
        S 510 130, 540 110
        S 600 70, 630 80
        S 680 30, 700 35
    `

    useEffect(() => {

        if (!pathRef.current) return

        const totalLength =
            pathRef.current.getTotalLength()

        const point =
            pathRef.current.getPointAtLength(
                (hoverX / CHART_WIDTH) *
                totalLength
            )

        setActivePathPoint({
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
                    (hoverX / CHART_WIDTH) *
                    (data.length - 1)
                )
            )
        )

        return {
            index,
            item: data[index],
        }

    }, [hoverX])

    const activeValue =
        activeData.item.value

    const difference =
        activeValue - initialValue

    const percentageChange =
        (difference / initialValue) * 100

    const isPositive =
        difference >= 0

    const currentValue = useMemo(() => {

        return activeValue.toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }
        )

    }, [activeValue])

    const formattedDifference =
        Math.abs(difference).toLocaleString(
            undefined,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            }
        )

    const formattedPercentage =
        Math.abs(percentageChange).toFixed(2)

    return (

        <div
            className={`${boldFont.className} relative overflow-hidden rounded-[18px] border border-black/[0.06] bg-white p-4 shadow-[0_1px_2px_rgba(0,0,0,0.03),0_12px_40px_rgba(0,0,0,0.04)]`}
        >

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.04),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.06),_transparent_45%)]" />

            {/* Green Glow */}
            <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#22C55E]/[0.05] blur-3xl" />

            <div className="relative z-10">

                {/* Header */}
                <div className="flex items-start justify-between">

                    {/* Left */}
                    <div className="flex items-center gap-4">

                        <h2
                            className={`${boldFont.className} whitespace-nowrap text-[14px] tracking-[-0.03em] text-[#111111]`}
                        >
                            Portfolio Performance
                        </h2>

                        <button
                            className={`${boldFont.className} flex items-center gap-2 rounded-[6px] border border-black/[0.06] bg-black/[0.02] px-2 py-1 text-[12px] whitespace-nowrap font-medium text-black/60 backdrop-blur-md transition-all duration-300 hover:bg-black/[0.04] hover:text-black`}
                        >

                            This Month

                            <ChevronDown
                                size={12}
                                strokeWidth={2.3}
                            />

                        </button>

                    </div>

                    {/* Filters */}
                    <div className="flex items-center gap-2">

                        {filters.map(
                            (filter, index) => (

                                <button
                                    key={index}
                                    className={`flex items-center justify-center rounded-[5px] px-2 py-1 text-[10px] font-semibold transition-all duration-300 ${filter === "1M"
                                        ? "bg-black text-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                                        : "bg-black/[0.03] text-black/45 hover:bg-black/[0.05] hover:text-black"
                                        }`}
                                >
                                    {filter}
                                </button>

                            )
                        )}

                    </div>

                </div>

                {/* Numbers */}
                <div className="mt-5">

                    <h1
                        className={`${boldFont.className} text-[22px] tracking-[-0.06em] text-[#111111]`}
                    >
                        ${currentValue}
                    </h1>

                    <div className="mt-1.5 flex items-center gap-1">

                        <span
                            className={`${boldFont.className} text-[11px] ${isPositive
                                ? "text-[#16A34A]"
                                : "text-[#DC2626]"
                                }`}
                        >
                            {isPositive ? "▲" : "▼"}{" "}
                            {formattedPercentage}%
                        </span>

                        <span
                            className={`${boldFont.className} text-[11px] ${isPositive
                                ? "text-[#16A34A]"
                                : "text-[#DC2626]"
                                }`}
                        >
                            ({isPositive ? "+" : "-"}$
                            {formattedDifference})
                        </span>

                    </div>

                </div>

                {/* Chart */}
                <div className="relative mt-5 h-[190px] w-full">

                    {/* Grid */}
                    <div className="absolute inset-0 flex flex-col justify-between">

                        {[1, 2, 3, 4, 5].map(
                            (line) => (
                                <div
                                    key={line}
                                    className="border-t border-black/[0.06]"
                                />
                            )
                        )}

                    </div>

                    {/* Y Labels */}
                    <div className="absolute bottom-0 left-0 top-0 flex flex-col justify-between py-[18px]">

                        {[
                            "$80K",
                            "$75K",
                            "$70K",
                            "$65K",
                            "$60K",
                        ].map((label) => (

                            <p
                                key={label}
                                className={`${boldFont.className} text-[10px] text-black/70`}
                            >
                                {label}
                            </p>

                        ))}

                    </div>

                    {/* SVG */}
                    <div className="absolute bottom-0 left-[35px] right-0 top-0">

                        <svg
                            viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                            className="h-full w-full overflow-visible"
                        >

                            <defs>

                                <linearGradient
                                    id="greenFill"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >

                                    <stop
                                        offset="0%"
                                        stopColor="#16A34A"
                                        stopOpacity="0.12"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#16A34A"
                                        stopOpacity="0"
                                    />

                                </linearGradient>

                                <filter id="glow">

                                    <feGaussianBlur
                                        stdDeviation="3"
                                        result="coloredBlur"
                                    />

                                    <feMerge>

                                        <feMergeNode in="coloredBlur" />

                                        <feMergeNode in="SourceGraphic" />

                                    </feMerge>

                                </filter>

                            </defs>

                            {/* Area */}
                            <path
                                d={`${chartPath}
                                L ${CHART_WIDTH} ${CHART_HEIGHT}
                                L 0 ${CHART_HEIGHT}
                                Z`}
                                fill="url(#greenFill)"
                            />

                            {/* Main Line */}
                            <motion.path
                                ref={pathRef}
                                d={chartPath}
                                fill="none"
                                stroke="#16A34A"
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
                                    duration: 2,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Hover Line */}
                            <motion.line
                                x1={activePathPoint.x}
                                y1={0}
                                x2={activePathPoint.x}
                                y2={180}
                                stroke="#16A34A"
                                strokeDasharray="4 4"
                                strokeOpacity={0.18}
                                initial={false}
                                animate={{
                                    opacity:
                                        isHovering
                                            ? 1
                                            : 0,
                                }}
                                transition={{
                                    duration: 0.08,
                                    ease: "linear",
                                }}
                            />

                            {/* Dot */}
                            <motion.circle
                                cx={activePathPoint.x}
                                cy={activePathPoint.y}
                                r={5}
                                fill="#16A34A"
                                stroke="#DCFCE7"
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
                                            : 0.8,
                                }}
                                transition={{
                                    duration: 0.08,
                                    ease: "linear",
                                }}
                                style={{
                                    transformOrigin: `${activePathPoint.x}px ${activePathPoint.y}px`,
                                }}
                            />

                            {/* Tooltip */}
                            <motion.foreignObject
                                x={
                                    activePathPoint.x -
                                    55
                                }
                                y={
                                    activePathPoint.y -
                                    80
                                }
                                width="110"
                                height="70"
                                initial={false}
                                animate={{
                                    opacity:
                                        isHovering
                                            ? 1
                                            : 0,
                                    y:
                                        isHovering
                                            ? activePathPoint.y -
                                            80
                                            : activePathPoint.y -
                                            72,
                                }}
                                transition={{
                                    duration: 0.08,
                                    ease: "linear",
                                }}
                            >

                                <div className="rounded-[12px] border border-black/[0.06] bg-white/95 px-3 py-2 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

                                    <p
                                        className={`${boldFont.className} text-[12px] text-black/45`}
                                    >
                                        {
                                            activeData.item
                                                .day
                                        }
                                    </p>

                                    <h3
                                        className={`${boldFont.className} mt-1 text-[16px] text-[#111111]`}
                                    >
                                        $
                                        {activeData.item.value.toLocaleString()}
                                    </h3>

                                </div>

                            </motion.foreignObject>

                            {/* Hover Layer */}
                            <rect
                                x="0"
                                y="0"
                                width={CHART_WIDTH}
                                height={CHART_HEIGHT}
                                fill="transparent"
                                className="cursor-pointer"

                                onMouseEnter={() =>
                                    setIsHovering(true)
                                }

                                onMouseLeave={() =>
                                    setIsHovering(false)
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
                                        CHART_WIDTH

                                    setHoverX(
                                        Math.max(
                                            0,
                                            Math.min(
                                                CHART_WIDTH,
                                                normalizedX
                                            )
                                        )
                                    )

                                }}
                            />

                        </svg>

                    </div>

                    {/* X Labels */}
                    <div className="absolute bottom-0 left-[35px] right-0 flex justify-between">

                        {data.map((item) => (

                            <p
                                key={item.day}
                                className={`${boldFont.className} text-[10px] whitespace-nowrap text-black/70`}
                            >
                                {item.day}
                            </p>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    )
}

export default PortfolioPerformanceChart
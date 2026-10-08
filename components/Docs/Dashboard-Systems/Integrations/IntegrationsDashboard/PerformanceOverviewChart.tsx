"use client"

import React, {
    useEffect,
    useId,
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

// Real pixel padding around the plot area (room for axis labels)
const PAD = { top: 16, right: 12, bottom: 30, left: 40 }

const minValue = 1000
const maxValue = 3000
const yTicks = [3000, 2500, 2000, 1500, 1000]

/** Finds the point on the curve at a given x (the curve always moves left to right). */
function pointAtX(path: SVGPathElement, targetX: number) {
    let lo = 0
    let hi = path.getTotalLength()

    for (let i = 0; i < 30; i++) {
        const mid = (lo + hi) / 2
        if (path.getPointAtLength(mid).x < targetX) lo = mid
        else hi = mid
    }

    const p = path.getPointAtLength((lo + hi) / 2)
    return { x: p.x, y: p.y }
}

function PerformanceOverviewChart() {
    const { theme } = useTheme()
    const gradientId = `perfFill-${useId().replace(/:/g, "")}`

    // Measure the chart box so the SVG draws at real pixel size
    const chartRef = useRef<HTMLDivElement>(null)
    const [size, setSize] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const el = chartRef.current
        if (!el) return

        const ro = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect
            setSize({ width: Math.round(width), height: Math.round(height) })
        })

        ro.observe(el)
        return () => ro.disconnect()
    }, [])

    const { width, height } = size
    const plotW = Math.max(0, width - PAD.left - PAD.right)
    const plotH = Math.max(0, height - PAD.top - PAD.bottom)
    const baseline = PAD.top + plotH

    // Hover position stored as 0..1 across the plot, so it survives resizes
    const [hoverRatio, setHoverRatio] = useState(0.5)
    const [isHovering, setIsHovering] = useState(false)
    const [activePoint, setActivePoint] = useState({ x: 0, y: 0 })

    const pathRef = useRef<SVGPathElement>(null)

    const points = useMemo(() => {
        return data.map((item, index) => {
            const x = PAD.left + (index / (data.length - 1)) * plotW
            const normalized = (item.value - minValue) / (maxValue - minValue)
            const y = PAD.top + (1 - normalized) * plotH
            return { x, y, value: item.value, day: item.day }
        })
    }, [plotW, plotH])

    const pathData = useMemo(() => {
        return points.reduce((acc, point, index) => {
            if (index === 0) return `M ${point.x} ${point.y}`
            const prev = points[index - 1]
            const cx = (prev.x + point.x) / 2
            return `${acc} C ${cx} ${prev.y}, ${cx} ${point.y}, ${point.x} ${point.y}`
        }, "")
    }, [points])

    // Keep the dot exactly on the curve under the cursor
    useEffect(() => {
        if (!pathRef.current || plotW === 0) return
        setActivePoint(pointAtX(pathRef.current, PAD.left + hoverRatio * plotW))
    }, [hoverRatio, pathData, plotW])

    const activeData = useMemo(() => {
        const index = Math.round(hoverRatio * (data.length - 1))
        return data[Math.min(data.length - 1, Math.max(0, index))]
    }, [hoverRatio])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (plotW === 0) return
        const rect = e.currentTarget.getBoundingClientRect()
        const ratio = (e.clientX - rect.left - PAD.left) / plotW
        setHoverRatio(Math.max(0, Math.min(1, ratio)))
    }

    const gridColor = theme == "dark" ? "#1c1c1c" : "#e6e6e6"
    const labelColor = theme == "dark" ? "#969393" : "#696464"

    // On narrow charts, show every other date so labels don't collide
    const showEveryOtherLabel = plotW < 460

    // Keep the tooltip inside the card horizontally
    const tooltipX = Math.min(Math.max(activePoint.x, 60), width - 60)

    return (
        <div className="flex h-full flex-col rounded-2xl border dark:border-[#222121] border-black/10">
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
                /*
                    flex-1 + flex-col: Glow fills the card.
                    [&>*:last-child]: also stretches Glow's inner wrapper
                    (or our content div, if Glow renders children directly),
                    so the chart below can grow to the bottom of the card.
                */
                className="
                    p-4
                    flex-1
                    flex
                    flex-col
                    [&>*:last-child]:flex
                    [&>*:last-child]:flex-1
                    [&>*:last-child]:flex-col
                "
            >
                <div className="relative z-10 flex flex-1 flex-col">

                    {/* Top */}
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <h2 className={`${manrope.className} text-[14px] tracking-[-0.03em] text-black dark:text-white`}>
                                Performance Overview
                            </h2>

                            <p className={`${manrope.className} mt-1 text-[12px] text-black/45 dark:text-white/45`}>
                                Total syncs this month
                            </p>

                            <h1 className={`${manrope.className} mt-1 text-[28px] @sm:text-[30px] tracking-[-0.06em] text-black dark:text-white`}>
                                {activeData.value.toLocaleString()}
                            </h1>
                        </div>

                        <button
                            className={`${manrope.className} shrink-0 rounded-[8px] border border-black/[0.06] bg-black/[0.02] dark:border-white/[0.06] dark:bg-white/[0.02] px-3 py-1.5 text-[11px] font-medium text-black/60 dark:text-white/60 backdrop-blur-md transition-all duration-300 hover:bg-black/[0.04] hover:text-black dark:hover:bg-white/[0.04] dark:hover:text-white`}
                        >
                            This Month
                        </button>
                    </div>

                    {/* Chart: grows to fill the card, never shorter than 220px */}
                    <div
                        ref={chartRef}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onMouseMove={handleMouseMove}
                        className="relative mt-4 w-full flex-1 min-h-[220px] cursor-crosshair"
                    >
                        {width > 0 && height > 0 && (
                            <svg
                                width={width}
                                height={height}
                                viewBox={`0 0 ${width} ${height}`}
                                className={`${manrope.className} absolute inset-0`}
                            >
                                <defs>
                                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#0d7525" stopOpacity="0.18" />
                                        <stop offset="100%" stopColor="#0d7525" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Grid + Y labels */}
                                {yTicks.map((value, i) => {
                                    const y = PAD.top + (plotH / (yTicks.length - 1)) * i
                                    return (
                                        <g key={value}>
                                            <line
                                                x1={PAD.left}
                                                y1={y}
                                                x2={width - PAD.right}
                                                y2={y}
                                                stroke={gridColor}
                                                strokeWidth="1"
                                            />
                                            <text
                                                x={PAD.left - 8}
                                                y={y}
                                                textAnchor="end"
                                                dominantBaseline="middle"
                                                fill={labelColor}
                                                fontSize="11"
                                            >
                                                {value / 1000}K
                                            </text>
                                        </g>
                                    )
                                })}

                                {/* X labels */}
                                {points.map((point, index) => {
                                    if (showEveryOtherLabel && index % 2 !== 0) return null

                                    const isFirst = index === 0
                                    const isLast = index === points.length - 1

                                    return (
                                        <text
                                            key={point.day}
                                            x={point.x}
                                            y={height - 8}
                                            textAnchor={isFirst ? "start" : isLast ? "end" : "middle"}
                                            fill={labelColor}
                                            fontSize="11"
                                        >
                                            {point.day}
                                        </text>
                                    )
                                })}

                                {/* Fill */}
                                <path
                                    d={`${pathData} L ${PAD.left + plotW} ${baseline} L ${PAD.left} ${baseline} Z`}
                                    fill={`url(#${gradientId})`}
                                />

                                {/* Line */}
                                <motion.path
                                    ref={pathRef}
                                    d={pathData}
                                    fill="none"
                                    stroke="#119F25"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.8, ease: "easeInOut" }}
                                    style={{ filter: "drop-shadow(0 0 4px rgba(17,159,37,0.45))" }}
                                />

                                {/* Hover line */}
                                <line
                                    x1={activePoint.x}
                                    y1={PAD.top}
                                    x2={activePoint.x}
                                    y2={baseline}
                                    stroke="#119F25"
                                    strokeDasharray="4 4"
                                    strokeOpacity={isHovering ? 0.35 : 0}
                                    style={{ transition: "stroke-opacity 0.1s linear" }}
                                />

                                {/* Active dot */}
                                <circle
                                    cx={activePoint.x}
                                    cy={activePoint.y}
                                    r={5}
                                    fill="#119F25"
                                    stroke={theme == "dark" ? "#000000" : "#ffffff"}
                                    strokeWidth="2.5"
                                    opacity={isHovering ? 1 : 0}
                                    style={{ transition: "opacity 0.1s linear" }}
                                />
                            </svg>
                        )}

                        {/* Tooltip (HTML, so it renders at real size) */}
                        <div
                            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-[calc(100%+12px)] rounded-[10px] border border-white/10 bg-black/90 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-opacity duration-100"
                            style={{
                                left: tooltipX,
                                top: activePoint.y,
                                opacity: isHovering ? 1 : 0,
                            }}
                        >
                            <p className={`${manrope.className} whitespace-nowrap text-[11px] text-white/60`}>
                                {activeData.day}
                            </p>
                            <p className={`${manrope.className} mt-0.5 whitespace-nowrap text-[13px] text-white`}>
                                {activeData.value.toLocaleString()}
                                <span className="ml-1 text-[11px] text-white/60">syncs</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Glow>
        </div>
    )
}

export default PerformanceOverviewChart
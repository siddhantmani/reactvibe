"use client"
import {
    animate,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import { Dot } from "lucide-react"
import { Manrope } from "next/font/google"
import { useEffect } from "react"

const CTAButton = Manrope({
    weight: "500",
    subsets: ["latin"],
})

// Constant data lives outside the component, so it isn't recreated on every render.
const gradients = [
    ["#0F0F0F", "#141313", "#1B1A1A"], // Pure charcoal shift (safest, premium)
    ["#141313", "#1E1D1D", "#2A2929"], // Elevated surface (buttons / cards)
    ["#111111", "#181717", "#242323"], // Subtle depth (hover states)
    ["#161515", "#232222", "#2F2E2E"], // Soft contrast (secondary buttons)
    ["#1A1919", "#2A2828", "#3A3838"], // Strongest allowed contrast
]

// RGB color blending function
const mix = (start: string, end: string, progress: number) => {
    const s = parseInt(start.slice(1), 16)
    const e = parseInt(end.slice(1), 16)
    const sr = (s >> 16) & 255,
        sg = (s >> 8) & 255,
        sb = s & 255
    const er = (e >> 16) & 255,
        eg = (e >> 8) & 255,
        eb = e & 255
    const r = Math.round(sr + (er - sr) * progress)
    const g = Math.round(sg + (eg - sg) * progress)
    const b = Math.round(sb + (eb - sb) * progress)
    return `rgb(${r}, ${g}, ${b})`
}

function DocsBTNTag() {
    const angle = useMotionValue(0)
    const colorIndex = useMotionValue(0)

    // Smoothing transitions
    const smoothAngle = useSpring(angle, { stiffness: 30, damping: 20 })
    const smoothIndex = useSpring(colorIndex, { stiffness: 15, damping: 15 })

    const background = useTransform([smoothAngle, smoothIndex], (values: number[]) => {
        const [a, raw] = values
        const n = gradients.length
        const i = Number.isFinite(raw) ? raw : 0

        const base = Math.floor(i)
        const index = ((base % n) + n) % n // always 0..n-1, even for negative values
        const nextIndex = (index + 1) % n
        const t = i - base

        const [c1a, c2a, c3a] = gradients[index]
        const [c1b, c2b, c3b] = gradients[nextIndex]

        const c1 = mix(c1a, c1b, t)
        const c2 = mix(c2a, c2b, t)
        const c3 = mix(c3a, c3b, t)

        return `linear-gradient(${a}deg, ${c1} 10%, ${c2} 60%, ${c3} 100%)`
    })

    // Animations — stopped on unmount so they don't keep running in the background
    useEffect(() => {
        const rotate = animate(angle, 360, {
            duration: 12,
            ease: "linear",
            repeat: Infinity,
        })

        const colors = animate(colorIndex, gradients.length, {
            duration: gradients.length * 6,
            ease: "linear",
            repeat: Infinity,
        })

        return () => {
            rotate.stop()
            colors.stop()
        }
    }, [angle, colorIndex])

    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                delay: 0.2,
            }}
            style={{ background }}
            className={`${CTAButton.className} w-fit md:text-[12px] text-white text-sm px-3 py-1 rounded-full border border-[#323232] flex items-center text-[11px]`}
        >
            Production-Ready React Components <span><Dot size={15} /></span> Dashboard Systems <span><Dot size={15} /></span> 50+ UI Blocks & Components
        </motion.div>
    )
}

export default DocsBTNTag
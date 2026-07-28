"use client"

import { motion, useMotionValue, useTransform, animate, useSpring } from "framer-motion"
import { useEffect } from "react"
import { Manrope } from "next/font/google"

const CTAButton = Manrope({
    weight: "500",
    subsets: ["latin"],
})

const MainHeading = Manrope({
    weight: "600",
    subsets: ["latin"],
})

const miniPara = Manrope({
    weight: "400",
    subsets: ["latin"],
})

function MultiColor() {
    const angle = useMotionValue(0)
    const colorIndex = useMotionValue(0)

    // Smoothing transitions
    const smoothAngle = useSpring(angle, { stiffness: 30, damping: 20 })
    const smoothIndex = useSpring(colorIndex, { stiffness: 15, damping: 15 })

    // Gradient color sets
    const gradients = [
        ["#050505", "#070606", "#120F0F"],
        ["#070606", "#100D0D", "#1A1616"],
        ["#060505", "#0F0D0D", "#181515"],
        ["#070606", "#141111", "#211D1D"],
        ["#050505", "#0A0909", "#171414"],
    ];

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

    // Background and Button color interpolation
    const background = useTransform([smoothAngle, smoothIndex], (values: number[]) => {
        const [a, i] = values
        const index = Math.floor(i) % gradients.length
        const nextIndex = (index + 1) % gradients.length
        const t = i - Math.floor(i)

        const [c1a, c2a, c3a] = gradients[index]
        const [c1b, c2b, c3b] = gradients[nextIndex]

        const c1 = mix(c1a, c1b, t)
        const c2 = mix(c2a, c2b, t)
        const c3 = mix(c3a, c3b, t)

        return `linear-gradient(${a}deg, ${c1} 10%, ${c2} 60%, ${c3} 100%)`
    })

    const buttonBackground = useTransform(smoothIndex, (i: number) => {
        const index = Math.floor(i) % gradients.length
        const nextIndex = (index + 1) % gradients.length
        const t = i - Math.floor(i)
        const [c1a, c2a, c3a] = gradients[index]
        const [c1b, c2b, c3b] = gradients[nextIndex]

        const c1 = mix(c1a, c1b, t)
        const c2 = mix(c2a, c2b, t)
        const c3 = mix(c3a, c3b, t)

        return `linear-gradient(135deg, ${c1}, ${c2}, ${c3})`
    })

    // Animations
    useEffect(() => {
        animate(angle, 360, {
            duration: 12,
            ease: "linear",
            repeat: Infinity,
        })

        animate(colorIndex, gradients.length, {
            duration: gradients.length * 6,
            ease: "linear",
            repeat: Infinity,
        })
    }, [angle, colorIndex, gradients.length])

    return (
        <motion.div
            className="h-screen"
            style={{ background }}

        >

        </motion.div>
    )
}

export default MultiColor

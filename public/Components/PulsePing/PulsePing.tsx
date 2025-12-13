"use client"

import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate, useSpring } from "framer-motion"

type PingtoNewProps = {
    size?: number
}

function PulsePing({ size = 10 }: PingtoNewProps) {
    const angle = useMotionValue(0)
    const colorIndex = useMotionValue(0)

    // Smoothing transitions
    const smoothAngle = useSpring(angle, { stiffness: 30, damping: 20 })
    const smoothIndex = useSpring(colorIndex, { stiffness: 15, damping: 15 })

    // Gradient color sets
    const gradients = [
        ["#2868FF", "#4F80FF", "#779FFF"], // Blue
        ["#5E17EB", "#8B5CFF", "#C1A6FF"], // Purple
        ["#00796B", "#26A69A", "#80CBC4"], // Teal
        ["#FF6B00", "#FFA726", "#FFD180"], // Orange
        ["#007BFF", "#00C6FF", "#80D8FF"], // Sky
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
        <div>
            <motion.div
                style={{
                    width: size,
                    height: size,
                    background,
                }}
                className="rounded-full animate-spin"
            />
        </div>
    )
}

export default PulsePing
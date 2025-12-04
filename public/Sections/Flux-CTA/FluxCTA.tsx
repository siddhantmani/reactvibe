"use client"

import { motion, useMotionValue, useTransform, animate, useSpring } from "framer-motion"
import { useEffect } from "react"
import { Manrope } from "next/font/google"
import LinearReveal from "@/components/LinearReveal"

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

function FluxCTA() {
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
            className="flex flex-col justify-center items-center space-y-5 rounded-3xl p-3 py-20 overflow-hidden"
            style={{ background }}

        >
            {/* Heading */}

            <LinearReveal
                as={'h1'}
                text="Flux CTA from React Vibe"
                className={`${MainHeading.className} text-white text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center xl:max-w-3xl md:max-w-xl lg:max-w-3xl`}
            />


            {/* Description */}
            <motion.p
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.7,
                }}
                className={`${miniPara.className} text-sm text-white max-w-sm xl:text-lg xl:max-w-lg md:max-w-sm text-center`}
            >
                A fully responsive CTA with live gradient transitions and auto-synced button styling.
            </motion.p>

            {/* CTA Button */}
            <motion.button
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2, margin: "50px" }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5,
                }}
                className={`${CTAButton.className} md:text-[13px] xl:text-[20px] px-6 py-2 rounded-lg text-white shadow-lg hover:scale-[1.03] transition-transform`}
                style={{
                    background: buttonBackground,
                }}
            >
                Use it
            </motion.button>
        </motion.div>
    )
}

export default FluxCTA

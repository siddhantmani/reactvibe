"use client"

import React, { useEffect } from "react"
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate,
    useSpring
} from "framer-motion"
import { Manrope } from "next/font/google"
import { HiCheckBadge } from "react-icons/hi2"
import LinearReveal from "@/components/LinearReveal"

const CTAButton = Manrope({
    weight: "500",
    subsets: ["latin"],
})

const MainHeading = Manrope({
    weight: "400",
    subsets: ["latin"],
})

const miniPara = Manrope({
    weight: "300",
    subsets: ["latin"],
})


function ZeinthSection({ yearly, setYearly }: { yearly: boolean; setYearly: (value: boolean) => void }) {
    return (
        <div className="flex justify-center mb-8">
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                whileInView={{ opacity: 1 }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.4
                }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 py-4 text-black dark:text-white transition-colors">
                <label className="text-black dark:text-white transition-colors">Monthly</label>
                <label className='flex cursor-pointer select-none items-center'>
                    <div className='relative'>
                        <input
                            type='checkbox'
                            checked={yearly}
                            onChange={setYearly.bind(null, !yearly)}
                            className='sr-only'
                        />
                        <div className="scale-[75%]">
                            <div className='block h-8 w-14 rounded-full bg-gray-300 dark:bg-[#E5E7EB] transition-colors'></div>
                            <motion.div
                                className="dot absolute top-1 h-6 w-6 rounded-full bg-white dark:bg-[#141313] transition-colors"
                                animate={{ left: yearly ? '1.75rem' : '0.25rem' }} // left-7 ≈ 1.75rem, left-1 ≈ 0.25rem
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            />
                        </div>
                    </div>
                </label>
                <label className="text-black dark:text-white transition-colors">Yearly</label>
            </motion.div>
        </div>
    )
}

function Zeinth() {
    const [yearly, setYearly] = React.useState(false)

    const angle = useMotionValue(0)
    const colorIndex = useMotionValue(0)

    // Smoothing transitions
    const smoothAngle = useSpring(angle, { stiffness: 30, damping: 20 })
    const smoothIndex = useSpring(colorIndex, { stiffness: 15, damping: 15 })

    const gradients = [
        ["#0F0F0F", "#141313", "#1B1A1A"], // Pure charcoal shift (safest, premium)
        ["#141313", "#1E1D1D", "#2A2929"], // Elevated surface (buttons / cards)
        ["#111111", "#181717", "#242323"], // Subtle depth (hover states)
        ["#161515", "#232222", "#2F2E2E"], // Soft contrast (secondary buttons)
        ["#1A1919", "#2A2828", "#3A3838"], // Strongest allowed contrast
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
    // const background = useTransform([smoothAngle, smoothIndex], (values: number[]) => {
    //     const [a, i] = values
    //     const index = Math.floor(i) % gradients.length
    //     const nextIndex = (index + 1) % gradients.length
    //     const t = i - Math.floor(i)

    //     const [c1a, c2a, c3a] = gradients[index]
    //     const [c1b, c2b, c3b] = gradients[nextIndex]

    //     const c1 = mix(c1a, c1b, t)
    //     const c2 = mix(c2a, c2b, t)
    //     const c3 = mix(c3a, c3b, t)

    //     return `linear-gradient(${a}deg, ${c1} 10%, ${c2} 60%, ${c3} 100%)`
    // })

    // Background and Button color interpolation
    const background = useTransform([smoothAngle, smoothIndex], (values: number[]) => {
        const [a, i] = values

        // 1. Get the raw floored index, which might be negative
        const rawIndex = Math.floor(i)

        // 2. Safe modulo calculation guarantees a positive index within array bounds
        const index = ((rawIndex % gradients.length) + gradients.length) % gradients.length
        const nextIndex = (index + 1) % gradients.length

        // 3. Prevent t from being negative during the spring overshoot
        let t = i - rawIndex
        if (t < 0) t = 0; else if (t > 1) t = 1;

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

    const plans = [
        {
            name: "Free",
            price: yearly ? "$0" : "$0",
            subtitle: "For individuals or startups getting started.",
            features: [
                "Send up to 5 invoices/month",
                "Track basic expenses",
                "1 connected bank account",
                "Standard dashboard view",
                "Email-only support",
            ],
            button: "Start for Free",
            footer: "Basic features to get started.",
        },
        {
            name: "Pro",
            price: yearly ? "$450/yr" : "$45/mo",
            subtitle: "For growing teams that need automation.",
            features: [
                "Unlimited invoices & clients",
                "Automated recurring billing",
                "Real-time cash flow dashboard",
                "Multi-user access (up to 3 users)",
                "Priority chat & email support",
            ],
            button: "Get started",
            footer: "All features from Free",
            tag: "Popular",
        },
        {
            name: "Enterprise",
            price: "Custom",
            subtitle: "For large teams with advanced needs.",
            features: [
                "Fully customized invoicing workflows",
                "Unlimited users and bank integrations",
                "Custom roles & permissions",
                "Dedicated account manager",
                "SLA, audit logs, and compliance tools",
            ],
            button: "Contact Us",
            footer: "All included from Pro",
        },
    ]

    return (
        <div className="w-full flex flex-col items-center justify-center py-5 md:px-3">
            <ZeinthSection yearly={yearly} setYearly={setYearly} />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 xl:max-w-5xl lg:max-w-4xl w-full min-[425px]:px-3 min-[425px]:gap-3 min-[375px]:p-2 min-[375px]:gap-2 min-[320px]:p-2 min-[320px]:gap-2">
                {plans.map((plan, index) => {
                    const isPro = plan.name === "Pro"

                    if (isPro) {
                        // 🔹 PRO PLAN WITH ANIMATED BORDER
                        return (
                            <motion.div
                                key={plan.name}
                                className="relative rounded-2xl bg-white dark:bg-transparent dark:bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)] border border-gray-200 dark:border-none shadow-xl dark:shadow-none transition-all"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Inner card */}
                                <div className="h-full w-full rounded-4xl md:p-3 lg:p-5 min-[425px]:p-5 min-[375px]:p-5 min-[320px]:p-4 flex flex-col text-gray-900 transition-colors">


                                    {/* Title + Price */}
                                    <div className="md:space-y-4">
                                        <div className="flex justify-between items-center">
                                            <LinearReveal
                                                as={'h2'}
                                                Text={plan.name}
                                                delay={0.2}
                                                className={`${MainHeading.className} text-2xl text-black dark:text-white transition-colors`}
                                            />

                                            {/* Tag */}
                                            <motion.div
                                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                    margin: "50px"
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    ease: [0.25, 0.46, 0.45, 0.94],
                                                    delay: 0.2
                                                }}
                                                style={{
                                                    background
                                                }}
                                                className={`${CTAButton.className} md:text-[12px] text-white text-sm px-3 py-1 rounded-full border border-gray-300 dark:border-[#323232] transition-colors`}>
                                                {plan.tag}
                                            </motion.div>

                                        </div>
                                        <motion.p
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
                                            animate={{ opacity: 1, filter: "blur(0px)" }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                                margin: "50px"
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                                delay: 0.2
                                            }}
                                            className={`${miniPara.className} mt-2 text-sm text-gray-600 dark:text-[#B1B1B1] transition-colors`}>
                                            {plan.subtitle}
                                        </motion.p>
                                        <AnimatePresence mode="wait">
                                            <LinearReveal
                                                key={plan.price}
                                                as={'p'}
                                                Text={plan.price}
                                                delay={0.2}
                                                className={`${MainHeading.className} text-4xl mt-3 text-black dark:text-white transition-colors`}
                                            />
                                        </AnimatePresence>
                                        {/* Button with animated rotating border */}
                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
                                            animate={{ opacity: 1, filter: "blur(0px)" }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                                margin: "50px"
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                                delay: 1.2
                                            }}
                                            exit={{ opacity: 0, y: -10 }}
                                            style={{ background }}
                                            className="md:mt-5 rounded-xl p-[1px]"
                                        >
                                            <motion.div
                                                className="relative rounded-xl h-full"
                                            >
                                                <button
                                                    className={`${CTAButton.className} w-full py-3 text-xl rounded-xl text-black dark:text-[#ffffff] bg-white dark:bg-transparent dark:bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)] hover:bg-gray-50 dark:hover:bg-transparent transition-all`}>
                                                    {plan.button} →
                                                </button>


                                            </motion.div>
                                        </motion.div>
                                    </div>


                                    {/* Features */}
                                    <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-white transition-colors">
                                        {plan.features.map((f, i) => (
                                            <motion.li
                                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                    margin: "50px"
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    ease: [0.25, 0.46, 0.45, 0.94],
                                                    delay: 0.2 * i
                                                }}
                                                exit={{ opacity: 0, y: -10 }}
                                                key={i} className={`${miniPara.className} flex items-center text-gray-600 dark:text-[#B1B1B1] transition-colors`}>
                                                <span className="mr-2 text-lg">
                                                    <HiCheckBadge className="h-4 w-4 fill-gray-400 dark:fill-[#B1B1B1] transition-colors" />

                                                </span>
                                                {f}
                                            </motion.li>
                                        ))}
                                    </ul>


                                </div>
                            </motion.div>
                        )
                    }

                    // 🔸 FREE & ENTERPRISE (STATIC)
                    return (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl border border-gray-200 dark:border-[#222020] text-gray-900 bg-white dark:bg-transparent dark:bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)] md:p-3 md:p-5 min-[425px]:p-5 min-[375px]:p-5 min-[320px]:p-4 flex flex-col shadow-sm transition-colors duration-300"
                        >
                            <div className="md:space-y-4">
                                <LinearReveal
                                    as={'h2'}
                                    Text={plan.name}
                                    delay={0.2}
                                    className={`${MainHeading.className} text-2xl text-black dark:text-white transition-colors`}
                                />

                                <motion.p
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                        margin: "50px"
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        delay: 0.2
                                    }}
                                    className={`${miniPara.className} mt-2 text-sm text-gray-600 dark:text-[#B1B1B1] transition-colors`}>{plan.subtitle}
                                </motion.p>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                            margin: "50px"
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.2
                                        }}
                                        key={plan.price}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={` ${MainHeading.className} text-3xl mt-3 text-black dark:text-white transition-colors`}
                                    >
                                        {plan.price}
                                    </motion.p>
                                </AnimatePresence>

                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    animate={{ opacity: 1, filter: "blur(0px)" }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                        margin: "50px"
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        delay: 1.1
                                    }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="md:mt-6">
                                    <button
                                        style={{ borderRadius: "10px" }}
                                        className={`${CTAButton.className} w-full py-3 text-white bg-black hover:bg-gray-800 dark:bg-transparent dark:hover:bg-transparent dark:bg-[linear-gradient(180deg,#121110_0%,#1c1b1b_0%,#313332_100%)] dark:shadow-[10px_24px_8px_rgba(13,12,12,0.45),inset_7px_7px_31px_rgba(18,17,17,0.35),inset_2px_2px_20px_rgba(13,12,12,0.25)] dark:[border-image:linear-gradient(180deg,#423f3f,#0f0f0f)_10] transition-all`}
                                    >
                                        {plan.button} →
                                    </button>
                                </motion.div>
                            </div>

                            <ul className="mt-6 space-y-2 text-sm text-gray-700 dark:text-white transition-colors">
                                {plan.features.map((f, i) => (
                                    <motion.li
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                            margin: "50px"
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.2 * i
                                        }}
                                        exit={{ opacity: 0, y: -10 }}
                                        key={i} className={`${miniPara.className} flex items-center text-gray-600 dark:text-[#B1B1B1] transition-colors`}>
                                        <span className="mr-2 text-lg">
                                            <HiCheckBadge className="h-4 w-4 fill-gray-400 dark:fill-[#B1B1B1] transition-colors" />
                                        </span>
                                        {f}
                                    </motion.li>
                                ))}
                            </ul>

                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Zeinth
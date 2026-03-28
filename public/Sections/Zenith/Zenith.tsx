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


function AuroraPricingSection({ yearly, setYearly }: { yearly: boolean; setYearly: (value: boolean) => void }) {
    return (
        <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3 py-4 dark:text-white text-black">
                <label className="text-white">Monthly</label>
                <label className='flex cursor-pointer select-none items-center'>
                    <div className='relative'>
                        <input
                            type='checkbox'
                            checked={yearly}
                            onChange={setYearly.bind(null, !yearly)}
                            className='sr-only'
                        />
                        <div className="scale-[75%]">
                            <div className='block h-8 w-14 rounded-full bg-[#E5E7EB]'></div>
                            <motion.div
                                className="dot absolute top-1 h-6 w-6 rounded-full bg-[#141313]"
                                animate={{ left: yearly ? '1.75rem' : '0.25rem' }} // left-7 ≈ 1.75rem, left-1 ≈ 0.25rem
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            />
                        </div>
                    </div>
                </label>
                <label className="text-white">Yearly</label>
            </div>
        </div>
    )
}

function Zenith() {
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

    // Motion value for rotating gradient

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
            subtitle: "For growing teams that need automation and insights.",
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
            subtitle: "For large teams and enterprises with advanced needs.",
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
        <div className="w-full flex flex-col items-center justify-center py-5 px-4">
            <AuroraPricingSection yearly={yearly} setYearly={setYearly} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {plans.map((plan, index) => {
                    const isPro = plan.name === "Pro"

                    if (isPro) {
                        // 🔹 PRO PLAN WITH ANIMATED BORDER
                        return (
                            <motion.div
                                style={{
                                    background: `
                radial-gradient(
                  circle at 50% 60%,
                  rgba(255,255,255,0.08),
                  rgba(0,0,0,0.95) 70%
                )
              `
                                }}
                                key={plan.name}
                                className="relative rounded-4xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Inner white card */}
                                <div

                                    className="h-full w-full rounded-4xl p-8 flex flex-col justify-between text-gray-900 shadow-lg">
                                    {/* Tag */}
                                    <motion.div

                                        style={{
                                            background
                                        }}
                                        className={`${CTAButton.className} md:text-[12px]  absolute top-5 right-5 text-white text-sm px-3 py-1 rounded-full border border-[#323232]`}>
                                        {plan.tag}
                                    </motion.div>

                                    {/* Title + Price */}
                                    <div>
                                        <h3 className={`${MainHeading.className} text-2xl text-white`}>
                                            {plan.name}
                                        </h3>
                                        <p className={`${miniPara.className} mt-2 text-sm text-[#B1B1B1]`}>
                                            {plan.subtitle}
                                        </p>
                                        <AnimatePresence mode="wait">
                                            <motion.p
                                                key={plan.price}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className={`${MainHeading.className} text-4xl  mt-3 text-white`}
                                            >
                                                {plan.price}
                                            </motion.p>
                                        </AnimatePresence>
                                    </div>

                                    {/* Button with animated rotating border */}
                                    <motion.div
                                        style={{ background }}
                                        className="mt-4 rounded-xl"
                                    >
                                        <motion.div
                                            className="relative rounded-xl p-[1px]"
                                        >
                                            <button
                                                style={{
                                                    background: `
                radial-gradient(
                  circle at 10% 10%,
                  rgba(255,255,255,0.08),
                  rgba(0,0,0,0.95) 70%
                )
              `
                                                }}
                                                className={`${CTAButton.className} w-full py-3 text-xl rounded-xl text-[#ffffff] hover:bg-gray-50 transition-all`}>
                                                {plan.button} →
                                            </button>
                                        </motion.div>
                                    </motion.div>

                                    {/* Footer */}
                                    {/* <p className={` ${MainHeading.className} text-xs mt-4 text-gray-500 text-center`}>{plan.footer}</p> */}

                                    {/* Features */}
                                    <ul className="mt-6 space-y-2 text-sm text-white">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className={`${miniPara.className} flex items-center text-[#B1B1B1]`}>
                                                <span className="mr-2 text-lg">
                                                    <HiCheckBadge className="h-4 w-4 fill-[#B1B1B1]" />

                                                </span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>


                                </div>
                            </motion.div>
                        )
                    }

                    // 🔸 FREE & ENTERPRISE (STATIC)
                    return (
                        <motion.div
                            style={{
                                background: `
                radial-gradient(
                  circle at 10% 10%,
                  rgba(255,255,255,0.08),
                  rgba(0,0,0,0.95) 70%
                )
              `
                            }}
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl border border-[#222020] text-gray-900 p-8 flex flex-col justify-between shadow-sm"
                        >
                            <h3 className={`${MainHeading.className} text-2xl text-white`}>
                                {plan.name}
                            </h3>
                            <p className={`${miniPara.className} mt-2 text-sm text-[#B1B1B1]`}>{plan.subtitle}</p>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={plan.price}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className={` ${MainHeading.className} text-3xl mt-3 text-white`}
                                >
                                    {plan.price}
                                </motion.p>
                            </AnimatePresence>

                            <div className="mt-4">
                                <button
                                    style={{
                                        background: `
      linear-gradient(
        180deg,
        #121110 0%,
        #1c1b1b 0%,
        #313332 100%
        )
    `,
                                        boxShadow: `
        10px 24px 8px rgba(13, 12, 12 0.45),
        inset 7px 7px 31px rgba(18, 17, 17, 0.35),
        inset 2px 2px 20px rgba(13, 12, 12, 0.25)
      `,
                                        borderImage: "linear-gradient(180deg, #423f3f, #0f0f0f) 10",
                                        borderRadius: "10px"
                                    }}
                                    className={`${CTAButton.className} w-full py-3 rounded-md  text-white transition-all`}>
                                    {plan.button} →
                                </button>
                            </div>

                            {/* <p className={`${MainHeading.className} text-xs mt-4 text-gray-500`}>{plan.footer}</p> */}

                            <ul className="mt-6 space-y-2 text-sm text-gray-700">
                                {plan.features.map((f, i) => (
                                    <li key={i} className={`${miniPara.className} flex items-center text-[#B1B1B1]`}>
                                        <span className="mr-2 text-lg">
                                            <HiCheckBadge className="h-4 w-4 fill-[#B1B1B1]" />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>


                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Zenith

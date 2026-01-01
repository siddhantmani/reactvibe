"use client"

import React, { useEffect } from "react"
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useTransform,
    animate,
} from "framer-motion"
import { Check } from "lucide-react"
import { Manrope } from "next/font/google"

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


function TogglePricing({ yearly, setYearly }: { yearly: boolean; setYearly: (value: boolean) => void }) {

    return (
        <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 py-4 text-black">
                <label>Monthly</label>
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
                                className="dot absolute top-1 h-6 w-6 rounded-full bg-white"
                                animate={{ left: yearly ? '1.75rem' : '0.25rem' }} // left-7 ≈ 1.75rem, left-1 ≈ 0.25rem
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            />
                        </div>
                    </div>
                </label>
                <label>Yearly</label>
            </div>
        </div>
    )
}

function PricingSection() {
    const [yearly, setYearly] = React.useState(false)

    // Motion value for rotating gradient
    const angle = useMotionValue(0)
    const animatedBorder = useTransform(
        angle,
        (a) =>
            `linear-gradient(${a}deg, #bcb4ed, #ebbe71, #779FFF, #bfb7ed, #dcd7fc)`
    )

    useEffect(() => {
        animate(angle, 360, {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        })
    }, [angle])

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
            <TogglePricing yearly={yearly} setYearly={setYearly} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {plans.map((plan, index) => {
                    const isPro = plan.name === "Pro"

                    if (isPro) {
                        // PRO PLAN WITH ANIMATED BORDER
                        return (
                            <motion.div
                                key={plan.name}
                                className="relative rounded-4xl p-[7px]"
                                style={{ background: animatedBorder }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Inner white card */}
                                <div
                                    style={{
                                        boxShadow: `
      0px 12px 40px rgba(60, 80, 180, 0.08),
      0px 20px 60px rgba(0, 0, 0, 0.05)
    `,
                                    }}
                                    className="h-full w-full bg-linear-to-b from-[#2868FF] via-[#88a9f6] to-[#ffffff] rounded-4xl p-8 flex flex-col justify-between text-gray-900 shadow-lg">
                                    {/* Tag */}
                                    <div className={`${CTAButton.className}  absolute top-5 right-5 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200`}>
                                        {plan.tag}
                                    </div>

                                    {/* Title + Price */}
                                    <div>
                                        <h3 className={`${MainHeading.className} text-2xl text-white`}>
                                            {plan.name}
                                        </h3>
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
                                        <p className={`${miniPara.className} mt-2 text-sm text-white`}>
                                            {plan.subtitle}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <ul className="mt-6 space-y-2 text-sm text-white">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className={`${miniPara.className} flex items-start`}>
                                                <span className="mr-2 text-lg">
                                                    <Check className="h-4 w-4" />
                                                </span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Button with animated rotating border */}
                                    <div className="mt-8">
                                        <motion.div
                                            className="relative rounded-xl p-[2px]"
                                            style={{ background: animatedBorder }}
                                        >
                                            <button
                                                style={{
                                                    boxShadow: `
      0px 12px 40px rgba(60, 80, 180, 0.08),
      0px 20px 60px rgba(0, 0, 0, 0.05)
    `,
                                                }}
                                                className={`${CTAButton.className} w-full py-3 text-xl rounded-xl bg-white text-[#343945] hover:bg-gray-50 transition-all`}>
                                                {plan.button} →
                                            </button>
                                        </motion.div>
                                    </div>

                                    {/* Footer */}
                                    <p className={` ${MainHeading.className} text-xs mt-4 text-gray-500 text-center`}>{plan.footer}</p>
                                </div>
                            </motion.div>
                        )
                    }

                    //  FREE & ENTERPRISE (STATIC)
                    return (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl border border-gray-200 bg-white text-gray-900 p-8 flex flex-col justify-between shadow-sm"
                        >
                            <h3 className={`${MainHeading.className} text-xl text-gray-900`}>
                                {plan.name}
                            </h3>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={plan.price}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className={` ${MainHeading.className} text-3xl mt-3 text-gray-900`}
                                >
                                    {plan.price}
                                </motion.p>
                            </AnimatePresence>
                            <p className={`${miniPara.className} mt-2 text-sm text-gray-500`}>{plan.subtitle}</p>

                            <ul className="mt-6 space-y-2 text-sm text-gray-700">
                                {plan.features.map((f, i) => (
                                    <li key={i} className={`${miniPara.className} flex items-start`}>
                                        <span className="mr-2 text-lg">
                                            <Check className="h-4 w-4" />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <button className={`${CTAButton.className} w-full py-3 rounded-xl bg-[#2D6DFF] text-white hover:bg-[#2459D6] transition-all`}>
                                    {plan.button} →
                                </button>
                            </div>

                            <p className={`${MainHeading.className} text-xs mt-4 text-gray-500`}>{plan.footer}</p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default PricingSection

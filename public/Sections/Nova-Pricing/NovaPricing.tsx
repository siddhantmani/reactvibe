"use client"

import React from 'react'

import {
    motion
} from "framer-motion"

const CTAButton = Manrope({
    weight: "700",
    subsets: ["latin"],
})
const tagButton = Manrope({
    weight: "400",
    subsets: ["latin"],
})

const MainHeading = Manrope({
    weight: "500",
    subsets: ["latin"],
})

const miniPara = Manrope({
    weight: "500",
    subsets: ["latin"],
})

import { Check, Zap, ZapIcon } from 'lucide-react';
import { Manrope } from 'next/font/google'
import LinearReveal from '@/components/LinearReveal'

function MonthlyYearly({ yearly, setYearly }: { yearly: boolean; setYearly: (value: boolean) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{
                once: true,
                amount: 0.2,
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.7
            }}

        >
            <div className="flex justify-center mb-16">
                <div
                    style={{
                        boxShadow: `
                                           0px 12px 40px rgba(60, 80, 180, 0.08),
                                           0px 20px 60px rgba(0, 0, 0, 0.05)
                                      `,
                    }}
                    className="flex items-center gap-3 py-1 dark:text-white text-black bg-[#E0E3E8] p-4 rounded-md"
                >
                    <label className={`${MainHeading.className} text-sm text-black`}>Monthly</label>
                    <label className='flex cursor-pointer select-none items-center'>
                        <div className='relative'>
                            <input
                                type='checkbox'
                                checked={yearly}
                                onChange={setYearly.bind(null, !yearly)}
                                className='sr-only'
                            />
                            <div className="scale-[75%]">
                                <div className='block h-8 w-14 rounded-full bg-[#C9CCD299]'></div>
                                <motion.div
                                    className="dot absolute top-1 h-6 w-6 rounded-full bg-white"
                                    animate={{ left: yearly ? '1.75rem' : '0.25rem' }} // left-7 ≈ 1.75rem, left-1 ≈ 0.25rem
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                />
                            </div>
                        </div>
                    </label>
                    <label className={`${MainHeading.className} text-black text-sm`}>Yearly</label>
                    <div>
                        <p
                            style={{
                                boxShadow: `
                                           0px 12px 40px rgba(60, 80, 180, 0.08),
                                           0px 20px 60px rgba(0, 0, 0, 0.05)
                                      `,
                            }}
                            className={`${MainHeading.className} text-black bg-white p-1 rounded-sm text-[10px] px-2`}>Save 25%</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


function NovaPricing() {
    const [yearly, setYearly] = React.useState(false)

    const plans = [
        {
            name: "Basic",
            price: yearly ? "$0/yr" : "$0/mo",
            subtitle: "For people who just want the essentials",
            features: [
                "Unlimited tracked subscriptions",
                "Flexible payment options",
                "Monthly spending summary",
                "Real-time analytics and reporting",
            ],
            button: "Get Start for Free",
        },
        {
            name: "Professional",
            price: yearly ? "$108/yr" : "$12/mo",
            subtitle: "Deeper insights and automation",
            features: [
                "Everything in Basic",
                "Auto-categorization",
                "Advanced analytics",
                "Cancel-with-one-tap",
                "Priority support",
            ],
            button: "Get Started",
            tag: "Most Popular",
            icon: Zap
        },
        {
            name: "Enterprice",
            price: yearly ? "$891/yr" : "$99/mo",
            subtitle: "For large teams and enterprises with advanced needs.",
            features: [
                "Everything in Pro",
                "AI cancellation assistant",
                "Renewal predictions",
                "Multi-currency support",
                "Export and integrations",
            ],
            button: "Get Started"
        },
    ]
    return (
        <div className="w-full flex flex-col items-center justify-center py-5 px-4">
            <MonthlyYearly yearly={yearly} setYearly={setYearly} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
                {plans.map((plan, index) => {
                    const isPro = plan.name === "Professional"
                    const isBasic = plan.name === "Basic"
                    const isEnterprice = plan.name === "Enterprice"

                    if (isPro) {
                        //  PRO PLAN 
                        return (
                            <motion.div
                                key={plan.name}
                                className="rounded-3xl p-[10px] bg-[#131925] pb-[42px] md:pb-[42px] md:-mt-[42px]"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}

                            >
                                {/* Tag */}
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
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
                                >
                                    <div className={`${tagButton.className}  text-[#ffffff] text-base flex items-center justify-center gap-1 px-3 pb-2`}>
                                        <ZapIcon size={20} className='fill-white' />
                                        {plan.tag}
                                    </div>
                                </motion.div>
                                {/* Inner white card */}
                                <div className="h-full w-full rounded-2xl flex flex-col bg-[#F4F4F6] text-gray-900 shadow-lg p-1">
                                    <div className='bg-white p-5 rounded-2xl'>

                                        {/* Title + Price */}
                                        <div>
                                            <motion.div
                                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
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
                                            >
                                                <LinearReveal
                                                    text={plan.name}
                                                    as={'h3'}
                                                    className={`${MainHeading.className} text-lg text-[#454B57]`}
                                                />
                                            </motion.div>

                                            <motion.p
                                                key={plan.price}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className={`${MainHeading.className} text-4xl mt-3 text-[#454B57]`}
                                            >
                                                <LinearReveal
                                                    text={plan.price}
                                                    as="span"
                                                />
                                            </motion.p>


                                            <motion.div
                                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.2,
                                                    margin: "50px"
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    ease: [0.25, 0.46, 0.45, 0.94],
                                                    delay: 0.3
                                                }}
                                            >

                                                <p className={`${miniPara.className} mt-2 text-sm text-[#454B5780]`}>
                                                    {plan.subtitle}
                                                </p>
                                            </motion.div>
                                        </div>

                                        {/* Button with animated rotating border */}

                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
                                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                                margin: "50px"
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                                delay: 0.5
                                            }}
                                        >
                                            <div className="rounded-xl p-[10px] pt-2">
                                                <button
                                                    style={{
                                                        background: `
                                                    linear-gradient(
                                                      180deg,
                                                      #0A0F1F 0%,
                                                      #000511 55%,
                                                      #00030A 100%
                                                    )
                                                  `,
                                                        boxShadow: `
                                                    0px 24px 48px rgba(0, 0, 0, 0.45),
                                                    inset 7px 7px 31px rgba(164, 175, 197, 0.35),
                                                    inset 2px 2px 20px rgba(160, 165, 178, 0.25)
                                                  `,
                                                        borderImage: "linear-gradient(180deg, #FAFAFA, #BCC3CC) 1",
                                                    }}

                                                    className={`${CTAButton.className} text-white flex items-center justify-center p-3 gap-1 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out px-5 w-full text-center whitespace-nowrap`
                                                    }
                                                >
                                                    {plan.button} →
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Features */}
                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(8px)" }}
                                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                            margin: "50px"
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: [0.25, 0.46, 0.45, 0.94],
                                            delay: 0.4
                                        }}
                                    >
                                        <ul className="mt-2 space-y-3 text-sm p-2">
                                            {plan.features.map((f, i) => (
                                                <li key={i} className={`${miniPara.className} flex items-start text-[#454B57]`}>
                                                    <span className="mr-2 text-lg">
                                                        <Check
                                                            style={{
                                                                boxShadow: `
                                           0px 12px 40px rgba(60, 80, 180, 0.08),
                                           0px 20px 60px rgba(0, 0, 0, 0.05)
                                      `,
                                                            }}
                                                            className="h-5 w-5 bg-white p-1 rounded-full fill-white" />
                                                    </span>
                                                    <LinearReveal
                                                        text={f}
                                                        as="span"
                                                        className={`${miniPara.className} text-sm text-[#454B57]`}
                                                    />

                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )
                    }

                    if (isBasic) {
                        // Basic plans
                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl border border-gray-200 bg-white text-gray-900 p-8 flex flex-col shadow-sm"
                            >
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
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
                                >
                                    <LinearReveal
                                        text={plan.name}
                                        as={'h3'}
                                        className={`${MainHeading.className} text-lg text-[#454B57]`}
                                    />
                                </motion.div>


                                <motion.p
                                    key={plan.price}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className={` ${MainHeading.className} text-3xl mt-3 text-[#454B57]`}
                                >
                                    <LinearReveal
                                        text={plan.price}
                                        as="span"
                                    />
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                        margin: "50px"
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        delay: 0.3
                                    }}
                                >
                                    <p className={`${miniPara.className} mt-2 text-sm text-[#454B5780]`}>
                                        {plan.subtitle}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                        margin: "50px"
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        delay: 0.5
                                    }}
                                >
                                    <div className="mt-2 xl:px-4">
                                        <button
                                            style={{
                                                boxShadow: `
                                           0px 12px 40px rgba(60, 80, 180, 0.08),
                                           0px 20px 60px rgba(0, 0, 0, 0.05)
                                      `,
                                            }}
                                            className={`${CTAButton.className} text-[#454B57] flex items-center justify-center p-3 gap-1 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out px-5 w-full text-center border border-[#e4e4e6] whitespace-nowrap`}>
                                            {plan.button} →
                                        </button>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                        margin: "50px"
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        delay: 0.4
                                    }}
                                >
                                    <ul className="mt-3 space-y-3 text-sm text-gray-700">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className={`${miniPara.className} flex items-center`}>
                                                <span className="mr-2 text-lg">
                                                    <Check
                                                        style={{
                                                            boxShadow: `
                                           0px 12px 40px rgba(60, 80, 180, 0.08),
                                           0px 20px 60px rgba(0, 0, 0, 0.05)
                                      `,
                                                        }}
                                                        className="h-4 w-4 text-[#454B57]"
                                                    />
                                                </span>
                                                <LinearReveal
                                                    text={f}
                                                    as="span"
                                                    className={`${miniPara.className} text-sm text-[#454B57]`}
                                                />

                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        )
                    }

                    // Enterprice

                    if (isEnterprice) {
                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl border border-gray-200 bg-white text-gray-900 p-2 flex flex-col shadow-sm"
                            >
                                {/* Diagonal lines background */}
                                <div className='bg-[#F4F4F6] p-5 rounded-2xl relative overflow-hidden'>
                                    {/* Diagonal lines background */}
                                    <div
                                        className="absolute inset-0 opacity-[0.15]"
                                        style={{
                                            backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                #D1D5DB 10px,
                #D1D5DB 11px
            )`
                                        }}
                                    />

                                    {/* Content with relative positioning to appear above lines */}
                                    <div className="relative z-10">
                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
                                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
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
                                        >
                                            <LinearReveal
                                                text={plan.name}
                                                as={'h3'}
                                                className={`${MainHeading.className} text-lg text-[#454B57]`}
                                            />
                                        </motion.div>

                                        <motion.p
                                            key={plan.price}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className={` ${MainHeading.className} text-3xl text-gray-900`}
                                        >
                                            <LinearReveal
                                                text={plan.price}
                                                as="span"
                                            />
                                        </motion.p>

                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
                                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                                margin: "50px"
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                                delay: 0.3
                                            }}
                                        >
                                            <p className={`${miniPara.className} mt-2 text-sm text-[#454B5780]`}>
                                                {plan.subtitle}
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(8px)" }}
                                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                                margin: "50px"
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                                delay: 0.5
                                            }}
                                        >
                                            <div className="mt-2 px-4">
                                                <button
                                                    style={{
                                                        background: `
                      linear-gradient(
                        180deg,
                        #0A0F1F 0%,
                        #000511 55%,
                        #00030A 100%
                      )
                    `,
                                                        boxShadow: `
                      0px 24px 48px rgba(0, 0, 0, 0.45),
                      inset 7px 7px 31px rgba(164, 175, 197, 0.35),
                      inset 2px 2px 20px rgba(160, 165, 178, 0.25)
                    `,
                                                        borderImage: "linear-gradient(180deg, #FAFAFA, #BCC3CC) 1",
                                                    }}
                                                    className={`${CTAButton.className} text-white flex items-center justify-center p-3 gap-1 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out px-5 w-full text-center`}>
                                                    {plan.button} →
                                                </button>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                        margin: "50px"
                                    }}
                                    transition={{
                                        duration: 1.2,
                                        ease: [0.25, 0.46, 0.45, 0.94],
                                        delay: 0.4
                                    }}
                                >
                                    <ul className="mt-3 space-y-3 text-sm text-gray-700">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className={`${miniPara.className} flex items-start text-[#454B57]`}>
                                                <span className="mr-2 text-lg">
                                                    <Check
                                                        style={{
                                                            boxShadow: `
                                           10px 22px 140px rgba(60, 80, 180, 0.08),
                                           10px 30px 160px rgba(0, 0, 0, 0.05)
                                      `,
                                                        }}
                                                        className="h-5 w-5 shadow-2xl bg-white p-1 rounded-full fill-white"
                                                    />
                                                </span>
                                                <LinearReveal
                                                    text={f}
                                                    as="span"
                                                    className={`${miniPara.className} text-sm text-[#454B57]`}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        )
                    }
                })}
            </div >
        </div >
    )
}

export default NovaPricing
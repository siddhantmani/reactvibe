"use client"

import OrbitBorder from '@/public/Components/TheOrbitBorderCode/OrbitBorder'
import { animate, useMotionValue, useSpring, useTransform, motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus, Zap } from 'lucide-react'
import { Manrope } from 'next/font/google'
import React, { useEffect, useState } from 'react'

const labelName = Manrope({
    weight: '500', // Specify the font weight if needed  
    subsets: ['latin']
});

const subHeading = Manrope({
    weight: '400', // Specify the font weight if needed  
    subsets: ['latin']
});

const tagLine = Manrope({ weight: "500", subsets: ["latin"] })
const minitagline = Manrope({ weight: "400", subsets: ["latin"] })


function ResolvePreview() {
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

    const [active, setActive] = useState<number | null>(null)

    const faqs = [
        {
            title: "Is React Vibe a dependency or a component library I install?",
            content:
                "No. React Vibe is not a package you install. You copy the component code directly into your project and use familiar tools like Framer Motion, Tailwind CSS, and Three.js. No hidden abstractions, no lock-in."
        },
        {
            title: "Can I fully customize the components?",
            content:
                "Yes. You own the code. Modify animations, layouts, colors, logic, or structure however you want. React Vibe components are meant to be edited — not configured through rigid props or APIs."
        },
        {
            title: "What makes React Vibe different from other UI libraries?",
            content:
                "Most UI libraries prioritize structure first and motion last. React Vibe is motion-first. Every component is designed with easing, timing, and interaction feel as a primary concern — not an afterthought."
        },
        {
            title: "Will using React Vibe bloat my bundle?",
            content:
                "No. Since you only copy the components you actually need and rely on tools already in your stack, there’s no unnecessary code, runtime overhead, or unused abstractions added to your bundle."
        }
    ]


    const toggleFAQ = (index: number) => {
        setActive(active === index ? null : index)
    }
    return (
        <div className='space-y-5'>
            <div className='space-y-5'>
                <div className=' max-w-36 mx-auto'>
                    <OrbitBorder
                        rotate={0}
                        padding={1}
                        rounded={50}
                        className='bg-[#141414] rounded-full text-white'
                        RingColors={["#141414, #000000, #ffffff, #141414, #141414"]}
                        style={{
                            boxShadow: `
                                                                  0px 12px 40px rgba(60, 80, 180, 0.08),
                                                                  0px 20px 60px rgba(0, 0, 0, 0.05)
                                                                `,
                        }}
                    >
                        <motion.div
                            style={{ background }}
                            className='flex items-center gap-3 justify-center rounded-full px-3 py-3'
                        >
                            <Zap size={17} className='fill-white' />
                            <h1 className={`${labelName.className} text-[14px] text-white whitespace-nowrap`}>FAQ</h1>
                        </motion.div>
                    </OrbitBorder>
                </div>
                <div className='max-w-4xl mx-auto space-y-2'>
                    <h1 className={`${labelName.className} xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl px-5 sm:px-0 md:px-0 opacity-90 text-center text-white`}>Frequently Asked Questions</h1>
                    <p className={`${subHeading.className} mx-auto xl:text-[12px] lg:text-[16px] md:text-[15px] sm:text-[10px] text-[12px] px-2 opacity-55 text-center text-white/90 max-w-[70%] md:max-w-[60%]`}>Don&#39;t see the answer you&#39;re looking for? <span className={`${subHeading.className} text-white`}>Get in touch.</span></p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col gap-5 px-2">
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        transition={{ layout: { duration: 1, ease: "easeInOut" } }}
                        className="flex flex-col"
                    >
                        {/* Question bubble */}
                        <motion.div
                            style={{
                                background: `
                radial-gradient(
                  circle at 100% 100%,
                  rgba(255,255,255,0.08),
                  rgba(0,0,0,0.95) 0%
                )
              `

                            }}
                            onClick={() => toggleFAQ(i)}
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            animate={{
                                backgroundColor: active === i ? "#f3f4f6" : "#f3f4f6",
                                color: active === i ? "#323232" : "#323232"
                            }}
                            whileHover={{
                                backgroundColor: active === i ? "#f3f4f6" : "#e5e7eb"
                            }}
                            transition={{ duration: 0.70, ease: "easeInOut", delay: 0.3 }}
                            className=" flex flex-col gap-3 cursor-pointer px-5 py-5 rounded-2xl"
                        >
                            <div className="flex justify-between gap-3">
                                <h2 className={`${tagLine.className} text-white text-[16px]`}>
                                    {faq.title}
                                </h2>
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    animate={{ rotate: active === i ? 180 : 0 }}
                                    transition={{ duration: 0.80, delay: 0.2 }}
                                    className="bg-black dark:bg-[#323232] text-white rounded-md"
                                >
                                    {active === i ? (
                                        <Minus className="w-5 h-5 bg-[#141313] fill-white" />
                                    ) : (
                                        <Plus className="w-5 h-5 bg-[#141313] fill-white" />
                                    )}
                                </motion.div>
                            </div>

                            <div>
                                {/* Answer bubble */}
                                <AnimatePresence initial={false}>
                                    {active === i && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, marginTop: 0, opacity: 0, filter: "blur(8px)" }}
                                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                            animate={{
                                                height: "auto",
                                                marginTop: 12
                                            }}
                                            exit={{
                                                height: 0,
                                                marginTop: 0
                                            }}
                                            transition={{
                                                duration: 0.70,
                                                ease: [0.4, 0.0, 0.2, 1],
                                                delay: 0.3
                                            }}
                                            className="overflow-hidden w-full"
                                        >
                                            <div

                                                className={`text-white `}>
                                                <p className={`${minitagline.className} text-[12px] leading-relaxed opacity-90`}>
                                                    {faq.content}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </motion.div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default ResolvePreview
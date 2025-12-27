"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Inter_Tight, Manrope } from "next/font/google"
import { Plus, Minus, Heart, ShieldQuestionMark } from "lucide-react"


const logoFont = Manrope({
    weight: "700",
    subsets: ["latin"],
});

const heading = Inter_Tight({
    weight: "600",
    subsets: ["latin"],
});



const tagLine = Manrope({ weight: "600", subsets: ["latin"] })
const minitagline = Manrope({ weight: "400", subsets: ["latin"] })

export default function StratusPreview() {
    const [active, setActive] = useState<number | null>(null)

    const faqs = [
        {
            title: "How does the app track my subscriptions automatically?",
            content:
                "Users usually wonder if they need to add everything manually or if the app scans emails, bank statements, etc."
        },
        {
            title: "Will the app notify me before a subscription renews?",
            content:
                "No. React Vibe does not ship as a dependency. You copy the component code and use tools you already trust, like Three.js, Framer Motion and Tailwind CSS. This keeps your bundle clean and your code fully owned by you.",
        },
        {
            title: "Is my financial and personal data secure?",
            content:
                "Most UI libraries focus on structure. React Vibe focuses on motion quality. Every component is designed with smooth easing, visual polish, and interaction feel as a first-class concern — not an afterthought.",
        },
        {
            title: "Can I cancel subscriptions through the app?",
            content:
                "Yes. Because you own the code, you can customize layouts, animations, colors, and logic without fighting a rigid API. React Vibe components are meant to be edited, not configured through endless props.",
        }

    ]

    const toggleFAQ = (index: number) => {
        setActive(active === index ? null : index)
    }

    return (
        <div className="space-y-20">
            <div className='flex flex-col justify-center items-center space-y-3'>
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
                        duration: 0.90,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.5
                    }}
                    className='mx-auto w-fit'
                >
                    <div className='flex items-center gap-3 border-2 border-[#D6DAE0] border-dashed rounded-xl p-2 px-3 scale-[90%]'>
                        <ShieldQuestionMark className='text-[27px] text-[#454B57]' />
                    </div>
                </motion.div>
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
                        duration: 0.90,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.5
                    }}
                    className='flex flex-col justify-center items-center text-base/13'
                >
                    <h1 className={`${heading.className} text-[#C0C7D0] xl:text-6xl text-[45px]`}>Frequently</h1>
                    <h1 className={`${heading.className} text-[#454B57] xl:text-6xl text-[45px]`}>Asked Questions</h1>
                </motion.div>

            </div>
            <div className="max-w-xl mx-auto flex flex-col gap-5 px-2">
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        transition={{ layout: { duration: 1, ease: "easeInOut" } }}
                        className="flex flex-col"
                    >
                        {/* Question bubble */}
                        <motion.div
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
                            className=" flex flex-col gap-3 cursor-pointer px-4 py-3 rounded-2xl"
                        >
                            <div className="flex justify-between gap-2">
                                <h2 className={`${tagLine.className} text-[15px]`}>
                                    {faq.title}
                                </h2>
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(8px)" }}
                                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                    animate={{ rotate: active === i ? 180 : 0 }}
                                    transition={{ duration: 0.80, delay: 0.2 }}
                                    className="bg-black dark:bg-[#323232] text-white rounded-md p-1"
                                >
                                    {active === i ? (
                                        <Minus className="w-4 h-4 text-white" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-white" />
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
                                            <div className={`bg-gray-50 text-gray-800 px-5 py-4 rounded-2xl shadow-sm border border-gray-100 `}>
                                                <p className={`${minitagline.className} text-[14px] leading-relaxed opacity-90`}>
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
        </div >
    )
}
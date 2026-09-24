"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Inter_Tight, Manrope } from "next/font/google"
import { Plus, Minus, ShieldQuestionMark } from "lucide-react"

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
        <div className="space-y-20 py-10 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{
                    once: true,
                    amount: 0.2,
                    margin: "50px"
                }}
                transition={{
                    duration: 0.90,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.5
                }}
                className='flex flex-col justify-center items-center space-y-3'>
                <div className='mx-auto w-fit'>
                    <div className='flex items-center gap-3 border-2 border-[#D6DAE0] dark:border-[#2A2B30] border-dashed rounded-xl p-2 px-3 scale-[90%] transition-colors'>
                        <ShieldQuestionMark className='text-[27px] text-[#454B57] dark:text-[#E0E3E8] transition-colors' />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center text-base/13'>
                    <h1 className={`${heading.className} text-[#C0C7D0] dark:text-[#454B57] @xl:text-6xl text-[45px] transition-colors`}>Frequently</h1>
                    <h1 className={`${heading.className} text-[#454B57] dark:text-white @xl:text-6xl text-[45px] transition-colors`}>Asked Questions</h1>
                </div>

            </motion.div>
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
                            transition={{ duration: 0.70, ease: "easeInOut", delay: 0.3 }}
                            className={`flex flex-col gap-3 cursor-pointer px-4 py-3 rounded-2xl transition-colors duration-300 border border-transparent dark:border-[#2A2B30]/50 ${active === i
                                ? "bg-[#f3f4f6] dark:bg-[#0c0c0c] dark:hover:bg-[#131111] text-[#323232] dark:text-white"
                                : "bg-[#f3f4f6] dark:bg-transparent text-[#323232] dark:text-white hover:bg-[#e5e7eb] dark:hover:bg-[#131111]"
                                }`}
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
                                    className="bg-black dark:bg-[#323232] text-white rounded-md p-1 transition-colors"
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
                                            }}
                                            className="overflow-hidden w-full"
                                        >
                                            <div className={`bg-gray-50 dark:bg-[#0D0E12] text-gray-800 dark:text-gray-200 px-5 py-4 rounded-2xl shadow-sm border border-gray-100 dark:border-[#2A2B30] transition-colors`}>
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
        </div>
    )
}
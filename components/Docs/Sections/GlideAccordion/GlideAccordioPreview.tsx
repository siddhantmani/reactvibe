"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Manrope } from "next/font/google"
import { Plus, Minus } from "lucide-react"
import OrbitBorderGlobalPreview from "../../Components/Orbit-Border/OrbitBorderGlobalPreview"

const tagLine = Manrope({ weight: "600", subsets: ["latin"] })
const minitagline = Manrope({ weight: "400", subsets: ["latin"] })

interface AccordianProps {
    align?: "left" | "right"
}

const MainHeading = Manrope({
    weight: "600",
    subsets: ["latin"],
})

const miniPara = Manrope({
    weight: "400",
    subsets: ["latin"],
})

export default function GlideAccordioPreview({ align = "left" }: AccordianProps) {
    const [active, setActive] = useState<number | null>(null)

    const faqs = [
        {
            title: "What is React Vibe?",
            content:
                "React Vibe is a motion-first React component collection focused on smooth interactions, modern UI patterns, and drop-in sections. Components are copied directly into your project and built using familiar tools like Three.js, Framer Motion and Tailwind CSS."
        },
        {
            title: "Do I need to install a React Vibe package?",
            content:
                "No. React Vibe does not ship as a dependency. You copy the component code and use tools you already trust, like Three.js, Framer Motion and Tailwind CSS. This keeps your bundle clean and your code fully owned by you.",
        },
        {
            title: "What makes React Vibe different from other UI libraries?",
            content:
                "Most UI libraries focus on structure. React Vibe focuses on motion quality. Every component is designed with smooth easing, visual polish, and interaction feel as a first-class concern — not an afterthought.",
        },
        {
            title: "Are React Vibe components customizable?",
            content:
                "Yes. Because you own the code, you can customize layouts, animations, colors, and logic without fighting a rigid API. React Vibe components are meant to be edited, not configured through endless props.",
        },
        {
            title: "Can I use React Vibe components in production projects?",
            content:
                "Absolutely. All components are production-ready and designed to work with modern React setups like Next.js. You can use them in personal projects, startups, client work, and commercial products.",
        },
        {
            title: "How are Sections and Components different in React Vibe?",
            content:
                "Components are small, reusable primitives like Orbit Border or Pulse Ping. Sections are opinionated, ready-to-use layouts like pricing blocks, FAQ sections, CTAs, etc. Sections are built by composing multiple components together.",
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
                    <OrbitBorderGlobalPreview
                        className='bg-[#ffffff] rounded-full p-2 text-black px-5'
                        RingColors={["#0a52f0", "#ffffff", "#ffffff", "#f5e2ae", "#dcd7fc"]}
                        style={{
                            boxShadow: `
                                                                                                     0px 12px 40px rgba(60, 80, 180, 0.08),
                                                                                                     0px 20px 60px rgba(0, 0, 0, 0.05)
                                                                                                   `,
                        }}>

                        FAQ

                    </OrbitBorderGlobalPreview>
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
                        delay: 0.7
                    }}

                >
                    <h1 className={`${MainHeading.className} dark:text-[#e7e5e5] text-[#000000] text-center text-3xl md:text-4xl lg:text-5xl xl:text-4xl xl:max-w-[540px] md:max-w-xl lg:max-w-3xl`}>
                        Answers to Your Most Common Questions
                    </h1>
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
                        delay: 0.7
                    }}

                >
                    <p className={`${miniPara.className} text-center dark:text-[#c1bebe] text-[#000000] text-md`}>Explore the most asked questions by our users.</p>
                </motion.div>

            </div>
            <div className="max-w-xl mx-auto flex flex-col gap-5">
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        transition={{ layout: { duration: 1, ease: "easeInOut" } }}
                        className={`flex flex-col ${align === "right" ? "items-end" : "items-start"}`}
                    >
                        {/* Question bubble */}
                        <motion.div
                            onClick={() => toggleFAQ(i)}
                            initial={{ opacity: 0, filter: "blur(8px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            animate={{
                                backgroundColor: active === i ? "#323232" : "#f3f4f6",
                                color: active === i ? "#ffffff" : "#323232"
                            }}
                            whileHover={{
                                backgroundColor: active === i ? "#323232" : "#e5e7eb"
                            }}
                            transition={{ duration: 0.90, ease: "easeInOut" }}
                            className=" flex items-center gap-3 cursor-pointer h-[50px] px-4 py-3 rounded-2xl w-fit max-w-[85%]"
                        >
                            <motion.div
                                initial={{ opacity: 0, filter: "blur(8px)" }}
                                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                                animate={{ rotate: active === i ? 180 : 0 }}
                                transition={{ duration: 0.25 }}
                                className="bg-black dark:bg-[#323232] text-white rounded-full p-1"
                            >
                                {active === i ? (
                                    <Minus className="w-3 h-3 text-white" />
                                ) : (
                                    <Plus className="w-3 h-3 text-white" />
                                )}
                            </motion.div>
                            <h2 className={`${tagLine.className} text-[15px]`}>
                                {faq.title}
                            </h2>
                        </motion.div>

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
                                        duration: 0.60,
                                        ease: [0.4, 0.0, 0.2, 1]
                                    }}
                                    className="overflow-hidden w-full"
                                >
                                    <div className={`bg-gray-50 text-gray-800 px-5 py-4 rounded-2xl shadow-sm border border-gray-100 max-w-[85%] ${align === "right" ? "ml-auto" : ""}`}>
                                        <p className={`${minitagline.className} text-[14px] leading-relaxed opacity-90`}>
                                            {faq.content}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div >
    )
}
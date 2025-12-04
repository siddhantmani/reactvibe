"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import React, { useEffect } from "react"
import { Manrope } from "next/font/google"
import LinearReveal from "@/components/LinearReveal"
import { FaFacebookF, FaLinkedinIn, FaRegCopyright, FaXTwitter } from "react-icons/fa6"
import Separator from "@/components/Docs/Separator"

const CTAButton = Manrope({ weight: "500", subsets: ["latin"] })
const MainHeading = Manrope({ weight: "600", subsets: ["latin"] })
const miniPara = Manrope({ weight: "400", subsets: ["latin"] })

function RadiantFrame() {
    const angle = useMotionValue(0)
    const animatedBorder = useTransform(
        angle,
        (a) =>
            `linear-gradient(${a}deg, #ffffff, #ffffff, #ffffff, #f5e2ae, #dcd7fc)`
    )

    useEffect(() => {
        animate(angle, 360, {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        })
    }, [angle])

    return (
        <footer className="relative overflow-hidden pb-0 flex flex-col justify-between px-2">
            {/* Animated card container */}
            <motion.div
                className="max-w-7xl w-full mx-auto rounded-4xl p-[8px] z-20"
                style={{ background: animatedBorder }}
            >
                {/* White card */}
                <div className="bg-white rounded-4xl p-6 md:p-10 md:py-16 gap-10">
                    <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between items-start">
                        {/* Left */}
                        <div className="space-y-6 max-w-md">
                            <div className="space-y-3">
                                <LinearReveal
                                    as={'h1'}
                                    text="Radiant Frame"
                                    className={`${MainHeading.className} text-black text-2xl font-semibold`}
                                />
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

                                    <p
                                        className={`${miniPara.className} text-sm text-gray-700 max-w-sm`}
                                    >
                                        A dynamic, color-shifting frame built for modern landing pages and sections.
                                        Perfect for footers, feature blocks, and callouts.
                                    </p>
                                </motion.div>

                            </div>

                            <div className="space-y-3">
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
                                        delay: 0.6
                                    }}
                                >
                                    <p
                                        className={`${miniPara.className} text-sm text-gray-700 max-w-sm`}
                                    >
                                        Need a flexible layout? Radiant Frame adapts to any content you drop inside.
                                    </p>
                                </motion.div>

                                {/* Animated Border Button */}
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
                                        delay: 0.6
                                    }}
                                    className="relative rounded-full p-[2px] w-[23%]"
                                    style={{ background: animatedBorder }}
                                >
                                    <button
                                        className={`${CTAButton.className} w-[100%]  px-0 py-3 bg-white text-[#353838] rounded-full text-sm md:text-[13px] hover:bg-gray-50 transition-all`}
                                    >
                                        Use it
                                    </button>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex space-x-12">
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
                                    delay: 0.8
                                }}
                            >

                                <div>
                                    <h2
                                        className={`${MainHeading.className} text-black text-xl font-medium tracking-wide mb-3`}
                                    >
                                        Legal
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-2 text-gray-600 text-sm`}
                                    >
                                        {["Terms of services", "License", "Privacy Policy"].map(
                                            (item) => (
                                                <li
                                                    key={item}
                                                    className="hover:text-gray-800 cursor-pointer"
                                                >
                                                    {item}
                                                </li>
                                            )
                                        )}
                                    </ul>
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
                                    delay: 0.9
                                }}
                            >
                                <div>
                                    <h2
                                        className={`${MainHeading.className} text-black text-xl font-medium tracking-wide mb-3`}
                                    >
                                        Company
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-2 text-gray-600 text-sm`}
                                    >
                                        {["About", "Blog"].map((item) => (
                                            <li
                                                key={item}
                                                className="hover:text-gray-800 cursor-pointer"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
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
                            delay: 0.9
                        }}
                    >
                        <div className="pt-10 space-y-5 text-gray-700">
                            <Separator
                                direction="horizontal"
                                className="w-full bg-black/5"
                            />
                            <div className="flex justify-between ">
                                <div className="flex items-center gap-1">
                                    <FaRegCopyright className="text-xs" />
                                    <p>2024 React Vibe, Inc. All rights reserved.</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaXTwitter />
                                    <FaLinkedinIn />
                                    <FaFacebookF />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    )
}

export default RadiantFrame

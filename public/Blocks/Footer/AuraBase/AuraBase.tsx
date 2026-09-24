"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { Manrope } from "next/font/google"
import { FaFacebookF, FaLinkedinIn, FaRegCopyright, FaXTwitter } from "react-icons/fa6"
import { useEffect } from "react"
import LinearReveal from "@/components/LinearReveal"
import Separator from "@/components/Docs/Separator"

const MainHeading = Manrope({ weight: "600", subsets: ["latin"] })
const miniPara = Manrope({ weight: "400", subsets: ["latin"] })

function AuraBase() {

    const quickLinks = [
        { subMenu: 'Features', subMenu_key: 'features', link: '#' },
        { subMenu: 'Testimonials', subMenu_key: 'testimonials', link: '#' },
        { subMenu: 'Pricing', subMenu_key: 'pricing', link: '#' },
    ];
    const companyLinks = [
        { subMenu: 'About', subMenu_key: 'about', link: '#' },
        { subMenu: 'Blog', subMenu_key: 'blog', link: '#' },
    ];
    const policyLinks = [
        { subMenu: 'Terms of services', subMenu_key: 'terms', link: '#' },
        { subMenu: 'License', subMenu_key: 'license', link: '#' },
        { subMenu: 'Privacy Policy', subMenu_key: 'privacy', link: '#' }
    ];


    const angle = useMotionValue(0)
    const animatedBorder = useTransform(
        angle,
        (a) =>
            `linear-gradient(${a}deg, #2A2B30, #2A2B30, #2A2B30, #f5f5f5, #f5f5f5)`
    )

    useEffect(() => {
        animate(angle, 360, {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        })
    }, [angle])
    return (
        <footer className="relative overflow-hidden pb-0 flex flex-col justify-between px-2 min-h-[77vh] transition-colors duration-300">
            {/* Animated card container */}
            <motion.div
                style={{ background: animatedBorder }}
                className="bg-white dark:bg-[#0c0c0c] rounded-4xl p-[10px] xl:mx-12 md:mb-32 mb-32 transition-colors"
            >
                <div className="bg-white dark:bg-[#0c0c0c] p-[28px] rounded-4xl transition-colors duration-300">
                    <div className="full mx-auto z-20 flex flex-col lg:flex-row space-y-10 lg:justify-between">
                        {/* White card */}
                        <div className=" ">
                            <div className="flex flex-col space-y-10 md:space-y-0 lg:flex-row lg:justify-between items-start">
                                {/* Left */}
                                <div className="space-y-6 max-w-md">
                                    <div className="space-y-3">
                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(2px)" }}
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
                                                as={'h1'}
                                                Text="Aura Base"
                                                className={`${MainHeading.className} text-black dark:text-white text-2xl font-semibold transition-colors`}
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(2px)" }}
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
                                                className={`${miniPara.className} text-sm text-gray-700 dark:text-gray-300 max-w-sm transition-colors`}
                                            >
                                                The foundational layer for motion-driven interfaces. Aura Base sets the visual tone of your layout with subtle depth, soft gradients, and a premium surface — without stealing attention from your content.
                                            </p>
                                        </motion.div>

                                    </div>

                                    <div className="space-y-3">
                                        <motion.div
                                            initial={{ opacity: 0, filter: "blur(2px)" }}
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
                                                className={`${miniPara.className} text-sm text-gray-700 dark:text-gray-300 max-w-sm transition-colors`}
                                            >
                                                Built to adapt. Drop any content inside and let Aura Base handle spacing, balance, and atmosphere across sections, footers, and feature blocks.
                                            </p>
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, filter: "blur(2px)" }}
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
                                        <div className="flex items-center gap-4">
                                            <FaXTwitter size={18} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                                            <FaLinkedinIn size={18} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                                            <FaFacebookF size={18} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5 gap-10 xl:gap-30 flex flex-col md:flex-row">

                            <motion.div
                                initial={{ opacity: 0, filter: "blur(2px)" }}
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
                                <div className="flex flex-col space-y-4">
                                    <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-lg transition-colors">Get the App</h3>

                                    <div className="flex flex-col gap-3">
                                        {/* App Store Button */}
                                        <a
                                            href="https://apps.apple.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-black dark:bg-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors min-w-[160px] w-fit"
                                        >
                                            <svg
                                                className="w-8 h-8 text-white dark:text-black transition-colors"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                            </svg>
                                            <div className="flex flex-col items-start">
                                                <span className="text-xs text-white dark:text-black leading-tight transition-colors">Download on the</span>
                                                <span className="text-sm font-semibold text-white dark:text-black leading-tight transition-colors">App Store</span>
                                            </div>
                                        </a>

                                        {/* Google Play Button */}
                                        <a
                                            href="https://play.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-black dark:bg-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors min-w-[160px] w-fit"
                                        >
                                            <svg
                                                className="w-7 h-7 text-white dark:text-black transition-colors"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                            </svg>
                                            <div className="flex flex-col items-start">
                                                <span className="text-xs text-white dark:text-black leading-tight transition-colors">GET IT ON</span>
                                                <span className="text-sm font-semibold text-white dark:text-black leading-tight transition-colors">Google Play</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right */}
                            <div className="flex space-x-12">
                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(2px)" }}
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
                                            className={`${MainHeading.className} text-black dark:text-[#F7F7F7] text-xl font-medium tracking-wide mb-3 transition-colors`}
                                        >
                                            Quick Links
                                        </h2>
                                        <ul
                                            className={`${miniPara.className} space-y-2 text-gray-600 dark:text-gray-400 text-sm transition-colors`}
                                        >
                                            {quickLinks.map((item) => (
                                                <li
                                                    key={item.subMenu_key}
                                                    className="hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors"
                                                >
                                                    {item.subMenu}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, filter: "blur(2px)" }}
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
                                            className={`${MainHeading.className} text-black dark:text-[#F7F7F7] text-xl font-medium tracking-wide mb-3 transition-colors`}
                                        >
                                            Company
                                        </h2>
                                        <ul
                                            className={`${miniPara.className} space-y-2 text-gray-600 dark:text-gray-400 text-sm transition-colors`}
                                        >
                                            {companyLinks.map((item) => (
                                                <li
                                                    key={item.subMenu_key}
                                                    className="hover:text-gray-800 dark:hover:text-white cursor-pointer transition-colors"
                                                >
                                                    {item.subMenu}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                            </div>
                        </div>

                    </div>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(2px)" }}
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
                        <div className="pt-10 space-y-5 text-gray-700 dark:text-gray-400 transition-colors">
                            <Separator
                                direction="horizontal"
                                className="w-full bg-black/5 dark:bg-white/10 transition-colors"
                            />
                            <div className="flex flex-col space-y-5 xl:flex-row xl:justify-between ">
                                <div className="flex items-center gap-1 group cursor-pointer">
                                    <FaRegCopyright className="text-xs group-hover:text-black dark:group-hover:text-white transition-colors" />
                                    <p className="group-hover:text-black dark:group-hover:text-white transition-colors">{new Date().getFullYear()}  React Vibe, Inc. All rights reserved.</p>
                                </div>
                                <div>
                                    <ul
                                        className={`${miniPara.className} flex items-center gap-10 text-gray-600 dark:text-gray-400 text-sm transition-colors`}
                                    >
                                        {policyLinks.map(
                                            (item) => (
                                                <li
                                                    key={item.subMenu_key}
                                                    className="hover:text-gray-800 dark:hover:text-white cursor-pointer underline underline-offset-2 transition-colors"
                                                >
                                                    {item.subMenu}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            {/* Big background title — anchored to bottom */}
            <div className="absolute bottom-[-15px] md:bottom-[-30px] xl:bottom-[-45px] left-0 w-full text-center z-10 pointer-events-none">
                <h1
                    className={`
            ${MainHeading.className}
            text-[90px] md:text-[110px] lg:text-[120px] xl:text-[180px]
            leading-none
            bg-gradient-to-b from-[#dbdada] to-[#F4F4F6] dark:from-[#2A2B30] dark:to-[#0D0E12]
            bg-clip-text text-transparent
            opacity-90 transition-colors duration-300
        `}
                >
                    React Vibe
                </h1>
            </div>
        </footer >
    )
}

export default AuraBase
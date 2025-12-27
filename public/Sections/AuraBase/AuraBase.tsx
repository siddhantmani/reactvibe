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
            `linear-gradient(${a}deg, #ffffff, #ffffff, #ffffff, #f5f5f5, #f5f5f5)`
    )

    useEffect(() => {
        animate(angle, 360, {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
        })
    }, [angle])
    return (
        <footer className="relative overflow-hidden pb-0 flex flex-col justify-between px-2 min-h-[85vh]">
            {/* Animated card container */}
            <motion.div
                style={{ background: animatedBorder }}
                className="bg-white rounded-4xl p-[10px] xl:mx-32 md:mb-32 mb-32"
            >
                <div className="bg-white p-[28px] rounded-4xl">
                    <div className="full mx-auto z-20 flex flex-col lg:flex-row space-y-10 lg:justify-between">
                        {/* White card */}
                        <div className=" ">
                            <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between items-start">
                                {/* Left */}
                                <div className="space-y-6 max-w-md">
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
                                                delay: 0.2
                                            }}
                                        >
                                            <LinearReveal
                                                as={'h1'}
                                                text="Aura Base"
                                                className={`${MainHeading.className} text-black text-2xl font-semibold`}
                                            />
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
                                        <div className="flex items-center gap-2">
                                            <FaXTwitter size={18} />
                                            <FaLinkedinIn size={18} />
                                            <FaFacebookF size={18} />
                                        </div>
                                    </motion.div>
                                </div>
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
                            <div className="flex flex-col space-y-4">
                                <h3 className="text-gray-800 font-semibold text-lg">Get the App</h3>

                                <div className="flex flex-col gap-3">
                                    {/* App Store Button */}
                                    <a
                                        href="https://apps.apple.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors min-w-[160px] w-fit"
                                    >
                                        <svg
                                            className="w-8 h-8 text-white"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                        </svg>
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs text-white leading-tight">Download on the</span>
                                            <span className="text-sm font-semibold text-white leading-tight">App Store</span>
                                        </div>
                                    </a>

                                    {/* Google Play Button */}
                                    <a
                                        href="https://play.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors min-w-[160px] w-fit"
                                    >
                                        <svg
                                            className="w-7 h-7 text-white"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                        </svg>
                                        <div className="flex flex-col items-start">
                                            <span className="text-xs text-white leading-tight">GET IT ON</span>
                                            <span className="text-sm font-semibold text-white leading-tight">Google Play</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

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
                                        Quick Links
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-2 text-gray-600 text-sm`}
                                    >
                                        {quickLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:text-gray-800 cursor-pointer"
                                            >
                                                {item.subMenu}
                                            </li>
                                        ))}
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
                                        {companyLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:text-gray-800 cursor-pointer"
                                            >
                                                {item.subMenu}
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
                            <div className="flex flex-col space-y-5 md:flex-row md:justify-between ">
                                <div className="flex items-center gap-1">
                                    <FaRegCopyright className="text-xs" />
                                    <p>2025 React Vibe, Inc. All rights reserved.</p>
                                </div>
                                <div>
                                    <ul
                                        className={`${miniPara.className} flex items-center gap-10 text-gray-600 text-sm`}
                                    >
                                        {policyLinks.map(
                                            (item) => (
                                                <li
                                                    key={item.subMenu_key}
                                                    className="hover:text-gray-800 cursor-pointer underline underline-offset-2"
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
            <div className="absolute bottom-[-15px] md:bottom-[-40px] xl:bottom-[-60px] left-0 w-full text-center z-10">
                <h1
                    className={`
            ${MainHeading.className}
            text-[90px] md:text-[140px] lg:text-[200px] xl:text-[250px]
            leading-none
            bg-gradient-to-b from-[#dbdada] to-[#F4F4F6]
            bg-clip-text text-transparent
            opacity-90
        `}
                >
                    React Vibe
                </h1>
            </div>
        </footer >
    )
}

export default AuraBase

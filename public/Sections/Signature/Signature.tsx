"use client"

import { motion } from "framer-motion"
import { Manrope } from "next/font/google"
import { FaFacebookF, FaLinkedinIn, FaRegCopyright, FaXTwitter } from "react-icons/fa6"
import LinearReveal from "@/components/LinearReveal"
import Separator from "@/components/Docs/Separator"

const MainHeading = Manrope({ weight: "400", subsets: ["latin"] })
const FooterHeading = Manrope({ weight: "600", subsets: ["latin"] })
const miniPara = Manrope({ weight: "200", subsets: ["latin"] })

function Signature() {

    const quickLinks = [
        { subMenu: 'Features', subMenu_key: 'features', link: '#' },
        { subMenu: 'Integrations', subMenu_key: 'integrations', link: '#' },
        { subMenu: 'Pricing', subMenu_key: 'pricing', link: '#' },
        { subMenu: 'Changelog', subMenu_key: 'changelog', link: '#' },
        { subMenu: 'Roadmap', subMenu_key: 'roadmap', link: '#' }
    ];

    const companyLinks = [
        { subMenu: 'Our team', subMenu_key: 'about', link: '#' },
        { subMenu: 'Our values', subMenu_key: 'values', link: '#' },
        { subMenu: 'Blog', subMenu_key: 'blog', link: '#' },
    ];

    const ResourcesLinks = [
        { subMenu: 'Downloads', subMenu_key: 'downloads', link: '#' },
        { subMenu: 'Documentation', subMenu_key: 'documentation', link: '#' },
        { subMenu: 'Contact', subMenu_key: 'contact', link: '#' },
    ];

    const policyLinks = [
        { subMenu: 'Terms of services', subMenu_key: 'terms', link: '#' },
        { subMenu: 'License', subMenu_key: 'license', link: '#' },
        { subMenu: 'Privacy Policy', subMenu_key: 'privacy', link: '#' }
    ];

    return (
        <footer
            style={{
                background: `
                radial-gradient(
                  circle at 10% 10%,
                  rgba(255,255,255,0.08),
                  rgba(0,0,0,0.95) 70%
                )
              `
            }}
            className="relative overflow-hidden pb-0 flex flex-col justify-between min-h-[80vh]"
        >
            {/* Animated card container */}
            <motion.div
                className=" rounded-4xl p-[10px] xl:mx-32 md:mb-32 mb-32"
            >
                <div className=" p-[28px] rounded-4xl">
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
                                                Text="Signature"
                                                className={`${MainHeading.className} text-[#ffffff] text-[18px] font-semibold`}
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
                                                className={`${miniPara.className} text-[12px] text-white/50 max-w-sm`}
                                            >
                                                Best AI Powered Trading Platform
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
                                            <FaXTwitter size={15} className="text-[#ffffff]/50" />
                                            <FaLinkedinIn size={15} className="text-[#ffffff]/50" />
                                            <FaFacebookF size={15} className="text-[#ffffff]/50" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>



                        {/* Right */}
                        <div className="grid grid-cols-2 space-x-12 space-y-12 sm:space-y-0 sm:grid-cols-4">
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
                                        className={`${MainHeading.className} text-[#F7F7F7] text-[14px] font-medium tracking-wide mb-5`}
                                    >
                                        Quick Links
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-4 text-gray-600 text-sm`}
                                    >
                                        {quickLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:underline cursor-pointer text-[#EBEBEB99] text-[12px]"
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
                                        className={`${MainHeading.className} text-[#F7F7F7] text-[14px] font-medium tracking-wide mb-5`}
                                    >
                                        Company
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-4 text-gray-600 text-sm`}
                                    >
                                        {companyLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:underline cursor-pointer text-[#EBEBEB99] text-[12px]"
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
                                        className={`${MainHeading.className} text-[#F7F7F7] text-[14px] font-medium tracking-wide mb-5`}
                                    >
                                        Resources
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-4 text-gray-600 text-sm`}
                                    >
                                        {ResourcesLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:underline cursor-pointer text-[#EBEBEB99] text-[12px]"
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
                                <div className="">
                                    <h2
                                        className={`${MainHeading.className} text-[#F7F7F7] text-[14px] font-medium tracking-wide mb-5`}
                                    >
                                        Legal
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-4 text-gray-600 text-sm`}
                                    >
                                        {policyLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:underline cursor-pointer text-[#EBEBEB99] text-[12px]"
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
                                <div>
                                    <ul
                                        className={`${miniPara.className} flex items-center gap-10 text-gray-600 text-sm`}
                                    >
                                        {policyLinks.map(
                                            (item) => (
                                                <li
                                                    key={item.subMenu_key}
                                                    className="hover:text-white cursor-pointer underline-offset-2 text-[#EBEBEB99] hover:underline text-[12px] transform-gpu"
                                                >
                                                    {item.subMenu}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="flex items-center gap-1 hover:underline hover:cursor-pointer hover:text-white">
                                    <FaRegCopyright className="text-xs text-[#EBEBEB99]" />
                                    <p className="text-[12px] text-[#EBEBEB99] hover:text-white ">2025 React Vibe, Inc. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            {/* Big background title — anchored to bottom */}
            <div className="absolute bottom-[-15px] md:bottom-[-40px] xl:bottom-[-60px] left-0 w-full text-center z-10">
                <LinearReveal
                    as={'h1'}
                    Text="React Vibe"
                    className={`
            ${FooterHeading.className}
            text-[90px] md:text-[140px] lg:text-[200px] xl:text-[250px]
            leading-none
            bg-gradient-to-b from-[#dbdada] to-[#F4F4F6]
            bg-clip-text text-[#EBEBEB99]
            opacity-90`}
                />
            </div>
        </footer >
    )
}

export default Signature

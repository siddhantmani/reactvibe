"use client"

import { motion } from "framer-motion"
import { Manrope } from "next/font/google"
import { FaFacebookF, FaLinkedinIn, FaRegCopyright, FaXTwitter } from "react-icons/fa6"
import LinearReveal from "@/components/LinearReveal"
import Separator from "@/components/Docs/Separator"

const MainHeading = Manrope({ weight: "400", subsets: ["latin"] })
const FooterHeading = Manrope({ weight: "700", subsets: ["latin"] })
const miniPara = Manrope({ weight: "200", subsets: ["latin"] })

function Signature() {
    const currentYear = new Date().getFullYear()
    const quickLinks = [
        { subMenu: 'Features', subMenu_key: 'features', link: '#' },
        { subMenu: 'Integrations', subMenu_key: 'testimonials', link: '#' },
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
            className="relative overflow-hidden pb-0 flex flex-col justify-between min-h-[80vh]  
            bg-[radial-gradient(circle_at_10%_10%,rgba(240,240,240,1),rgba(255,255,255,1)_70%)] 
            dark:bg-[radial-gradient(circle_at_10%_10%,rgba(255,255,255,0.08),rgba(0,0,0,0.95)_70%)] 
            transition-colors duration-300"
        >
            {/* Animated card container */}
            <motion.div
                className=" rounded-4xl p-[10px] xl:mx-12 md:mb-32 mb-32"
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
                                                Text="Signature"
                                                className={`${MainHeading.className} text-gray-900 dark:text-[#ffffff] text-[18px] font-semibold transition-colors`}
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
                                                className={`${miniPara.className} text-[10px] text-gray-500 dark:text-white/50 max-w-sm transition-colors`}
                                            >
                                                Best AI Powered Trading Platform
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
                                        <div className="flex items-center gap-3">
                                            <FaXTwitter size={15} className="text-gray-500 dark:text-[#ffffff]/50 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors" />
                                            <FaLinkedinIn size={15} className="text-gray-500 dark:text-[#ffffff]/50 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors" />
                                            <FaFacebookF size={15} className="text-gray-500 dark:text-[#ffffff]/50 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors" />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>



                        {/* Right */}
                        <div className="grid grid-cols-2 space-x-12 space-y-12 sm:grid-cols-2 md:grid-cols-4">
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
                                        className={`${MainHeading.className} text-gray-900 dark:text-[#F7F7F7] text-[14px] font-medium tracking-wide mb-5 transition-colors`}
                                    >
                                        Quick Links
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-4 text-sm`}
                                    >
                                        {quickLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:underline cursor-pointer text-gray-500 dark:text-[#EBEBEB99] hover:text-gray-900 dark:hover:text-white text-[10px] transition-colors"
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
                                        className={`${MainHeading.className} text-gray-900 dark:text-[#F7F7F7] text-[14px] font-medium tracking-wide mb-5 transition-colors`}
                                    >
                                        Company
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-4 text-sm`}
                                    >
                                        {companyLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:underline cursor-pointer text-gray-500 dark:text-[#EBEBEB99] hover:text-gray-900 dark:hover:text-white text-[10px] transition-colors"
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
                                        className={`${MainHeading.className} text-gray-900 dark:text-[#F7F7F7] text-[14px] font-medium tracking-wide mb-5 transition-colors`}
                                    >
                                        Resources
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-4 text-sm`}
                                    >
                                        {ResourcesLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:underline cursor-pointer text-gray-500 dark:text-[#EBEBEB99] hover:text-gray-900 dark:hover:text-white text-[10px] transition-colors"
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
                                <div className="">
                                    <h2
                                        className={`${MainHeading.className} text-gray-900 dark:text-[#F7F7F7] text-[14px] font-medium tracking-wide mb-5 transition-colors`}
                                    >
                                        Legal
                                    </h2>
                                    <ul
                                        className={`${miniPara.className} space-y-4 text-sm`}
                                    >
                                        {policyLinks.map((item) => (
                                            <li
                                                key={item.subMenu_key}
                                                className="hover:underline cursor-pointer text-gray-500 dark:text-[#EBEBEB99] hover:text-gray-900 dark:hover:text-white text-[10px] transition-colors"
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
                        <div className="pt-10 space-y-5 text-gray-700">
                            <Separator
                                direction="horizontal"
                                className="w-full bg-gray-200 dark:bg-white/10 transition-colors"
                            />
                            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-center md:justify-between ">
                                <div>
                                    <ul
                                        className={`${miniPara.className} flex items-center gap-10 text-sm`}
                                    >
                                        {policyLinks.map(
                                            (item) => (
                                                <li
                                                    key={item.subMenu_key}
                                                    className="cursor-pointer underline-offset-2 text-gray-500 dark:text-[#EBEBEB99] hover:text-gray-900 dark:hover:text-white hover:underline text-[10px] transform-gpu transition-colors"
                                                >
                                                    {item.subMenu}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <div className="flex items-center gap-1 hover:underline hover:cursor-pointer group">
                                    <FaRegCopyright className="text-xs text-gray-500 dark:text-[#EBEBEB99] group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                                    <p className="text-[12px] text-gray-500 dark:text-[#EBEBEB99] group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{currentYear} React Vibe, Inc. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            {/* Big background title — anchored to bottom */}
            <div className="absolute bottom-[-15px] md:bottom-[-30px] xl:bottom-[-30px] 2xl:bottom-[-0px] left-0 w-full text-center z-10 pointer-events-none">
                <LinearReveal
                    as={'h1'}
                    Text="React Vibe"
                    className={`
            ${FooterHeading.className}
            text-[60px] md:text-[130px] lg:text-[150px] xl:text-[200px] 2xl:text-[240px]
            leading-none font-extrabold
            bg-gradient-to-b from-gray-200 to-white dark:from-[#dbdada] dark:to-[#F4F4F6]
            bg-clip-text text-[#0e0c0c] dark:text-[#EBEBEB99]
            opacity-90 transition-colors`}
                />
            </div>
        </footer>
    )
}

export default Signature
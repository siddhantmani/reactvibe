"use client"

import React from 'react'
import { motion } from 'framer-motion'

import { Manrope } from 'next/font/google';
import OrbitBorder from '@/public/Components/TheOrbitBorderCode/OrbitBorder';

const logoFont = Manrope({
    weight: "700",
    subsets: ["latin"],
});

const NavItems = Manrope({
    weight: "500",
    subsets: ["latin"],
});

function OverlayNav() {
    const items = ['Platforms', 'Features', 'Use Cases', 'About US', 'Pricing'];

    return (
        <nav>
            <div className='flex items-center justify-between p-3 max-w-5xl mx-auto text-black'>
                {/* Logo */}
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
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.5
                    }}

                >
                    <div className='flex items-center gap-3'>
                        <label className={`${logoFont.className} text-[21px]`}>React Vibe</label>
                    </div>
                </motion.div>

                {/* Nav Items */}
                <div>
                    <ul className={`${NavItems.className} flex-row flex items-center gap-5 xl:gap-7 md:text-[13px] xl:text-[14px]`}>
                        {items.map((item, index) => (

                            <motion.li
                                key={index}
                                className="cursor-pointer md:text-xs lg:text-[12px] xl:text-[14px]"
                                initial={{ filter: "blur(8px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* CTA Button */}

                <div className=''>
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
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                            delay: 0.8
                        }}

                    >
                        <OrbitBorder
                            rotate={0}
                            padding={2}
                            rounded={50}
                            className='bg-[#ffffff] rounded-full p-3 text-black px-4'
                            RingColors={["#0a52f0, #ffffff, #ffffff, #f5e2ae, #dcd7fc"]}
                            style={{
                                boxShadow: `
                                         0px 12px 40px rgba(60, 80, 180, 0.08),
                                         0px 20px 60px rgba(0, 0, 0, 0.05)
                                       `,
                            }}
                        >
                            Orbit Border
                        </OrbitBorder>
                    </motion.div>
                </div>

            </div>
        </nav>

    )
}

export default OverlayNav

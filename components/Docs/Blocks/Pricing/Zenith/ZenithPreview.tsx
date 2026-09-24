"use client"

import OrbitBorder from '@/public/Components/TheOrbitBorderCode/OrbitBorder';
import { Zap } from 'lucide-react';
import { Manrope } from 'next/font/google';
import React from 'react'
import ZenithCode from './ZenithCode';

const labelName = Manrope({
    weight: '500', // Specify the font weight if needed  
    subsets: ['latin']
});

const subHeading = Manrope({
    weight: '400', // Specify the font weight if needed  
    subsets: ['latin']
});

import { motion } from "framer-motion";

function ZenithPreview() {
    return (
        <div className='bg-gradient-to-t from-gray-50 to-white dark:from-[#141313] dark:to-[#141313] py-5 transition-colors duration-300'>
            <motion.div
                initial={{ opacity: 0, filter: "blur(2px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.4
                }}
                exit={{ opacity: 0, y: -10 }}
                className='space-y-5'>
                <div className=' max-w-36 mx-auto'>
                    <OrbitBorder
                        as="div"
                        rotate={0}
                        padding={1}
                        rounded={50}
                        className='bg-gray-200 dark:bg-[#141414] rounded-full p-[3px] text-black dark:text-white transition-colors'
                        RingColors={["#000000, #ffffff, #ffffff,  #ffffff,  #ffffff, #000000"]}
                        style={{
                            boxShadow: `
                                                                  0px 12px 40px rgba(60, 80, 180, 0.08),
                                                                  0px 20px 60px rgba(0, 0, 0, 0.05)
                                                                `,
                        }}
                    >
                        <div
                            className='flex items-center gap-3 justify-center rounded-full px-3 py-3 
                            bg-gradient-to-b from-white to-gray-100 border border-gray-300 shadow-sm
                            dark:from-[#141414] dark:via-[#1a1818] dark:to-[#0d0c0c] dark:border-[#141414]
                            dark:shadow-[0px_24px_48px_rgba(13,12,12,0.45),inset_7px_7px_31px_rgba(18,17,17,0.35),inset_2px_2px_20px_rgba(13,12,12,0.25)] 
                            transition-all duration-300'
                        >
                            <Zap size={17} className='fill-black dark:fill-white text-black dark:text-white transition-colors' />
                            <h1 className={`${labelName.className} text-[14px] text-black dark:text-white whitespace-nowrap transition-colors`}>Pricinng</h1>
                        </div>
                    </OrbitBorder>
                </div>
                <div className='max-w-4xl mx-auto space-y-2'>
                    <h1 className={`${labelName.className} @xl:text-4xl @lg:text-4xl @md:text-4xl sm:text-3xl text-2xl px-5 sm:px-0 @md:px-0 opacity-90 text-center text-black dark:text-white transition-colors`}>
                        Flexible Pricing for Every Team
                    </h1>
                    <p className={`${subHeading.className} mx-auto @xl:text-[12px] @lg:text-[16px] @md:text-[15px] sm:text-[10px] text-[12px] px-2 opacity-70 dark:opacity-55 text-center text-gray-700 dark:text-white/90 max-w-[70%] @md:max-w-[60%] transition-colors`}>
                        Choose the plan that fits your workflow and scale at your own pace. No hidden fees.
                    </p>
                </div>
            </motion.div>

            <div className="w-full">
                <ZenithCode />
            </div>
        </div>
    )
}

export default ZenithPreview
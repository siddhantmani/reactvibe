"use client"

import { Manrope } from 'next/font/google';
import Image from 'next/image';
import React from 'react'

const HeadlineHeading = Manrope({
    weight: '700', // Specify the font weight if needed  
    subsets: ['latin']
});
const TaglineMainHeading = Manrope({
    weight: '600', // Specify the font weight if needed  
    subsets: ['latin']
});
const TaglineMainPara = Manrope({
    weight: '400', // Specify the font weight if needed  
    subsets: ['latin']
});

import TaglineIMG from "@/images/hero/tagline.svg"

import { motion } from 'framer-motion';

function HeadlinesGradientHalo() {
    return (
        <div className='flex flex-col items-center justify-center text-center gap-6 mt-[30px] md:mt-[50px] lg:mt-[30px] px-4 mx-auto'>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0
                }}
            >
                <div className='flex items-center gap-2 bg-[#1f1f1f] p-3 rounded-full'>
                    <Image
                        src={TaglineIMG}
                        height={1000}
                        width={1000}
                        alt='tagline logo'
                        className='h-[25px] w-auto'
                    />
                    <h3 className={`${TaglineMainHeading.className} text-xs xl:text-sm bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent`}>AI-Powered Cryptocurrency Management</h3>
                </div>
            </motion.div>
            {/* <div>
                <HeadLineAnimation />
            </div> */}

            <div className='space-y-2'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.6
                    }}
                >
                    <h1 className={`${HeadlineHeading.className} xl:text-[35px] lg:text-3xl md:text-3xl text-white md:max-w-md lg:max-w-md xl:max-w-lg text-2xl max-w-xs mx-auto text-center md:px-[10px]`}>World Class Crypto Tools at Your Fingertips</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
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
                    <p className={`${TaglineMainPara.className} text-xs text-white opacity-60 max-w-sm md:text-sm lg:text-sm xl:text-sm mx-auto xl:max-w-[300px]`}>Trade smarter, faster, and safer with our all-in-one crypto platform.</p>
                </motion.div>
            </div>

        </div>
    )
}

export default HeadlinesGradientHalo
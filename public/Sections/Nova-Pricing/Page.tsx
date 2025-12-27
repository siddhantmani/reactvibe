"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Inter_Tight, Manrope } from 'next/font/google';
import { CreditCard } from 'lucide-react';
import NovaPricing from './NovaPricing';

const heading = Inter_Tight({
    weight: "600",
    subsets: ["latin"],
});
const subHeading = Manrope({
    weight: "500",
    subsets: ["latin"],
});

function Page() {
    return (
        <div className='py-2'>
            <div className='space-y-5'>
                <motion.div
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    whileInView={{ opacity: 1 }}
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
                    className="w-[50px] mx-auto" // Add width and centering here
                >
                    <div className='flex items-center justify-center gap-3 border-2 border-[#D6DAE0] border-dashed rounded-xl p-2 px-3'>
                        <CreditCard className='text-[27px]' />
                    </div>
                </motion.div>
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
                        delay: 0.6
                    }}
                    className='flex flex-col justify-center items-center'
                >
                    <h1 className={`${heading.className} text-[#454B57] xl:text-7xl text-[33px]`}>Plans and Pricing</h1>
                </motion.div>
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
                    className='xl:max-w-xl max-w-md mx-auto text-center px-2'
                >
                    <p className={`${subHeading.className}`}> <span className='text-[#454B57] opacity-100'>Transparency pricing tailored to your needs, </span> <span className='opacity-50'> ensuring affordability without compromising on quality.</span></p>
                </motion.div>
            </div>

            <div>
                <NovaPricing />
            </div>
        </div>
    )
}

export default Page
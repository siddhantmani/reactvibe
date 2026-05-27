"use client"
import { motion } from 'framer-motion'


import LinearReveal from '@/components/LinearReveal'
import React from 'react'
import { Bricolage_Grotesque } from 'next/font/google';
import PerformanceTrendChartItemsPreview from './PerformanceTrendChartItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});


function PerformanceTrendChartItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl 2xl:max-w-7xl mx-auto space-y-7'>

            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-2xl md:text-4xl xl:text-5xl`}
                    Text='Performance Trend Chart'
                />

                <motion.p
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{
                        once: true,
                        amount: 0.2, // Trigger when 20% visible
                        margin: "50px"
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                        delay: 0.2
                    }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-black/70 dark:text-white/70 text-[13px]">
                    A modern React footer component designed for product and SaaS websites with app-focused layouts. This responsive multi-column footer includes navigation links, legal sections, and app download CTAs, making it ideal for building structured and scalable website footer designs. Perfect for developers looking to create a clean and functional React footer with real-world usability.
                </motion.p>
            </div>

            <div className='border-black rounded-2xl'>
                <PerformanceTrendChartItemsPreview />
            </div>
        </div>
    )
}

export default PerformanceTrendChartItems
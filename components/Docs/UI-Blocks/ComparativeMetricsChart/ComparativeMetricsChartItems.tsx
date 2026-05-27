"use client"
import { motion } from 'framer-motion'

import LinearReveal from '@/components/LinearReveal';
import React from 'react'
import { Bricolage_Grotesque } from 'next/font/google';
import ComparativeMetricsChartItemsPreview from './ComparativeMetricsChartItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});


function ComparativeMetricsChartItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl 2xl:max-w-7xl mx-auto space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl`}
                    Text='Comparative Metrics Chart'
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
                    A modern budget comparison chart UI built for finance and analytics dashboards. Designed for visualizing budgeted vs actual spending with responsive data visualization layouts.
                </motion.p>

            </div>

            <div className='border-black rounded-2xl'>
                <ComparativeMetricsChartItemsPreview />
            </div>
        </div>
    )
}

export default ComparativeMetricsChartItems
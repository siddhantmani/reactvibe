"use client"
import LinearReveal from '@/components/LinearReveal';
import { motion } from 'framer-motion'

import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import ComparativeBarChartItemsPreview from './ComparativeBarChartItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function ComparativeBarChartItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl 2xl:max-w-7xl mx-auto space-y-7'>

            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-2xl md:text-5xl`}
                    Text='Comparative Bar Chart'
                />

                <motion.p
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
                    exit={{ opacity: 0, y: -10 }}
                    className="text-black/70 dark:text-white/70 text-[13px]">
                    A responsive React Chart component for creating Comparison Charts, Grouped Bar Charts, and Vertical Bar Charts to visualize cash flow, profit and loss, and business analytics in modern data visualization dashboards.
                </motion.p>

            </div>

            <div className='border-black rounded-2xl'>
                <ComparativeBarChartItemsPreview />
            </div>
        </div>
    )
}

export default ComparativeBarChartItems
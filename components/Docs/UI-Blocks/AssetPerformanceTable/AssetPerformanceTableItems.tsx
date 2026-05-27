"use client"
import { motion } from 'framer-motion'


import LinearReveal from '@/components/LinearReveal'
import React from 'react'
import { Bricolage_Grotesque } from 'next/font/google';
import AssetPerformanceTableItemsPreview from './AssetPerformanceTableItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function AssetPerformanceTableItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-7'>

            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-2xl md:text-4xl xl:text-5xl`}
                    Text='Asset Performance Table'
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
                    A modern asset performance table UI built for investment and fintech dashboards. Includes portfolio tracking, asset analytics, holdings management, and responsive financial data tables.
                </motion.p>

            </div>

            <div className='border-black rounded-2xl'>
                <AssetPerformanceTableItemsPreview />
            </div>
        </div>
    )
}

export default AssetPerformanceTableItems
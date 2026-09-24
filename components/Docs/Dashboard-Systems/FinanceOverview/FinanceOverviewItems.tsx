"use client"
import { motion } from 'framer-motion'
import LinearReveal from '@/components/LinearReveal';

import { Bricolage_Grotesque } from 'next/font/google';

import FinanceOverviewItemsPreview from './FinanceOverviewItemsPreview';
import { LinearRevealFont } from '@/lib/fonts';

function FinanceOverviewItems() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(3px)" }}
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
            className='px-2 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} font-[700] text-3xl md:text-5xl`}
                    Text='Finance Overview'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A production-ready React Finance Dashboard Template featuring Budget Dashboard Templates, Expense Dashboard Templates, Cash Flow Dashboards, Financial Analytics Dashboards, and modern financial management workflows.
                </p>

            </div>

            <div className='border-black rounded-2xl'>
                <FinanceOverviewItemsPreview />
            </div>
        </motion.div>
    )
}

export default FinanceOverviewItems
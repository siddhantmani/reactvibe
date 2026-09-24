"use client"
import { motion } from 'framer-motion'
import LinearReveal from '@/components/LinearReveal';

import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import BudgetsItemsPreview from './BudgetsItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function BudgetsItems() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(3px)" }}
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
            className='px-2 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-3xl md:text-5xl`}
                    Text='Budgets'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A production-ready React Budget Dashboard for building Budget Management Dashboards, Budget Tracker Dashboards, Budget vs Actual Dashboards, Budget Monitoring Dashboards, and modern personal finance applications.
                </p>

            </div>

            <div className='border-black rounded-2xl'>
                <BudgetsItemsPreview />
            </div>
        </motion.div>
    )
}

export default BudgetsItems
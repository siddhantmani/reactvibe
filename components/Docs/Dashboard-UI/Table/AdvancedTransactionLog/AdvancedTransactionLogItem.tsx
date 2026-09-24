"use client"
import { motion } from 'framer-motion'

import LinearReveal from '@/components/LinearReveal'
import React from 'react'
import { Bricolage_Grotesque } from 'next/font/google';
import AdvancedTransactionLogItemsPreview from './AdvancedTransactionLogItemsPreview';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});


function AdvancedTransactionLogItems() {
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
            className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-7'>

            <Link href="/docs/dashboard-ui/table">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to Table blocks</p>
                </div>
            </Link>

            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-2xl md:text-5xl lg:text-4xl xl:text-5xl`}
                    Text='Advanced Transaction Log'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A reusable React Transaction Log component for fintech dashboards, featuring transaction history, payment records, activity tracking, advanced filtering, and responsive data tables.
                </p>

            </div>

            <div className='border-black rounded-2xl'>
                <AdvancedTransactionLogItemsPreview />
            </div>
        </motion.div>
    )
}

export default AdvancedTransactionLogItems
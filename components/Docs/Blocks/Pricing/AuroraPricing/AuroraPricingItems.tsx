"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import React from 'react'
import AuroraPricingItemsPreview from './AuroraPricingItemsPreview';
import Link from 'next/link';

import { motion } from 'framer-motion'
import { MoveLeft } from 'lucide-react';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});
const CreditFont = JetBrains_Mono({
    weight: '300',
    subsets: ['vietnamese']
});

function AuroraPricingItems() {
    return (
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
                delay: 0.2
            }}
            exit={{ opacity: 0, y: -10 }}
            className='px-2 xl:max-w-5xl lg:max-w-2xl mx-auto 2xl:max-w-7xl space-y-7'>

            <Link href="/docs/blocks/pricing">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to Pricing blocks</p>
                </div>
            </Link>

            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Aurora Pricing'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A clean SaaS pricing section with three pricing tiers, monthly/yearly billing, a featured plan, and built-in dark mode support.
                </p>
            </div>

            <div className='border-black rounded-2xl'>
                <AuroraPricingItemsPreview />
            </div>
            <div className={`${CreditFont.className} flex items-center gap-1 dark:text-white text-black text-xs pt-3`} >
                <p>Credit: Aurora Pricing UI designed by</p>
                <Link href="https://x.com/MahmudHxn" target='_blank'>
                    <p className='underline underline-offset-2'>Mahmud</p>
                </Link>
            </div>
        </motion.div>
    )
}

export default AuroraPricingItems
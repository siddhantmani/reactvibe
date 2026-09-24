"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import PrimeItemsPreview from './PrimeItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

import { motion } from 'framer-motion'
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

function PrimeItems() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(4px)" }}
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
            className='px-2 xl:max-w-5xl 2xl:max-w-7xl lg:max-w-2xl mx-auto pb-10 space-y-7'>
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
                    Text='Prime'
                />
                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A responsive SaaS pricing component with monthly/yearly billing, subscription plans, and built-in dark mode support.
                </p>
            </div>

            <div className='border-black rounded-2xl'>
                <PrimeItemsPreview />
            </div>
        </motion.div>
    )
}

export default PrimeItems
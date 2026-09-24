"use client"

import { motion } from 'framer-motion'
import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import ZenithItemsPreview from './ZenithItemsPreview';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function ZenithItems() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(2px)" }}
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
            className='px-2 xl:max-w-5xl 2xl:max-w-7xl lg:max-w-2xl mx-auto space-y-7'>
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
                    Text='Zenith'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A reusable React SaaS pricing section with monthly/yearly billing, subscription plans, responsive cards, and dark mode support.
                </p>
            </div>

            <div className='border-black rounded-2xl'>
                <ZenithItemsPreview />
            </div>
        </motion.div>
    )
}

export default ZenithItems
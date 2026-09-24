"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import RadiantFrameItemsPreview from './RadiantFrameItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});
import { motion } from 'framer-motion'
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';


function RadiantFrameItems() {
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
            className='px-2 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-2xl space-y-7'>

            <Link href="/docs/blocks/footer">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to Footer blocks</p>
                </div>
            </Link>

            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-4xl md:text-5xl`}
                    Text='Radiant Frame'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    An animated React footer with a color-shifting frame, responsive layout, and built-in dark mode for modern landing pages and SaaS websites.
                </p>
            </div>

            <div className='border-black rounded-2xl'>
                <RadiantFrameItemsPreview />
            </div>
        </motion.div>
    )
}

export default RadiantFrameItems
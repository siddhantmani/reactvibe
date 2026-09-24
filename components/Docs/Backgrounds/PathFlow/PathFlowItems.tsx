"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import React from 'react'
import PathFlowItemsPreview from './PathFlowItemsPreview';
import Link from 'next/link';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

const CreditFont = JetBrains_Mono({
    weight: '300',
    subsets: ['vietnamese']
});

import { motion } from 'framer-motion'

function PathFlowItems() {
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
            className='px-2 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-2xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Path Flow'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A React background animation that continuously moves brand logos along curved paths, ideal for SaaS, technology, integrations, and trusted-by sections.
                </p>
            </div>

            <div className='border-black rounded-2xl'>
                <PathFlowItemsPreview />
            </div>
            <div className={`${CreditFont.className} flex items-center gap-1 dark:text-white text-black text-xs pt-3`} >
                <p>Credit: Subsence landing page UI designed by</p>
                <Link href="https://x.com/grigoryzero" target='_blank'>
                    <p className='underline underline-offset-2'>Grigory Zero</p>
                </Link>
            </div>
        </motion.div>
    )
}

export default PathFlowItems
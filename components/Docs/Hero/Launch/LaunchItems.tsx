"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import LaunchItemsPreview from './LaunchItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

import { motion } from 'framer-motion'
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

function LaunchItems() {

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
            className='px-2 xl:max-w-5xl lg:max-w-3xl 2xl:max-w-7xl mx-auto space-y-7'>

            <Link href="/docs/blocks/hero">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to Hero blocks</p>
                </div>
            </Link>

            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-4xl md:text-5xl`}
                    Text='Launch'
                />
                <p className="text-black/70 dark:text-white/70 text-[10px]">
                    A copy-paste Hero Section Component combining a complete navbar, responsive hero, and built-in dark mode for SaaS and landing pages.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <LaunchItemsPreview />
            </div>

        </motion.div>
    )
}

export default LaunchItems
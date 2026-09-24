"use client"

import LinearReveal from '@/components/LinearReveal'
import React from 'react'
import { motion } from 'framer-motion'
import { Bricolage_Grotesque } from 'next/font/google';
import FlowlistItemsFAQPreviewSourceCode from './SplitFAQItemsPreviewSourceCode';
import SplitFAQItemsPreview from './SplitFAQItemsPreview';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function SplitFAQItems() {
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
            className='px-2 xl:max-w-5xl 2xl:max-w-7xl lg:max-w-2xl mx-auto space-y-7'>

            <Link href="/docs/blocks/faq">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to FAQ blocks</p>
                </div>
            </Link>

            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Split FAQ'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A responsive split FAQ section that pairs a strong headline and supporting copy with a structured question-and-answer layout.
                </p>
            </div>
            <div className='space-y-20'>
                <div className='border-black rounded-2xl'>
                    <SplitFAQItemsPreview />
                </div>
            </div>
        </motion.div>
    )
}

export default SplitFAQItems
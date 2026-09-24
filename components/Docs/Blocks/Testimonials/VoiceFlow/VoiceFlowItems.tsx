"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import VoiceFlowItemsPreview from './VoiceFlowItemsPreview';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

import { motion } from 'framer-motion'
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

function VoiceFlowItems() {
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
            className='px-2 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-3xl space-y-7'>
            <Link href="/docs/blocks/testimonials">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to Testimonials blocks</p>
                </div>
            </Link>
            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-4xl md:text-5xl`}
                    Text='Voice Flow'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    An interactive React social proof carousel that highlights customer testimonials with layered cards, navigation controls, and built-in dark mode.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <VoiceFlowItemsPreview />
            </div>
        </motion.div>
    )
}

export default VoiceFlowItems
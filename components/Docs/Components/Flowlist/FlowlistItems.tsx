"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import FlowlistItemsPreview from './FlowlistItemsPreview';
import FlowlistItemsFAQPreview from '../../Blocks/FAQ/SplitFAQ/SplitFAQItemsPreview';
import { motion } from 'framer-motion'
import BuiltWithFlowlist from './BuiltWithFlowlist';
import Separator from '../../Separator';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function FlowlistItems() {
    return (
        <div className='px-2 xl:max-w-5xl 2xl:max-w-7xl lg:max-w-2xl mx-auto space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Flowlist'
                />

                <motion.p
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
                    className="text-black/70 dark:text-white/70 text-[13px]">
                    Flowlist is a React animated list component that reveals items smoothly with staggered motion, making feature lists, activity feeds, notifications, and timelines feel more dynamic.
                </motion.p>
            </div>
            <div className='space-y-20'>
                <div className='border-black rounded-2xl'>
                    <FlowlistItemsPreview />
                </div>
            </div>

            <div className='mt-15'>
                <BuiltWithFlowlist />
            </div>
        </div>
    )
}

export default FlowlistItems
"use client"

import { motion } from 'framer-motion'
import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import NexusItemsPreview from './NexusItemsPreview';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function NexusItems() {
    return (
        <div className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-3xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Nexus'
                />

                <motion.p
                    initial={{ opacity: 0, filter: "blur(8px)" }}
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
                    className="text-black/70 dark:text-white/70 text-[13px]">
                    A dynamic React network diagram UI component designed to visualize integrations, platforms, and connected services in a clean, animated layout. Unlike a basic React logo grid component, Nexus combines motion and structure to create an interactive logo showcase React component for SaaS products. Perfect for building integrations logos React UI, “trusted by” sections, or advanced brand showcase components, it helps communicate relationships between tools with clarity and visual impact.
                </motion.p>
            </div>
            <div className='border-black rounded-2xl'>
                <NexusItemsPreview />
            </div>
        </div>
    )
}

export default NexusItems
"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google'
import React from 'react'
import WaveCTAItemsPreview from './WaveCTAItemsPreview'

import { motion } from 'framer-motion'

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
})

function WaveCTAItems() {

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
            className="w-full max-w-5xl lg:max-w-2xl xl:max-w-5xl 2xl:max-w-7xl mx-auto px-4 py-3 space-y-7">
            <div className="space-y-3">
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-4xl md:text-5xl`}
                    Text="Wave CTA"
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    An interactive React Wave Background CTA built with Framer Motion in React, featuring a fluid wave animation that improves user engagement in modern landing pages and UI components.
                </p>
            </div>

            <div className="rounded-2xl ">
                <WaveCTAItemsPreview />
            </div>
        </motion.div>
    )
}

export default WaveCTAItems
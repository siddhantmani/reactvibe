"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import SeparatorItemsPreview from './SeparatorItemsPreview';
import { motion } from 'framer-motion'
import TablePorpsForSeparatorItems from './TablePorpsForSeparatorItems';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function SeparatorItems() {
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
                    className={`${LinearRevealFont.className} text-4xl md:text-5xl`}
                    Text='Separator'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A lightweight React separator component for creating clean visual divisions between sections, lists, menus, and UI elements with horizontal and vertical orientations.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <SeparatorItemsPreview />
            </div>

            <div>
                <TablePorpsForSeparatorItems />
            </div>
        </motion.div>
    )
}

export default SeparatorItems
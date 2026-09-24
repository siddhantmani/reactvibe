"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import FluxCTAItemsPreview from './FluxCTAItemsPreview';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

import { motion } from 'framer-motion'
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

function FluxCTAItems() {
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
            <Link href="/docs/blocks/cta">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to Call To Action blocks</p>
                </div>
            </Link>
            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-5xl`}
                    Text='Flux CTA'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    An animated React CTA section with a continuously changing gradient background, built for SaaS landing pages and free trial conversions.
                </p>
            </div>

            <div className='border-black rounded-2xl'>
                <FluxCTAItemsPreview />
            </div>
        </motion.div>
    )
}

export default FluxCTAItems
"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import GlideAccordionItemsPreview from './GlideAccordionItemsPreview';
import { motion } from 'framer-motion'
import TablePorpsForGlideAccordionItems from './TablePorpsForGlideAccordionItems';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

const LinearRevealFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function GlideAccordionItems() {
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
            className='px-2 xl:max-w-5xl 2xl:max-w-7xl lg:max-w-3xl mx-auto space-y-7'>

            <Link href="/docs/blocks/faq">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to FAQ blocks</p>
                </div>
            </Link>

            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${LinearRevealFont.className} text-4xl md:text-5xl`}
                    Text='Glide Accordion'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A compact React FAQ card layout with expandable questions, ideal for product pages, SaaS sites, and clean landing-page designs.
                </p>
            </div>

            <div className='border-black rounded-2xl'>
                <GlideAccordionItemsPreview />
            </div>

            <div>
                <TablePorpsForGlideAccordionItems />
            </div>
        </motion.div>
    )
}

export default GlideAccordionItems
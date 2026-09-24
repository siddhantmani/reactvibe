"use client"
import LinearReveal from '@/components/LinearReveal'
import { motion } from 'framer-motion'
import { Bricolage_Grotesque } from 'next/font/google';
import FluxHeroItemsPreview from './FluxHeroItemsPreview';
import Link from 'next/link';
import { MoveLeft } from 'lucide-react';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function FluxHeroItems() {
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

            <Link href="/docs/blocks/hero">
                <div className='flex items-center gap-1'>
                    <MoveLeft size={15} />
                    <p>Back to Hero blocks</p>
                </div>
            </Link>

            <div className='space-y-3 pt-4'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Flux Hero'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A complete SaaS Hero Section with a responsive navbar, animated background, CTA, and built-in dark mode for modern SaaS landing pages.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <FluxHeroItemsPreview />
            </div>
        </motion.div>
    )
}

export default FluxHeroItems
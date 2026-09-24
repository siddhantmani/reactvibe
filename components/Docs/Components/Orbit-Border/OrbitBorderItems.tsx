"use client"

import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import OrbitBorderItemsPreview from './OrbitBorderItemsPreview';
import LinearReveal from '@/components/LinearReveal';
import TablePorpsForOrbitBorderItems from './TablePorpsForOrbitBorderItems';
import { motion } from 'framer-motion'
import Separator from '../../Separator';
import BuiltWithOrbitBorder from './BuiltWithOrbitBorder';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function OrbitBorderItems() {
    return (
        <motion.div

            className='px-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-5xl 2xl:max-w-7xl mx-auto lg:max-w-2xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-4xl md:text-5xl`}
                    Text='Orbit Border'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    Orbit Border is a React animated button with a customizable, continuously rotating gradient border that adds motion to CTAs and other highlighted UI.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <OrbitBorderItemsPreview />
            </div>
            <div>
                <TablePorpsForOrbitBorderItems />
            </div>
            <Separator
                direction='horizontal'
                className='bg-black/15 dark:bg-white/15'
            />
            <div>
                <BuiltWithOrbitBorder />
            </div>
        </motion.div>
    )
}

export default OrbitBorderItems
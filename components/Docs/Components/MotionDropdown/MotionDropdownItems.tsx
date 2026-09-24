"use client"

import LinearReveal from '@/components/LinearReveal';
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import MotionDropdownItemsPreview from './MotionDropdownItemsPreview';
import { motion } from 'framer-motion'
import TablePorpsForMotionDropdownItems from './TablePorpsForMotionDropdownItems';
import Separator from '../../Separator';
import BuiltWithMotionDropdown from './BuiltWithMotionDropdown';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function MotionDropdownItems() {
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
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-3xl md:text-5xl`}
                    Text='Motion Dropdown'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A smooth, animated React dropdown for account menus, settings, navigation, and contextual actions.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <MotionDropdownItemsPreview />
            </div>
            <div>
                <TablePorpsForMotionDropdownItems />
            </div>
            <Separator
                direction='horizontal'
                className='bg-black/15 dark:bg-white/15'
            />
            <div>
                <BuiltWithMotionDropdown />
            </div>
        </motion.div>
    )
}

export default MotionDropdownItems
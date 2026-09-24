"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import MotionSwitchItemsPreview from './MotionSwitchItemsPreview';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});
import { motion } from 'framer-motion'
import BuiltWithMotionSwitch from './BuiltWithMotionSwitch';
import Separator from '../../Separator';


function MotionSwitchItems() {
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
            className='px-2 xl:max-w-5xl lg:max-w-2xl 2xl:max-w-7xl mx-auto space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-4xl md:text-5xl`}
                    Text='Motion Switch'
                />

                <p className="text-black/70 dark:text-white/70 text-[13px]">
                    A polished React toggle component for interactive on/off states, with smooth motion and customizable styling.
                </p>
            </div>
            <div className='border-black rounded-2xl'>
                <MotionSwitchItemsPreview />
            </div>
            <Separator
                direction='horizontal'
                className='bg-black/10 dark:bg-white/10'
            />
            <div>
                <BuiltWithMotionSwitch />
            </div>
        </motion.div>
    )
}

export default MotionSwitchItems
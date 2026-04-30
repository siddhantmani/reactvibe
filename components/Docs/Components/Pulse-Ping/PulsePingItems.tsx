"use client"

import LinearReveal from '@/components/LinearReveal'
import { Bricolage_Grotesque } from 'next/font/google';
import React from 'react'
import PulsePingItemsPreview from './PulsePingItemsPreview';
import { motion } from 'framer-motion'
import TablePorpsForPulsePingItems from './TablePorpsForPulsePingItems';

const OrbitFontFont = Bricolage_Grotesque({
    weight: '700',
    subsets: ['vietnamese']
});

function PulsePingItems() {
    return (
        <div className='mx-2 md:px-5 lg:px-8 xl:px-10 xl:max-w-6xl lg:max-w-3xl space-y-7'>
            <div className='space-y-3'>
                <LinearReveal
                    as={'h1'}
                    className={`${OrbitFontFont.className} text-5xl`}
                    Text='Pulse Ping'
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
                    A lightweight React status indicator component designed to highlight activity, updates, and real-time signals in your UI. This component supports online status indicators in React, animated active status dots, and smooth effects like ping animation CSS React, ripple, and pulse transitions. It can be used as a notification ping, badge indicator in React, or a subtle new feature indicator, making it perfect for dashboards, sidebars, and modern apps. Built to work seamlessly with Tailwind pulse animation, it helps add meaningful, animated feedback to your interface.
                </motion.p>
            </div>
            <div className='border-black rounded-2xl'>
                <PulsePingItemsPreview />
            </div>

            <div>
                <TablePorpsForPulsePingItems />
            </div>
        </div>
    )
}

export default PulsePingItems
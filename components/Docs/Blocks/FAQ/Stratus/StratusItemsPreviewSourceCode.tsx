"use client"

import React from 'react'


import { motion } from "framer-motion"
import StratusCode from './StratusCode'
import SupportingDarkmode from '@/components/SupportingDarkmode'
import FramerMotionGlobalInstalation from '@/components/Docs/FramerMotionGlobalInstalation'
import Separator from '@/components/Docs/Separator'

function StratusItemsPreviewSourceCode() {
    return (
        <div>
            <FramerMotionGlobalInstalation />
            <div className='py-5'>
                <Separator
                    direction='horizontal'
                    className='w-full dark:bg-white/15 bg-black/15'
                />
            </div>
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
                    delay: 0.3
                }}
            >
                <StratusCode />
            </motion.div>

            <SupportingDarkmode />
        </div>
    )
}

export default StratusItemsPreviewSourceCode
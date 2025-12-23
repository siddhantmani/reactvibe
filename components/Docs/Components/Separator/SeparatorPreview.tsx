'use client'

import React from 'react'
import Separator from '../../Separator'

import { motion } from "framer-motion"
function SeparatorPreview() {
    return (
        <div className='flex flex-col justify-center items-center h-full space-y-10'>
            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.5
                }}
            >
                <div className="flex flex-col items-start gap-1">
                    <span>React Vibe</span>
                    <Separator
                        direction="horizontal"
                        className='dark:bg-white/15 bg-black/15'
                    />
                    <span>An open-source UI platform.</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                viewport={{
                    once: true,
                    amount: 0.2, // Trigger when 20% visible
                    margin: "50px"
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                    delay: 0.5
                }}
            >
                <div className="flex items-center  gap-3">
                    <span>React Vibe</span>
                    <Separator
                        direction="vertical"
                        className='dark:bg-white/15 bg-black/15'
                    />
                    <span>Components</span>
                    <Separator
                        direction="vertical"
                        className='dark:bg-white/15 bg-black/15'
                    />
                    <span>Docs</span>
                </div>
            </motion.div>

        </div>

    )
}

export default SeparatorPreview
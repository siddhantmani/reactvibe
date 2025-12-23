"use client"

import React from 'react'
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'

function ShadowButton() {
    return (
        <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            whileInView={{ opacity: 1 }}
            viewport={{
                once: true,
                amount: 0.2, // Trigger when 20% visible
                margin: "50px"
            }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                delay: 0.6
            }}
        >
            <button
                style={{
                    background: `
      linear-gradient(
        180deg,
        #0A0F1F 0%,
        #000511 55%,
        #00030A 100%
      )
    `,
                    boxShadow: `
      0px 24px 48px rgba(0, 0, 0, 0.45),
      inset 7px 7px 31px rgba(164, 175, 197, 0.35),
      inset 2px 2px 20px rgba(160, 165, 178, 0.25)
    `,

                    borderImage: "linear-gradient(180deg, #FAFAFA, #BCC3CC) 1",
                }}
                className='text-white flex items-center p-3 gap-1 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-150 ease-in-out max-w-sm mx-auto px-5'
            >
                Get Started <span><ArrowRight className='h-4 w-4' /></span>
            </button>
        </motion.div>
    )
}

export default ShadowButton